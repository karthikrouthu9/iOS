function checkloginpassword()
    {
	
    var networkState = navigator.connection.type;
    if (networkState == Connection.NONE)
    {
       	var json ='{"result":"E-10003 :" ,"message": "Please Check Internet Connection Settings"}';

		obj = JSON.parse(json);

	

	document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>Please Check Internet Connection Settings</div>";
	
 				window.location='./first_screen.html';
                return true;
               
    }
   
    var c = document.getElementById("registrationcode1");
    return checkloginpin(c.value)
   


}


    function checkloginpin(loginpin1) 
{

var loginpin = /^\d{4}$/; 

	if (loginpin.test(loginpin1)) 
		{

			//$.post( "http://192.168.0.99:8087/my_drupal_site/?q=my_services/m_resources/device_log_in" , { device_uuid:device_test,login_pin:loginpin1}, function( data ) {
    
			var json ='{"response":"0","response_Code":"I-20002","response_message": "Successfully logged in"}';
			//var json ='{"response":"1","response_Code":"E-10003","response_message": "Log-In failed"}';
				
			obj = JSON.parse(json);

	if(obj.response=='0')
		{
				
			alert(obj.response_message);
			return true;
		}
	else
		{
			alert(obj.response_message);
			return false;
		}	

return true;
}
else
{

var json ='{"result":"E-10002 :","message": "Device Log-In Pin must contain 4-digits"}';


	obj = JSON.parse(json);


document.getElementById("bootstrap").innerHTML = "<div class='alert alert-danger' role='alert'>"+obj.message+"</div>";

return false;

}
}








  
  