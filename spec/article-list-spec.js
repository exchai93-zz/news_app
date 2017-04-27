function testCreateArticle() {
  var articleList = new ArticleList;

  function ArticleDouble(){}
    var article = new ArticleDouble;

  articleList.storeArticle(article);
  truthy.isTrue(articleList._articles.length === 1);
}

testCreateArticle();
