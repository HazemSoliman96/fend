function checkForUrl(inputText) {
  //regex from https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url/5717133#5717133
  let regex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  return regex.test(inputText);
}

export { checkForUrl };
