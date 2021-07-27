/*You can add a property with getter and setter in both ways.
The first way add property using get and set inside the object.
The second way add property using get and set with Object.defineProperty() method.
you can change the value of the object with get and set using Object.defineProperty() method.*/

const Person = {
  fname: "payal",
  lname: "patel",
  age: 25,
  language: "english",

  //add property inside the object with gettter and setter.
  get fullname() {
    return this.fname + " " + this.lname;
  },

  set fullname(value) {
    const parts = value.split(" ");
    this.fname = parts[0];
    this.lname = parts[1];
  },
};

//Add property using getter and setter with object.defineProperty
Object.defineProperty(Person, "_empid", {
  get: function () {
    return this.empid;
  },

  set: function (value) {
    return (this.empid = value);
  },
});

Person.empid = "phpatel"; // for  using set
console.log(Person._empid); // access with _empid for using get
console.log(Person.empid); // access with emp_id  for using get
console.log(Person);

//change value by getter of existing property you give new property name
//in object define property method.
Object.defineProperty(Person, "lang", {
  get: function () {
    return (this.language = "hindi");
  },
});
Person.lang;
console.log(Person.language);

//change value  of existing property by setter with colon you have to add new property name
//in object.defineProperty
Object.defineProperty(Person, "age1", {
  set: function (value) {
    this.age = value;
  },
});

Person.age1 = 35;
console.log(Person.age);
console.log(Person);

//you can change value of existing property with same property name without colon.
Object.defineProperty(Person, "age", {
  set function(value) {
    this.age = value;
  },
});

Person.age = 50;
console.log(Person.age);
console.log(Person);
