import { combineReducers } from 'redux';

import toggleDark from "./toggle/slice";

const rootReducers = combineReducers({
    toggleDark,
});

export default rootReducers;