(function (exports){

  function NewsController(articleList){
    this.articleListView = new ArticleListView(articleList);
  }

  NewsController.prototype.renderHeadlines = function () {
    document.getElementById('headlines').innerHTML = this.articleListView.viewHeadlines();
  };
  exports.NewsController = NewsController;
})(this);
