
var colorName=["Yellow","Pink","Red","Black"]

document.write("Color Names :"+colorName+"<br>"+"<br>")


colorName.unshift(prompt("Enter color in start:")) ;
colorName.push(prompt("Enter color in End:"));


document.write("Color Names After Update :"+colorName+"<br>"+"<br>")

colorName.splice(0,0,prompt("Enter One More"));
colorName.splice(1,0,prompt("Enter One More"));

document.write("Updated After Two added :"+colorName+"<br>"+"<br>")

colorName.shift();
document.write("Updated After Remove First Color :"+colorName+"<br>"+"<br>")

colorName.pop()
document.write("Updated After Remove Last Color :"+colorName+"<br>"+"<br>")

colorName.splice(parseInt(prompt("Enter Position for Adding Color")),0,prompt("Enter Color Name"));
document.write("Updated After Selection :"+colorName+"<br>"+"<br>")

colorName.splice(parseInt(prompt("Enter Position of Deleting Index")),parseInt(prompt("Enter Position of Deleting Index")));
document.write("Updated After Selection :"+colorName+"<br>"+"<br>")
