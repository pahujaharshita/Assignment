 //Question 1
 
 function ArraySum(a){
    var total=0;
    for(const i in a) { 
        total += a[i];
    }
    return total;
}

var arr = [123,155,134, 205, 105]; 
var sum= ArraySum(arr); 
console.log(sum);


//Question 2
/*
function sum( obj )
{
    var sum = 0;
    for( var b in obj ) 
    {
      
        sum += obj[b];
    }
    
    return sum;
  }
      
  var obj = { a: 1 , b: 2 , c:3 , d:4, e:5, };
  var summed = sum( obj );
  console.log( "sum: "+summed );

obj.f=summed;
console.log(obj)
*/


//Question 5
/*
function change() 
{
    return new Promise(function(resolve, reject) {
    setTimeout(resolve, 5000);
    }).then(function() {
        console.log("Done");
    });
}*/

// Question 5: Again Tried

const fun= new Promise(function(resolve, reject)
{ 
    setTimeout(()=> resolve("Done"),5000);
})

fun.then(res => console.log(res));

const fun2= new Promise(function(resolve, reject)
{ 
    setTimeout(()=> resolve("Done"),5000);
})

fun2.then(res => console.log(res));