function makeRequests() {

    $.ajax({
        url: 'http://httpbin.org/get',
        //url: 'http://www.example.com/api',
        method: 'GET',
        dataType: 'json'
    })
    .done(function(response) {
        $('body > p').text(
            JSON.stringify(response)
        );
    })
        .fail(function () {
            alert('An error has occured')
        });

}

function makeRequests2() {  
    $.get({
        url: 'http://httpbin.org/user-agent',
        dataType: 'json'
    })
        .done(function(response) {
            $('body > p').text(
                response['user-agent']
            );
            alert(JSON.stringify(response));
            $('body > p').text(
                response['user-agent']
            );
        });
}
function makeRequests3() {
    $.getJSON('http://httpbin.org/ip')
        .done(function(response) {
            $('body > p').text(
                response.origin
            );
            alert(JSON.stringify(response));
            
        });
}

$(document).ready(function () {
    //    makeRequests();
        //    makeRequests2();
    makeRequests3();
});