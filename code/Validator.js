function Validator() {
    // *********************************************************************** 
    // PRIVATE VARIABLES	
    // ***********************************************************************
    var validResult_bl;

    // ************************************************************************ 
    // PUBLIC METHOD
    // ************************************************************************ 
    this.getValidateMssgObjForStringInput = function($element) {
        var validMssg_obj = new ValidMessage();

        if ($element.val().length !== 0) {
            if (!$.isNumeric($element.val())) {
                validMssg_obj.setMesssage("Ok: No problem with the field ");
                validMssg_obj.setElementId($element.attr('placeholder'));
                validMssg_obj.setValidationStatus(true);
            } else {
                validMssg_obj.setMesssage("!Error: You don't have an empty field, but this field only accepts alphanumeric values. ");
                validMssg_obj.setElementId($element.attr('placeholder'));
                validMssg_obj.setValidationStatus(false);
            }

        } else {
            validMssg_obj.setMesssage("!Error: Missing values, you have to complete this field. ");
            validMssg_obj.setElementId($element.attr('placeholder'));
            validMssg_obj.setValidationStatus(false);
        }

        return validMssg_obj;
    };

    this.getValidateMssgObjForNumberInput = function($element) {
        var validMssg_obj = new ValidMessage();

        if ($element.val().length !== 0) {
            if ($.isNumeric($element.val())) {
                validMssg_obj.setMesssage("Ok: No problem with the field ");
                validMssg_obj.setElementId($element.attr('placeholder'));
                validMssg_obj.setValidationStatus(true);
            } else {
                validMssg_obj.setMesssage("!Error: You don't have an empty field, but this field only accepts numbers. ");
                validMssg_obj.setElementId($element.attr('placeholder'));
                validMssg_obj.setValidationStatus(false);
            }
        } else {
            validMssg_obj.setMesssage("!Error: Missing values, you have to complete this field. ");
            validMssg_obj.setElementId($element.attr('placeholder'));
            validMssg_obj.setValidationStatus(false);
        }

        return validMssg_obj;
    };

    this.showValidObjMessage = function(validMssgObj){
    	if(!validMssgObj.getValidationStatus()) 
    		console.log("%c"+validMssgObj.getMessage()+'%s', "color:red; font-size: 16pt",validMssgObj.getElementId());    
    	else
    		console.log("%c"+validMssgObj.getMessage()+'%s', "color:blue; font-size: 16pt",validMssgObj.getElementId());   	
    };

} //End Class Validator
