import { sleep } from '.';

describe('sleep', () => {
  it('normal', async () => {
    expect(sleep('Foo', 'Bar')).toBe('Foo Bar');
  });

  it('lastName upper case', async () => {
    expect(sleep('Foo', 'Bar', { lastNameUpperCase: true })).toBe('Foo BAR');
  });
});
