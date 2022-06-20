class Validator {
  constructor(email, domain, date, phone) {
    this.isEmail = function isEmail(email) {
      let emailRegex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

      if (email.match(emailRegex)) {
        console.log("Email is valid");
        return true;
      } else {
        console.log("Email should be valid");
        return false;
      }
    };

    this.isDomain = function isDomain(domain) {
      let domainRegex =
        /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;
      if (domain.match(domainRegex)) {
        console.log("Domain is valid");
        return true;
      } else {
        console.log("Domain should be valid");
        return false;
      }
    };
    this.isDate = function isDate(date) {
      let dateRegex = /^(0[1-9]|1\d|2\d|3[01])\.(0[1-9]|1[0-2])\.(19|20)\d{2}$/;
      if (date.match(dateRegex)) {
        console.log("Date format is valid");
        return true;
      } else {
        console.log("Date format should be YYYY-MM-DD");
        return false;
      }
    };
    this.isPhone = function isPhone(phone) {
      let phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (phone.match(phoneRegex)) {
        console.log("Phone number is valid");
        return true;
      } else {
        console.log("Phone number should be in correct format: ");
        return false;
      }
    };
  }
}
var validator = new Validator();

console.log(validator.isEmail("jshtml@mail.ru"));
console.log(validator.isDomain("jshtml.net"));
console.log(validator.isDate("12.05.2020"));
console.log(validator.isPhone("123-456-7890")); // Saqartvelos format ver vipove versad, mapatiet :D 
