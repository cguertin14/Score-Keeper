import { Meteor } from 'meteor/meteor';
import { Players } from './../imports/api/players';

Meteor.startup(() => {

  class Person {
    constructor(name = 'Anonymous', age = 0) {
      this._name = name;
      this._age = age;
    }

    getGreeting() {
      return `Hi! I am ${this._name}.`;
    }

    getPersonDescription() {
      return `${this._name} is ${this._age} year(s) old.`;
    }
  }

  class Employee extends Person {
    constructor(name,age,title) {
      super(name,age);
      this._title = title;
    }

    hasJob() {
      return !!this._title;
    }

    getGreeting() {
      if (this.hasJob()) {
        return `Hi! I am ${this._name}. I work as a ${this._title}.`;
      } else {
        return super.getGreeting();
      }
    }
  }

  class Programmer extends Person {
    constructor(name,age,preferredLanguage = 'assembly') {
      super(name,age);
      this._preferredLanguage = preferredLanguage;
    }

    getGreeting() {
      return `Hi! I am ${this._name}. I am a ${this._preferredLanguage} developer.`;
    }
  }

  /*let me = new Employee('Daniel',22,'db admin');
  console.log(me.getGreeting());
  console.log(me.getPersonDescription());
  console.log(me.hasJob());*/

  let me = new Programmer('Charles',19,'Full-Stack');
  console.log(me.getGreeting());

});
