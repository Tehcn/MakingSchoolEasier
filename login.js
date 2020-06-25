const cookie = require('cookie');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://WebserverUser:0JKTpt2rapbiUzgi@cluster0-bc3uh.azure.mongodb.net/Users?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

var usernameinput;
var passwordinput;

function login() {
  client.connect(err => {
    const collection = client.db("Users").collection("users");
    var query = { username: usernameinput, password: passwordinput}
    var user = collection.find(query).toArray(function(err, result) {
      if (err) {
        document.getElementsByClassName("alert").innerHTML = "<div class = 'alert alert-danger'><strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.</div>";
      }
    })
    
    client.close();
  });
}



// password: 0JKTpt2rapbiUzgi