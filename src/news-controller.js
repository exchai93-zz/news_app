var makers = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
var guardian = '/guardian?apiRequestUrl=https://content.guardianapis.com/books/2016/dec/07/top-10-cats-in-literature';

function RequestAPI(url) {

var request = new XMLHttpRequest();
request.open("GET", url, false);
request.send();
return(request.responseText);

}

var json_obj = JSON.parse(RequestAPI('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric'));
console.log('this is the article' + json_obj.webTitle);
