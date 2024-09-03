import { printNavBar, printFooter } from "./printLayout.js";

export default async function fetchOptions() {
  try {
    let res = await fetch("./scripts/data/layoutOptions.json");
    res = await res.json();
    printNavBar(res, "navbar");
    printFooter(res, "footer");
  } catch (error) {
    console.log(error);
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
