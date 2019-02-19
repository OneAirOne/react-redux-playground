import React from 'react';
import { connect } from 'react-redux';
import { loadVideo } from '../../redux/actions/index';

const mapStateToProps = state => {
  return { playlist: state.playerModule.playlist};
};

function mapDispatchToProps(dispatch) {
  return {
    loadVideo: videoId => dispatch(loadVideo(videoId))
  }
}

const ConnectedList = ({ playlist, loadVideo }) => (
  playlist && playlist.length
  ? playlist.map(element => (
    <ul key={element.id}>
      <li>
        <button key={element.id} className="waves-effect waves-light btn" onClick={() => loadVideo(element.id)}>{element.src}</button>
      </li>
    </ul>
  ))
  : <div>Aucune video</div>
);

const List =  connect(mapStateToProps, mapDispatchToProps) (ConnectedList);

export default List;
