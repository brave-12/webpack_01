import count from './js/count'
import sum from './js/sum'
// 想要webpack打爆资源。必须引入该资源
import "./css/index"

console.log(count(1,2));
console.log(sum(1,2,3,4));

