function check(a){
    var x=a;
    var y=x;
    var rev=0;
    var rem=0;
    while( x>0){
        rem=x%10;
        rev=rev*10+rem;
        x=parseInt(x/10);
    }
    if (rev==y)
     {
        console.log("palindrome")
        
    } 
    else
     {
        console.log("not palindrome")

        
    }
   
    
}
var p=555;
check(p);
