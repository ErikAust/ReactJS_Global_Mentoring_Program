import {useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import * as MoviesCreators from '../redux/actions';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(MoviesCreators, dispatch);
};
