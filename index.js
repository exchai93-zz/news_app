// getArticle = function() {
//   curl "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl= https://www.theguardian.com/business/live/2017/apr/27/markets-trump-tax-plan-european-central-bank-draghi-business-live?show-fields=body";
// };
//
//
// getArticle();



var xhr = new XMLHttpRequest();
xhr.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl= https://www.theguardian.com/business/live/2017/apr/27/markets-trump-tax-plan-european-central-bank-draghi-business-live", false);
// xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
