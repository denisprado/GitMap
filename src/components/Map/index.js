import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';


import ListDevelopers from '../ListDevelopers';
import 'mapbox-gl/dist/mapbox-gl.css';
import AddDeveloper from '../AddDeveloper';


class Map extends Component {
  constructor(props) {
    super(props);

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

  handleClickMap = async (e) => {
    const [longitude, latitude] = e.lngLat;
    const { openModal } = this.props
    console.tron.log(longitude)
    await openModal({ latitude, longitude });
  }


  render() {
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleClickMap}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGVuaXNmb3JpZ28iLCJhIjoiY2p2b2Q1eTV6MThwYzN5bnR4Z3BhaHMxMSJ9.fv6R6cp122BKk6B781-z2A"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {console.tron.log(this.props)}
        <AddDeveloper />
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
  modal: state.modal
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(Map);
