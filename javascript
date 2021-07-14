def myFunction():
    
    sheet = SpreadsheetApp.getActive().getSheets()[0];
    
    data = {
    /home/Documents/Zucchini.csv
  };

  var options = {
    'method': 'post',
    'payload': data
  };

  var response = UrlFetchApp.fetch('https://fat-zuc-dev.ma.openindustry.in/', options);

  var responseData = JSON.parse(response.getContentText());

  sheet.appendRow(responseData);
}
