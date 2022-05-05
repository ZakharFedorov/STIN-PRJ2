var trigger = [
    ["hey","hi","hello"],
    ["name"],
    ["help"],
    ["time"],
    ["eur"]
];

test('the trigger has help on it', () => {
    expect(trigger[2]).toContain('help');
    expect(new Set(trigger[2])).toContain('help');
  });