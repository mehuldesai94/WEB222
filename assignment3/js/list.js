// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];


window.onload = function()
{
    var divFruits = document.querySelector("#fruitsList");
    var outputStr = "<ol>";
    for(var i = 0; i < fruits.length; i++)
    {
        outputStr += "<li>" + fruits[i] + "</li>";
    }

    outputStr += "</ol>";

    divFruits.innerHTML += outputStr;

    var divFile = this.document.querySelector("#fileList");
    outputStr = "<ul>";

    for (var i = 0; i < directory.length; i++)
    {
        switch(directory[i].type)
        {
            case "file" :   outputStr += "<li>" + directory[i].name + "</li>";
                            break;
            case "directory" : outputStr += "<li>" + directory[i].name;
                               for (var j = 0; j < directory[i].files.length; j++)
                               {
                                    outputStr += "<ul>";
                                    outputStr += "<li>" + directory[i].files[j].name + "</li>";
                                    outputStr += "</ul>";
                               }     

                               outputStr += "</li>"   ;
                            break;
        }
    }

    divFile.innerHTML += outputStr;
}
