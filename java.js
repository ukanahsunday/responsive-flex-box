const form=documnet.getElementById('form');
const fname=documnet.getElementById('fname');
const lname=documnet.getElementById('lname');
const password=documnet.getElementById('password');
const email=documnet.getElementById("email");




function checkInputs(){
	// get value from the data
	const fnamevalue =fname.value.trim(); 
	const lnamevalue = lname.value.trim();
	const passwordvalue =fname.value.trim();
	const emailvalue =emailname.value.trim();

	if (fnamevalue===""){
		// show error mressage
		// add seterror message
		setErrorFor(fname,"First name cannot be empty");
	}else{
		// add success class
		setSuccesssfor(fname);
	}
}
	function setErrorFor(input, message) {
	 	// body...
	 	const errorMessage = input.parentElement;
	 	const small= errorMessage.querySelector("small")
	 	// add error message inside small
	 	small.innerText = message;
	 	// add error class
	 	errorMessage.className = "class-error";
	 } 

	 fuction setSuccessfor(input){
	 	cont errorMessage = input.parentElement;
	 	errorMessage.className = "success";
	 