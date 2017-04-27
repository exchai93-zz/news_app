document.addEventListener('DOMContentLoaded', function () {

var makers = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=';
var guardian = 'http://content.guardianapis.com/books/2016/dec/07/top-10-cats-in-literature';

newsController = new NewsController('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric');
var json_obj = newsController.requestAndParseAPI();
console.log(json_obj)

var article = new Article(json_obj.main.temp + ' is the temperature!');
var article2 = new Article(json_obj.name + ' is where we are!');
var articleList = new ArticleList();
articleList.storeArticle(article);
articleList.storeArticle(article2);
var articleListView = new ArticleListView(articleList);

function renderHeadlines() {
  var element = document.getElementById('headlines');
  element.innerHTML = articleListView.viewHeadlines();
}

renderHeadlines();

});
