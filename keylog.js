var downstamp = this._time;
var upstamp = this._time;
let csvContent = "data:text/csv;charset=utf-8,";

document.body.onkeydown = function (e)
{
    //var time = this._time;
    downstamp = new Date().getTime();
    if (upstamp) {
        console.log("Flight: " + (downstamp - upstamp));
        csvContent += "F, "+ (downstamp - upstamp) + ", "+ e.code + "\r\n";
    }
    if (e.altKey) {
        downloadCSV();

    }
    //this._time = timestamp;
}
document.body.onkeyup = function (e)
{
    //var time = this._time;
    upstamp = new Date().getTime();
    if (downstamp)
        console.log("Dwell: " + (upstamp - downstamp));
    csvContent += "D, "+ (upstamp - downstamp) + ", "+ e.code + "\r\n";
    //this._time = timestamp;
}

function downloadCSV() {  
    var data, filename, link;
    var csv = csvContent;
    if (csv == null) return;

    filename = 'key_data.csv';

    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}
