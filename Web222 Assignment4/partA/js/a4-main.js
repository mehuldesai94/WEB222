var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)


loadTableWithFilters = function()
{
    
    var tableDiv = document.querySelector("#main-table-body");
    tableDiv.innerHTML = "";
    for (var i = 0; i < petData.length; i++)
    {
        var dataObj = "";
        if(filterType != "")
        {
            if(petData[i].type == filterType)
            { 
                if(petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax)
                    dataObj = petData[i];        
            }  
        }
        else if(petData[i].age >= filterAgeMin && petData[i].age <= filterAgeMax)
                dataObj = petData[i];          

        if(dataObj)
        {
            var tableRow = document.createElement("tr");
            var tableFirstCell = document.createElement("td");
            var image = document.createElement("img");
            image.setAttribute("src", dataObj.image.src);
            image.setAttribute("alt", dataObj.image.alt)
            image.setAttribute("width", dataObj.image.width);
            image.setAttribute("height", dataObj.image.height);
            tableFirstCell.appendChild(image);
            tableRow.appendChild(tableFirstCell);
    
            tableSecondCell = document.createElement("td");
            var h4Tag = document.createElement("h4");
            var span = document.createElement("span")
            var pTag = document.createElement("p");
            
            var name = document.createTextNode(dataObj.name);
            h4Tag.appendChild(name);

            pTag.innerHTML = dataObj.description;
            
            var spanText = document.createTextNode("Age: " + dataObj.age + " years old");
            span.appendChild(spanText);
    
            tableSecondCell.appendChild(h4Tag);
            tableSecondCell.appendChild(pTag);
            tableSecondCell.appendChild(span);
            tableRow.appendChild(tableSecondCell);
            tableDiv.appendChild(tableRow);
        }
      
    }
};

window.onload = function()
{
    loadTableWithFilters();
}


filterAllPet = function()
{
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE
    loadTableWithFilters();
}

filterDog = function()
{
    filterType = "dog";
    loadTableWithFilters();
}

filterCat = function()
{
    filterType = "cat";
    loadTableWithFilters();
}

filterBird = function()
{
    filterType = "bird";
    loadTableWithFilters();
}

filter_zero_1 = function()
{
    filterAgeMin = 0;
    filterAgeMax = 1;
    loadTableWithFilters();
}

filter_1_3 = function()
{
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();
}

filter_4_pluse = function()
{
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}