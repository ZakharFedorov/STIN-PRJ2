const compare = require('./index.compare');

var trigger = [
    ["hey","hi","hello"],
    ["name"],
    ["help"],
    ["time"],
    ["eur"]
];
var reply = [
    ["Hey","Hi","Hello"],
    ["My Name Is Kusakabe"],
    ["\n> name \n> time \n>eur"],
    ["The time is: "],
    ["The rate is: "]
];

test('porovnanva slova a pak vraci odpoved na otazku', () => {
    expect(compare(trigger,reply,"time")).toBe("The time is: ");
  });