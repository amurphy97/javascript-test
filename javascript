function myFunction() {
  var sheet = SpreadsheetApp.getActive().getSheets()[0];

  var data = {
    /home/Documents/Zucchini.csv
  };

  var options = {
    'method': 'post',
    'payload': data
  };

  var response = UrlFetchApp.fetch('https://fat-zuc-dev.ma.openindustry.in/api/card/1/query/json', options);

  var responseData = JSON.parse(response.getContentText());

  sheet.appendRow(responseData);
}

