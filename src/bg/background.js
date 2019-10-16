var config = {};
var appId = 'olpcjckpjnknikpdhaioojokhdilkpfi';

function getCode(string) {
  return string;
}

chrome.runtime.onConnect.addListener(function (port) {
  console.assert(port.name == 'scrape_data');
  port.onMessage.addListener(function (msg) {
    if (msg.type = 'scrapedData') {
      var code = getCode(msg.data);
      var externalPort = chrome.runtime.connect(appId);
      externalPort.postMessage({
        type: 'from extension',
        port: 'COM1',
        data: code
      });
    }
  })
})

// chrome.runtime.onConnectExternal.addListener(function(port) {
//   port.onMessage.addListener(function(msg) {
//     // See other examples for sample onMessage handlers.
//   });
// });