function password(input){
    let user = input[0];
    let pass = input[1];
    let index = 2;
    let passInput = '';

    while (pass !== passInput ){
        passInput = input[index];
        index++;
    }
    console.log(`Welcome ${user}!`);


}

password([

"Nakov",

"1234",

"Pass",

"1324",

"1234"])