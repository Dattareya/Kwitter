
const firebaseConfig = {
  apiKey: "AIzaSyCDIvxiTWDB2hqkPRMwuuqX-xftYsvGtc8",
  authDomain: "kwitter-5eb93.firebaseapp.com",
  databaseURL: "https://kwitter-5eb93-default-rtdb.firebaseio.com",
  projectId: "kwitter-5eb93",
  storageBucket: "kwitter-5eb93.appspot.com",
  messagingSenderId: "287790482420",
  appId: "1:287790482420:web:3baefae3b8d48147b0afa1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+  user_name;

function addroom()
{
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
    localStorage.setItem("room_name",room_name);

    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      
  //End code
  });});}
getData();


function redirecttoroomname(name)
{
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}