var width
var height
var depth
var sweep

function doInputOutput(width, depth, height, sweep) {
    width = parseInt(document.getElementById("width").value)
    depth = parseInt(document.getElementById("depth").value)
    height = parseInt(document.getElementById("height").value)
    sweep = parseInt(document.getElementById("sweep").value)
    let HV = HouseVolume(width, depth, height, sweep); 
    document.getElementById("OutputDiv").innerHTML = HV
}
function HouseVolume(width, depth, height, sweep) {

    var HV = LivingVolume(width, depth, height) + RoofVolume(width, depth, sweep, height)
    return HV
}
function LivingVolume(width, depth, height) {

    var LV = width * depth * height
    return LV
}
function RoofVolume(width, depth, sweep, height) {

    var RV =TriangleArea(height, sweep, depth) * width
    return RV
}
function TriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var TA = Math.sqrt(s * (s - a) * (s - b) * (s - c))
    return TA
}