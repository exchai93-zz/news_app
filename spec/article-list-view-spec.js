function testArticleListViewHeadlines() {

  function ArticleListDouble(){}
  ArticleListDouble.prototype = {
    showHeadlines: function() {
      return ['Cat rescued from tree', 'Grandma wins lottery'];
    }
  };

  var articleList = new ArticleListDouble();

  articleListView = new ArticleListView(articleList);

  assert.toEqual(articleListView.viewHeadlines(), '<div><h1>Cat rescued from tree</h1></div><div><h1>Grandma wins lottery</h1></div>');

}

testArticleListViewHeadlines();
