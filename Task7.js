var a = [10,20,4,40,60,70]
var b = [1,2,3,4,5,6,7,8,9,10]
var arry = [].concat(b,a);
// document.write(arry)

function getUnique(array){
    var uniqueArray = [];
    
    
    for(i=0; i < array.length; i++){
        if(uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

var arr1 = arry;
var uniqueNames = getUnique(arr1);
document.write("Output :"+ uniqueNames); 

