function compare(arr,array, string){
    
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
module.exports = compare;