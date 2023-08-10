import count from './js/count'
import sum from './js/sum'
// 想要webpack打包资源。必须引入该资源   webpack不能识别css文件所以 index.css 写全称
import './css/index.css'
import './less/index.less'
import './sass/index.sass'
import './sass/index.scss'
import './stylus/index.styl'

console.log(count(1,2));
console.log(sum(1,2,3,4));

