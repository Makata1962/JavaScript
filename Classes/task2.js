class User {
  constructor(name, surname, year) {
    this.name = name;
    this.surname = surname;
    this.year = year;
    this.getFullName = function getFullName(name, surname) {
      return `${this.name} ${this.surname}`;
    };
    this.getCourse = function getCourse(year) {
      //   const course = this.year > 2018 ? 2022 - this.year : null;
      if (year > 2018) {
        let course = 2022 - year;
        return `${course}th course`;
      } else {
        throw new Error("year should be more/equal than 2018");
      }
    };
  }
}
class Student extends User {}

var student = new Student("John", "Smith", 2018);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'Smith'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2018
console.log(student.getCourse(2020)); // print 4 - fourth course, because current year 2022
