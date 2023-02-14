let temp = 'osama'
console.log(temp.toUpperCase())

console.log(temp)
function temporary(str){
    str = str.toLowererCase().split(' ');
    for (var i =0 ;i <str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
        return str.join(' ');
    }



console.log(temporary(temp))
