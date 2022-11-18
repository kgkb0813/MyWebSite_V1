`use script`;

console.log('===(1)===');
const arr1 = new Array();
const arr2 = [1,2];

const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); 
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

console.log(fruits);
console.log('===(2-1)===');
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
console.log('===(2-2)===');
for(let fruit of fruits){
    console.log(fruit);
}

// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
console.log('===(2-3)===');
fruits.forEach( 
    function (fruit, index, array) {
        console.log(fruit, index, array);
    }
);

console.log('===(2-4)===');
fruits.forEach( 
    function (fruit, index) {
        console.log(fruit, index);
    }
);

console.log('===(2-5)===');
fruits.forEach( (fruit, index) => console.log(fruit, index) );
fruits.forEach( (fruit) => console.log(fruit) );

// 추가, 삭제를 위한 명령어: push, pop, unshift, shift, splice 
// unshift, shift: 속도가 늦은 명령어
console.log('===(3-1)===');
// push: 맨마지막에 추가(add)
fruits.push('strawberry', 'peach');
console.log(fruits);
// pop: 맨 마지막 항목 제거(delete)
fruits.pop();   // 마지막 항목을 제거
console.log(fruits);

console.log('===(3-2)===');
// unshift: 맨처음에 추가(add)
fruits.unshift('strawberry', 'peach', 'grape');
console.log(fruits);

console.log('===(3-3)===');
// shift: 맨처음 항목 한 개 제거(delete)
fruits.shift();
console.log(fruits);

console.log('===(3-4)===');
// splice: 특정 위치에 내용 삭제(delete)
fruits.splice(1, 2);    // 1번 위치부터 2개 삭제
console.log(fruits);

console.log('===(3-5)===');
// splice: 특정 위치에 내용 삭제(delete)
fruits.splice(2);    // 맨 앞에 2개만 남기고 다 지움
console.log(fruits);

console.log('');
fruits.unshift('strawberry', 'peach', 'grape');
console.log(fruits);
console.log('===(3-6: 1번 자리에 2개(peach, grape) 지우고 지운 자리에 3개(apple, melon, watermelon) 새로 추가)===');
fruits.splice(1, 2, 'apple', 'melon', 'watermelon');    // 1번 위치부터 1개 삭제 후 2개 추가
console.log(fruits);

console.log('===(3-7: 1번 자리에 2개(kiwi, mandarin) 새로 추가)===');
fruits.splice(1, 0, 'kiwi', 'mandarin');    // 1번 위치부터 2개 추가
console.log(fruits);

console.log('===(3-8: 2개 배열을 합침)===');
const fruit2 = ['lime', 'mango'];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

// Search: indexOf, includes
console.log('===(4-1: indexOf(apple))===');
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('pear'));

console.log('===(4-2: includes)===');
console.log(fruits.includes('apple'));  // true
console.log(fruits.includes('pear'));  // false


fruits.splice(2,5);
fruits.push('kiwi');
console.log('===(4-3:kiwi의 index 조사: indexOf, lastIndexOf)===');
console.log(fruits);  // true
console.log(fruits.indexOf('kiwi'));
console.log(fruits.lastIndexOf('kiwi'));


