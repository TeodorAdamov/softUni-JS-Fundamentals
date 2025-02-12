import page from "../node_modules/page/page.mjs";
import { render } from "../node_modules/lit-html/lit-html.js";
import { homePage } from "./views/homepageView.js";
import { layoutTemplate } from "./layout.js";
import { dashboardPage } from "./views/dashboardView.js";
import { createPage } from "./views/createView.js";
import { loginPage } from "./views/loginView.js";
import { registerPage } from "./views/registerView.js";
import { logout } from "./data/auth.js";
import { getUserData } from "./util.js";
import { detailsPage } from "./views/detailsView.js";
import { editPage } from "./views/editView.js";


page(middleware)
page('/index.html', '/');
page('/', homePage);
page('/dashboard', dashboardPage);
page('/addFact', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/dashboard/:id', detailsPage);
page('/dashboard/:id/edit', editPage);




const wrapper = document.getElementById('wrapper');

page.start();


function middleware(ctx, next) {
    ctx.render = (content) => render(layoutTemplate(ctx, content), wrapper);
    ctx.userData = getUserData();
    next();
}



function onLogout() {
    logout();
    page.redirect('/');
}

