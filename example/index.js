import { killAll, createBird, killBird, getBird } from "dom-bird";

window.onload = function() {
  // basic example
  {
    const lis = document.querySelectorAll("#example-basic ul li");
    const btn = document.querySelector("#example-basic button");
    let bird,
      birdName = "basic",
      i = 0;
    btn.addEventListener("click", () => {
      if (!getBird(birdName)) {
        bird = createBird(birdName);
      }
      if (i === lis.length) {
        i = 0;
      }
      bird.flyTo(lis[i]);
      i++;
    });
  }

  // form example
  {
    const input = document.querySelector("#example-form input");
    const birdName = "form-example";
    input.addEventListener("blur", () => {
      if (!input.value) {
        createBird(birdName).flyTo(
          document.querySelector("#example-form input"),
          {
            label: "should not be empty",
            intent: "danger",
            labelLocation: "bottom",
            noAnimation: true
          }
        );
      }
    });
    input.addEventListener("focus", () => {
      killBird(birdName);
    });
  }

  // remove example
  {
    const btn = document.querySelector("#example-remove button");
    btn.addEventListener("click", killAll);
  }
};
