/**
 * 1. XMLHttpRequest Global GET Function
 * @param {path to file or URL where data is to be fetched from} url
 * @param {*} callback
 */
const fetchDoc = function(url, callback) {
  const request = new XMLHttpRequest();
  request.onload = callback;
  request.open("get", url, true);
  request.send();
};

/**
 * 2. Usage example
 * Create variable linking to file or URL where data saved
 */
const getJSONDataSource = "path/to/file/example.json";

// Call function and parse data ready for use
fetchDoc(getJSONDataSource, function(data) {
  data = JSON.parse(this.response);

  // for loop etc ...
});
