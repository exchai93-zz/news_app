function testSummaryView() {

  function ArticleDouble(){}

  ArticleDouble.prototype = {
    viewSummary: function(){
       return 'Heroic rescue in South London';
     }
   };

   var article = new ArticleDouble();
   var summaryView = new SummaryView(article);

   truthy.isTrue(summaryView.getHTML().includes('<div>Heroic rescue in South London</div>'));

  }

  testSummaryView();
