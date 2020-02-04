import * as firebase from 'firebase/app'
import 'firebase/firestore'
const config = require('./firebase-conf.json')

firebase.initializeApp(config)

export const firestoreDB = firebase.firestore()
