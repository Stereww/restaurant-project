import {pageLoad} from './page-load.js'
import {pageLoad2} from './page-load.js'

pageLoad();

const pageReset1 = function () {
    document.getElementById("content").innerHTML = "";
    pageLoad();
}

const pageReset2 = function () {
    document.getElementById("content").innerHTML = "";
    pageLoad2();
}

const head = document.getElementById("topcontent");
head.style.display = "flex";
head.style.justifyContent = "center";
head.style.borderBottom = "2px solid #FF0000";

const home = document.createElement("button");
home.innerHTML = "Home";
document.getElementById("topcontent").appendChild(home);
home.style.padding = "10px";
home.style.margin = "5px";
home.style.border = "2px solid #000000";
home.addEventListener("click", pageReset1)

const contact = document.createElement("button");
contact.innerHTML = "Contact";
document.getElementById("topcontent").appendChild(contact);
contact.style.padding = "10px";
contact.style.margin = "5px";
contact.style.border = "2px solid #000000";
contact.addEventListener("click", pageReset2)




