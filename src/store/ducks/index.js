import { combineReducers } from 'redux';

import developers from './developers';
import modal from './modal'

export default combineReducers({ developers, modal });
