import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return { currentVideo: state.playerModule.currentVideo };
};

const ConnectedPlayer = ({ currentVideo }) => (
  <React.Fragment key={currentVideo.src}>
    <video width={currentVideo.width} controls>
      <source src={currentVideo.src} type={currentVideo.type}></source>
    </video>
  </React.Fragment>
);

const Player = connect(mapStateToProps) (ConnectedPlayer);

export default Player;