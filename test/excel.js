const Excel = require("exceljs");
describe('excel sheet',function() {
    it('printing data from excel sheet', function() {
    const filePath="/home/ad.rapidops.com/priyanka.vlr/Documents/ExcelData/loginCredentials.xlsx";
    let workbook = new Excel.Workbook();
    workbook.xlsx.readFile(filePath).then(function () {
    let worksheet = workbook.getWorksheet("Sheet1");
        worksheet.eachRow({ includeEmpty: false }, function (row, rowNumber) {
            console.log("Current Row:" + rowNumber);
            row.eachCell({ includeEmpty: false }, function (cell, colNumber) {
            console.log("Cell Value=" + cell.value + "  for cell [" + rowNumber + "]" + "[" + colNumber + "]");
            });
        });
});
})
})