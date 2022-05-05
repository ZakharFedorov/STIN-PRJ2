const addChatEntry = require('./index.time');

var now = new Date().toLocaleTimeString();
var input = "nevadi";
var product = "The time is: ";

test('hleda potrebne slovo v vete', () => {
    expect(addChatEntry(input, product)).toBe("The time is: "+ now);
  });