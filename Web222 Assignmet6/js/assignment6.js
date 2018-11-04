/********************************************************************************* 
* 
* WEB222 – Assignment #6
* 
* I declare that this assignment is my own work in accordance with Seneca 
* Academic Policy. No part of this assignment has been copied manually or 
* electronically from any other source (including web sites) or distributed to 
* other students. 
* 
* Name: Mehulkumar Desai        Student ID: 110288172        Date: 10th-April-2018 
* 
********************************************************************************/ 


// set a global httpRequest object

var httpRequest;
		
// TODO: when the page (window) has loaded, make a
// request for page 1
window.onload = function()
{
	makeRequest(1);
}

function makeRequest(pageNum) {
	
	// TODO: create a variable "url" to store the request to 
	
	// the current pageNum, ie:
	//
	// "https://reqres.in/api/users?page=1" // for page 1
	// "https://reqres.in/api/users?page=2" // for page 2
	// etc...
	var url = "https://reqres.in/api/users?page=" + pageNum;

	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// TODO: us e the jsData object to populate the correct
			// table cells, ie <tr><td>...</td></tr>
			// in the <tbody> element with id="data"
			document.getElementById("data").innerHTML = "";
			for(var i = 0; i < jsData.data.length; i++)
			{
				var dataObj = jsData.data[i];
				var tableBody = document.querySelector("#data"); 	
				var tableRow = document.createElement("tr");
				var tableUserID = document.createElement("td");
				var tableFirstName = document.createElement("td");
				var tableLastName = document.createElement("td");
				var tableimage = document.createElement("td");
	
				var userId = document.createTextNode(dataObj.id);
				var firstName = document.createTextNode(dataObj.first_name);
				var lastName = document.createTextNode(dataObj.last_name);
				var image = document.createElement("img");
				image.setAttribute("src", dataObj.avatar);
	
				tableUserID.appendChild(userId);
				tableFirstName.appendChild(firstName);
				tableLastName.appendChild(lastName);
				tableimage.appendChild(image);
				
				tableRow.appendChild(tableUserID);
				tableRow.appendChild(tableFirstName);
				tableRow.appendChild(tableLastName);
				tableRow.appendChild(tableimage);
	
				tableBody.appendChild(tableRow);
			}
			
			// TODO: remove the class "active" from all elements with the class "pgbtn"
		
			var btnArr = document.getElementsByClassName("pgbtn");

			for(var i = 0; i < btnArr.length; i++)
			{
				btnArr[i].classList.remove("active");
			}

			// TODO: add the class "active" to the button corresponding to the active page, ie:
			//
			// if jsData.page is 1, add the class "active" to button element with id pgbtn1
			// if jsData.page is 2, add the class "active" to button element with id pgbtn2
			// etc...
			
			var pageNumber = jsData.page;
			btnArr[pageNumber - 1].classList.add("active");
			
	
		} else {
			console.log('There was a problem with the request.');
		}
	}
}	