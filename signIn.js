function facebook(){
    window.open("https://www.facebook.com/","facebook","height=400px,width=250px");
}
function twitter(){
    window.open("https://twitter.com/login?lang=en","twitter","height=400px,width=250px");
}
function google(){
    window.open("https://mail.google.com/mail/u/0/#inbox","google","height=400px,width=250px");
}
function validateForm(){
    let email=document.getElementById("email").value;
    if(window.localStorage.getItem(email)=="1234"){
        window.alert('helllo');
    }

    //     let email=document.getElementById("email").value;
    //     let password=document.getElementById("password").value
    //     if(window.localStorage.getItem("email")==null){
    //     window.alert('You are not Registered Please Sign Up');
    //     }
    // // else if(window.localStorage.getItem("email")!=null){
    //     else{
    //         if(window.localStorage.getItem("email")==password){
    //             window.alert('Your Details are Right!!');
    //         }
    //         else{
    //             window.alert('Sorry!! Password Not Match Please try again with correct Password.');
    //         }
    // }
    
}