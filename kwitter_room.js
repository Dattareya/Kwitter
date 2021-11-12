const firebaseConfig = {
      apiKey: "AIzaSyAXwvguBVqkkWyzTF4c8GeQIDXRLZuDr_g",
      authDomain: "kwitter-project-c3e42.firebaseapp.com",
      projectId: "kwitter-project-c3e42",
      storageBucket: "kwitter-project-c3e42.appspot.com",
      messagingSenderId: "99070095165",
      appId: "1:99070095165:web:628d1faa089ea73ee59f54"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();