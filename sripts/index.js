var row = 0;
var createObjectFunction = function () {
    var count = document.getElementById("variable_count").value;
    var p = "";
    for (var i = 0; i < count; i++) {
        p += ("+(<input class='coefficient' id='c_" + (i + 1) + "'" + "type='text'/>)*x<sub>" + (i + 1)+"</sub>");
    }
    p += "-><select id='extremum'><option value='max'>Max</option><option value='min'>Min</option></select>";
    document.getElementById("object").innerHTML = p;
}

var addConstraint = function () {
    var count = document.getElementById("variable_count").value;
    var p = "";
    for (var i = 0; i < count; i++) {
        p += ("+(<input class='coefficient' id='a_" + (row + 1) + "_" + (i + 1) + "'" + " type='text'/>)*x<sub>" + (i + 1)+"</sub>");
    }
    p += "<select><option value='equal'>=</option><option value='gequal'>>=</option><option value='sequal'><=</option></select><input class='coefficient' id='b_" + (row + 1) +" type='text'/><br>";
    row++;
    document.getElementById("constraint").innerHTML += p;
}
