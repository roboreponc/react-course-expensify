const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'roger',
      age: 46
    });
    // reject('something went wrong');
  }, 5000);
});

console.log('before');

mypromise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise')
    }, 5000);
  });
}).then((str) => {
  console.log('Does this run?', str)
}).catch((error) => {
  console.log('error: ', error)
});

// another way to handle 'catch'
// but using 'catch' (above) is the preferred method to handle 'reject'
// mypromise.then((data) => {
//   console.log(data);
// }, (error) => {
//   console.log('error: ', error)
// });

console.log('after');
