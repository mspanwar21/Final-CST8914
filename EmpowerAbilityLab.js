

function showLightbox(){
  document.getElementById("lightboxmodal").style.display = "block";
  //document.getElementById("dialoglabel").focus();
  document.getElementById("dialoglabel").tabIndex = "-1";
  //document.getElementById("dialoglabel").trigger('focus');
  document.getElementById("dialoglabel").setAttribute("aria-hidden","false");

}


// Close the Modal
function closeModal() {
  document.getElementById("lightboxmodal").style.display = "none";
}

function toggleSwitch(thingy){
  if(thingy.checked){
    console.log("Switch is ON");
  } else {
    console.log("Switch is OFF");
  }
}
function findLableForControl(el) {
  var idVal = el.id;
  labels = document.getElementsByTagName('label');
  for( var i = 0; i < labels.length; i++ ) {
     if (labels[i].htmlFor == idVal)
          return labels[i];
  }
}
function removeErrorMessages(){
    //alert("validating form");
    let errorElements = document.getElementsByClassName('errorMessage');   

    for(let i=0; i < errorElements.length; i++){
      errorElements[i].ariaHidden = "true";
      errorElements[i].style.display = "none";
    }
}
function validateForm(){
  
  //alert("validateForm called");
    removeErrorMessages();
    let returnValue = true;

    //validateFieldset("talkAboutGroup");

    const myform = document.getElementById("scheduleForm");
    
    let errorList = [];

    [...myform.elements].forEach(item => {

      if(item.hasAttribute('required')){
        if(item.tagName.toLowerCase() == "input" && item.value.trim() == ""){ 
          // const givenLabel = findLableForControl(item);
          returnValue = false;
          let errorid=item.id + 'error';
          let message = document.getElementById(errorid);
          if(item.id=='busname'){
            message.innerHTML = "Please enter a name";
          } else if(item.id=='phone'){
            message.innerHTML = "Please enter a 10 digit phone number";
          } else {
            message.innerHTML = "Please make a valid email address";
          }
          
          message.style.display="block";
          message.ariaHidden = "false";
          errorList.push(item);
      }
    }
    });
    if(!returnValue) { 
      errorList[0].tabIndex = "-1"
      errorList[0].focus();
      const firstlabel = findLableForControl(errorList[0]);
      firstlabel.ariaLive = "assertive";
      return false;
    } else { 
      document.getElementById('thankyou').style.display = block;
      return true;
    
    }

}

function validateFieldset(id){ 
    let searchString = '#' + id + ' input';
    let fieldstuff = document.forms['scheduleForm'].querySelectorAll(searchString);
    let grouprequired = false;
    let hasChecked = false;
   

    for(let i=0; i < fieldstuff.length; i++){
      console.log(fieldstuff[i].hasAttribute('required'));
      console.log(fieldstuff[i].hasAttribute('required'));
      console.log(fieldstuff[i].style.display);
      if(fieldstuff[i].hasAttribute('required') && ! fieldstuff[i].style.display == none ){
        console.log("grouprequired set to true");
        console.log(fieldstuff[i]);
         grouprequired = true;
      }
      if(fieldstuff[i].checked == true){
        console.log("true");
        console.log(fieldstuff[i]);
        hasChecked = true;
      }
    }

    if(!grouprequired){
      console.log(grouprequired);
      return true;
    }
    if(!grouprequired && hasCheck){
      console.log("got here 106");
      return true;
    }
    alert("got here 107");
    console.log(grouprequired);
    console.log(hasCheck);
    searchString = '#' + id + ' legend';
    fieldstuff = document.forms['scheduleForm'].querySelectorAll(searchString);
    // console.log(fieldstuff);
    const errorMessage = document.createElement("div");
    errorMessage.innerHTML= '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>' + fieldstuff[0].innerHTML + " needs at least one choice";
    errorMessage.classList.add("errorMessage");
    fieldstuff[0].after(errorMessage);

}    

function togglePleaseTellUs(){
  let showhidediv = document.getElementById("pleaseTellUs");
  console.log(showhidediv)
  if(document.getElementById("check_invite").checked == true){
    showhidediv.hidden = false;
  } else { 
    showhidediv.hidden = true;
  }
}


// knowledgeRunner()

