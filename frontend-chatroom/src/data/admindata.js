let host = "http://oop-project-backend-production.up.railway.app";

let deleteMessage = (id, user, text) => {
    fetch(host + "/admin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        fetch(host + "/admin/deleteMessage", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "id": id,
            "username": user,
            "messageContent": text,
          }),
        }).then((data) => {
            fetch(host + "/admin", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });
          })
      )
      .catch((error) => {
        console.log(error);
      });
};

let deleteUser = (user) => {
  fetch(host + "/admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(
      fetch(host + "/admin/deleteUser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: user
      }).then((data) => {
        fetch(host + "/admin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      })
    )
    .catch((error) => {
      console.log(error);
    });
};

let admindata = {
 deleteMessages: deleteMessage,
 deleteUser:deleteUser
};

export default admindata;
