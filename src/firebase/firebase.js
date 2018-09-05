import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//   description: 'Gas',
//   note: 'For the Honda',
//   amount: 3500,
//   createdAt: 1400
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: '',
//   amount: 95000,
//   createdAt: 1300
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });

//     console.log(expenses);
//   });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       })
//     });

//     console.log(expenses);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     console.log(snapshot.val());
//   });


// database.ref('expenses').push({
//   description: 'Food',
//   note: 'I am hungry',
//   amount: 1000,
//   createdAt: 0
// });
// database.ref('expenses').push({
//   description: 'PC',
//   note: 'Need for React class',
//   amount: 180000,
//   createdAt: 100
// });

// database.ref('notes/-LKbwWuiY53d5h2w3VNs').remove();

// database.ref('notes/-LKbwWuiY53d5h2w3VNs').update({
//   body: 'Buy food'
// });

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React, Python, Angular'
// });

// const firebaseNotes = {
//   notes: {
//     abcdefg: {
//       title: 'first note',
//       body: 'this is my note'
//     },
//     hijklmnop: {
//       title: 'another note',
//       body: 'this is my second note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'first note',
//   body: 'this is my note'
// }, {
//   id: '761sae',
//   title: 'another note',
//   body: 'this is my second note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   let val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error with data fetching ', e)
// });

// setTimeout(() => {
//   database.ref('name').set('Gringo Smello');
// }, 3500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching ', e)
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data ', e);
//   })

// database.ref().set({
//   name: 'Roger Bolser',
//   age: 44,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   stressLevel: 6,
//   isSingle: false,
//   location: {
//     city: 'Cary',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('Data Add failed ', e);
// });

// database.ref('isSingle').remove()
// .then(() => {
//   console.log('isSingle Removed');
// }).catch((e) => {
//   console.log('isSingle was NOT removed');
// });

// database.ref().remove()
// .then(() => {
//   console.log('Database Removed');
// }).catch((e) => {
//   console.log('Database was NOT removed');
// });

// Another way to remove data using set()
// However using remove() is prefered way
// database.ref('isSingle').set(null);

// database.ref().update({
//   name: 'Tony Bony',
//   age: 90,
//   job: 'Software Developer',
//   isSingle: null
// });

// database.ref().update({
//   'job/company': 'Amazon',
//   stressLevel: 9,
//   'location/city': 'Seattle'
// });
