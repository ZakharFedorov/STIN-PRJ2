function addChatEntry(input, product) {
    //const messagesContainer = document.getElementById("messages");
    //let userDiv = document.createElement("div");
   // userDiv.id = "user";
    //userDiv.className = "user response";
    //userDiv.innerHTML = `user: <span>${input}</span>`;
    //messagesContainer.appendChild(userDiv);

    if(product == "The time is: "){
        var now = new Date().toLocaleTimeString();
        product = product + "" + now;
    }
    //let botDiv = document.createElement("div");
    //let botText = document.createElement("span");
    //botDiv.id = "bot";
    //botDiv.className = "bot response";
    //botText.innerText = "chatbot: "+`${product}`;

    if(product == "The rate is: "){
        xmlData(botText);
    }

    //botDiv.appendChild(botText);
    //messagesContainer.appendChild(botDiv);
    
    //messagesContainer.scrollTop =
        //messagesContainer.scrollHeight - messagesContainer.clientHeight;

    return product;
}
module.exports = addChatEntry;