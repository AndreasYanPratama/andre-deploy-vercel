import { useDispatch, useSelector } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';
import { sessionDark } from '@/helpers/darkMode';


const initialState = {
    dark: false,
    // dark: (sessionDark().dark !== undefined ? sessionDark().dark : false )
}

const slices = createSlice({
    initialState,
    name: 'toggleDark',
    reducers: {
        toggleDarkTheme(state, action) {
            Object.assign(state, {
                dark: action.payload,
            });
        },
    },
});

export const { 
    toggleDarkTheme,
} = slices.actions;

export const useToggleDispatch = () => {
    const { toggleDark } = useSelector((state) => state);
    const dispatch = useDispatch();

    const doDark = async (payload = false) => {
        try {
            dispatch(toggleDarkTheme(payload));
            let data = {dark: payload};
            localStorage.setItem('themeDark', JSON.stringify(data));
        } catch (error) {
            console.log(error);
        }
    };

    return{
        toggleDark,
        doDark,
    };
};

export default slices.reducer;