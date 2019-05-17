import { combineReducers } from 'redux';

import developers from './developers';
import modal from './modal';

const reducers = combineReducers({ developers, modal });

export default reducers;
