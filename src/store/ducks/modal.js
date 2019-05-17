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
  isModalOpen: false,
  coordinates: null,
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return {
        isModalOpen: true,
        coordinates: action.payload.coordinates,
      };
    case Types.CLOSE:
      return {
        isModalOpen: false,
        coordinates: null,
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

  closeModal: () => ({
    type: Types.CLOSE,
    coordinates: null,
  }),
};
