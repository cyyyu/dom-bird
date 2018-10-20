export namespace DomBird {
  export const CLASS_NAME = "dom-bird";
  export const DEFAULT_LABEL_FONT_SIZE = "12px";

  interface LabelOptions {
    label?: string;
    labelLocation?: "top" | "bottom";
    labelFontSize?: string;
    noAnimation?: boolean;
  }

  export interface Options extends LabelOptions {
    intent?: Intent;
    scrollIntoView?: boolean;
    touchable?: boolean;
  }

  export enum Intent {
    PRIMARY = "primary",
    SUCCESS = "success",
    WARNING = "warning",
    DANGER = "danger"
  }

  export enum IntentColor {
    primary = "rgb(56, 124, 173) 0px 0px 0px 1px, rgba(21, 101, 169, 0.3) 0px 0px 0px 3px, rgba(16, 22, 26, 0.2) 0px 1px 1px inset",
    success = "rgb(9, 183, 55) 0px 0px 0px 1px, rgba(15, 160, 33, 0.3) 0px 0px 0px 3px, rgba(21, 26, 16, 0.2) 0px 1px 1px inset",
    warning = "rgb(222, 129, 14) 0px 0px 0px 1px, rgba(185, 120, 1, 0.3) 0px 0px 0px 3px, rgba(165, 124, 9, 0.2) 0px 1px 1px inset",
    danger = "rgb(224, 106, 106) 0px 0px 0px 1px, rgba(189, 19, 19, 0.3) 0px 0px 0px 3px, rgba(16, 22, 26, 0.2) 0px 1px 1px inset"
  }

  export enum IntentTextColor {
    primary = "rgb(56, 124, 173)",
    success = "rgb(9, 183, 55)",
    warning = "rgb(222, 129, 14)",
    danger = "rgb(224, 106, 106)"
  }
}
