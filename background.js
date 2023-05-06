console.log("hello world");
chrome.tabs.query({ active: true }, function (tabs) {
    tabs.forEach(tab => {
        chrome.scripting.insertCSS({
            target: { tabId: tab.id, allFrames: true },
            files: ["style.css"]
        });
    });
})