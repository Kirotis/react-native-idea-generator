import { createSlice } from "@reduxjs/toolkit";
import { loadIdea } from "../../helpers/fetch-idea";
import { getRandomEmoji } from "../../helpers/emoji-generator";

export const ideaSlice = createSlice({
    name: "idea",
    initialState: {
        loading: false,
        // translateToken: null,
        ideaString: "...",
    },
    reducers: {
        startFetchIdea: (state) => {
            state.loading = true;
            state.ideaString = null;
        },
        // setToken: (state, action) => {
        //     state.translateToken = action.payload;
        // },
        setIdea: (state, action) => {
            const emoji = getRandomEmoji();
            state.ideaString = `${emoji} ${action.payload} ${emoji}`;
            state.loading = false;
        },
    },
});

export default ideaSlice.reducer;

export const { startFetchIdea, setIdea } = ideaSlice.actions;

// const translateIdea = (ideaEng) => async (dispatch, getState) => {
//     const token = await getStoreToken(dispatch, getState);
//     return translate(ideaEng, token);
// };

const fetchIdeaDataThunkFunction = async (dispatch, getState) => {
    dispatch(startFetchIdea());
    const ideaEng = await loadIdea();
    // const translateFunction = translateIdea(ideaEng);
    // const idea*** = await translateFunction(dispatch, getState).catch(() => {
    //     dispatch(setToken(null));
    //     return translateFunction(dispatch, getState);
    // });
    dispatch(setIdea(ideaEng));
};

// const getStoreToken = async (dispatch, getState) => {
//     const { translateToken } = getState();
//     if (translateToken) {
//         return translateToken;
//     }
//     const token = await getToken();
//     dispatch(setToken(token));
//     return token;
// };

export { fetchIdeaDataThunkFunction };
