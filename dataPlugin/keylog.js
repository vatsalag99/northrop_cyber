var downstamp = this._time;
var upstamp = this._time;
var csvLine = "";
let csvContent = "data:text/csv;charset=utf-8,";

document.body.onkeydown = function (e)
{
    //var time = this._time;
    var new_downstamp = new Date().getTime();
    if (downstamp) {
        csvLine +=  "DD, "+ (new_downstamp - downstamp)
            + ", "+ e.code+ ", ";
        if (upstamp) {
            console.log("Flight: " + (downstamp - upstamp));
            csvLine +=  "UD, "+ (new_downstamp - upstamp)
                + ", "+ e.code + ", ";
        }
    }
    downstamp = new_downstamp;
    if(e.keyCode == 13){
        pushLine();

    }
};
    //this._time = timestamp;

document.body.onkeyup = function (e)
{
    //var time = this._time;
    upstamp = new Date().getTime();
    csvLine +=  "H, "+ (upstamp - downstamp)  + ", "+ e.code + ", ";

};

function pushLine() {
    csvContent += csvLine.slice(0,-2) + "\r\n";
    csvLine = "";
}

function downloadCSV(name) {
    var data, filename, link;
    var csv = csvContent;
    if (csv == null) return;

    filename = name+'.csv';

    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        downloadCSV(request.csv_file);
    });
