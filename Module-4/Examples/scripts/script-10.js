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
var doc_name = ["xmlhttp_info.txt","scripts/script-6.js","scripts/script-7.js","scripts/script-8.js"]
var num = 0;
function loadXMLDoc() {
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       // Action to be performed when the document is read;
       document.getElementById("demo2").innerHTML =
      this.responseText;
      if (num < 3 ){num += 1;} else{num = 0;}
    }
};
//The event handler onreadystatechange runs every time the open request is completed  
xhttp.open("GET", doc_name[num], true);
xhttp.send();
}
loadXMLDoc();