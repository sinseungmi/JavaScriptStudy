//alert(text); //윈도우 생략 가능

console.log("length : " , text.length);

//(start_index, end_index) end는 미포함
console.log('slice : ', text.slice(3,9));
console.log('substring : ', text.substring(4,8));

//substr(start_index, 길이);
console.log('substr : ', text.substr(3,2));

//전달한 값이 음수라면 인덱스를 뒤에서부터 세준다
console.log('slice: ' , text.slice(2));
console.log('slice: ' , text.slice(2,-1));
console.log('slice: ' , text.slice(2,-2));
console.log('slice: ' , text.slice(2,-3));


console.log('toUpperCase : ', text.toUpperCase());
console.log('toUpperCase : ', text.toLowerCase());

console.log('before trim :', '   ABCDEFG');
console.log('after trim :', '   ABCDEFG'.trim());

console.log('before padding : ','ABCDEF');   //문자열과 채울값 모두 포함이 13=
console.log('after padding : ','ABCDEF'.padStart(13,'#').padEnd(20,'*'));
                                              //end는 start 문자도 포함한다
console.log('ABCDEF'.charAt(3));
console.log('ABCDEF'[3]);
console.log('ABCDEF'.charCodeAt(3));

const fruit_arr = fruits.split('/');
console.log(fruit_arr);

console.log(text.indexOf('H'));
console.log(text.indexOf('a'));
console.log(text.lastIndexOf('a'));

//indexOf는 시작 위치를 결정할 수 있다.(시작위치부터 지정 문자열을 찾는다)
console.log(text.indexOf('Java', 10));

//search는 정규표현식을 사용할 수 있다
console.log(text.search('J.{3}'));

//match :문자열에 대한 정규표현식 검사를 할 수 있다
console.log(names.match('.{2}우현')); 

console.log('includes 박민규?',names.includes('박민규'));
console.log('includes 서우현?',names.includes('서우현'));

console.log('text starts with hello?',text.startsWith("ello"));
console.log('text starts with Hello?',text.startsWith("Hello"));

console.log('text ends with script!?',text.endsWith("script!"));

