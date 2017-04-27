(function(exports) {
  function Article(headline) {
    this._headline = headline;
  }

  Article.prototype.headline = function () {
    return this._headline;
  };

  Article.prototype.addText = function(text) {
    this._text = text;
  };

  Article.prototype.viewText = function() {
    return this._text;
  };

exports.Article = Article;
})(this);
