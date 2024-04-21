import { mensagem, output } from "./ui.js";
let socket = io();

export function submitUserInputToServer() {
    if (mensagem.value) {
        socket.emit("chat", mensagem.value);
        mensagem.value = "";
    }
}
export function receiveFromServer() {
    socket.on("clientChat", function (paraCliente) {
        output.innerHTML =
        "ID: " +
        paraCliente.socketID +
        " <br>" +
        "Message: " +
        paraCliente.mensagem;
    });
}
    