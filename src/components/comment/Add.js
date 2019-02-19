import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addComment } from '../../redux/actions/index';

const mapStateToProps = state => {
  return { currentVideo: state.playerModule.currentVideo };
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
}

class ConnectedAdd extends Component {
  constructor() {
    super();

    this.state = {
      content: "",
      name: "",
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  isFormValid() {
    const errors = {}
    errors.comment = !(this.state.content.trim().length >= 1)
    errors.name = !(this.state.name.trim().length >= 1)
    this.setState({
      errors
    })
    let isValid = true
    Object.keys(errors).forEach(key => {
      if (errors[key]) {
        isValid = false
      }
    })

    return isValid
  }

  handleSubmit(event) {
    event.preventDefault();
    const { content, name } = this.state;
    const id = uuidv1();
    const videoId = this.props.currentVideo.id;
    const date = new Date().toLocaleString();
    if (this.isFormValid()) {
      this.props.addComment({ date, content, id, name, videoId });
      this.setState({ date: "", content: "" });
    }
  }

  render() {
    const { content, name } = this.state;
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
          <h6>Ajouter un commentaire</h6>
            <div className="input-field col s4">
              <input
                className="validate"
                type="text"
                id="name"
                value={name}
                onChange={this.handleChange}
                required
              ></input>
              <span className="helper-text" data-error="un nom est requis"></span>
              <label htmlFor="name">Nom</label>
            </div>
            <div className="input-field col s8">
              <input
                className="validate"
                type="text"
                id="content"
                value={content}
                onChange={this.handleChange}
                required
              ></input>
              <span className="helper-text" data-error="un message est requis"></span>
              <label htmlFor="content">Message</label>
            </div>
          </div>
          <button className="waves-effect waves-light btn right-align" type="submit">
            Publier
          </button>
        </form>
      </div>
    );
  }
}

const Add = connect(mapStateToProps, mapDispatchToProps)(ConnectedAdd);

export default Add;

