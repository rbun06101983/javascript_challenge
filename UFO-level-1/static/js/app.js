// from data.js
var tableData = data;
console.log(tableData);

//Get reference to the table body
var tbody=d3.select("tbody");

//UFO sighting values for each columm
tableData.forEach(function(ufoSighting){
    console.log(ufoSighting);
    //Append one table row "tr" for each UFO Sighting Object
    var row=tbody.append('tr');

    //Use Object.entries to console.log each UFO Sighting Value
    Object.entries(ufoSighting).forEach(function([key, value]){
        console.log(key, value);
        //Append a cell to the row for each value
        var cell=row.append('td');
        cell.text(value);
    });
});

//Select the button
var button=d3.select("#filter-btn");
button.on("click", function(){

    tbody.html("");

    //Select the input date to get raw HTML nodes
    var inputElement=d3.select("#datetime");
    //Get the value property of the input date, state, shape
    var inputValue=inputElement.property("value");
    //console.log input value
    console.log(inputValue);
    //filter data with datetime equal to input value
    var filterData=tableData.filter(sighting=>sighting.datetime===inputValue);
    //console.log filter values
    console.log(filterData);



    filterData.forEach(function(selections){
    
    console.log(selections);
    //Append one table row 'tr' for each UFO Sighting
    var row=tbody.append('tr');
    //Use Object.entries to console.log each UFO Sighting Value
    Object.entries(selections).forEach(function([key, value]){
        console.log(key, value);
        //Append a cell to the row for each value
        var cell=row.append('td');
        cell.text(value);
    });
    });
});