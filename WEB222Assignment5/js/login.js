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

            if(!upperLatters.test(firstCharName) && !lowerLatters.test(firstCharName))
            {
                document.getElementById("usernameError").innerHTML = "Must Start With Latter";
                document.getElementById("txtUserName").focus();
                return  false;
            }

            if(userName.length < 6)
            {
                document.getElementById("usernameError").innerHTML = "Must be 6 Characters Long";
                document.getElementById("txtUserName").focus();
                return  false;
            }

            if(password.length < 8)
            {
                document.getElementById("passwordError").innerHTML = "Must be 8 Characters Long";
                document.getElementById("txtPassword").focus();
                return  false;
            }  

            if(!upperLatters.test(firstChar) && !lowerLatters.test(firstChar))
            {
                document.getElementById("passwordError").innerHTML = "First Latter Must be Character";
                document.getElementById("txtPassword").focus();
                return  false;
            }

            if(!alLeastOneUpperCase.test(password))
            {
                document.getElementById("passwordError").innerHTML = "Must have at least one uppercase";
                document.getElementById("txtPassword").focus();
                return  false;
            }

            if(!alLeastOneDigit.test(password))
            {
                document.getElementById("passwordError").innerHTML = "Must have at least one digit";
                document.getElementById("txtPassword").focus();
                return  false;
            }

            if(conPassword != password)
            {
                document.getElementById("conPasswordError").innerHTML = "Password Must be same";
                document.getElementById("txtConPassword").focus();
                return  false;
            }
        }

        function clearPasswordError()
        {
            document.getElementById("passwordError").innerHTML = "";
        }

        function clearConPasswordError()
        {
            document.getElementById("conPasswordError").innerHTML = "";
        }

        function clearUserNameError()
        {
            document.getElementById("usernameError").innerHTML = "";
        }
        
        function onClearClick()
        {
            document.getElementById("passwordError").innerHTML = "";
            document.getElementById("conPasswordError").innerHTML = "";
            document.getElementById("usernameError").innerHTML = "";
        }