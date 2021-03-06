import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DeveloperActions } from '../../store/ducks/developers';
import { Creators as ModalActions } from '../../store/ducks/modal';
import './styles.css';

Modal.setAppElement('#root');
class AddDevelopers extends Component {
  static propTypes = {
    addDeveloperRequest: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
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
    modal: PropTypes.shape({
      isModalOpen: PropTypes.bool,
      coordinates: PropTypes.shape({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
      }),
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
    const { developerInput } = this.state;
    const {
      developers,
      addDeveloperRequest,
      closeModal,
      modal: { coordinates },
    } = this.props;
    if (developers.loading) return;

    if (!developerInput) return;
    addDeveloperRequest(developerInput, coordinates);
    this.setState({ developerInput: '' });

    closeModal();
  };

  handleCloseModal = () => {
    const { closeModal } = this.props;
    closeModal();
  };

  render() {
    const { modal, developers } = this.props;
    const { developerInput } = this.state;
    return (
      <Fragment>
        <Modal
          isOpen={modal.isModalOpen}
          onRequestClose={this.handleCloseModal}
          contentLabel="Add User Modal"
          className="modal-container"
          overlayClassName="modal-overlay"
        >
          <h2>Adicionar novo desenvolvedor</h2>

          <form onSubmit={this.handleAddDeveloper} className="form">
            <input
              placeholder="usuário"
              value={developerInput}
              onChange={e => this.setState({
                developerInput: e.target.value,
              })
              }
            />
            <div className="actions">
              <button type="button" onClick={this.handleCloseModal}>
                Cancelar
              </button>
              <button type="submit">
                {developers.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
              </button>
            </div>

            {!!developers.error && this.notify(developers.error)}
          </form>
        </Modal>
      </Fragment>
    );
  }
}

const mapStatetoProps = state => ({
  developers: state.developers,
  modal: state.modal,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...DeveloperActions, ...ModalActions }, dispatch);

export default connect(
  mapStatetoProps,
  mapDispatchToProps,
)(AddDevelopers);
