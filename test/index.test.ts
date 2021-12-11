import { isColor } from "../src";

test("export",()=>{
  let str="123"
  expect(isColor(str)).toEqual(false)
  expect(isColor('#123456')).toEqual(true)
  expect(isColor('#2123456')).toEqual(true)
})