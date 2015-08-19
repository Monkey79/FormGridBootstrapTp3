function ValidMessage() {
    // *********************************************************************** 
    // PRIVATE VARIABLES	
    // ***********************************************************************
    var message_str;
    var elementId_str;
    var validationStatus_bl;

    // ************************************************************************ 
    // PUBLIC METHOD
    // ************************************************************************ 
    this.setMesssage = function(messageStr) {
        message_str = messageStr;
    }
    this.setElementId = function(elementIdStr) {
        elementId_str = elementIdStr;
    }
    this.setValidationStatus = function(validtStatusBl) {
        validationStatus_bl = validtStatusBl;
    }

    this.getMessage = function() {
        return message_str;
    }
    this.getElementId = function() {
        return elementId_str;
    }
    this.getValidationStatus = function() {
        return validationStatus_bl;
    }
}//End Class ValidMessage
