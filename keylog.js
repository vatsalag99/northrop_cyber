var downstamp = this._time;
var upstamp = this._time;
let csvContent = "data:text/csv;charset=utf-8,";

document.body.onkeydown = function (e)
{
    //var time = this._time;
    var new_downstamp = new Date().getTime();
    if (downstamp) {
        csvContent +=  "DD, "+ (new_downstamp - downstamp)
            + ", "+ e.code + "\r\n";
        if (upstamp) {
            console.log("Flight: " + (downstamp - upstamp));
            csvContent +=  "UD, "+ (new_downstamp - upstamp)
                + ", "+ e.code + "\r\n";
        }
    }
    downstamp = new_downstamp;
    if(e.keyCode == 13){
        downloadCSV("key_data");

    }
};
    //this._time = timestamp;

document.body.onkeyup = function (e)
{
    //var time = this._time;
    upstamp = new Date().getTime();
    csvContent +=  "H, "+ (upstamp - downstamp)  + ", "+ e.code + "\r\n";;

};

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
