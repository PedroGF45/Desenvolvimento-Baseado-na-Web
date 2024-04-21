console.log("connected");
import { submitUserInputToServer, receiveFromServer } from "./socketHandler.js";
import { form } from "./ui.js";

form[0].addEventListener("submit", function (event) {
    event.preventDefault();
    submitUserInputToServer();
});

receiveFromServer();