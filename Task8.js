var j =[]
for( var i =1; i<11; i++){
   j.push(i)


}
document.write("Counting : "+j)

var j =[]
for( var i =10; i>0; i--){
   j.push(i)


}
document.write("<br>"+" Reverse Counting : "+j)

var j =[]
for( var i =1; i<21; i++){
   if(i%2== 0){

      j.push(i)
   }


}
document.write("<br>"+" Even Numbers : "+j)

var j =[]
for( var i =1; i<21; i++){
   if(i%2!==0){

      j.push(i)
   }


}
document.write("<br>"+" Odd Numbers : "+j)

var j =[]
for( var i =1; i<21; i++){
   if(i%2== 0){

      j.push(i+"k")
   }


}
document.write("<br>"+" Series : "+j)


