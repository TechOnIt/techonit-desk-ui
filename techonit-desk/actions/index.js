import Api from "../api/Api";

export const selectedSong = (song) => {
  return {
    type: "SONG_SELECTED",
    payload: {
      song,
    },
  };
};

export const fetchData = () => async (dispatch) => {
  const response = await Api.get("/posts");
  console.log("res", response.data[1].title);
  dispatch({
    type: "FETCH_DATA",
    payload: response.data[1].title,
  });
};
