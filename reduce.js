
const users = [{
    firstName: 'mangesh',
    lastName: 'choudhari',
    age: 26,
},{
    firstName: 'akshay',
    lastName: 'parkad',
    age: 22,
},{
    firstName: 'ganesh',
    lastName: 'sudake',
    age: 27,
},{
    firstName: 'ram',
    lastName: 'varma',
    age: 26,
}

 ];


 // i want to calculate 

 const firstNamesWithAgeLessThan26 = users.reduce((acc, user) => {
    if (user.age === 26) {
      acc.push(`${user.firstName} ${user.lastName} ${user.age}`);
    }
    return acc;
  }, []);
  
  console.log(firstNamesWithAgeLessThan26); // ['akshay 22']
  















// const array = [2,3,8,12,4,43,1]

//first of all lets try calculate sum without using reduce mathod 

// const findSum = function(array) {
//     let sum = 0;
//     for (let i = 0; i<array.length; i++ ) {
//         sum = sum + array[i]
//     }
//     return sum;
// };

// console.log(findSum(array));




// const reduce = array.reduce(function (acc, curr) {
//     return sum = acc + curr;
// },0);

// console.log(reduce);



// const reduce1 = array.reduce(function (Max, curr) {
//      if (curr > Max) {
//         Max = curr;
//      }

//      return Max;
// });

// console.log(reduce);








































