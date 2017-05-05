function correctMethodName() {
    return "Output Message";
}
var result = correctMethodName(3);
document.writeln(result);
try {
    result = wrongMethodName(3);
    document.writeln(result);
}
catch (error) {
    document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>");
}
function loadXMLDoc() {
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       // Action to be performed when the document is read;
       document.getElementById("demo2").innerHTML =
      this.responseText;
    }
};
//The event handler onreadystatechange runs every time the open request is completed  
xhttp.open("GET", "xmlhttp_info.txt", true);
xhttp.send();
}
loadXMLDoc();