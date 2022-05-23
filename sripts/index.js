var row = 0;
var createObjectFunction = function () {
    var count = document.getElementById("variable_count").value;
    var p_count = document.getElementById("parameter_count").value;
    var p = "";
    for (var i = 0; i < count; i++) {
        p += ("+(<input class='coefficient' id='c_" + (i + 1) + "'" + "type='text'/>)*x<sub>" + (i + 1) + "</sub>");
    }
    p += "-><select id='extremum'><option value='max'>Max</option><option value='min'>Min</option></select>";
    document.getElementById("object").innerHTML = p;
    parameters = "";
    for (var i = 0; i < p_count; i++) {
        parameters += '<div class="grid-item">' + (i + 1) + '</div><div class="grid-item"><div><input type="text" /></div></div><div class="grid-item"><div><input type="text" /></div></div><div class="grid-item"><div><input type="text" /></div></div>';
    }
    parameters = '<div class="grid-container"><div class="grid-item"></div><div class="grid-item">Parameter name</div><div class="grid-item">Initial approximation center</div><div class="grid-item">Border</div>'
        + parameters + '</div>';
    document.getElementById("parameter_values").innerHTML = parameters;
    var solution = document.getElementById("solution");
    solution.classList.remove("hidden");
}

var addConstraint = function () {
    var count = document.getElementById("variable_count").value;
    var p = "";
    for (var i = 0; i < count; i++) {
        p += ("+(<input class='coefficient' id='a_" + (row + 1) + "_" + (i + 1) + "'" + " type='text'/>)*x<sub>" + (i + 1) + "</sub>");
    }
    p = "<p>" + p + "<select><option value='equal'>=</option><option value='gequal'>>=</option><option value='sequal'><=</option></select><input class='coefficient' id='b_" + (row + 1) + " type='text'/></p>";
    row++;
    document.getElementById("constraint").innerHTML += p;
}
