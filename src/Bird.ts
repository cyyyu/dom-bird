import { DomBird } from "./types";

const INNER_PADDING = 4;
const Z_INDEX = "9999";
const ANIMATION_DURATION_CSS = ".2s";

class Bird {
  name: string;
  node: HTMLElement;
  targetNode?: Element;
  options: DomBird.Options = {};

  constructor(name: string) {
    this.name = name;
    this.node = document.createElement("div");
    this.node.classList.add(DomBird.CLASS_NAME);

    // Insert a node to body but leave it invisible
    document.body.appendChild(this.node);

    return this;
  }

  public flyTo(targetNode?: Element, options: DomBird.Options = {}) {
    if (!targetNode) throw new Error("No element specified.");

    this.targetNode = targetNode;
    this.options = options;

    // Style the box
    this.styleTheBox();

    // Clear children
    this.clearChildren();

    if (options.scrollIntoView) {
      // if targetNode is not present in the current view,
      // scroll to the target first.
      targetNode.scrollIntoView({ block: "center" });
    }

    // Attach label if needed
    this.attachLabel();

    // Animate to the target node
    this.animate();
  }

  // Remove the node from body
  public kill() {
    document.body.removeChild(this.node);
  }

  private styleTheBox() {
    // Styles
    if (!this.options.noAnimation) {
      this.node.style.transition = `all ${ANIMATION_DURATION_CSS} ease-out`;
    }
    this.node.style.opacity = "0";
    if (this.options.intent) {
      this.node.style.boxShadow = DomBird.IntentColor[this.options.intent];
    } else {
      this.node.style.boxShadow = DomBird.IntentColor[DomBird.Intent.PRIMARY];
    }
    this.node.style.borderRadius = "4px";
    this.node.style.position = "absolute";
    this.node.style.top = "0px";
    this.node.style.left = "0px";
    this.node.style.width = window.innerWidth + "px";
    this.node.style.height = window.innerHeight + "px";
    this.node.style.zIndex = Z_INDEX;
    if (!this.options.touchable) {
      this.node.style.pointerEvents = "none";
    }
  }

  private clearChildren() {
    while (this.node.firstChild) {
      this.node.removeChild(this.node.firstChild);
    }
  }

  private attachLabel() {
    if (this.options.label) {
      // Attach label
      const labelDiv = document.createElement("div");
      labelDiv.textContent = this.options.label;
      labelDiv.style.position = "absolute";
      labelDiv.style.whiteSpace = "nowrap";
      labelDiv.style.left = "0px";

      if (!this.options.labelLocation || this.options.labelLocation === "top") {
        labelDiv.style.top = "0px";
        labelDiv.style.transform = "translate(0, -100%)";
      } else {
        labelDiv.style.bottom = "0px";
        labelDiv.style.transform = "translate(0, 100%)";
      }

      if (this.options.intent) {
        labelDiv.style.color = DomBird.IntentTextColor[this.options.intent];
      } else {
        labelDiv.style.color = DomBird.IntentTextColor[DomBird.Intent.PRIMARY];
      }

      if (this.options.labelFontSize) {
        labelDiv.style.fontSize = this.options.labelFontSize;
      } else {
        labelDiv.style.fontSize = DomBird.DEFAULT_LABEL_FONT_SIZE;
      }

      this.node.appendChild(labelDiv);
    }
  }

  private animate() {
    const bodyScrollTop = document.body.scrollTop;
    const {
      width,
      height,
      top,
      left
    } = this.targetNode!.getBoundingClientRect();
    this.node.style.top = top + bodyScrollTop - INNER_PADDING + "px";
    this.node.style.left = left - INNER_PADDING + "px";
    this.node.style.zIndex = Z_INDEX;
    this.node.style.width = width + INNER_PADDING * 2 + "px";
    this.node.style.height = height + INNER_PADDING * 2 + "px";
    this.node.style.opacity = "1";
  }
}

export default Bird;
