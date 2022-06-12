import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers';

const store = configureStore({
    reducer: rootReducers,
});

// store.subscribe(() => {
//     const preference = store.getState().preference;
//     if(!preference) return;

//     localStorage.setItem('themeDark', JSON.stringify(preference));
// })

export default store;