import doReq from "./doReq";

const searchMusicByQq = async (keyword, curpage = 1) => {
  // return request({
  //     url: `${'http://i.y.qq.com/s.music/fcgi-bin/search_for_qq_cp?'
  //     + 'g_tk=938407465&uin=0&format=jsonp&inCharset=utf-8'
  //     + '&outCharset=utf-8&notice=0&platform=h5&needNewCode=1'
  //     + '&w='}${keyword}&zhidaqu=1&catZhida=1` +
  //         `&t=0&flag=1&ie=utf-8&sem=1&aggr=0&perpage=20&n=20&p=${curpage
  //     }&remoteplace=txt.mqq.all&_=1459991037831&jsonpCallback=jsonp4`
  // })

  //     // url: `?vendor=qq&method=searchSong&params=[{"keyword":"${keyword}"}]`

  let flag = await doReq(`/song/search?keyword=${keyword}`);
  if (!flag || !flag.data || !flag.data.data || !flag.data.data.songs) {
    return [];
  }

  let lists = [];
  for (let v of flag.data.data.songs) {
    lists.push({
      id: v.id,
      name: v.name,
      artists: v.artists,
      imgUrl: v.album.cover,
      album: v.album,
      mv: v.mv,
    });
  }

  return lists;
};

const getMusicDetailByQq = async (id) => {
  let flag = await doReq(`/song/detail?songId=${id}`);
  if (!flag || !flag.data) {
    return [];
  }

  return flag.data;
};

const getMusicUrlByQq = async (id) => {
  let flag = await doReq(`/song/url?songId=${id}`);
  if (!flag || !flag.data || !flag.data.data) {
    return "";
  }

  return flag.data.data.url;
};

const getMusicLyricByQq = async (id) => {
  let flag = await doReq(`/song/lyric?songId=${id}`);
  if (!flag || !flag.data) {
    return false;
  }

  return flag.data;
};

const getMusicCommentsByQq = async (id, page = 1, limit = 15) => {
  let flag = await doReq(
    `/song/comments?songId=${id}&page=${page}&limit=${limit}`
  );
  if (!flag || !flag.data) {
    return false;
  }

  let hotComments = [];
  for (let v of flag.data.data.hotComments) {
    hotComments.push({
      time: v.time * 1000,
      content: v.rootcommentcontent,
      likedCount: v.praisenum,
      user: {
        userId: 0,
        avatarUrl: v.avatarurl,
        nickname: v.nick,
      },
    });
  }

  let comments = [];
  for (let v of flag.data.data.comments) {
    comments.push({
      time: v.time * 1000,
      content: v.rootcommentcontent,
      likedCount: v.praisenum,
      user: {
        userId: 0,
        avatarUrl: v.avatarurl,
        nickname: v.nick,
      },
    });
  }

  return [hotComments, comments, flag.data.data.total];
};

export default {
  searchMusicByQq,
  getMusicDetailByQq,
  getMusicUrlByQq,
  getMusicLyricByQq,
  getMusicCommentsByQq,
};

// export function qq_bootstrap_track(id) {
//     const songId = id;
//     const target_url = `${'https://u.y.qq.com/cgi-bin/musicu.fcg?loginUin=0&'
//       + 'hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&'
//       + 'platform=yqq.json&needNewCode=0&data=%7B%22req_0%22%3A%7B%22'
//       + 'module%22%3A%22vkey.GetVkeyServer%22%2C%22method%22%3A%22'
//       + 'CgiGetVkey%22%2C%22param%22%3A%7B%22guid%22%3A%2210000%22%2C%22songmid%22%3A%5B%22'}${
//       songId}%22%5D%2C%22songtype%22%3A%5B0%5D%2C%22uin%22%3A%220%22%2C%22loginflag%22` +
//         '%3A1%2C%22platform%22%3A%2220%22%7D%7D%2C%22comm%22%3A%7B%22uin%22%3A0%2C%22' +
//         'format%22%3A%22json%22%2C%22ct%22%3A20%2C%22cv%22%3A0%7D%7D';
//     request({
//             url: target_url
//         })
//         .then((response) => {
//             let { data } = response;
//             data = JSON.parse(data);
//             if (data.req_0.data.midurlinfo[0].purl == '') {
//                 // vip
//                 return failure();
//             }
//             const url = data.req_0.data.sip[0] + data.req_0.data.midurlinfo[0].purl;
//             return url;
//         });
// }
