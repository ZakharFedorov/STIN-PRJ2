function find_word(input,trigger){
    var words = input;
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
module.exports = find_word;