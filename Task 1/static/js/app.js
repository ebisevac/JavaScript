// from data.js
var tableData = data;
//var table=d3.select("table")

var button=d3.select("#filter-btn");
// YOUR CODE HERE!
button.on("click", function(){
    var inputElement = d3.select("#datetime");
    console.log(inputElement);
    var inputElementValue=inputElement.property("value");
    console.log(inputElementValue);
    var filterData=tableData.filter(mycity => mycity.datetime===inputElementValue);
    console.log(filterData);
    var tbody = d3.select("tbody");
    filterData.forEach((ufoValue)=>{
        var row = tbody.append("tr");
        Object.entries(ufoValue).forEach(([key,value])=>{
            var cell=row.append("td");
            cell.text(value);
        })
    })
    
})


