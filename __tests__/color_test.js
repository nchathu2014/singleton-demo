import Color from "./../src/utils/color";

test("Initial color to be yellow", () => {
  const initialColor = Color.getColor();
  expect(initialColor).toBe("yellow");
});

test("Set color to red", () => {
  Color.setColor("red");

  const changedColor = Color.getColor();
  expect(changedColor).toBe("red");
});

test("Set color to blue", () => {
  Color.setColor("blue");

  const changedColor = Color.getColor();
  expect(changedColor).toBe("blue");
});

test("Reset color to yellow", () => {
  Color.setColor("red");
  Color.setColor("blue");

  Color.setColor("yellow");

  const changedColor = Color.getColor();
  expect(changedColor).toBe("yellow");
});
