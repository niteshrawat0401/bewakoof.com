//----------------------------
//Sign Up Page Javascript Start

//Listening to click on Login Button
document.querySelector("#btn").addEventListener("click", processUser);

//taking data from Local Storage
loginData = JSON.parse(localStorage.getItem("userData")) || [];

//function for when login button is pushed
//checks is the password is valid
//if password and username doesnt exist it creates new
function processUser(event) {
  //event.preventDefault();

  let fil = null;
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;
  if (email != "" && pass != "") {
    let check = loginData.filter(function (element, index) {
      if (element.username == email) {
        return element;
      }
    });

    //If username and passward dont exist
    //it will create new user
    if (check[0] == null) {
      let objUser = {
        username: email,
        password: pass,
      };
      loginData.push(objUser);

      localStorage.setItem("userData", JSON.stringify(loginData));
      alert("New User Created");
    }
    //If the password wont match
    else if (check[0].password != pass) {
      alert("Wrong Password");
    }
    //If the Username and Password match
    else if (check[0].password == pass) {
      alert("Logging in");
      window.location.href =
        "https://abhinavbisht94.github.io/bewakoof-clone-u2/index.html";
    }
  }
  //If input form has username or password missing
  else {
    //alert("Username or Password Missing!!");
  }
}

//Sign Up Page Javascript End
//---------------------------
