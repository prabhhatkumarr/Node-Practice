var moment = require('moment');


function onClick() {
    function fiftyFive(startdate) {
        var startdate = "20.03.2014";
        // var startdate = document.getElementById("userDate");
        var new_date = moment(startdate, "DD.MM.YYYY");
        var thing = new_date.add(55, 'days').format('DD/MM/YYYY');
        return thing;
    }
    let abc = fiftyFive(startdate);
    document.getElementById("final").innerHTML = `<div>` + abc + `</div>`;
    // console.log(fiftyFive(startdate));
}