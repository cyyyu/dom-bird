import Bird from "./Bird";

const store: {
  [name: string]: Bird;
} = {};

export function createBird(name: string): Bird {
  let bird = getBird(name);
  if (!bird) {
    bird = new Bird(name);
    store[name] = bird;
  }
  return bird;
}

export function killBird(target: string | Bird) {
  let name;
  if (typeof target === "string") {
    name = target;
  } else {
    name = target.name;
  }
  if (store[name]) store[name].kill();
  delete store[name];
}

export function getBird(name: string): Bird | null {
  return store[name];
}

export function killAll() {
  Object.keys(store).forEach(name => {
    const bird = store[name];
    bird.kill();
    delete store[name];
  });
}
