export default {
  updateSource: (state, payload) => {
    state.source = payload;
  },
  updateImgs: (state, payload) => {
    state.imgs = payload;
  },
  updateIsPc: (state, payload) => {
    state.isPc = payload;
  },
  updateDetailId: (state, payload) => {
    state.detailId = payload;
  },
  updateCurDetailId: (state, payload) => {
    state.curDetailId = payload;
  },
  updatePlaylistIds: (state, payload) => {
    state.playlistIds = payload;
  },
  updateSongId: (state, payload) => {
    state.songId = payload;
  },
  updateSingerId(state, payload) {
    state.singerId = payload;
  },
  updateSingerName(state, payload) {
    state.singerName = payload;
  },
  updateUserId: (state, payload) => {
    state.userId = payload;
  },
  updateOwnUserId: (state, payload) => {
    state.ownUserId = payload;
  },
  updateOwnUserName: (state, payload) => {
    state.ownUserName = payload;
  },
  updateUserName: (state, payload) => {
    state.username = payload;
  },
  updateTopLists: (state, payload) => {
    state.toplists = payload;
  },
};
