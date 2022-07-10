const form=documnet.getElementsById('form');
const fname=documnet.getElementsById('fname');
const lname=documnet.getElementsById('lname');
const password=documnet.getElementsById('password');
const email=documnet.getElementsById("email");


function checkinputs(){
	// get value from the data
	const fnamevalue =fname.value.trim(); 
	const lnamevalue = lname.value.trim();
	const passwordvalue =fname.value
	const emailvalue =emailname.value.trim();
}

if (fname=""){
	// show error mressage
	// add seterror message
	setErrorFor(fname,"First name cannot be empty");
}else{
	// display normal
}

function setErrorFor(input, message) {
 	// body...
 	const error-message = input.parentElement;
 	const small=
 } 