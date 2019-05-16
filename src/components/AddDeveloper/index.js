import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DeveloperActions } from '../../store/ducks/developers';

class AddDevelopers extends Component {
  static propTypes = {
    addDeveloperRequest: PropTypes.func.isRequired,
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

  state = {
    developerInput: '',
  };

  notify = (msg) => {
    toast.error(msg);
  };

  handleAddDeveloper = (e) => {
    e.preventDefault();
    this.props.addDeveloperRequest(this.state.developerInput);
    this.setState({ developerInput: '' });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddDeveloper}>
          <input
            placeholder="usuário"
            value={this.state.developerInput}
            onChange={e => this.setState({
              developerInput: e.target.value,
            })
            }
          />
          <button type="submit">Adicionar</button>

          {this.props.developers.loading && <span>Carregando</span>}

          {!!this.props.developers.error && this.notify(this.props.developers.error)}
        </form>
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
)(AddDevelopers);
