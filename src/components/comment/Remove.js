import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeComment } from '../../redux/actions/index';

function mapDispatchToProps(dispatch) {
  return {
    removeComment: commentId => dispatch(removeComment(commentId))
  };
}

class ConnectedRemove extends Component {

  removeComment(event) {
    event.preventDefault();
    this.props.removeComment(this.props.commentId)
  }

  render() {
    return (
      <button
        className="waves-effect waves-teal btn-flat"
        onClick={(event) => this.removeComment(event)}
      ><i className="material-icons">delete</i></button>
    );
  }
}

const Remove = connect(null, mapDispatchToProps) (ConnectedRemove);

export default Remove;