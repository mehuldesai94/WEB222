/********************************************************************************* 
* 
* WEB222 – Assignment #5
* 
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: Mehulkumar Desai        Student ID: 110288172        Date: 5th-April-2018 
* 
********************************************************************************/ 

function validateForm()
        {
            //alert("function called");

            var upperLatters = /^[A-Z]/;
            var lowerLatters = /^[a-z]/;
            var alLeastOneUpperCase = /.*[A-Z].*/;
            var alLeastOneDigit = /.*[0-9].*/;
            var digits = /^[0-9]/;

            var password = signup.txtPassword.value;
            var firstChar = password.charAt(0);            
            var conPassword = signup.txtConPassword.value;
            var userName = signup.txtUserName.value;
            var firstCharName = userName.charAt(0);
            var errorMessage = "";

            if(!upperLatters.test(firstCharName) && !lowerLatters.test(firstCharName))
            {
                /*
                this validation for single text box that comment coz of Assignment requriredment - Mehul
                document.getElementById("usernameError").innerHTML = "Must Start With Latter";
                document.getElementById("txtUserName").focus();
                return  false; */
              
                errorMessage += "User name must start with Letter <hr/>"; 
            }

            if(userName.length < 6)
            {
               /*
               this validation for single text box that comment coz of Assignment requriredment - Mehul
               document.getElementById("usernameError").innerHTML = "Must be 6 Characters Long";
               document.getElementById("txtUserName").focus();
               return  false; */
              
               errorMessage += "User Name must be 6 Characters Long <hr/>";
            }

            if(password.length < 8)
            {
                /*
                this validation for single text box that comment coz of Assignment requriredment - Mehul
                document.getElementById("passwordError").innerHTML = "Must be 8 Characters Long";
                document.getElementById("txtPassword").focus();
                return  false;*/
                errorMessage += "Password must be 8 Characters Long <hr/>";
            }  

            if(!upperLatters.test(firstChar) && !lowerLatters.test(firstChar))
            {
                /*
                this validation for single text box that comment coz of Assignment requriredment - Mehul
                document.getElementById("passwordError").innerHTML = "First Latter Must be Character";
                document.getElementById("txtPassword").focus();
                return  false;*/

                errorMessage += "First Latter of Password Must be Character <hr/>";
            }

            if(!alLeastOneUpperCase.test(password))
            {
                /*
                this validation for single text box that comment coz of Assignment requriredment - Mehul
                document.getElementById("passwordError").innerHTML = "Must have at least one uppercase";
                document.getElementById("txtPassword").focus();
                return  false;*/
                errorMessage += "Password Must have at least one uppercase <hr/>";
            }

            if(!alLeastOneDigit.test(password))
            {
                /*
                this validation for single text box that comment coz of Assignment requriredment - Mehul
                document.getElementById("passwordError").innerHTML = "Must have at least one digit";
                document.getElementById("txtPassword").focus();
                return  false;*/
                errorMessage += "Password Must have at least one digit <hr/>";
            }

            if(conPassword != password)
            {
                /*
                this validation for single text box that comment coz of Assignment requriredment - Mehul
                document.getElementById("conPasswordError").innerHTML = "Password Must be same";
                document.getElementById("txtConPassword").focus();
                return  false;
                */
                errorMessage += "Password and confirm Password Must be same <hr/>";
            }

            if(errorMessage != "")
            {
                document.getElementById("errorPanal").innerHTML = "<hr/> Error Message Panal : <hr/>" +  errorMessage;
                return false;
            }
            else
            {
                document.getElementById("errorPanal").innerHTML = "<hr/> Error Message Panal : <hr/> No JavaScript Error <hr/>";
            }
            
        }

        function clearPasswordError()
        {
            /*
            this function remove perticuler error when user start typing... - Mehul
            document.getElementById("passwordError").innerHTML = "";
            */
        }

        function clearConPasswordError()
        {
            /*
            this function remove perticuler error when user start typing... - Mehul
            document.getElementById("conPasswordError").innerHTML = "";
            */
        }

        function clearUserNameError()
        {
            /*
            this function remove perticuler error when user start typing... - Mehul
            document.getElementById("usernameError").innerHTML = "";
            */
        }
        
        function onClearClick()
        {
            document.getElementById("errorPanal").innerHTML = "<hr/> Error Message Panal : <hr/> No JavaScript Error <hr/>";
            /*
            this function remove all error if any when user click on clear... - Mehul
            document.getElementById("passwordError").innerHTML = "";
            document.getElementById("conPasswordError").innerHTML = "";
            document.getElementById("usernameError").innerHTML = "";
            */
        }