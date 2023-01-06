function getData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("students")
  const dataRange = ws.getRange("A1").getDataRegion()
  const data = dataRange.getDisplayValues()

  const headers = data.shift()
  // console.log(headers)
  // console.log(data)

  const jsData = data.map(r => {
    const tempObject = {}
    headers.forEach((header,i) => {
      tempObject[header] =r[i]
    })
    return tempObject
  })
  console.log(jsData)
  return jsData
   
  }//end getData function


function editGender(props){
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const ws = ss.getSheetByName("students")
  const idCellMatched = ws.getRange("A2:A").createTextFinder(props.id).findNext()

  if(idCellMatched === null) throw new Error("No Matching Record")

  const recordRowNumber = idCellMatched.getRow()
  ws.getRange(recordRowNumber,3).setValue(props.val)

}
