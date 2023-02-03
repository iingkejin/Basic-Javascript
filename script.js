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


// 연산자
// 1. 산술 연산자 : +, -, /, *, %
console.log(30 + 10);
console.log(30 - 10);
console.log(30 * 10);
console.log(30 / 10);
// 나머지 연산자 : %
console.log(30 % 10);
// 거듭제곱 연산자 : **
console.log(30 ** 10);

// 2. 대입 연산자 : =, +=, -=
let num1 = 123;
let num2 = 456;
let str1 = "Hello";
let str2 = "World!";

let num3, str3;

num3 = num1 + num2;
str3 = str1 + str2;
console.log(num3);
console.log(str3);

let num4 = num1 - num2; 
let str4 = str1 - str2; // NaN
console.log(num4);
console.log(str4);

// 자바스크립트는 동적언어라 변수 선언시 타입 지정 X
// 값이 할당되는 순간 그 값에 따라 타입이 결정됨.
// 자바스크립트가 타입스크립트에 비해 자유도와 유연성 높다
// 1. 예상 못한 버그가 발생할 확률이 높다.
// 2. 프로젝트 규모가 커질수록 유지보수 비용 증가, 안정성 저하

// let num(변수이름) = '숫자'; (자바스크립트)

// 타입스크립트는 선언과 동시에 어떤 타입을 넘겨야하는지 명확하게 작성
// 해당 타입이 아닌 데이터를 넘긴다면 바로 컴파일러 에러 발생 -> 사전에 빠른 대응 가능
// let num:number = '문자열'; (타입스크립트)
// 자신이 지정한 자료형하고 다른 값이 들어오면 에러 발생
// TypeScript 마이크로소프트가 개발하고 유지하고 있는 오픈소스 프로그래밍 언어
// 자바스크립에 타입을 부여한 언어 -> 자바스크립트 상위 버전

// 자바스크립트 대소문자 구분 O 소문자 a A 
let A = '문자열';
let B = 12345;
let C = A + B;
let D = 20 - '10';
console.log(C, D);

// 3. 복합 대입 연산자
let Num = 10;
let result_1, result_2, result_3, result_4, result_5;
result_1 = result_2 = result_3 = result_4 = result_5 = 10;
console.log(result_1, result_2, result_3, result_4, result_5);

// 복합 대입 연산자 +=
// result_1 = result_1 + Num
result_1 += Num;
console.log(result_1);

//  복합 대입 연산자 -=
// result_2 = result_2 - Num
result_2 -= Num;
console.log(result_2);

// 복합 대입 연산자 *=
// result_3 = result_3 * Num
result_3 *= Num;
console.log(result_3);

// 복합 대입 연산자 /=
// result_4 = result_4 / Num
result_4 /= Num;
console.log(result_4);

// 복합 대입 연산자 %=
// result_5 = result_5 % Num
result_5 %= Num;
console.log(result_5);


// 증가, 감소 연산자 ++, --
let number, result;
number = 10;
console.log(number); // 10
result = number++; // result = number / 먼저 결과값을 저장하고 후에 ++ 증감
// result에 num값이 복사되고, num++는 그 다음값 부터 num에 증가
console.log(result); // 10
console.log(number); // 11

number = 10;
console.log(number);
result = ++number; // 이 행에서 ++가 반영되고, 증감된 결과값이 result에 저장
console.log(result);

// 비교 논리 연산자
// 1. 비교 연산자
// Number
console.log(5 <= 10); //true
console.log("5" <= 10); // true
console.log(true == 1); // true
console.log(true == '1'); // true
// true는 자료형 : Boolean / 숫자 1은 자료형 : number
console.log(true === 1); //false 
console.log(false != 0); //false
console.log(false !== 0) //true

// String
// 알파벳 순서대로 비교
console.log("a" < "z");
// 소문자 > 대문자
console.log("a" > "A");
console.log("Hello" > "Hi");

let text = 123123;
console.log(text);
// 자료형 확인 : typeof
console.log(typeof(text));
console.log(typeof(true));
console.log(typeof(false));

// 2. 논리 연산자
// &&(AND), || (OR), !(NOT)
// A && B : 둘 다 참일 때
// A || B : 둘 중에 하나가 참일 때
// !A == B : A와 B가 같지 않을 때


// Scope (전역변수, 지역변수)
// 1. 지역변수(=로컬 스코프)에서 전역변수(=글로벌 스코프) 사용 가능
let x = 1;
let y = 2;
let z = 3;
console.log(x);
console.log(y);
console.log(z);

function local1() {
  // 지역변수 안에 변수에 값을 재할당 할 수 있다
  let x = 4;
  let y = 5;
  let z = 6;

  console.log(x);
  console.log(y);
  console.log(z);
}
// 함수호출 방법 : 함수이름()
local1();

// 2. 전역변수(글로벌 스코프)에서 지역 변수(로컬 스코프) 사용 불가능

// 전역변수(글로벌 스코프)
let A1 = 1;
let B2 = 2;

function local2() {
  let C3 = 3;
  let D4 = 4;

  console.log(A1);
  console.log(B2);
  console.log(C3);
  console.log(D4);
}
local2();

// console.log(C3);
// console.log(D4);


// 3. 로컬 스코프(지역변수) 내에 다른 로컬 스코프 이중으로 겹칠 때
// double2 함수에서는 double1 함수의 변수를 사용 할 수 있지만,
// double1에서는 double2 변수 사용 X
let e = 1;

function double1() {
  let f = 3;
  let g = 4;
  console.log(f);
  console.log(g);
  // ReferenceError 발생
  console.log(h);

  function double2() {
    let h = 5;
    let i = 6;
    console.log(f); // 3
    console.log(h);
  }
  double2();
}
double1();