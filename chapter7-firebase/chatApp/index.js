var database = firebase.database();



//Taking name of user

    var Name = prompt("Enter your name : ", "");
    


//Write data to database

function writeUserData() {
    var message = document.getElementById('message').value;
    database.ref('messages/').push().set({
        message : message,
        name: Name
    });
  }

//Read data from database
 database.ref('messages').on('value', (snapshot) => {
    var messages = snapshot.val();

        for(var key in messages){
            var messagees = messages[key];
            console.log(messagees);
        }
       var x = document.createElement("P");                        
       var t = document.createTextNode(`${messagees.name}: : ${messagees.message}`);    
        x.appendChild(t);                                           
        document.getElementById('msgdiv').appendChild(x)
        console.log(t);
  });  

  