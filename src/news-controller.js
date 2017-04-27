var makers = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
var guardian = 'http://content.guardianapis.com/books/2016/dec/07/top-10-cats-in-literature';

// function RequestAPI(url) {

// var request = new XMLHttpRequest();
// request.open("GET", url, false);
// request.send();
// return(request.responseText);
//
// }
//
// var response = RequestAPI('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric');
// var json_obj = JSON.parse(response);
// console.log(json_obj);
document.addEventListener('DOMContentLoaded', function () {

var request = new XMLHttpRequest();
request.open("GET", makers + guardian, false);
request.send();
var response = request.responseText;
var json_obj = JSON.parse(response);
console.log(json_obj);

});
