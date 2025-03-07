let body = document.querySelector("body");
let header = document.createElement("header")
let nav = document.createElement("nav");
let logo = document.createElement("img")
let ul = document.createElement("ul");
let liHome = document.createElement("li");
let liAbout = document.createElement("li");
let liServices = document.createElement("li");
let liContact = document.createElement("li");
let aHome = document.createElement("a");
let aAbout = document.createElement("a");
let aServices = document.createElement("a");
let aContact = document.createElement("a");

let button = document.createElement("button");
let aButton = document.createElement("a")

document.body.append(header);
header.append(nav);
nav.append(logo);
nav.append(ul);
ul.append(liHome);
liHome.append(aHome);
ul.append(liAbout);
liAbout.append(aAbout);
ul.append(liServices);
liServices.append(aServices);
ul.append(liContact);
liContact.append(aContact);
nav.append(button)

aHome.innerHTML = ("Home");
aAbout.innerHTML = ("About");
aServices.innerHTML = ("Services");
aContact.innerHTML = ("Contact");
button.innerHTML = ("Click ME")

body.style.margin = "0px"
nav.style.padding = "10px 140px"

header.style.backgroundColor = "red"
nav.style.display = "flex"
nav.style.justifyContent = "space-between"
ul.style.display = "flex"
ul.style.columnGap = "80px"
liHome.style.listStyle = "none"
liAbout.style.listStyle = "none"
liServices.style.listStyle = "none"
liContact.style.listStyle = "none"
aHome.style.textDecoration = "none"
aAbout.style.textDecoration = "none"
aServices.style.textDecoration = "none"
aContact.style.textDecoration = "none"
button.style.backgroundColor = "yellow"
button.style.padding = "10px 30px"
button.style.border = "none"
button.style.borderRadius = "30px"
button.style.textTransform = "uppercase"
button.style.fontSize = "14px"
button.style.cursor = "pointer"


aHome.style.cursor = "pointer"
aAbout.style.cursor = "pointer"
aServices.style.cursor = "pointer"
aContact.style.cursor = "pointer"

aHome.style.color = "white"
aAbout.style.color = "white"
aServices.style.color = "white"
aContact.style.color = "white"

aHome.style.fontWeight = "800"
aAbout.style.fontWeight = "800"
aServices.style.fontWeight = "800"
aContact.style.fontWeight = "800"

aHome.style.fontSize = "18px"
aAbout.style.fontSize = "18px"
aServices.style.fontSize = "18px"
aContact.style.fontSize = "18px"

