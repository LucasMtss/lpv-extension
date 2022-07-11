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
  rowItems.forEach((td, index) => {
    console.log("TD", index, td);

    td.setAttribute("align", "center");
    td.setAttribute("display", "flex");
    td.setAttribute("width", "100%");
  });
  console.log("BOTÂO BUSCA", rowItems[2]);
  rowItems[2].style.flexDirection = "column";
  rowItems[2].style.alignItems = "center";
  // rowItems[2].style.backgroundColor = "red";

  rowItems[3].style.display = "none";
}
