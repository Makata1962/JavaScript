function rmHtmlTags(str) {
  let string = str.replace(/<\/?[^>]+(>|$)/g, "");
  console.log(string);
  return string;
}

try {
  rmHtmlTags("<p><strong><em>Content</em></strong></p>");
  if (str !== typeof "string") {
    throw new TypeError("Parameter is not a string");
  }
} catch (err) {
  console.log(err.message);
}
