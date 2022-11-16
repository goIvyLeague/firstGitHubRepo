// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVgBD_UJlAsTj9tbrWlvjtu8BzTcrhdLA",
    authDomain: "messaging-34634.firebaseapp.com",
    databaseURL: "https://messaging-34634-default-rtdb.firebaseio.com",
    projectId: "messaging-34634",
    storageBucket: "messaging-34634.appspot.com",
    messagingSenderId: "526253656199",
    appId: "1:526253656199:web:505778cd0c521ff398d022"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);

 // var testFormDB =firebase.database().ref("testForm");
 var database = app.database();

  //document.getElementById("testForm").addEventListener("submit", submitForm)

  /*function submitForm(e){
    e.preventDefault();
  }*/

  function save(){

    //const foodsRef =database.ref.child('foods');
    var food = document.getElementById('food').value;

    database.ref('users/' + food).set({
    //foodsRef.set({
        food: 'yrtyreterty'
    })
    alert('Saved');

  }

