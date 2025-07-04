//pull all the dom elements

const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')



function showError(input,message){

const formControl=input.parentElement;
formControl.classList.add('error');
const small=formControl.querySelector('small');
small.innerText=message;



}
function showSuccess(input){
   const formControl=input.parentElement;
formControl.classList.add('success'); 
}

//check email is valid
const validateEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}(\.[0-9]{1,3}){3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
};



function getFieldName(input){
     return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}

//check reuqired fields
function checkRequired(inputArr){

inputArr.forEach(function(input){
    if(input.value.trim()===''){
        showError(input,`${getFieldName(input)} is required`)
    }else{
        showSuccess(input)
    }
})

}
function checkLength(input,min,max){
     if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be atleast ${min} character`);
     }else if(input.value.length>max){
         showError(input,`${getFieldName(input)} must be less than ${max} character`);
     }else{
        showSuccess(input)
     }
}

function checkPasswordsMatch(inpu1,input2){
    if(inpu1.value!==input2.value){
        showError(input2,'Passwords do not match')
    }else{
        showSuccess(input2);
    }
}



//event listener on submit

form.addEventListener('submit',function(e){
    e.preventDefault();
    // if(username.value===''){
    //     showError(username,'Username is required')
    // }else{
    //     showSuccess(username);
    // }

    //  if(email.value===''){
    //     showError(email,'Email is required')
    // }else if(!validateEmail(email.value)){
    //     showError(email,'Email is not valid')
    // }
    // else{
    //     showSuccess(email);
    // }

    // if(password.value===''){
    //     showError(password,'password is required')
    // }else{
    //     showSuccess(password);
    // }
    //    if(password2.value===''){
    //     showError(password2,'password is required')
    // }else{
    //     showSuccess(password2);
    // }
   checkRequired([username,email,password,password2])
   checkLength(username,3,15)
   checkLength(password,6,25)
   validateEmail(email)
   checkPasswordsMatch(password,password2)


    

})