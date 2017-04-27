function testArticleListViewHeadlines() {

  function ArticleDouble(){}
  ArticleDouble.prototype = {
    headline: function() {
      return 'Cat climbs new tree';
    }
  };
  var article = new ArticleDouble();
  function ArticleListDouble(){}
  ArticleListDouble.prototype = {
    returnArticles: function() {
      return [article];
    }
  };



}
