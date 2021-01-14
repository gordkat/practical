// Пример 3 - Реализуйте "класс" Student (Студент),
// который будет наследовать от "класса" User, подобно тому,
// Этот "класс" должен иметь следующие свойства:
// name (имя, наследуется от User),
// surname (фамилия, наследуется от User),
// year (год поступления в вуз).
// "Класс" должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также "класс" должен иметь метод getCourse(),
// который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно.

/* function User(name, surname) {
  this.name = name;
  this.surname = surname;
}
 */
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

/* User.prototype.getFullName = function () {
  return `${this.name} ${this.surname}`;
}; */
/* 
function Student(name, surname, year) {
  User.call(this, name, surname);

  this.year = year;
} */
class Student extends User {
  constructor(name, user, year) {
    super(name, user);
    this.year = year;
  }
  getCourse() {
    const now = new Date();
    const nowYear = now.getFullYear();

    return nowYear - this.year;
  }
}

/* Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Student.prototype.getCourse = function () {
  const now = new Date();
  const nowYear = now.getFullYear();

  return nowYear - this.year;
}; */

const student = new Student('Иван', 'Иванов', 2015);
const student2 = new Student('goblin', 'goblinov', 2011);

console.log(student);
console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 20152018
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год
console.log(student2);
console.log(student2.name); //выведет 'Иван'
console.log(student2.surname); //выведет 'Иванов'
console.log(student2.getFullName()); //выведет 'Иван Иванов'
console.log(student2.year); //выведет 20152018
console.log(student2.getCourse()); //выведет 3 - третий курс, так как текущий год
