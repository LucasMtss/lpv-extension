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
  // tbody
  const tbody = getElement(frame, "html body form table tbody");
  tbody.style.display = "flex";
  tbody.style.flexDirection = "column-reverse";
  tbody.style.width = "100%";
  tbody.style.justifyContent = "center";
  tbody.style.backgroundColor = colors.greyLight;
  tbody.style.borderRadius = "6px";
  tbody.style.padding = "4rem 2rem";
  tbody.style.border = "none";

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
  searchInput.setAttribute("placeholder", "Faça uma consulta em nosso acervo");
}
