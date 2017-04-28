(function (exports){
  function ArticleList(){
    this.articles = [];
  }

  ArticleList.prototype.storeArticle = function(article) {
    this.articles.push(article);
  };

  ArticleList.prototype.showArticles = function() {
    var texts = [];
    this.articles.forEach(function(article){
      texts.push(article.viewText());
    });
    return texts;
  };

  ArticleList.prototype.showHeadlines = function() {
    var headlines = [];
    this.articles.forEach(function(article){
      headlines.push(article.headline());
    });
    return headlines;
  };

  exports.ArticleList = ArticleList;
})(this);
