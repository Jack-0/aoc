import { solutions } from "../solutions";

describe("day01", () => {
  it("part1", () => {
    const { part1 } = solutions(1, true);
    expect(part1()).toBe(24000);
  });
  it("part2", () => {
    const { part2 } = solutions(1, true);
    expect(part2()).toBe(45000);
  });
});

describe("day02", () => {
  it("part1", () => {
    const { part1 } = solutions(2, true);
    expect(part1()).toBe(15);
  });
  it("part2", () => {
    const { part2 } = solutions(2, true);
    expect(part2()).toBe(12);
  });
});

describe("day03", () => {
  it("part1", () => {
    const { part1 } = solutions(3, true);
    expect(part1()).toBe(157);
  });
  it("part2", () => {
    const { part2 } = solutions(3, true);
    expect(part2()).toBe(70);
  });
});

describe("day04", () => {
  it("part1", () => {
    const { part1 } = solutions(4, true);
    expect(part1()).toBe(2);
  });
  it("part2", () => {
    const { part2 } = solutions(4, true);
    expect(part2()).toBe(4);
  });
});

describe("day05", () => {
  it("part1", () => {
    const { part1 } = solutions(5, true);
    expect(part1()).toBe("CMZ");
  });
  it("part2", () => {
    const { part2 } = solutions(5, true);
    expect(part2()).toBe("MCD");
  });
});

describe("day06", () => {
  // TODO: day06 solution is over fitted...
  it("part1", () => {
    //const { part1 } = solutions(6, true);
    //expect(part1()).toBe(10);
  });
  it("part2", () => {
    // const { part2 } = solutions(6, true);
    // expect(part2()).toBe(29);
  });
});

describe("day07", () => {
  it("part1", () => {
    const { part1 } = solutions(7, true);
    expect(part1()).toBe(95437);
  });
  it("part2", () => {
    const { part2 } = solutions(7, true);
    expect(part2()).toBe(24933642);
  });
});

describe("day08", () => {
  it("part1", () => {
    const { part1 } = solutions(8, true);
    expect(part1()).toBe(21);
  });
  it("part2", () => {
    const { part2 } = solutions(8, true);
    expect(part2()).toBe(8);
  });
});

describe("day09", () => {
  it("part1", () => {
    const { part1 } = solutions(13, true);
    expect(part1()).toBe(0);
  });
  it("part2", () => {
    const { part2 } = solutions(9, true);
    expect(part2()).toBe(0);
  });
});
