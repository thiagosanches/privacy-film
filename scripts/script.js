
function saveStorage(item) {
    chrome.storage.local.set(item).then(() => {
        console.log("Saved settings succesfully ");
    });
}

chrome.tabs.query({ active: true }, function (tabs) {
    tabs.forEach(tab => {
        chrome.scripting.insertCSS({
            target: { tabId: tab.id, allFrames: true },
            files: ["style.css"]
        });
    });
})

window.onload = function () {
    const chat = document.querySelector('#chat');
    console.log(chat);
    chat.addEventListener('click', (e) => {
        if (chat.checked) {
            saveStorage({ chat: true });
            return;
        }
        saveStorage({ chat: false });
    })
}
