// set an array into local storage
export function setLocalStorageForObject(localName, arr) {
    // convert JSON into string
    var dataString = JSON.stringify(arr);
    // save data to the local storage
    localStorage.setItem(localName, dataString);
}

// get data from the local storage
export function getLocalStorageIntoJSON(localName) {
    if (localStorage.getItem(localName)) {
        var dataString = localStorage.getItem(localName);
        var dataJSON = JSON.parse(dataString);
        return dataJSON
    }
}