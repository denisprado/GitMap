/**
 * Types
 */

export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
};

/**
 * Reducer
 */

const INITIAL_STATE = {
  IsModalOpen: false,
  coordinates: null
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return { ...state, modalIsOpen: true, coordinates: action.payload.coordinates };
    case Types.CLOSE:
      return {
        ...state,
        modalIsOpen: false,
      };

    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  openModal: coordinates => ({
    type: Types.OPEN,
    payload: { coordinates },
  }),

  closeModal: coordinates => ({
    type: Types.CLOSE,
    coordinates: null
  }),

};
