import React from 'react';
import { connect } from 'react-redux';
import Remove from './Remove';
import { getCommentsOfCurrentVideo } from '../../redux/selectors/index';

const mapStateToProps = state => {
  return { 
    comments: getCommentsOfCurrentVideo(state),
  };
};

const ConnectedList = ({ comments }) => (

  comments && comments.length
  ? comments.map(element => (
    <div className="card" key={element.id}>
      <div className="card-content">
        <span className="card-title">{element.name}</span>
      {element.date} : {element.content} <Remove commentId={element.id}/>
      </div>
    </div>
  ))
  : <div className="center-align">
      Aucun commentaire
    </div>
);

const List = connect(mapStateToProps) (ConnectedList);

export default List;

