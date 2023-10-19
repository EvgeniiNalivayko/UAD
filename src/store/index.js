import { configureStore } from '@reduxjs/toolkit';
import girlsReducer from '../Component/GirlProfilesList/GirlCard/Redux/girlsSlice';

export default configureStore({
    reducer: {
        girls: girlsReducer
    }
});
