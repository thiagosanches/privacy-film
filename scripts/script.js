chrome.tabs.query({active: true}, function(tabs){
    chrome.scripting.insertCSS({
        target: { tabId: tabs[1].id, allFrames : true },
        files: ["style.css"]
        });
})