import { PHOTOS } from '../data/photos';

const initialPhotoState = {
    isLoading: false,
    photos: PHOTOS,
    errMsg: null,
};

const photoReducer = (state = initialPhotoState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default photoReducer;
