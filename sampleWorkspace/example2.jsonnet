// A function that returns an object.
local Person(name='Alice') = {
  name: name,
  welcome: 'Hello ' + name + '!',
};
{
  data: {
    person1: Person(),
    person2: Person('Bob'),
  }
}
