function doGet(request) {
  return HtmlService.createTemplateFromFile('index').evaluate();
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}




function processForm(formObject){
  var url="https://docs.google.com/spreadsheets/d/1kMm10dSYIEA82zuszJyqRhwWuy8VT4_tSg-6fwxy6uE/edit#gid=0";
  var ss= SpreadsheetApp.openByUrl(url);
  var ws=ss.getSheetByName('sheet1');
  
 
  ws.appendRow([new Date(),
    formObject.numberCall,
    formObject.teamShootfrist,
    formObject.winningTeam,
    formObject.team1,
    formObject.team2,
  ]);
}
