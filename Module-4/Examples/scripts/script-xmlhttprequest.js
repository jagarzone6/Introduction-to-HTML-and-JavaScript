var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
       // Action to be performed when the document is read;
       document.writeln('<h3>Error:&nbsp;</h3><p>' + error + "</p>");
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();