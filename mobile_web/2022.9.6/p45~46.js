let a = true;
let b = false;

console.log(a ? 1 :2);
// 출력결과: 1

console.log(b ? 3 : 2);
// 출력결과: 2 ?? 

//function statement를 사용
function sum(a,b) {
    return a+b;
}

console.log(sum(10, 20));
// 출력결과: 30

// arrow function expression을 사용
const multiply = (a,b) => {
    return a*b;
}

console.log(multiply(10,20));
// 출력결과: 200