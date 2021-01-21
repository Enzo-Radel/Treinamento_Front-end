

function logoClique(){
    let menu = document.querySelector(".menu-header")
    let pesquisa = document.getElementById("pesquisa")
    if (menu.style.textAlign == "right") {
        menu.style.textAlign = "left"
        pesquisa.style.float = "right"
    }else{
        menu.style.textAlign = "right"
        pesquisa.style.float = "left"
    }

    // let menu = document.querySelector(".menu-header")
    // let atributo = menu.
    // console.log(atributo)
}

