let host = "https://oop-project-backend-production.up.railway.app";

let getMessages = () => {
  return fetch(host + "/messages", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",}})
    .then((response) => response.json())
    .then((data) => {
     return data;})
    .catch((error) => {
      console.log(error);});
};

let sendMessage = (text, user) => {
    if (localStorage.getItem("admin")==="true"){
        return fetch(host + "/admin/addMessage", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messageContent: text,
            username: user,}),})
          .then((response) => {
            if (response.status === 200) {
              return 1;
            } else {
              return 0;}})
          .then((data) => {
            if (data === 1) {
              return 1;
            } else {
              return 0;}})
          .catch((error) => {
            console.log(error);
          });
    }else{
        return fetch(host + "/messages/"+user, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            "messageContent": text,
            "username": user,}),})
            .then((response) => {
            if (response.status === 200) {
                return 1;
            } else {
                return 0; }})
            .then((data) => {
            if (data === 1) {
                return 1;
            } else {
                return 0; }})
            .catch((error) => {
            console.log(error);});
}};

let userdata = {
  getMessages: getMessages,
  sendMessage: sendMessage,
};

export default userdata;
