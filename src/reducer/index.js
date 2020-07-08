import { combineReducers } from 'redux';
import count from './countReducer';
import asyncCustomData from './asyncCustomDataReducer';

export default combineReducers({ count, asyncCustomData })
