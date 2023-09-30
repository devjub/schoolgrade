function first() {
  var firstCa = document.getElementById("first").value
  var secondCa = document.getElementById("second").value
  var thirdCa = document.getElementById("third").value
  var add1 = Number(firstCa)+Number(secondCa) + Number(thirdCa)
  var result1 = document.getElementById("result1").value = add1 ;
  

}
function second() {
  var fourthCa = document.getElementById("fourth").value
  var fifthCa = document.getElementById("fifth").value
  var sixthCa = document.getElementById("sixth").value
  var add2 = Number(fourthCa)+Number(fifthCa) + Number(sixthCa)
  var result2 = document.getElementById("result2").value = add2 ;
  

}
function third() {
  var sevenCa = document.getElementById("seven").value
  var eightCa = document.getElementById("eight").value
  var nineCa = document.getElementById("nine").value
  var add3 = Number(sevenCa)+Number(eightCa) + Number(nineCa)
  var result3 = document.getElementById("result3").value = add3 ;
  

}
function fourth() {
  var tenCa = document.getElementById("ten").value
  var elevenCa = document.getElementById("eleven").value
  var twelveCa = document.getElementById("twelve").value
  var add4 = Number(tenCa)+Number(elevenCa) + Number(twelveCa)
  var result4 = document.getElementById("result4").value = add4 ;
  

}
function remark (){
  var name = document.getElementById("name").value
  
  var average=  Number(result1.value)+Number(result2.value)+Number(result3.value)+Number(result4.value)  /400
  if (average >= 200){
   var remark =document.getElementById("remark").innerHTML=  "congratulation" + name  + " you passed";
  } 
  else {
    var remark = document.getElementById("remark").innerHTML= "Fair enough,but try again " + name;
  }
}
function grade (){
  var name = document.getElementById("name").value
  
  var average=  Number(result1.value)+Number(result2.value)+Number(result3.value)+Number(result4.value)  /400
  if (average >= 200){
   var remark = document.getElementById("grade").innerHTML= name + " your grade is " + "A";
  } 
  else{
    var remark = document.getElementById("grade").innerHTML= name + " your grade is " + "B";
  }
}
function average() {
  var average=  Number(result1.value)+Number(result2.value)+Number(result3.value)+Number(result4.value)  /400
  var name = document.getElementById("name").value
   var dis = document.getElementById("average").innerHTML =  name + " your score is " + average; 
}