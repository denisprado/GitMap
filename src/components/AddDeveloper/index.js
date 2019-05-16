import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DeveloperActions } from '../../store/ducks/developers';
import { Creators as ModalActions } from '../../store/ducks/modal';

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

  closeModal() {
    this.props.closeModal();
  }

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
        <Modal
          isOpen={this.props.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Add Developer"
        >
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
            <button onClick={this.closeModal}>close</button>

            {this.props.developers.loading && <span>Carregando</span>}

            {!!this.props.developers.error && this.notify(this.props.developers.error)}
          </form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStatetoProps = state => ({
  developers: state.developers,
  modal: state.modal
});

const mapDispatchToProps = dispatch => bindActionCreators({ DeveloperActions, ModalActions }, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(AddDevelopers);
