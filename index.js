document.addEventListener('DOMContentLoaded', function () {

var article = new Article('Nippy News goes live!');
var article2 = new Article('Cat rescued from tree');
var articleList = new ArticleList;
articleList.storeArticle(article);
articleList.storeArticle(article2);
var articleListView = new ArticleListView(articleList);
function renderHeadlines() {
  var element = document.getElementById('headlines');
  element.innerHTML = articleListView.viewHeadlines();
}

renderHeadlines();

});
