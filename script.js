let txt = document.querySelector('h1').innerHTML;
txt = 'Hello';
console.log(txt);

// null
// 값이 없다는 것을 의도적으로 명시하고 싶을 때 사용
// 변수에 null값을 할당하는 것은 변수가 이전에 참조하던 
// 값을 더이상 참조하지 않겠다는 의미
let name = 'yejin';
console.log(name);
name = null;
console.log(name);

// undefined
// 자바스크립트에서 var, let 키워드로 선언한 변수는
// 값이 들어오기 전까지 undefined 초기화 된다.
// 변수 선언에 의해 확보된 메모리 공간에 값이 
// 할당되기 전까지 undefined 상태
let a;
console.log(a);

// number 숫자
// NaN (Not a Number) Nan
// Javascript는 대소문자를 구분

// String 문자, 문자열
// 1. 큰따옴표 ""
// 2. 작은 따옴표 ''
// 3. 역 따옴표(backtick) `` 
let text1 = "hello1";
let text2 = 'hello2';
let text3 = `hello3`;

let num = 10;
let text4 = `hello${num}`
console.log(text1, text2, text3);
console.log(text4);

// 형변환
console.log(Number('0'));
console.log(Number('123'));
// Not a Number
console.log(Number('Hello'));
console.log(Number('Hello12242'));
// Boolean
console.log(Number(true));
// true는 숫자 1을 반환
console.log(Number(false));
// false 숫자 0을 반환

// 1. 정수(integer) int : 자연수와 0, 자연수에 마이너를 붙인 숫자
// 2. 실수(real number) float이라는 명령어로 사용 
// floating point (부동 소수점) : 소수점이 있는 숫자

// 정수 변환 : parseInt
console.log(parseInt(123.35363));
console.log(parseInt('123.35363'));
// NaN
console.log(parseInt('sdgdsgsdg'));