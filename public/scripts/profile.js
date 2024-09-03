import options from "./data/layoutOptions.js";

import {
  hideSearch,
  printNavBar,
  printFooter,
  printIcons,
} from "./modules/printLayout.js";

hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

document.querySelector("#profile").addEventListener("click", async () => {
  const data = {
    email: document.querySelector("#email").value,
    photo: document.querySelector("#photo").value,
  };
<<<<<<< HEAD
});
=======
});
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
