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

