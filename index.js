function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var a = [1,2,3]
  a.forEach(callback)
  return a
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array
}
