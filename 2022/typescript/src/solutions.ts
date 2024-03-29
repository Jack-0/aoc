import * as fs from "fs";
import { day01 } from "./days/day01";
import { day02 } from "./days/day02";
import { day03 } from "./days/day03";
import { day04 } from "./days/day04";
import { day05 } from "./days/day05";
import { day06 } from "./days/day06";
import { day07 } from "./days/day07";
import { day08 } from "./days/day08";
import { day09 } from "./days/day09";
import { day10 } from "./days/day10";
import { day11 } from "./days/day11";
import { day12 } from "./days/day12";
import { day13 } from "./days/day13";
import { day14 } from "./days/day14";
import { day15 } from "./days/day15";
import { Solution } from "./types/types";

export function inputToArray(filepath: string): any[] {
  const data = fs.readFileSync(filepath).toString().split("\n");
  if (data.length < 1) throw new Error(`No data at filepath ${filepath}`);
  return data;
}

export function solutions(day: number, example: boolean): Solution {
  // find data
  let dayFormat = day.toString().padStart(2, "0");
  let filepath = example
    ? `day${dayFormat}-example.txt`
    : `day${dayFormat}.txt`;
  filepath = "./input/" + filepath;
  const data = inputToArray(filepath);

  // return solutions
  if (day === 1) return day01(data);
  if (day === 2) return day02(data);
  if (day === 3) return day03(data);
  if (day === 4) return day04(data);
  if (day === 5) return day05(data);
  if (day === 6) return day06(data);
  if (day === 7) return day07(data);
  if (day === 8) return day08(data);
  if (day === 9) return day09(data);
  if (day === 10) return day10(data);
  if (day === 11) return day11(data);
  if (day === 12) return day12(data);
  if (day === 13) return day13(data);
  if (day === 14) return day14(data);
  if (day === 15) return day15(data);

  throw new Error(`No solution found for ${day}`);
}
