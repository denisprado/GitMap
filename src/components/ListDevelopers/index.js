import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { Creators as DeveloperActions } from '../../store/ducks/developers';
import { Container } from './styles';

class ListDevelopers extends Component {
  static propTypes = {
    removeDeveloper: PropTypes.func.isRequired,
    developers: PropTypes.shape({
      loading: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          avatar_url: PropTypes.string,
          login: PropTypes.string,
          html_url: PropTypes.string,
        }),
      ),
      error: PropTypes.string,
    }).isRequired,
  };

  notify = (msg) => {
    toast.error(msg);
  };

  handleRemoveDeveloper = (id) => {
    const { removeDeveloper } = this.props;
    removeDeveloper(id);
  };

  render() {
    const { developers } = this.props;
    return (
      <Fragment>
        <Container>
          <ul>
            {developers.data.map(developer => (
              <li key={developer.id}>
                <div className="developer">
                  <img src={developer.avatar_url} alt={developer.name} />
                  <div className="name">
                    <p>{developer.name}</p>
                    <small>{developer.login}</small>
                  </div>
                </div>
                <div className="actions">
                  <button type="submit" onClick={() => this.handleRemoveDeveloper(developer.id)}>
                    <i className="fa fa-times-circle" />
                  </button>
                  <a
                    type="submit"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={developer.html_url}
                  >
                    <i className="fa fa-chevron-right" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Fragment>
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
)(ListDevelopers);
