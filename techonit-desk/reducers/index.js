import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "parvaneh", duration: "5:20" },
    { title: "kandam", duration: "4:11" },
    { title: "gorg vahshi", duration: "3:45" },
    { title: "khandan", duration: "4:40" },
  ];
};

const selectedSongReducer = (selectedSong = "kandam", action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload.song;
  }
  return selectedSong;
};
const ApiReducer = (state = "a", action) => {
  if (action.type === "FETCH_DATA") {
    return action.payload;
  }
  return state;
};
const RootReducers=combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer,
    post: ApiReducer,
  });
export default RootReducers
