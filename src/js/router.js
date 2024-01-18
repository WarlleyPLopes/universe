export class Router {
  routes = {};

  changeBackground() {
    console.log("changeBackground");
    const { pathname } = window.location;
  }

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    const body = document.querySelector("body");

    switch (pathname) {
      case "/":
        body.style.backgroundImage = "url(./src/assets/imgHome.png)";
        break;
      case "/universe":
        body.style.backgroundImage = "url('./src/assets/imgUniverse.png')";
        break;
      case "/exploration":
        body.style.backgroundImage = "url('./src/assets/imgExploracao.png')";
        break;
      default:
        body.style.backgroundImage = "url('.src/assets/imgHome.png')";
        break;
    }

    fetch(route)
      .then((data) => data.text())
      .then((html) => (document.querySelector("#app").innerHTML = html));
  }
}
