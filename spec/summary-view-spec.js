function testSummaryView() {
  var summaryView = new SummaryView();

  function ArticleDouble(){}

  ArticleDouble.prototype = {
    headline: function(){
      return 'Cat rescued from tree';
    }
  };
  ArticleDouble.prototype = {
    viewText: function(){
      return 'Courageous 17 year old climbs up the tree to rescue a fluffy tabby orphaned cat.';
    }
  };  





}
