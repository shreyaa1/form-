
	
// 	function click() {
// 	var result = document.getElementById("name1").value;
//      document.getElementById("demo").innerHTML = result;
//      var email = document.getElementById("email").value;
//      document.getElementById("em").innerHTML = email;
//       var phone = document.getElementById("phone").value;
//      document.getElementById("ph").innerHTML = phone;
//       var message = document.getElementById("textarea").value;
//      document.getElementById("msg").innerHTML = message;

// };
function clickme() {
  var name = document.getElementById("name1").value
  // document.write(name);
   document.getElementById("demo").innerHTML = "name is " + name;

   var email = document.getElementById("email").value
     document.getElementById("em").innerHTML ="email is" + email;

      var phone = document.getElementById("phone").value
     document.getElementById("ph").innerHTML ="phone no is" + phone;

      var message = document.getElementById("textarea").value
     document.getElementById("msg").innerHTML ="message is " + message;


  
}