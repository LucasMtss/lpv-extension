const colors = {
  green: "#2F9E41",
  white: "#fff",
  grey: "#b0b1b1",
  greyLight: "#EEEFEF",
  blueDark: "#153F69",
};

const font = "sans-serif";

if (window.attachEvent) {
  window.attachEvent("onload", startPlugin);
} else if (window.addEventListener) {
  window.addEventListener("load", startPlugin, false);
} else {
  document.addEventListener("load", startPlugin, false);
}

function startPlugin() {
  searchContainer(window.frames[4]);
  searchPageTexts(window.frames[4]);
  header(window.frames[4]);
}

/**
 *
 * @param {Object} frame window.frames[] -> frame que contém os elementos em que for trabalhar
 * @param {String} query Argumento passado para o querySelector para obter o elemento desejado (igual ao CSS)
 * @returns Retorna o elemento encontrado
 */
function getElement(frame, query) {
  return frame.document.querySelector(query);
}

/**
 *
 * @param {Object} frame window.frames[] -> frame que contém os elementos em que for trabalhar
 * @param {String} query Argumento passado para o querySelector para obter o elemento desejado (igual ao CSS)
 * @returns Retorna os elementos encontrados
 */
function getElements(frame, query) {
  return frame.document.querySelectorAll(query);
}

function searchContainer(frame) {
  // Form
  const form = getElement(frame, "html body form");
  form.style.boxSizing = "border-box";
  form.style.width = "100%";
  form.style.borderRadius = "12px";

  // Table
  const statusTable = getElement(frame, "html body table");
  statusTable.style.boxSizing = "border-box";
  statusTable.style.padding = "0";
  statusTable.width = "100%";
  statusTable.style.borderRadius = "12px";

  // tbody
  const tbody = getElement(frame, "html body form table tbody");
  tbody.style.display = "flex";
  tbody.style.flexDirection = "column-reverse";
  tbody.style.width = "100%";
  tbody.style.justifyContent = "center";
  tbody.style.backgroundColor = colors.greyLight;
  tbody.style.borderRadius = "12px";
  tbody.style.padding = "4rem 2rem";
  tbody.style.border = "none";
  tbody.style.boxSizing = "border-box";

  // Title
  var title = document.createElement("h1");
  title.style.background = "transparent";
  title.style.fontSize = "28px";
  title.style.color = colors.blueDark;
  title.style.fontFamily = font;
  title.style.marginTop = "4rem";
  title.style.textAlign = "center";
  title.style.width = "100%";
  title.style.border = "none";
  title.style.fontWeight = "bolder";

  var text = document.createTextNode("Procurando por algo específico?");
  title.appendChild(text);
  tbody.appendChild(title);

  // tr
  const rows = getElements(frame, "html body form table tbody tr");

  rows.forEach((tr) => {
    tr.setAttribute("align", "center");
    tr.setAttribute("display", "flex");
    tr.style.display = "flex";
    tr.style.flexDirection = "column";
    tr.style.width = "100%";
    tr.style.justifyContent = "center";
  });

  // td
  const rowItems = getElements(frame, "html body form table tbody tr td");
  rowItems.forEach((td) => {
    td.setAttribute("align", "center");
    td.setAttribute("display", "flex");
    td.setAttribute("width", "100%");
  });

  // link "preferências"
  rowItems[3].style.display = "none";

  // filtros
  rowItems[0].style.fontSize = "16px";
  rowItems[0].style.color = colors.blueDark;

  // Input radio

  for (const children of rowItems[0].children)
    children.style.marginRight = "10px";

  // search button (input)
  const searchButton = getElement(
    frame,
    "html body form table tbody tr td .botao"
  );
  searchButton.style.flexDirection = "column";
  searchButton.style.alignItems = "center";
  searchButton.style.border = "none";
  searchButton.style.backgroundColor = colors.green;
  searchButton.style.borderRadius = "12px";
  searchButton.style.color = colors.white;
  searchButton.style.fontSize = "22px";
  searchButton.style.fontFamily = font;
  searchButton.style.padding = "10px 30px";
  searchButton.style.margin = "30px 0";

  // search input
  let searchInput = getElements(
    frame,
    "html body form table tbody tr td input"
  );
  searchInput = searchInput[4];
  searchInput.style.backgroundColor = colors.grey;
  searchInput.style.borderRadius = "100px";
  searchInput.style.padding = "15px";
  searchInput.style.display = "flex";
  searchInput.style.justifyContent = "center";
  searchInput.style.border = "none";
  searchInput.style.color = colors.white;
  searchInput.style.fontStyle = "italic";
  searchInput.style.fontSize = "18px";
  searchInput.style.textAlign = "center";
  searchInput.style.marginBottom = "15px";
  searchInput.style.marginBottom =
    "box-shadow: 0px 0px 37px 19px rgba(0,0,0,0.23)";
  searchInput.setAttribute("placeholder", "Faça uma consulta em nosso acervo");
}

