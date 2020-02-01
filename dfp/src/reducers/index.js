import {ADD_VIDEO} from '../constants/actionTypes';

const initialState = {
    selectedVideo: 0,
    videos: []
};

function rootReducer(state = initialState, action){
    if(action.type === ADD_VIDEO){
        return Object.assign({}, state, {
            videos: state.videos.concat(action.payload)
        });
    }
    return action;
}

export default rootReducer;