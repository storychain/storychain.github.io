/**
 * Generates raw url for Gist file.
 *
 * @param  {String} [username] - The GitHub username.
 * @param  {String} gistId   - The Gist hash.
 * @param  {String} [fileId] - The file hash.
 * @return {String}          - The raw url for the Gist file.
 */
export function generateRawUrl(username, gistId, fileId) {
  username = username || 'anonymous';
  let url = `https://gist.githubusercontent.com/${username}/${gistId}/raw/`;
  if (fileId) {
    url += fileId;
  }
  return url;
}

export default {
  generateRawUrl,
};
