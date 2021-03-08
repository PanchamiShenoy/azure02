
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDE2FfeOvXU4khx-15kab9C_EwGPEpFRmk",
    authDomain: "azure-c0044.firebaseapp.com",
    projectId: "azure-c0044",
    storageBucket: "azure-c0044.appspot.com",
    messagingSenderId: "867836660514",
    appId: "1:867836660514:web:5d299fe99364312d35337b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);
  document.querySelector(".contact-form").reset();
}

function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}