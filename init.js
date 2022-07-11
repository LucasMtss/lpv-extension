if (window.attachEvent) {
  window.attachEvent("onload", startPlugin);
} else if (window.addEventListener) {
  window.addEventListener("load", startPlugin, false);
} else {
  document.addEventListener("load", startPlugin, false);
}

function startPlugin() {
  console.log("INICIOU");
  searchContainer(window.frames[4]);
}

function getElement(frame, query) {
  return frame.document.querySelector(query);
}

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
  tbody.style.backgroundColor = "#fff";
  tbody.style.borderRadius = "6px";
  tbody.style.padding = "4rem 2rem";

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
  searchButton.style.backgroundColor = "#2F9E41";
  searchButton.style.borderRadius = "12px";
  searchButton.style.color = "#fff";
  searchButton.style.fontSize = "22px";
  searchButton.style.fontFamily = "sans-serif";
  searchButton.style.padding = "10px 30px";
  searchButton.style.margin = "30px 0";

  // search input
  let searchInput = getElements(
    frame,
    "html body form table tbody tr td input"
  );
  console.log("INPUT BUSCA", searchInput);
  searchInput = searchInput[4];
  searchInput.style.backgroundColor = "#b0b1b1";
  searchInput.style.borderRadius = "100px";
  searchInput.style.padding = "15px";
  searchInput.style.display = "flex";
  searchInput.style.justifyContent = "center";
  searchInput.style.border = "none";
  searchInput.style.color = "#fff";
  searchInput.style.fontStyle = "italic";
  searchInput.style.fontSize = "18px";
  searchInput.style.textAlign = "center";
  searchInput.style.marginBottom = "15px";
  searchInput.setAttribute("placeholder", "Faça uma consulta em nosso acervo");

  searchInput.setAttribute("id", "search-input");
}
