const Excel = require('exceljs');
describe('it should open salesmate',function () {
    it ('should fill contact form',async () => {
        await browser.url("https://kalp.salesmate.io/login.html"); 
        let workbook = new Excel.Workbook(); 
        workbook.xlsx.readFile('/home/ad.rapidops.com/priyanka.vlr/Documents/ExcelData/salesmateCredentials.xlsx')
        .then(function() {
        let worksheet = workbook.getWorksheet("Sheet1");
        let loginName = worksheet.getCell('A1').value;
        let loginPassword = worksheet.getCell('B1').value;
        let email = $("//input[@id='email']");
        email.setValue(loginName);
        let password = $("//input[@id='password']");
        password.setValue(loginPassword);
        let submit = $("//button[@id='login_btn']");
        submit.click();
    })().catch( e => { console.error(e) } )
  })
})