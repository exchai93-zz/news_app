(function (exports){
  function ArticleListView(articleList){
    this._articleList = articleList;
  }
  ArticleListView.prototype.viewHeadlines = function () {
    string = '';
    this._articleList.showHeadlines().forEach(function(headline){
    string = string + '<p><h1>' + headline + '</h1></p>';
  });
    return string;
  };

  exports.ArticleListView = ArticleListView;
})(this);
