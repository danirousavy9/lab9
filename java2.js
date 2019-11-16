
function myFunction() {
  var person = prompt("Please enter your age", "");
	var todaydate = new Date();
  var currentYear = todaydate.getFullYear();
	var birthYear = currentYear - person;
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "" + birthYear + "";
  }
}
