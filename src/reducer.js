export const initialState = {
    user: null, 
    playlists: [],
    playlists: false,
    item: null,
    token: 'BQCk24ZFqvcrqwymLb1-aok7zHCA4mnq-p2wn2SbgSEYtIbNtyfII30m3cYQyYDdWPjU6XwN7Cc_P8rAfF8s3aP22mejwo-adyA3dh9r0D9gchipFzuKKE4f5ZSIBspZT3OMxhxsyB49kuL4SCZN2h589sDhiaD9qBqj97keRq2kwB8YmpP3'
};

const reducer = (state, action) => {
    console.log(action);

//Action --> type, [payload]

    switch(action.type) {
        case 'SET_USER':
        return {
            ...state, 
            user: action.user
        };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }

        default:
            return state;
    }
}

export default reducer;