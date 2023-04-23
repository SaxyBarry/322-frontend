let host = "http://localhost:8085";

let login =  (username, password) => {
  return fetch(host + "/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "username":username,
        "password":password
    }),
  })
    .then((response) => response.text())
    .then((data) => {
    if(data === "Successful login"){
        return 1;
    }else{return 0;}})
    .catch((error) => {
      console.log(error);
    });
};

let signup = (username, password, email) => {
  return fetch(host + "/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "username": username,
      "password": password,
      "email":email
    }),
  })
    .then((response) => 
        { 
            if(response.status === 200){
                return 1
            }else{
                return 0;
            }
        }
    )
    .then((data) => {
      if (data === 1) {
        return 1;
      } else {
        return 0;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

let data = {
  login: login,
  signup:signup
};

export default data;
