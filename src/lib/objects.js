const createPerson = (name, age) => {
  // your code here
  const person = {
    name: name,
    age: age
  };
  return person;
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  if (property == 'name') {
    return object.name;
  } else {
    return object.age;
  }
};

const hasProperty = (property, object) => {
  // your code here
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // your code here
  return person.age > 65;
};

const getAges = people => {
  // your code here
  const ages = [];
  people.forEach(item => {
    ages.push(item.age);
  });
  return ages;
};

const findByName = (name, people) => {
  // your code here
  const person = people.filter(people => {
    return people.name == name;
  });
  return person[0];
};

const findHondas = cars => {
  // your code here
  const Cars = cars.filter(car => {
    return car.manufacturer == 'Honda';
  });
  return Cars;
};

const averageAge = people => {
  // your code here
  const ages = [];
  const len = people.length;
  const pAges = people.map(people => {
    ages.push(people.age);
    return ages;
  });
  return eval(ages.join('+')) / len;
};

const createTalkingPerson = (name, age) => {
  // your code here

  // (this.name = name), 
  // (this.age = age);
  // this.introduce = () => {
  //   console.log()
  // }

  // console.log(this);
  // return this;
  // function person(name, age) {
  //   this.name = name,
  //   this.age = age
  // }
  // person.prototype = {
  //   introduce(name) {
  //     return `Hi ${name}, my name is ${this.name} and I am ${this.age}`;
  //   }
  // }
  // const 
  // console.log();
    const talkingPerson = {
      name,
      age,
      introduce: name => {
        return `Hi ${name}, my name is ${talkingPerson.name} and I am ${talkingPerson.age}!`;
      }
    };
    return talkingPerson; 
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
