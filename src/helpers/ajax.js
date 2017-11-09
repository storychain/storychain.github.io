// constants
const GET = 'GET';
const READY_STATE_DONE = 4;
const STATUS_CODE_SUCCESS = 200;
const STATUS_CODE_CLIENT_ERROR = 400;

/**
 * Handles request onreadystatechange.
 *
 * @param {Function} success
 * @param {Function} error
 */
function onReadyStateChange(success, error) {
  if (this.readyState !== READY_STATE_DONE) return;

  if (this.status >= STATUS_CODE_SUCCESS && this.status < STATUS_CODE_CLIENT_ERROR) {
    if (typeof success === 'function') success(this);
  } else {
    if (typeof error === 'function') error(this);
  }
}

/**
 * Gets data.
 *
 * @param {String} url
 * @param {Function} success
 * @param {Function} error
 */
function getData (url, success, error) {
  let request = new XMLHttpRequest();
  request.open(GET, url, true);
  request.onreadystatechange = onReadyStateChange.bind(request, success, error);
  request.send();
  request = null;
}

/**
 * Gets JSON.
 *
 * @param {String} url
 * @param {Function} success
 * @param {Function} error
 */
export function getJSON(url, success, error) {
  getData(url, response => {
    success(JSON.parse(response.responseText));
  }, error);
}

export default {
  getJSON,
};
