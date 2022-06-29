
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

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send()
{
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({name:user_name,message:msg,like:0});
 document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
          name=message_data['name'];
          message=message_data['message'];
          like=message_data['like'];
          nametag="<h4>"+name+"</h4>";
          messagetag="<h4 class='message_h4'> "+message+"</h4>";
          likebutton="<button class='btn btn-info ' id="+firebase_message_id+" value="+like + " onclick='updatelike(this.like)'>";
          
//End code
    } });  }); }
getData();