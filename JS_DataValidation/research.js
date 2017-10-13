/* Zohib Zalmy */
"use strict";
/* Notice that we are setting the function to call when submit is selected */
window.onsubmit=validateForm;

/* This function must return true or false */
/* If true the data will be sent to the server */
/* If false the data will not be sent to the server */
function validateForm() {
    /* Retrieving the values */

    var invalidMessages = "" + phoneError() + verifyConditions() + verifyTimePeriods() + verifyStudyId();
    
    if (invalidMessages != "") {
        alert(invalidMessages);
        return false;
    }
    return confirm("Do you want to submit the form data?");
}

function phoneError() {
    var phoneFirstPart = document.getElementById("phoneFirstPart").value;
    var phoneSecondPart = document.getElementById("phoneSecondPart").value;
    var phoneThirdPart = document.getElementById("phoneThirdPart").value;

    var ans = "";
    if (phoneFirstPart.length < 3 || phoneSecondPart.length < 3 || phoneThirdPart.length < 4) {
        ans = "Invalid phone number\n";
    }

    if (parseInt(phoneFirstPart.toString()) != phoneFirstPart || parseInt(phoneSecondPart.toString()) != phoneSecondPart || parseInt(phoneThirdPart.toString()) != phoneThirdPart) {
        ans = "Invalid phone number\n";
    }

    return ans;
}


function verifyConditions() {
    var hasHighBloodPressure = document.getElementById("highBloodPressure").checked;
    var hasDiabetes = document.getElementById("diabetes").checked;
    var hasGlaucoma = document.getElementById("glaucoma").checked;
    var hasAsthma = document.getElementById("asthma").checked;
    var hasNone = document.getElementById("none").checked;
    var selectedConditionAndNone = (hasHighBloodPressure && hasNone) || (hasDiabetes && hasNone) || (hasGlaucoma && hasNone) || (hasAsthma && hasNone);

    var errormessage = "";
    if (!hasHighBloodPressure && !hasDiabetes && !hasGlaucoma &&
            !hasAsthma && !hasNone) {
        errormessage += "No conditions selected\n";
    } else if (selectedConditionAndNone) {
        errormessage += "Invalid conditions selection";
    }

    return errormessage;
}

function verifyTimePeriods() {
    var never = document.getElementById("periodNever").checked;
    var less = document.getElementById("periodLess").checked;
    var once = document.getElementById("periodOnce").checked;
    var more = document.getElementById("periodMore").checked;

    var errormessage = "";
    if (!never && !less && !once && !more) {
        errormessage = "No time period selected\n";
    }

    return errormessage;
}

function verifyStudyId() {
    var firstpart = document.getElementById("firstFourDigits").value;
    var secondpart = document.getElementById("secondFourDigits").value;
    var num1 = firstpart.substring(1, 4);
    var num2 = secondpart.substring(1, 4);

    var errormessage = "";

    if (firstpart.length != 4 || secondpart.length != 4 || firstpart.charAt(0) != 'A' || secondpart.charAt(0) != 'B' || parseInt(num1.toString()) != num1 || parseInt(num2.toString()) != num2)
        errormessage = "Invalid study id";

    return errormessage;
}