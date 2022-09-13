// require를 통해 모듈을 불러옴
// 안의 요소가 변수형태로 사용되고 있음
const { odd, even} = require('./var');

function checkOddOrEven(num) {
    if (num % 2) {//홀수면
        return odd;
    }
    return even;
}
module.exports = checkOddOrEven;