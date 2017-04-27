function testArticleListViewHeadlines() {

  function ArticleListDouble(){}
  ArticleListDouble.prototype = {
    showHeadlines: function() {
      return ['Cat rescued from tree', 'Grandma wins lottery'];
    }
  };

  var articleList = new ArticleListDouble();

  articleListView = new ArticleListView(articleList);

  assert.toEqual(articleListView.viewHeadlines(), '<p><h1>Cat rescued from tree</h1></p><p><h1>Grandma wins lottery</h1></p>');

}

testArticleListViewHeadlines();
