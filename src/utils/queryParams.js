export function getQueryParams(query) {
  const urlSearchParams = new URLSearchParams(query);
  return Object.fromEntries(urlSearchParams.entries());
}

export function encodeQueryData(data) {
  const ret = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
}
