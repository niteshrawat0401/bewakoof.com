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
  // event.preventDefault();

  let fil = null;
  let email = document.querySelector("#email").value;
  let pass = document.querySelector("#password").value;
  if (email != "" && pass != "") {
    let check = 0;
    for (let i = 0; i < loginData.length; i++) {
      if (loginData[i].username == email) {
        check = 1;
        if (loginData[i].password == pass) {
          check = 2;
          break;
        }
      }
    }

    //If username and passward dont exist
    //it will create new user
    if (check == 0) {
      let objUser = {
        username: email,
        password: pass,
      };
      loginData.push(objUser);

      localStorage.setItem("userData", JSON.stringify(loginData));
      alert("New User Created");
    }
    //If the password wont match
    else if (check == 1) {
      alert("Wrong Password");
    }
    //If the Username and Password match
    else if (check == 2) {
      alert("Logging in");
      window.location = "https://www.bewakoof.com/";
    }
  }
  //If input form has username or password missing
  else {
    //alert("Username or Password Missing!!");
  }
}

//Sign Up Page Javascript End
//---------------------------
