
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBngB9qYhZwZCimhlcdMDLmV_ROcHXlMKw",
  authDomain: "currentproject-6500a.firebaseapp.com",
  projectId: "currentproject-6500a",
  storageBucket: "currentproject-6500a.appspot.com",
  messagingSenderId: "770469390761",
  appId: "1:770469390761:web:99ccfb3a0272145b443cb8"
};
  
  firebase.initializeApp(firebaseConfig);

  var database=firebase.database()

  function save(){

    var name = document.getElementById('name').value
    var age = document.getElementById('age').value

    database.ref('name/' + name).set({
      name: name,
      age: age
    })
  }

  

  
  