function fizzBuzz(num1,num2) {
    if ((num1 % 3 === 0 && num1% 5 === 0 ) && (num2 % 3 === 0 && num2 % 5 === 0 )){  
       console.log('fizz buzz');
    }else if ((num1 % 3 === 0) && (num1 % 3 === 0)) {
      console.log('fizz');
    } else if (num1 % 5 === 0) {
     console.log('Buzz');
    } else {
      console.log();
    
  }
}
fizzBuzz();


