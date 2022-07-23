const colors = {
  green: "#2F9E41",
  white: "#fff",
  grey: "#b0b1b1",
  greyLight: "#EEEFEF",
  blueDark: "#153F69",
};

const font = "sans-serif";
let hiddenMenu = true;

if (window.attachEvent) {
  window.attachEvent("onload", startPlugin);
} else if (window.addEventListener) {
  window.addEventListener("load", startPlugin, false);
} else {
  document.addEventListener("load", startPlugin, false);
}

function startPlugin() {
  header(window.frames[1]);
  containerLogo(window.frames[2]);
  menu(window.frames[3]);
  window.frames[3].close();
  window.frames[3].resizeTo(0, 0);
  window.frames[3].frameElement.style.display = "none !important";

  searchContainer(window.frames[4]);
  searchPageTexts(window.frames[4]);
  newHeader(window.frames[4]);
  preferenciasScreen();
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
  // Main conatiner
  const mainContainer = getElement(frame, "html");
  mainContainer.style.width = "100vw";

  // Form
  const form = getElement(frame, "html body form");
  form.style.boxSizing = "border-box";
  form.style.width = "clac(100% - 40px)";
  form.style.borderRadius = "12px";
  form.style.margin = "0 20px";

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
  searchButton.addEventListener("click", () => setTimeout(ResultadoBusca, 2300));

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
  searchInput.style.boxShadow = "0px 0px 27px 12px rgba(0,0,0,0.23)";
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
  footer.style.justifyContent = "space-between";
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
  body.style.justifyContent = "space-between";
  body.style.margin = "0";
  body.style.padding = "0";
  body.style.background = `${colors.blueDark} url(${bgImage}) no-repeat right top fixed`;
  body.style.backgroundSize = "cover";
  body.style.maxHeight = "100vh";

  body.appendChild(footer);
}

function newHeader(frame) {
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

  // Container title
  const containerTitle = document.createElement("div");
  containerTitle.style.display = "flex";
  containerTitle.style.alignItems = "center";

  // Title
  const title = document.createElement("h1");
  title.style.color = colors.white;
  title.style.fontSize = "26px";
  title.innerHTML = "Biblioteca Roberval Cardoso";
  title.style.backgroundColor = "transparent";
  title.style.border = "none";
  title.style.margin = "0";

  containerTitle.appendChild(logo);
  containerTitle.appendChild(title);

  // Header
  const header = document.createElement("header");
  header.style.backgroundColor = "transparent";
  header.style.width = "100%";
  header.style.padding = "2rem";
  header.style.boxSizing = "border-box";
  header.style.color = "#fff";
  header.style.display = "flex";
  header.style.justifyContent = "space-between";
  header.style.alignItems = "center";

  // login button
  const loginButton = document.createElement("a");
  loginButton.style.backgroundColor = colors.green;
  loginButton.style.color = colors.white;
  loginButton.style.fontSize = "24px";
  loginButton.style.fontWeight = "bold";
  loginButton.style.fontFamily = font;
  loginButton.style.padding = "10px 20px";
  loginButton.style.border = "none";
  loginButton.style.borderRadius = "18px";
  loginButton.style.textDecoration = "none";
  loginButton.style.cursor = "pointer";
  loginButton.style.boxShadow = "0px 18px 24px 12px rgba(0,0,0,0.48)";
  loginButton.innerHTML = "Login";
  loginButton.setAttribute(
    "href",
    "/cgi-bin/wxis.exe?IsisScript=phl82/021.xis&opc=form_login&tmp=/tmp/filevH45PT&counter=488479"
  );
  loginButton.setAttribute("target", "result");

  header.appendChild(icon);
  header.appendChild(containerTitle);
  header.appendChild(loginButton);

  // login screen

  loginButton.addEventListener("click", () => {
    setTimeout(() => {
      const link = getElement(window.frames[4], "html body link");
      const browser = window.browser || window.chrome;
      const styleLink = browser.runtime.getURL("styles.css");
      link.setAttribute("href", styleLink);

      const body = getElement(window.frames[4], "html body");
      const bgImage = browser.runtime.getURL("bg-image.png");

      // Inputs
      const inputs = getElements(
        window.frames[4],
        "html body form table tr td input"
      );
      inputs[0].setAttribute("placeholder", "Login");
      inputs[1].setAttribute("placeholder", "Senha");

      // Title
      const title = getElement(window.frames[4], "html body form div");
      const newTitle = document.createElement("h1");
      newTitle.innerHTML = "Identificação do usuário";
      title.appendChild(newTitle);
      title.setAttribute("id", "title-login");

      body.style.background = `${colors.blueDark} url(${bgImage}) no-repeat right top fixed`;
      body.style.backgroundSize = "cover";
      body.style.maxHeight = "100vh";
      const firstChild = body.firstChild;
      body.insertBefore(header, firstChild);
    }, 400);
  });

  header.lastChild = title;

  const firstChild = body.firstChild;
  body.insertBefore(header, firstChild);
}

function containerLogo(frame) {
  const browser = window.browser || window.chrome;

  // container logo
  const body = getElement(frame, "html body");
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";
  body.style.backgroundColor = colors.greyLight;

  // image
  const logo = getElement(frame, "html body center img");
  const logoUrl = browser.runtime.getURL("logo-if.png");
  logo.setAttribute("src", logoUrl);
  logo.style.height = "80%";
}

