
document.querySelector("#check").addEventListener("click", function(){

    // Defining all the expressions
    let emailCheck = /^\w+([\.-]?\w+)+@\w+-?\w+(\.[a-z]+){1,3}$/;
    let phoneNumberCheck = /^(\+88)?(88)?01[0-9]{9}$/;
    let nameCheck = /^([A-Z]?[a-z]+\.? ?)+$/;
    let dateCheck = /^[0-9][1-9][\/\.-][0-9][1-9][\/\.-][0-9]{3}[1-9]$/;
    let postalCodeCheck = /^[0-9]{4}$/;



    // taking the input as string from the input field.
    let string = document.querySelector("#takingString").value;

    if(string.length<=0){
        document.querySelector("#showResult").innerText = "Please enter something.";
        return;
    }


    // Searching the selected option. And storing the value of the selected field to the checker variable.
    let num = document.querySelectorAll(".selectType").length;
    let count = num;
    let ch = null;
    for(let i=0; i<num; i++){
        ch = document.querySelectorAll(".selectType")[i].querySelector("input").checked;
        if(ch==true){
            count = i;
            break;
        }
    }
    
    if(count>=num){
        document.querySelector("#showResult").innerText = "Please Select an option.";
        return;
    }

    let checker = (count<num)? (document.querySelectorAll(".selectType")[count].querySelector("input").value) : null ;





    // Matching with the expression and showing the result.
    switch (checker){
        case "email":
            if(emailCheck.test(string)){
                document.querySelector("#showResult").innerText = "Valid email.";
            }else{
                document.querySelector("#showResult").innerText = "Invalid email.";
            }
            break;

        case "phoneNumber":
            if(phoneNumberCheck.test(string)){
                document.querySelector("#showResult").innerText = "Valid (BD) Phone Number.";
            }else{
                document.querySelector("#showResult").innerText = "Invalid (BD) Phone Number.";
            }
            break;
        
        case "name":
            if(nameCheck.test(string)){
                document.querySelector("#showResult").innerText = "Valid Name.";
            }else{
                document.querySelector("#showResult").innerText = "Invalid Name.";
            }
            break;

        case "date":
            if(dateCheck.test(string)){
                document.querySelector("#showResult").innerText = "Valid date.";
            }else{
                document.querySelector("#showResult").innerText = "Invalid date.";
            }
            break;

        case "postalCode":
            if(postalCodeCheck.test(string)){
                document.querySelector("#showResult").innerText = "Valid Postal Code.";
            }else{
                document.querySelector("#showResult").innerText = "Invalid Postal Code.";
            }
            break;

    }

})







// Giving instruction to the user about the input.
document.querySelector("#email").addEventListener("click", function(){
    document.querySelector("#takingStringLabel").innerText = "Email format: example@domain.type";
});

document.querySelector("#phoneNumber").addEventListener("click", function(){
    document.querySelector("#takingStringLabel").innerText = "BD Phone Number starts with 01 and country code is +88";
});

document.querySelector("#name").addEventListener("click", function(){
    document.querySelector("#takingStringLabel").innerText = "Name can not have number or special characters ($/>#)";
});

document.querySelector("#date").addEventListener("click", function(){
    document.querySelector("#takingStringLabel").innerText = "Date format: XX/XX/XXXX or XX.XX.XXXX or XX-XX-XXXX";
});

document.querySelector("#postalCode").addEventListener("click", function(){
    document.querySelector("#takingStringLabel").innerText = "Postal Code is 4 digit long";
});