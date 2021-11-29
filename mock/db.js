const Mock = require('mockjs');
const mr = Mock.Random;

// 男女生书籍分类
const MALE = ['玄幻', '奇幻', '武侠', '仙侠', '都市', '现实', '军事', '历史', '游戏', '体育', '科幻', '悬疑', '轻小说', '短篇'];
const FEMALE = ['古代言情', '仙侠奇缘', '现代言情', '浪漫青春', '玄幻言情', '悬疑推理', '短篇', '科幻空间', '游戏竞技', '轻小说', '现实生活'];
// 首页banner数据
const banner = (n, start) => new Array(n).fill('').map((val, index) => ({
  id: start + index,
  _id: start + index + '',
  img: mr.image("1080x375", mr.color(), mr.cword()),
}))
// 小型书籍展示区数据
const smallBook = (n, start) => new Array(n).fill('').map((val, index) => ({
  id: start + index,
  _id: start + index + '',
  img: mr.image("66x88", mr.color(), mr.cword()),
  title: '@ctitle(2, 16)',
  auth: '@cword(2, 6)',
}))
// 大型书籍展示区数据
const bigBook = (n, start, isMale, isContinue) => new Array(n).fill('').map((val, index) => ({
  id: start + index,
  _id: start + index + '',
  img: mr.image("66x88", mr.color(), mr.cword()),
  title: '@ctitle(2, 16)',
  desc: '@cparagraph()',
  auth: '@cword(2, 6)',
  'fenlei|1': isMale ? MALE : FEMALE, //书籍分类
  end: isContinue ? '连载中' : '已经完本', // 书籍连载状态
  words: '@float(30, 1000, 1, 2)', // 书籍字数
}))
// 首页数据
const homeData = isMale => ({
  banner: banner(4, 10000), // 轮播图
  hot: smallBook(7, 10004), // 热门小说
  free: { // 限时免费
    timeEnd: Date.now() + 80000000,// 限免时间
    book: smallBook(6, 10011),
  },
  search: '@ctitle(5, 8)', // 搜索推荐关键字
  rank: { // 排行榜
    changxiao: smallBook(10, 10017),// 畅销榜
    fengyun: smallBook(10, 10027), // 风云榜
    ...(isMale ? {qianyue: smallBook(10, 10037)} : {dianji: smallBook(10, 10037),}), // 签约榜/点击榜
    tuijian: smallBook(10, 10047), // 推荐榜
  },
  new: bigBook(3, 10050, isMale, true),
  wanben: bigBook(3, 10053, isMale, false),
  fenlei: isMale ? {
    xuanhuan: smallBook(5, 10058),
    wuxia: smallBook(5, 10063),
    dushi: smallBook(5, 10068),
    lishi: smallBook(5, 10073),
    youxi: smallBook(5, 10078),
    kehuan: smallBook(5, 10083),
  } : {
    gudai: smallBook(5, 10058),
    xianxia: smallBook(5, 10063),
    xiandai: smallBook(5, 10068),
    langman: smallBook(5, 10073),
    xuanhuan: smallBook(5, 10078),
    xuanyi: smallBook(5, 10083),
    kehuan: smallBook(5, 10088),
    youxi: smallBook(5, 10093),
  },
  qing: smallBook(5, 10098),
  jingxuan: [
    {
      id: 11111,
      img: mr.image("164x66", mr.color(), mr.cword()),
    },
    {
      id: 11112,
      img: mr.image("164x66", mr.color(), mr.cword()),
    },
    {
      id: 11113,
      img: mr.image("164x66", mr.color(), mr.cword()),
    },
    {
      id: 11114,
      img: mr.image("164x66", mr.color(), mr.cword()),
    }
  ]
})

module.exports = () => {
  return Mock.mock({
    'home': homeData(true),
    'homeFemale': homeData(false),
  })
}
