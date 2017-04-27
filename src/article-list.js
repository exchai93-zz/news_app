(function (exports){
  function ArticleList(){
    this._articles = [];
  }

  ArticleList.prototype.storeArticle = function(article) {
    this._articles.push(article);
  };

  exports.ArticleList = ArticleList;
})(this);
