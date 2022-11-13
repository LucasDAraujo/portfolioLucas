import { itens } from "./list.js";
const listaPrincipal = document.getElementById("lista");
/* <li>
    <h2>
        <a target="_blank" href="#">
            Lorem Ipsum
        </a>
    </h2>
    <p>Lorem Ipsum</p>
</li>; */

itens.forEach((item) => {
    const listaItem = document.createElement("li");
    listaItem.classList.add("lista");
    const titulo = document.createElement("h2");
    titulo.classList.add("titulo");
    const link = document.createElement("a");
    link.classList.add("link");

    const descricao = document.createElement("p");

    link.href = item.linkHref;
    link.innerText = item.linkTitle;
    link.target = "_blank";
    descricao.innerText = item.linkDescription;

    titulo.appendChild(link);
    listaItem.appendChild(titulo);
    listaItem.appendChild(descricao);

    listaPrincipal.appendChild(listaItem);
    
});
