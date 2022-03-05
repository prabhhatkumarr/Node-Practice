var moment = require('moment');
var startdate = document.getElementById("currentDate").value;
var birthdate = document.getElementById("bd").value;
function runClick() {
    function myBirthday(startdate) {


        var new_date1 = moment(startdate, "DD.MM.YYYY");
        var new_date2 = moment(birthdate, "DD.MM.YYYY");

        var thing = new_date2.diff(new_date1, 'days');
        return thing;
    }
    console.log(myBirthday(startdate));
}