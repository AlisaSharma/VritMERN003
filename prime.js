let num = 5;
let prime = true;

    for (let i = 2; i<num; i++){
        if (num % i/2===0){
            prime=false;
            break;
        }
    }
        if(num<=1){
            console.log(num,"is a not prime or composite number")
        }
        else if(prime===true){
            console.log(num,"is a prime number")
        }
        else{
            console.log(num,"is not a prime number")
        }
        
        
    
