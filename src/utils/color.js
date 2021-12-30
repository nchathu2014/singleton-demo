let bgcolor = "yellow";
let instance = null;

class Color {
  constructor() {
    if (instance) {
      new Error("Cannot instantiate more than one");
    }
    instance = this;
  }

  getColor() {
    return bgcolor;
  }

  setColor(color) {
    bgcolor = color;
  }
}

const singletonColor = Object.freeze(new Color());
export default singletonColor;
