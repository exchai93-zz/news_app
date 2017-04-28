(function (exports){
  function ArticleListView(articleList){
    this.articleList = articleList;
  }
  ArticleListView.prototype.viewHeadlines = function () {
    var string = "<ul>";
    for (i = 0; i < this.articleList.articles.length; i++){
      string += "<div><li>" + this.articleList.articles + "</li></div></br><div id="+ i + "></div>";
    }
    return string + "</ul>";
};
  exports.ArticleListView = ArticleListView;
})(this);
