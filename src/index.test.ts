import { sleep } from '.';

test('sleep', async () => {
  const start = Date.now();
  await sleep(100);
  const end = Date.now();

  expect(end - start).toBeGreaterThan(99);
  expect(end - start).toBeLessThan(105);
});