function menu(frame) {
  // container menu
  const containerMenu = getElement(frame, "html body");
  containerMenu.style.backgroundColor = colors.greyLight;
  containerMenu.style.paddingTop = "50px";

  const containerText = getElement(frame, "html body div");
  containerText.style.backgroundColor = colors.green;
  containerText.style.padding = "15px 0";
  containerText.style.width = "90%";
  containerText.style.margin = "0 auto";
  containerText.style.borderRadius = "8px";

  const acquisitionText = getElement(frame, "html body div center a");
  acquisitionText.style.backgroundColor = "transparent";
  acquisitionText.style.fontSize = "18px";
  acquisitionText.style.fontFamily = font;
  acquisitionText.style.cursor = "pointer";

  const totalAccessContainer = getElements(frame, "html body center");
  totalAccessContainer[1].style.fontSize = "18px";
  totalAccessContainer[1].style.fontFamily = font;
  totalAccessContainer[1].style.color = "#333";
  totalAccessContainer[1].style.marginTop = "25px";

  const numberOfAccess = getElement(frame, "html body center div");
  numberOfAccess.style.backgroundColor = "transparent";
  numberOfAccess.style.color = colors.green;
  numberOfAccess.style.fontSize = "18px";
  numberOfAccess.style.fontFamily = font;
  numberOfAccess.style.margin = "15px 0";

  getElement(frame, "html body center i").style.display = "none";
  totalAccessContainer[2].style.display = "none";
}

function header(frame) {
  // Container header
  const containerHeader = getElement(frame, "html body");
  containerHeader.backgroundColor = colors.grey;

  // table
  const table = getElement(frame, "html body table");
  table.setAttribute("bgcolor", colors.green);

  // nav buttons
  const navButtons = getElements(frame, "html body table tr td .inv12");
  navButtons.forEach((button) => {
    button.style.backgroundColor = "transparent";
    button.style.fontSize = "14px";
    button.style.margin = "10px";
  });
  navButtons[0].innerHTML = "Buscas";
  navButtons[2].innerHTML = "Gráficos";
  navButtons[3].innerHTML = "Manual";

  // unless links
  navButtons[1].style.display = "none";
  navButtons[4].style.display = "none";
  navButtons[5].style.display = "none";
}

function preferenciasScreen(){

  const frame = window.frames[1]; 
  const tds = getElements(frame, "form tbody tr td");


};

function ResultadoBusca(){ 

  

  const link = getElement(window.frames[4], "html body link");
  const browser = window.browser || window.chrome;
  const styleLink = browser.runtime.getURL("results.css");
  const frame = window.frames[4]; 
  const tds = getElements(frame, "form tbody tr td");
  const imagesContainers = new Array();
  const textResults = new Array();
  
  link.setAttribute("href", styleLink);

   /*Modifica a aparência da barra de status e das imagens de capa dos livros*/
  for(let td of tds){
    if(td.width == "80%"){
      textResults.push(td)
    }else if(td.width == "20%" && td.classList.length == 0){
      imagesContainers.push(td);
    }
  }


  for (const textResult of textResults) {
    textResult.classList.add("textResult");
  }


  let tables = getElements(frame, "table");

  for (const table of tables) { 
    /*Modifica a aparência da barra de busca*/ 
    if (table.width == "100%" && table.getAttribute("bgcolor") == "#e4fbc5" && table.getAttribute("align") == "center"){
      
      table.rows[2].display = "none";
      
      table.classList.add("searchBar");
  
      let searchInput2 = getElements(frame, "html body form table tbody tr td input");

      for(var e of searchInput2){

         if(e.getAttribute("type")=="text" && e.getAttribute("size")=="70"){
            e.setAttribute("placeholder", "Digite o nome do livro desejado");
            e.style.borderRadius = "5px";
            e.style.boxShadow ="1px 1px 5px #212121";
          }
        
          if(e.getAttribute("type")=="submit" && e.getAttribute("name")=="submitter"){
            e.style.backgroundColor = "#006699";
            e.style.color = "#fefefe";
            e.style.borderRadius = "5px";
            e.style.boxShadow ="1px 1px 5px #212121";
            e.style.display = "relative";
            
          }
          
        }

        let e3 = getElements(frame, "html body form table tbody tr td");
        e3[3].style.margin = "0px";
        e3[3].style.textAlign = "right";

        let e2 = getElements(frame, "html body form table tbody tr td a");
        e2[0].style.color = "#006699";
        e2[0].style.fontWeight="700";
        e2[0].style.fontSize = "1rem";
        e2[0].style.marginLeft = "1rem";
        e2[0].style.display = "relative";
        
        e2[0].style.textAlign = "right"; 
      
      
        let searchInput4 = getElements(frame, "html body form table tbody tr td");
        searchInput4[0].style.color = "#006699";
        searchInput4[0].style.fontWeight = "700";
        searchInput4[0].style.fontSize= "0.9rem";
      
      }

    if (table.width == "100%" && table.getAttribute("bgcolor") == "#e4fbc5" && table.getAttribute("align") != "center") {
      table.classList.add("statusBar");
    }
    if(table.width == "100%" && table.getAttribute("bgcolor") == null ) {
      table.style.display = "none";
    }
  }

  let btnPesquisa2 =  getElement(
    frame,
    "html body form table tbody tr td .botao"
  );
  
  btnPesquisa2.addEventListener("click", () => setTimeout(ResultadoBusca, 2300));

}
