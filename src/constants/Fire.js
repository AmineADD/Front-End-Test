import firebase from 'firebase'
   
  var firebaseConfig = {
    apiKey: "AIzaSyDRNx8jMcy4Qij1-ph3BEyHOKVA6FhMLDg",
    authDomain: "client-ee1ad.firebaseapp.com",
    databaseURL: "https://client-ee1ad.firebaseio.com",
    projectId: "client-ee1ad",
    storageBucket: "client-ee1ad.appspot.com",
    messagingSenderId: "95665923969",
    appId: "1:95665923969:web:b08d9948bd9b32915eaa80",
    measurementId: "G-GCP26HVBHP"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;
