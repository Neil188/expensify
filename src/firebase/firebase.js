import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses')
//     .on(
//         'child_removed',
//         snapshot => console.log('Removed: ', snapshot.key, snapshot.val())
//     );
// database.ref('expenses')
//     .on(
//         'child_changed',
//         snapshot => console.log('Changed: ', snapshot.key, snapshot.val())
//     );

// const onChange = database.ref('expenses')
//     .on(
//         'value',
//         snapshot => {
//             const expenses = [];

//             snapshot.forEach( childSnapShot => {
//                 expenses.push({
//                     id: childSnapShot.key,
//                     ...childSnapShot.val(),
//                 })
//             })

//             console.log(expenses);

//         },
//         e => console.log('On failed. ', e)
//     );


// database.ref('expenses')
//     .once('value')
//     .then( snapshot => {
//         const expenses = [];

//         snapshot.forEach( childSnapShot => {
//             expenses.push({
//                 id: childSnapShot.key,
//                 ...childSnapShot.val(),
//             })
//         })

//         console.log(expenses);

//     })

// const expenses = [
//     {
//         description: 'test1',
//         note: 'blah',
//         amount: 100,
//         createdAt: 0
//     },
//     {
//         description: 'test2',
//         note: 'blahblah',
//         amount: 123.45,
//         createdAt: 0
//     },
//     {
//         description: 'test3',
//         note: 'whatever',
//         amount: 56000,
//         createdAt: 0
//     },
// ]

// database.ref('expenses')
//         .push(expenses[0])
//         .then( () => console.log('push 1 succesfull'));


// const notes = [
//     {
//         id: '12',
//         title: 'first note',
//         body: 'This is a note',
//     },
//     {
//         id: '23ddf',
//         title: 'second note',
//         body: 'This is another note',
//     },
// ];

// const firebaseNotes = {
//         ref12: {
//             title: 'first note',
//             body: 'This is a note',
//         },
//         ref23ddf: {
//             title: 'second note',
//             body: 'This is another note',
//         },
// }

// database.ref('notes')
//         .push(firebaseNotes)
//         .then( () => console.log('push succesfull'));

// database.ref()
//     .once('value')
//     .then( snapshot => {
//         const val = snapshot.val();
//         console.dir(val);
//     })
//     .catch( e => console.log('Fetch failed. ', e));

// database.ref()
//     .on('value', snapshot => console.dir(snapshot.val()))
// const onValueChange = database.ref()
//     .on(
//         'value',
//         snapshot => console.dir(snapshot.val()),
//         e => console.log('On failed. ', e)
//     )

// database.ref()
//     .set({
//         name: 'Neil',
//         age: 666,
//         isZombie: true,
//         location: {
//             position: 'sitting',
//             floor: 1,
//         },
//     })
//     .then( () => console.log('Data is saved'))
//     .catch( e => console.log('This failed. ', e));
// setTimeout( () => database.ref('location')
//     .remove()
//     .then( () => console.log('Data is deleted'))
//     .catch( e => console.log('Delete failed. ', e)),
// 5000);

// setTimeout( () => database.ref('age')
//     .set(null)
//     .then( () => console.log('Data is deleted'))
//     .catch( e => console.log('Delete failed. ', e)),
// 10000);

// setTimeout( () => database.ref()
//     .update({
//         name:'Start',
//     })
//     .then( () => console.log('Data is updated')),
// 10000);

// // setTimeout( () => database.ref().off(),
// //     15000);
// setTimeout( () => database.ref().off('value', onValueChange),
//     15000);

// setTimeout( () => database.ref()
//     .update({
//         name:'End',
//     })
//     .then( () => console.log('Data is updated')),
// 20000);

// setTimeout( () => database.ref('attributes')
//     .update({
//         eyes: 5,
//         soul: 'none',
//     })
//     .then( () => console.log('Data is updated again')),
// 20000);

// setTimeout( () => database.ref()
//     .update({
//         name:'Bugger',
//         'attributes/eyes': 3,
//     })
//     .then( () => console.log('Data is updated yet again')),
// 30000);
