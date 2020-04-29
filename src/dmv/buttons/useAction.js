import { createButton, withLeftMargin, withTopMargin } from "../elements";

import { onElementLoad } from "../../common";
import { useAbility } from "../commands";

const ready = (onClick) => {
  const parent = document.querySelector(".actions");
  const children = parent.querySelectorAll("p");
  for (const child of children) {
    const spans = child.querySelectorAll("span");
    const action = spans[0].innerText;
    const details = spans[1].innerText;
    const button = createButton(
      "use",
      function () {
        onClick(useAbility(action, details));
      },
      [withTopMargin(), withLeftMargin(), "vtt-use-action"]
    );
    child.appendChild(button);
  }
  console.debug("Created " + children.length + " use action buttons");
};

export default (onClick) => onElementLoad(".actions", () => ready(onClick));