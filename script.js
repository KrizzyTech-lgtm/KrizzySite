function welcome(){
    alert("Welcome to KrizzySite!");
}

/* CHATBOT */

function sendMessage(){

    let input = document.getElementById("userInput");

    let message = input.value;

    if(message === ""){
        return;
    }

    let chatBox = document.getElementById("chatBox");

    let userDiv = document.createElement("div");

    userDiv.className = "user";

    userDiv.innerHTML = "😎 You: " + message;

    chatBox.appendChild(userDiv);

    let botDiv = document.createElement("div");

    botDiv.className = "bot";

    botDiv.innerHTML = "🤖 KrizzyBot: " + getReply(message);

    chatBox.appendChild(botDiv);

    input.value = "";

}

/* BOT REPLIES */

function getReply(message){

    let msg = message.toLowerCase();

    if(msg.includes("hello")){
        return "Hello!";
    }

    if(msg.includes("games")){
        return "Check the games section!";
    }

    if(msg.includes("music")){
        return "Music section is awesome!";
    }

    return "That's cool!";
}