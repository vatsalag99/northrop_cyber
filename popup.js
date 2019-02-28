document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('dl');
    checkPageButton.addEventListener('click', function() {
        console.log("msg sent");
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {csv_file:document.getElementById('csv_file').value});
        });
    }, false);
    
}, false);
