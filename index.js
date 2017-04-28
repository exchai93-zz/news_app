var apiRequestUrl = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/science/2016/oct/19/monkeys-smash-theory-that-only-humans-can-make-sharp-stone-tools?show-fields=header";

var articleList = new ArticleList();
requestAPI(apiRequestUrl);

var newsController = new NewsController(articleList);
newsController.renderHeadlines();

function requestAPI(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", apiRequestUrl, false);
  xhr.send();
  articleList.storeArticle(JSON.parse(xhr.response).response.content.webTitle);
}
