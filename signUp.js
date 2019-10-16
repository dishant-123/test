    function checkRollno(){
       // document.getElementById("formDetails").reset();
       var userPassword=document.getElementById("password").value;
       var userConfPassword=document.getElementById("confPassword").value;
       if(userPassword!=userConfPassword){  //to varify password and repassword.
                window.alert('Please Varify Password and ConfirmPassword Field.');
       }
       else{
            var x={
                name:document.getElementById("username").value,
                email:document.getElementById("email").value,
                password:document.getElementById("password").value,
                }
                if(window.localStorage.getItem(x.email)!=null){
                    window.alert('Hello '+x.name +' !!You are already SignUp please SignIn To Continue.')
                }
                else{
                    window.localStorage.setItem(x.email,x.password);
            }
        }
        
    }
    function facebook(){
        window.open("https://www.facebook.com/","facebook","height=400px,width=250px");
    }
    function twitter(){
        window.open("https://twitter.com/login?lang=en","twitter","height=400px,width=250px");
    }
    function google(){
        window.open("https://mail.google.com/mail/u/0/#inbox","google","height=400px,width=250px");
    }