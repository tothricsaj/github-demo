function multipliesByTwo(num) {
  return num * 2
}
function helloWorld() {
  return "hello world"
}


function showMsg() {
  //hi
  console.log(helloWorld());
  return 'Hello There......'
}

document.body.addEventListener("click", function () {
  alert(helloWorld())
})