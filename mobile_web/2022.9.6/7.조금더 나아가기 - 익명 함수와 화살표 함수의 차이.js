//익명함수 생ㅇ성 후 곧바로 호출
(function () {
    console.log(this);
})();

// 화살표 함수 생성 후 곧바로 호출
(() => {
    console.log(this);
})();

//둘을 실행해보고 결과 비교하기
