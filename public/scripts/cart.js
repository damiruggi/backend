import options from "./data/layoutOptions.js";

import {
  hideSearch,
  printNavBar,
  printFooter,
  printIcons,
} from "./modules/printLayout.js";
import printCartCards from "./modules/printCartCards.js";
import printCartTotal from "./modules/printCartTotal.js";

hideSearch();
printIcons();
printNavBar(options, "navbar");
printFooter(options, "footer");

printCartCards("productscart");
<<<<<<< HEAD
//printCartTotal(cartproducts, "total");
=======
//printCartTotal(cartproducts, "total");
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
