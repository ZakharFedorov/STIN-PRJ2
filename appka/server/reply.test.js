var reply = [
    ["Hey","Hi","Hello"],
    ["My Name Is Kusakabe"],
    ["\n> name \n> time \n>eur"],
    ["The time is: "],
    ["The rate is: "]
];

test('the reply has My Name Is Kusakabe on it', () => {
        expect(reply[0]).toContain('Hi');
        expect(new Set(reply[0])).toContain('Hi');
  });