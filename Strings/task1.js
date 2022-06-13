function rmHtmlTags(str) {
  if (typeof str !== "string") {
    throw new TypeError("Parameter is not a string");
  }
  let string = str.replace(/<\/?[^>]+(>|$)/g, "");
  console.log(string);
  return string;
}

rmHtmlTags("<p><strong><em>Content</em></strong></p>");
