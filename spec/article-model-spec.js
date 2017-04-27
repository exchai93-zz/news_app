function testArticle() {
  var article = new Article('Cat rescued from tree');
  assert.toEqual(article.headline(), 'Cat rescued from tree');
}

testArticle();
