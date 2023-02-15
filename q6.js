let temp = '\t\t\tAllama\n   Khadim\t  Hussain  Rizvi'
console.log(temp)
let variable = temp

temp = ''
for(var i=0; i<variable.length;i++){
    var dasd =variable.charAt(i)
    if ('\t'!=variable.charAt(i)&&variable.charAt(i)!='\n'){
        temp+=variable.charAt(i) 
    }
   
} 
temp=temp.split(' ')
temp =temp.join(' ') 
console.log(temp)