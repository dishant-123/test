function f1()
{
	var e=document.getElementById("em");
	var p=document.getElementById("ps");
	if(notEmpty(em,"not empty")){
					if(lengthRestriction(ps,"user name length should be in between 6 and 8 and contains @,#,$")){
				if(emailValidator(email, "Please enter a valid email address")){
					
				}
			}
	}
	function notEmpty(elem, helperMsg){
	if(elem.value.length == 0){
		alert(helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;

	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
	}
	function lengthRestriction(elem, help){
	var uInput = elem.value;
	var m=/^[az@#$]+$/;
	if(uInput.length >= 6 && uInput.length <= 8 && uInput.value.match(m)){
		return true;
	}else{
		alert("help");
		elem.focus();
		return false;
	}
}
	
					
							
}