  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
  import { getDatabase, ref,set, get, child } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
 
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDyCfU_woK3kQT5Ya3meo34xYJfI2EsCsc",
    authDomain: "code-zone-africa-82587.firebaseapp.com",
    projectId: "code-zone-africa-82587",
    storageBucket: "code-zone-africa-82587.appspot.com",
    messagingSenderId: "672186092458",
    appId: "1:672186092458:web:943e8bb53dcbd338bfb9d3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Get a reference to the database service
  const database = getDatabase(app);

  document.getElementById("database").addEventListener