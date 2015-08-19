/***************Variables********************/
var $myForm;
var $firstName;
var $lastName;
var $address;
var $personalId;
var $phone;

var validator_obj;




/***************Handlers********************/
function readyHndl(event) {
    validator_obj = new Validator();

    settAllFormItems();
    addAllListeners();
}

function submitBtnHndl(event) {
    event.preventDefault();

    checkValidation();
}

/***************Listeners********************/
$(document).ready(readyHndl);

/***************Functions********************/
function addAllListeners() {
    $myForm.submit(submitBtnHndl);
}

function settAllFormItems() {
    $myForm = $("#myForm");
    $firstName = $("#first-name");
    $lastName = $("#last-name");
    $address = $("#address");
    $personalId = $("#personalId");
    $phone = $("#phone");
}

function checkValidation() {
    validator_obj.showValidObjMessage( validator_obj.getValidateMssgObjForStringInput( $firstName) );
    validator_obj.showValidObjMessage( validator_obj.getValidateMssgObjForStringInput( $lastName) );
    validator_obj.showValidObjMessage( validator_obj.getValidateMssgObjForStringInput( $address) );
    validator_obj.showValidObjMessage( validator_obj.getValidateMssgObjForNumberInput( $personalId) );
    validator_obj.showValidObjMessage( validator_obj.getValidateMssgObjForNumberInput( $phone) );
}
