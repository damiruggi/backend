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

document.querySelector("#login").addEventListener("click", async () => {
  const data = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };
  const opts = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  let response = await fetch("/api/sessions/login", opts);
  response = await response.json();
  if (response.statusCode === 200) {
    //console.log(response.token);
    localStorage.setItem("token", response.token);
    return location.replace("/");
  } else {
    return Swal.fire({
      title: response.message,
      icon: "error",
      timer: 5000,
      timerProgressBar: true,
      confirmButtonColor: "#ff3b3c",
    });
  }
<<<<<<< HEAD
});
=======
});
>>>>>>> a6eb8328261b4472d1713d1a88ab78540eeff323
