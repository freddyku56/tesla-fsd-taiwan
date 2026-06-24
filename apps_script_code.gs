// Google Apps Script for Tesla FSD HW3 台灣車主報名表
// 請將此程式碼貼到 Google Apps Script 編輯器中

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("報名資料");
    
    var timestamp = new Date().toLocaleString("zh-TW", {timeZone: "Asia/Taipei"});
    
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.email || "",
      data.phone || "",
      data.carModel || "",
      data.purchaseYear || "",
      data.fsdPrice || "",
      data.otherPrice || "",
      data.vin || "",
      data.issues || "",
      data.demands || "",
      data.acceptTransfer || ""
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success", 
      message: "報名成功！感謝您的加入，我們會盡快與您聯繫。"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error", 
      message: "提交失敗，請稍後再試。錯誤：" + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "ok", 
    message: "Tesla FSD HW3 台灣車主報名系統運作中"
  })).setMimeType(ContentService.MimeType.JSON);
}