
//国家地区
export const region = [
  { name: "欧美", id: 3 },
  { name: "内地", id: 5 },
  { name: "港台", id: 6 },
  { name: "韩国", id: 16 },
  { name: "日本", id: 17 }
];

//推荐歌单
export const sheet = [
  { name: "热门歌曲", id: 26 },
  { name: " 流行榜单", id: 4 },
  { name: "音乐人", id: 32 },
  { name: "新歌发布", id: 27 }
];


//请求url
export const request = {
  //服务器主机
  host: "https://api.atoz.ink/"
};
request.topid = request.host + "topid/";//歌单
request.query = request.host + "query/";//搜索
request.lyrics = request.host + "lyrics/";//歌词
request.song_url = request.host + "song_url/";//获取临时的歌曲url路径,有时效性

//云开发
export const envStr = "yican-97eb50";
export const envObj = {
  database: envStr,
  storage: envStr,
  functions: envStr
};