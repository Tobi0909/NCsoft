function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
  var firstName = document.contactForm.firstName.value;
  var lastName = document.contactForm.lastName.value;
  var email = document.contactForm.email.value;
  var phone = document.contactForm.phone.value;
  var CompanyName = document.contactForm.CompanyName.value;
  var ProjectOverview = document.contactForm.ProjectOverview.value;
  var message = document.contactForm.message.value;

  var fnameErr =
    (lnameErr =
    emailErr =
    phoneErr =
    CnameErr =
    ProjectErr =
    messageErr =
      true);

  if (firstName == "") {
    printError("fnameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(firstName) === false) {
      printError("fnameErr", "Please enter a valid name");
    } else {
      printError("fnameErr", "");
      fnameErr = false;
    }
  }

  if (lastName == "") {
    printError("lnameErr", "Please enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(lastName) === false) {
      printError("lnameErr", "Please enter a valid name");
    } else {
      printError("lnameErr", "");
      lnameErr = false;
    }
  }

  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (phone == "") {
    printError("phoneErr", "Please enter your mobile number");
  } else {
    var regex = /^\d{10}$/;
    if (regex.test(phone) === false) {
      printError("phoneErr", "Please enter a valid 10 digit mobile number");
    } else {
      printError("phoneErr", "");
      phoneErr = false;
    }
  }

  if (CompanyName == "") {
    printError("CnameErr", "Please Enter Correct Subject");
  } else {
    printError("CnameErr", "");
    CnameErr = false;
  }

  if (ProjectOverview == "") {
    printError("ProjectErr", "Please Enter Correct Subject");
  } else {
    printError("ProjectErr", "");
    ProjectErr = false;
  }

  if (message == "") {
    printError("messageErr", "Please select your message");
  } else {
    printError("messageErr", "");
    messageErr = false;
  }

  if (
    (fnameErr ||
      lnameErr ||
      emailErr ||
      phoneErr ||
      CnameErr ||
      ProjectErr ||
      messageErr) == true
  ) {
    return false;
  } else {
    var dataPreview =
      "You've entered the following details: \n" +
      "firstName: " +
      fname +
      "\n" +
      "lastName: " +
      lname +
      "\n";
    "Email: " +
      email +
      "\n" +
      "Phone: " +
      phone +
      "\n" +
      "CompanyName: " +
      CompanyName +
      "\n" +
      "ProjectOverview: " +
      ProjectOverview +
      "\n" +
      "message: " +
      message +
      "\n";
  }
  alert(dataPreview);
}
