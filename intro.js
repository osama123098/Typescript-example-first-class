let temp = 'osama khadija love'
console.log(temp.toUpperCase())

console.log(temp)
function temporary(str){
    str = str.toLowerCase().split(' ');
    for (var i =0 ;i <str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
        return str.join(' ');
    }



console.log(temporary(temp))
