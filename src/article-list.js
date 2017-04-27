(function (exports){
  function ArticleList(){
    this._articles = [];
  }

  ArticleList.prototype.storeArticle = function(article) {
    this._articles.push(article);
  };

  ArticleList.prototype.showArticles = function() {
    var texts = [];
    this._articles.forEach(function(article){
      texts.push(article.viewText());
    });
    return texts;
  };

  exports.ArticleList = ArticleList;
})(this);
