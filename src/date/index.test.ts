//@ts-nocheck
import dayjs from "dayjs";

import { birthRange } from ".";
test("birthRange测试", () => {
  let start = dayjs("2021-12-11").toDate();
  let end = dayjs("2022-1-11").toDate();

  let target = dayjs("1995-02-10").toDate();
  expect(birthRange(target, start, end)).toBe(false);

  target = dayjs("2000-01-10").toDate();
  expect(birthRange(target, start, end)).toBe(true);

  target = dayjs("2021-12-11").toDate();
  expect(birthRange(target, start, end)).toBe(true);

  target = dayjs("2022-1-11").toDate();
  expect(birthRange(target, start, end)).toBe(true);
  
});
 