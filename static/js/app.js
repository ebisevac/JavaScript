// from data.js
var tableData = data;
//var table=d3.select("table")

var button=d3.select("#filter-btn");
// YOUR CODE HERE!
var tbody = d3.select("tbody"); 

button.on("click", function(){
    // d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    console.log(inputElement);
    var inputElement1 = d3.select("#city");
    console.log(inputElement1);
    var inputElement2 = d3.select("#state");
    console.log(inputElement2);
    var inputElement3 = d3.select("#country");
    console.log(inputElement3);
    var inputElement4 = d3.select("#shape");
    console.log(inputElement4);
    if(Boolean(inputElement.property("value"))){
        var inputElementValue= inputElement.property("value");
        tableData=tableData.filter(mydata => mydata.datetime===inputElementValue);
        }
    console.log(inputElementValue);

    if(Boolean(inputElement1.property("value"))){
        var inputElementValue1= inputElement1.property("value");
        tableData=tableData.filter(mydata => mydata.city===inputElementValue1);
        }
    console.log(inputElementValue1);

    if(Boolean(inputElement2.property("value"))){
        var inputElementValue2= inputElement2.property("value");
        tableData=tableData.filter(mydata => mydata.state===inputElementValue2);
        }
    console.log(inputElementValue2);

    if(Boolean(inputElement3.property("value"))){
        var inputElementValue3= inputElement3.property("value");
        tableData=tableData.filter(mydata => mydata.country===inputElementValue3);
        }
    console.log(inputElementValue3);
    
    if(Boolean(inputElement4.property("value"))){
        var inputElementValue4= inputElement4.property("value");
        tableData=tableData.filter(mydata => mydata.shape===inputElementValue4);
        }
    console.log(inputElementValue4);
    tbody.html("");

    tableData.forEach((ufoValue)=>{
            var row = tbody.append("tr");
            Object.entries(ufoValue).forEach(([key,value])=>{
            var cell=row.append("td");
            cell.text(value);
            })
    })    
    tableData = data;
})


