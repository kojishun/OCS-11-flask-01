//
// Calculator
//
function execCalculator() {
// Operator Selector
    op_sel = document.getElementById("op");
    var idx = op_sel.selectedIndex;
    var op = op_sel.options[idx].value;

// Buid query parameter
    var param = {};
    param["a"] = document.getElementById("aval").value;
    param["b"] = document.getElementById("bval").value;
    param["op"] = op;
    var query = jQuery.param(param);

// Query with a new parameter 
    $.get("/func/calc" + "?" + query, function(data) {
        document.getElementById("result").textContent = data;
    });
};
//
// Color changer demo
//
function changeButtonColor(obj) {
    var color = obj.getAttribute("style");
    switch(color){
        case "color:blue":
            newcolor = "color:red";
            break;
        case "color:red":
            newcolor = "color:blue";
            break;
        default:
            newcolor = "color:red";
            break;
    }
    obj.setAttribute("style", newcolor);
};
//
// Register Event handler
//
document.getElementById("exec").addEventListener("click", function(){
    execCalculator();
    changeButtonColor(document.getElementById("exec"));
}, false);
//
//initialize components
//
//$(document).ready(function() {
//    execCalculator();
//});
execCalculator();
