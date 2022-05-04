
var trigger = [
    ["hey","hi","hello"],
    ["name"],
    ["help"],
    ["time"],
    ["eur"]
];
var reply = [
    ["Hey","Hi","Hello"],
    ["My Name Is Kusakabe"],
    ["\n> name \n> time \n>eur"],
    ["The time is: "],
    ["The rate is: "]
];
var alternative = ["Sorry, I don't understand, try \'help\'"];

document.querySelector("#input").addEventListener("keypress", function(e){
    var key = e.which || e.keyCode;
    if(key == 13){
        var input = document.getElementById("input").value;
        output(input);
    }
});
function find_word(input,trigger){
    var words = input.split(" ");
    for(var i=0;i<trigger.length;i++){
        for(var j=0;j<trigger[i].length;j++){
            for(var h = 0;h<words.length;h++){
              if(trigger[i][j]==words[h]){
                return trigger[i][j];
              }
            }
        }
    }
}
function output(input){
    try{
        if(input == "name"){
            input = "Name";
        }
        var product = input + "=" + eval(input);
    } catch(e){

        var text = (input.toLowerCase()).replace(/[^\w\s\d]/gi,"");
        
        if(compare(trigger, reply, text)){
            var product = compare(trigger, reply, text);
        } else{
            var product = alternative[Math.floor(Math.random()*alternative.length)];
        }
    }
    addChatEntry(input,product)
    document.getElementById("input").value = "";
}
function compare(arr,array, string){
    if(find_word(string,arr)){
        string = find_word(string,arr)
    }
    var item;
    for(var x=0; x<arr.length; x++){
        for(var y = 0; y<array[0].length; y++){
            if(arr[x][y] == string){
                items = array[x];
                item = items[Math.floor(Math.random()*items.length)];
            }
        }
    }
    
    return item;
}

function addChatEntry(input, product) {
    const messagesContainer = document.getElementById("messages");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.className = "user response";
    userDiv.innerHTML = `user: <span>${input}</span>`;
    messagesContainer.appendChild(userDiv);

    if(product == "The time is: "){
        var now = new Date().toLocaleTimeString();
        product = product + "" + now;
    }

    let botDiv = document.createElement("div");
    let botText = document.createElement("span");
    botDiv.id = "bot";
    botDiv.className = "bot response";
    botText.innerText = "chatbot: "+`${product}`;

    if(product == "The rate is: "){
        xmlData(botText);
    }

    botDiv.appendChild(botText);
    messagesContainer.appendChild(botDiv);
    
    messagesContainer.scrollTop =
        messagesContainer.scrollHeight - messagesContainer.clientHeight;
}

const myHeaders = new Headers();
myHeaders.append("apikey", "F7RpS9sAl7hgxbH2YxSemywE16rnusNx");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function xmlData(botText){
    
    fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=CZK&base=EUR", requestOptions)
    .then(response =>
        {
          return response.text().then(function (text){
            botText.innerHTML = botText.innerHTML +"1 EUR = " + text.split(":")[6].replaceAll("}","")
          })
        })
}   
