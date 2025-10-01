function fortuneTeller(name, age){
    let nameWithAge = '' ;
    // nameWithAge = `Name: ${''} and Age:${''}`;
    return nameWithAge;
}

    let userAge = prompt("What is your age");
    let userName = prompt("What is your name");
    
    console.log(fortuneTeller(userName));
    console.log(fortuneTeller(userAge));

    if(userName.length <= 7, userAge.length > 20){
        console.log(`${userName}, will marry late in life.`);
    }else if (userName.length >= 5, userAge.valueOf <= 30){
          console.log( `${userName}, will marry within a year.`);
        } else{
            console.log("This will not happen for you!");
        }
       
    
    
 