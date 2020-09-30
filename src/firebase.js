import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDiM0Hhz7PtyAs39-wvq8i_chQyfhQnwfc",
    authDomain: "tiktok-87bef.firebaseapp.com",
    databaseURL: "https://tiktok-87bef.firebaseio.com",
    projectId: "tiktok-87bef",
    storageBucket: "tiktok-87bef.appspot.com",
    messagingSenderId: "375864591166",
    appId: "1:375864591166:web:5eb8a1e963840ff5f8a26f",
    measurementId: "G-NG66PGY2VE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db