const find_word = require('./index.find');

var input = ["my","name","is","kusakabe"];
var trigger = [
    ["hey","hi","hello"],
    ["name"],
    ["help"],
    ["time"],
    ["eur"]
];


test('hleda potrebne slovo v vete', () => {
    expect(find_word(input,trigger)).toBe("name");
  });