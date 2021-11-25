import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { firestore } from "firebase-admin";

admin.initializeApp(functions.config().firebase);

exports.processSignUp = functions.auth.user().onCreate(async user => {
  return admin.auth().setCustomUserClaims(user.uid, {
    'https://hasura.io/jwt/claims': {
    'x-hasura-default-role': 'user',
    'x-hasura-allowed-roles': ['user'],
    'x-hasura-user-id': user.uid
  }})
  .then(async () => {
    await firestore().collection('users').doc(user.uid).set({
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    })
  })
  .catch(err => {
    console.log(err);
  });
});