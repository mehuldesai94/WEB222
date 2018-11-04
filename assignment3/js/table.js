// Data for the "HTML Tables" Page

var users = [
    {first_name: "Kaitlin", last_name: "Burns", age: 23, email: "kburns99753@usermail.com"},
    {first_name: "Joshua", last_name: "Feir", age: 31, email: "josh319726@usermail.com"},
    {first_name: "Stephen", last_name: "Shaw", age: 28, email: "steve.shaw47628@usermail.com"},
    {first_name: "Timothy", last_name: "McAlpine", age: 37, email: "Timbo72469@usermail.com"},
    {first_name: "Sarah", last_name: "Connor", age: 19, email: "SarahC6320@usermail.com"}
];

window.onload = function()
{
    var divTable = document.querySelector("#userTable");
    var outputStr = "<table border='1px'>";
    outputStr += "<tr>";
    outputStr += "<th>First Name</th>"
    outputStr += "<th>Last Name</th>"
    outputStr += "<th>Age</th>"
    outputStr += " <th> Email </th>"
    outputStr += "</tr>";

    for(var i = 0; i < users.length; i++)
    {
        outputStr += "<tr>"
           
        outputStr += "<td>" + users[i].first_name + "</td>" ;
        outputStr += "<td>" + users[i].last_name + "</td>" ; 
        outputStr += "<td>" + users[i].age + "</td>" ;
        outputStr += "<td>" +  "<a href=' mailto:" + users[i].email + "?subject=Test Mail'>" + users[i].email + "</a> </td>" ;

        outputStr += "</tr>"
    }

    divTable.innerHTML += outputStr;
}