function searchPageTexts(frame) {
  // texts table
  const table = getElement(frame, "html body ul");
  table.style.display = "none";

  // Title
  const title = getElement(frame, "html body blockquote");
  title.style.display = "none";

  // meaning of status table
  const statusTable = getElements(frame, "html body table");
  statusTable[1].style.display = "none";

  // footer
  const footer = document.createElement("footer");
  footer.style.width = "100%";
  footer.style.padding = "2rem";
  footer.style.color = colors.white;
  footer.style.display = "flex";
  footer.style.justifyContent = "space-beetwen";
  footer.style.boxSizing = "border-box";
  footer.style.alignItems = "flex-end";
  footer.style.height = "50%";
  footer.style.position = "absolut";
  footer.style.bottom = "0";

  //Container left
  const containerLeft = document.createElement("div");
  containerLeft.style.width = "50%";
  containerLeft.style.display = "flex";
  containerLeft.style.flexDirection = "column";

  //Container right
  const containerRight = document.createElement("div");
  containerRight.style.width = "50%";
  containerRight.style.display = "flex";
  containerRight.style.justifyContent = "flex-end";

  // Texts
  const spanEmail = document.createElement("span");
  spanEmail.style.fontSize = "16px";
  spanEmail.style.width = "70%";
  spanEmail.style.marginBottom = "5px";
  spanEmail.innerHTML = "biblioteca.barbacena.ifsudestemg.edu.br";

  const spanPhone = document.createElement("span");
  spanPhone.style.fontSize = "16px";
  spanPhone.style.width = "70%";
  spanPhone.style.marginBottom = "5px";
  spanPhone.innerHTML = "Telefone: (32) 3333-2693";

  const spanAddress = document.createElement("span");
  spanAddress.style.fontSize = "16px";
  spanAddress.style.width = "90%";
  spanAddress.style.marginBottom = "5px";
  spanAddress.style.textAlign = "right";
  spanAddress.innerHTML =
    "IF Sudeste MG, R. Monsenhor José Augusto, 204 - São José, Barbacena - MG, 36205-018";

  containerLeft.appendChild(spanEmail);
  containerLeft.appendChild(spanPhone);
  containerRight.appendChild(spanAddress);
  footer.appendChild(containerLeft);
  footer.appendChild(containerRight);

  const browser = window.browser || window.chrome;
  const bgImage = browser.runtime.getURL("bg-image.png");

  // Body
  const body = getElement(frame, "html body");
  body.style.display = "flex";
  body.style.flexDirection = "column";
  body.style.justifyContent = "space-beetwen";
  body.style.margin = "0";
  body.style.padding = "0";
  body.style.background = `${colors.blueDark} url(${bgImage}) no-repeat right top fixed`;
  body.style.backgroundSize = "cover";
  body.style.maxHeight = "100vh";

  body.appendChild(footer);
}

function header(frame) {
  const browser = window.browser || window.chrome;
  const menuIcon = browser.runtime.getURL("icon-menu.png");

  // Html
  const html = getElement(frame, "html");
  html.style.width = "100%";

  // Body
  const body = getElement(frame, "html body");

  // Logo
  const logoUrl = browser.runtime.getURL("logo-if.png");
  const logo = document.createElement("img");
  logo.setAttribute("src", logoUrl);
  logo.style.width = "50px";

  // Menu icon
  const icon = document.createElement("img");
  icon.setAttribute("src", menuIcon);
  icon.style.cursor = "pointer";

  // Title
  const title = document.createElement("h1");
  title.style.color = colors.white;
  title.style.fontSize = "26px";
  title.innerHTML = "Biblioteca Roberval Cardoso";
  title.style.backgroundColor = "transparent";
  title.style.border = "none";

  // Header
  const header = document.createElement("header");
  header.style.backgroundColor = "transparent";
  header.style.width = "100%";
  header.style.padding = "2rem";
  header.style.boxSizing = "border-box";
  header.style.color = "#fff";
  header.style.display = "flex";
  header.style.justifyContent = "space-beetwen";
  header.style.alignItems = "center";

  header.appendChild(icon);
  header.appendChild(logo);
  header.appendChild(title);

  header.lastChild = title;

  const firstChild = body.firstChild;
  body.insertBefore(header, firstChild);
}
