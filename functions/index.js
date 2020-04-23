const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// FIREBASE CLOUD FUNCTIONS

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// function to created notification doc and store it in notifications collection in firestore
const createNotification = notification  => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then( doc => console.log('notification added', doc));
};

// function to create a 'new project' notification on creating a new project using the onCreate on projects collection
exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate( (snap, context) => {
    
    const project = snap.data();
    const projectId = context.params.projectId;

    // notification document
    const notification = {
        content: 'new project',
        user: `${ project.authorfirstname } ${ project.authorlastname }`,
        userId: project.authorid,
        projectId: projectId,
        time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);

});

// function to create a 'sign up' notification when a user signs up using the onCreate on users collection
exports.userCreated = functions.firestore
    .document("users/{uid}")
    .onCreate((snap, context) => {

    // notification document
    const user = snap.data();
    const uid = context.params.uid;
    const notification = {
        content: 'sign up',
        user: `${user.firstname} ${user.lastname}`,
        userId: uid,
        time: admin.firestore.FieldValue.serverTimestamp()
    };
    return createNotification(notification);
});

// exports.userJoined = functions.auth
//     .user()
//     .onCreate( user => {
//     return admin.firestore().collection('users')
//         .doc(user.uid).get().then( doc => {
//             const newUser = doc.data();
//             const notification  = {
//                 content: 'joined the hub',
//                 user: `${ newUser.firstname } ${ newUser.lastname }`,
//                 time: admin.firestore.FieldValue.serverTimestamp()
//             };
//             return createNotification(notification);
//         });
// });