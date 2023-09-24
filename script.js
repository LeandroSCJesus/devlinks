//.- Criar uma função de com nome de toggleMode
function toggleMode() {
    
    //;) const é uma variável fixa / html é o nome da variável / document é objeto javascript / documentElement é uma função usada para acessar elementos html
    const html = document.documentElement

    //;) toggle é um método
    html.classList.toggle("light")

        //;) IF é uma função condicional de verdadeiro ou falso (caso verdadeiro) / classList é uma propriedade do documento / contains é um método
        //if (html.classList.contains('light')) {

            //;) remove é um método
            // html.classList.remove('light')
    
            //;) else faz parte da função condicional de verdadeiro ou falso (caso falso).
        //} else {

            //;) add é um método
            //html.classList.add('light')
        //}

    //>-> Pegar a tag img
    const img = document.querySelector("#profile img")

    //>-> substituir a imagem
    if(html.classList.contains("light")) {
        
        //>-> Se tiver light toggleMode, adicionar a imagem light
        img.setAttribute('src', './assets/avatar-light.png')

    }

    else {

        //>-> Se tiver sem light toggleMode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png')

    }

    if(html.classList.contains("light")){
        
        //>-> Se tiver light toggleMode, mudar o alt
        img.setAttribute('alt', 'Foto de LeandroJesus sorrindo, usando óculos e camisa branca, semi-barba e fundo com um circulo maior azul e um circulo menor em amarelo.')
    }

    else {

        //>-> Se tiver sem light toggleMode, manter o alt
        img.setAttribute('alt', 'Foto de LeandroJesus sorrindo, usando óculos e camisa branca, semi-barba e fundo de quarto de hotel')

    }
}