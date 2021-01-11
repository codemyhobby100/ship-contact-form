// firebase connection
var firebaseConfig = {
  apiKey: "AIzaSyAOAZYaDINljIUp9swqbJeSr11B1BAjSNE",
    authDomain: "new-project-baqi.firebaseapp.com",
    databaseURL: "https://new-project-baqi.firebaseio.com",
    projectId: "new-project-baqi",
    storageBucket: "new-project-baqi.appspot.com",
    messagingSenderId: "157512492562",
    appId: "1:157512492562:web:f3891da66c881e5b0c5acb"
};

//Init Firebase

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// Grabbing DOM Element

const submitBtn = document.querySelector('#submit');

let userName = document.querySelector('#name');
 
let userService = document.querySelector('#service');

let userEmail = document.querySelector('#email');

let userPhone = document.querySelector('#phone');

let userMessage = document.querySelector('#message');

const db = firestore.collection("CONTACT-FORM-DATA");

submitBtn.addEventListener("click", function() {
    let userNameInput = userName.value;
    let userServiceInput = userService.value;
    let userEmailInput = userEmail.value;
    let userPhoneInput = userPhone.value;
    let userMessageInput = userMessage.value;

    //Access the databaes collection
    db.doc().set({
      name: userNameInput,
      service: userServiceInput,
      email: userEmailInput,
      phone: userPhoneInput,
      message: userMessageInput
    }).then(function(){
      console.log("DATA SAVED");
    })
    .catch(function(error){
      console.log(error);
    })
})

