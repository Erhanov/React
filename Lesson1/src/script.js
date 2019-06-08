let a = 0;
console.log(a);

let names = ['Aza', 'Era', 'Erhanov'];
let filteredNames = names.filter((name) => {
    return name.length < 5;
});
console.log(filteredNames);

let answers = ['AzAt', 'ERa', 'ERHANOV'];
answers = answers.map((item) => item.toLowerCase());
console.log(answers);

function fetchData(data, count = 0) {
    console.log(`Данные ${data}, ${count}`);
}

fetchData('something');

function max (a, b, ...numbers) {
    console.log(numbers);
}

max(3, 4, 5);

const arr1 = [1, 2, 5],
      arr2 = [30, 2, 5];

const res = Math.max(...arr1, ...arr2);
console.log(res);



// const avatar = 'Photo';
// const user = {
//     name: 'default',
//     pass: 'qwerty',
//     rights: 'user'
// }

// const admin = {
//     name: 'admin',
//     pass: 'root'
// }

// const res1 = Object.assign({}, user, admin);
// const res1 = {...user, ...admin, avatar};
// console.log(res1); 


const x = 25, y = 10,
    //   coords = {  The same Thing
    //       x: x,
    //       y: y
    //   }
      coords = { x, y,
        calcSq() {
            console.log(this.x * this.y);
        }  
      }  


coords. calcSq();
console.log(coords);

const user = {
    name: {
        fisrt: 'Era',
        second: 'Aza'
    },
    pass: 'qwerty',
    rights: 'user'
}

const {name: {fisrt, second}, pass, rights} = user;
console.log(fisrt, second);

function connect ({
    host = 'localhost',
    port = 3000,
    user = 'default'} = {}) {
        console.log(`host: ${host}, port: ${port}, user: ${user}`);
}

connect();

const numbers = [3, 3, 4, 6];
const [a, b, c, d] = numbers;
console.log(a, b, c, d);
