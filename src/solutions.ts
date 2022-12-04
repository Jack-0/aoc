import * as fs from "fs";
import { Solution } from "./types/types";
import { day01 } from "./days/day01";
import { day02 } from "./days/day02";
import { day03 } from "./days/day03";
import { day04 } from "./days/day04";
import { day05 } from "./days/day05";

export function solutions(day: number, example: boolean): Solution {
  // find data
  let dayFormat = day.toString().padStart(2, "0");
  let dataFilepath = example
    ? `day${dayFormat}-example.txt`
    : `day${dayFormat}.txt`;
  dataFilepath = "./data/" + dataFilepath;
  let data = fs.readFileSync(dataFilepath).toString().split("\n");
  if (data.length < 1) throw new Error(`No data at filepath ${dataFilepath}`);

  // return solutions
  if (day === 1) return day01(data);
  if (day === 2) return day02(data);
  if (day === 3) return day03(data);
  if (day === 4) return day04(data);
  if (day === 5) return day05(data);

  throw new Error(`No solution found for ${day}`);
}
