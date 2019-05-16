import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import Modal from 'react-modal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DeveloperActions } from '../../store/ducks/developers';

import ListDevelopers from '../ListDevelopers';
import 'mapbox-gl/dist/mapbox-gl.css';
import AddDeveloper from '../AddDeveloper';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class Map extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: -23.5439948,
        longitude: -46.6065452,
        zoom: 14,
      },
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  openModal(e) {
    this.setState({ modalIsOpen: true });
    const [longitude, latitude] = e.lngLat;
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.openModal}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGVuaXNmb3JpZ28iLCJhIjoiY2p2b2Q1eTV6MThwYzN5bnR4Z3BhaHMxMSJ9.fv6R6cp122BKk6B781-z2A"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Add Developer"
        >
          <button onClick={this.closeModal}>close</button>
          <AddDeveloper />
        </Modal>
        <ListDevelopers />

        <Marker
          latitude={-23.5439948}
          longitude={-46.6065452}
          onClick={this.handleMapClick}
          captureClick
        >
          <img
            style={{
              borderRadius: 100,
              width: 48,
              height: 48,
            }}
            src="https://avatars2.githubusercontent.com/u/2254731?v=4"
            alt="Avatar"
          />
        </Marker>
      </MapGL>
    );
  }
}

const mapStatetoProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(DeveloperActions, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(Map);
