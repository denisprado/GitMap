import React, { Component } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';

import 'mapbox-gl/dist/mapbox-gl.css';

class Map extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired,
    developers: PropTypes.arrayOf({
      data: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        avatar_url: PropTypes.string,
        html_url: PropTypes.string,
        login: PropTypes.string,
      }),
      coordinates: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
        }),
      ]),
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
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
    window.addEventListener('resize', this.resize);
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleClickMap = async (e) => {
    const [longitude, latitude] = e.lngLat;
    const { openModal } = this.props;

    await openModal({ latitude, longitude });
  };

  render() {
    const { developers } = this.props;

    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleClickMap}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZGVuaXNmb3JpZ28iLCJhIjoiY2p2b2Q1eTV6MThwYzN5bnR4Z3BhaHMxMSJ9.fv6R6cp122BKk6B781-z2A"
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {developers.data.map(developer => (
          <Marker
            key={developer.id}
            latitude={developer.coordinates.latitude}
            longitude={developer.coordinates.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <img
              style={{
                borderRadius: 100,
                width: 48,
                height: 48,
              }}
              src={developer.avatar_url}
              alt={developer.name}
            />
          </Marker>
        ))}
      </MapGL>
    );
  }
}

const mapStatetoProps = state => ({
  developers: state.developers,
});

const mapDispatchToProps = dispatch => bindActionCreators(ModalActions, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(Map);
