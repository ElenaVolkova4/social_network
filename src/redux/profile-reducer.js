const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  postsData: [
    {
      id: 1,
      message: "Hello everybody",
      likeCount: 12,
    },
    {
      id: 2,
      message: "I'm back",
      likeCount: 8,
    },
  ],
  newPostText: "newPostText",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 7,
        message: state.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }

    case UPDATE_NEW_POST:
      return {
        ...state,
        newPostText: action.newText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export default profileReducer;
