import { createBird, killBird, killAll } from "../src/index";

describe("all tests", () => {
  test("create", () => {
    createBird("bird");
    expect(document.querySelectorAll(".dom-bird").length).toBe(1);
  });

  test("kill", () => {
    createBird("bird");
    killBird("bird");
    expect(document.querySelectorAll(".dom-bird").length).toBe(0);
  });

  test("kill all", () => {
    createBird("bird1");
    createBird("bird2");
    killAll();
    expect(document.querySelectorAll(".dom-bird").length).toBe(0);
  });
});
