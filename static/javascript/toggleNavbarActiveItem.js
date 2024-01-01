//Essa script serve para trocar os items ativos da navbar, mostrando ao usuário em qual seção ele está.


var navbar_item = document.querySelectorAll(".navbar__mobile-list-item")
var navbarDesktopItem = document.querySelectorAll(".navbar__desktop-list-item") 

var introduction_sct = document.querySelector(".introduction__section")
var aboutme_sct = document.querySelector(".about-me__section")
var skills_sct = document.querySelector(".skills__section")
var projects_sct = document.querySelector(".projects__section")
var contact_sct = document.querySelector(".contact-me__section")
 
function isInViewport(itd, abt, skls, pjt, ctc) {
    let itd_ = itd.getBoundingClientRect();
    let abt_ = abt.getBoundingClientRect();
    let skls_ = skls.getBoundingClientRect(); 
    let pjt_ = pjt.getBoundingClientRect();
    let ctc_ = ctc.getBoundingClientRect();
      //propriedades da seções.

    let elementsInViewportStatus = []
      //Esse array armazena booleanos, informando se a seção está visivel na viewport. 
   
    //As variáveis abaixo armazenam um boleano, informando se a seção está visível ou não na viewport
    itdIsInViewport = itd_.top >= 0 &&
                itd_.left >= 0 &&
                itd_.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                itd_.right <= (window.innerWidth || document.documentElement.clientWidth)
   
    if (abt_.top <= window.innerHeight) {
                abtIsInViewport = abt_.bottom >= 0 &&
                                    abt_.right >= 0 &&
                                    abt_.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                                    abt_.left <= (window.innerWidth || document.documentElement.clientWidth) 
    } else {
                abtIsInViewport = abt_.top >= 0 &&
                                    abt_.left >= 0 &&
                                    abt_.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                                    abt_.right <= (window.innerWidth || document.documentElement.clientWidth) 
    }

    if (skls_.top <= window.innerHeight) {
    sklsIsInViewport = skls_.bottom >= 0 &&
                        skls_.right >= 0 &&
                        skls_.top <= (window.innerHeight || document.documentElement.clientHeight) &&
                        skls_.left <= (window.innerWidth || document.documentElement.clientWidth) 
                          //Note que esse código é diferente, pois nesse caso a skills_section é maior que a viewport. Quando isso acontece, basicamente faz o código inverso, verificando se o top é <= ao height da viewport/window
                          //nesse caso em especifico o document.documentElement.clientWidth retorna o altura da viewport. Isso porque, quando esse o clientWidth no root do document (documentElement), ele retorna a height da viewport.
    } else {
        sklsIsInViewport = skls_.top >= 0 &&
                        skls_.left >= 0 &&
                        skls_.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        skls_.right <= (window.innerWidth || document.documentElement.clientWidth)
    }

    pjtIsInViewport = pjt_.top >= 0 &&
                        pjt_.left >= 0 &&
                        pjt_.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        pjt_.right <= (window.innerWidth || document.documentElement.clientWidth) 


    ctcIsInViewport = ctc_.top >= 0 &&
                        ctc_.left >= 0 &&
                        ctc_.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                        ctc_.right <= (window.innerWidth || document.documentElement.clientWidth)                
  
    elementsInViewportStatus.push(itdIsInViewport, abtIsInViewport, sklsIsInViewport, pjtIsInViewport, ctcIsInViewport)  

    //Tratamento de "bugs" específicos
    if (elementsInViewportStatus[2] == true && elementsInViewportStatus[3] == true) {
        elementsInViewportStatus[2] = false
          //A navbar é pequena e relativamente simples, então dá para tratar o erro individualmente sem prejudicar o algoritmo. Nesse caso, o item "skills" e o "projetos" podem ambos ser true ao mesmo tempo.No único caso que isso acontece, precisa-se que a navbar deixe o item "projetos" ativo.
    }

    return toggleNavbarActiveItem(elementsInViewportStatus)
}

function toggleNavbarActiveItem(elementsInViewportStatus) {
    let elInVW = elementsInViewportStatus;

    var someItemIsActive = false;
    var lastActiveMobileItem, lastActiveDesktopItem;
    navbar_item.forEach((e, index) => {
        if (navbar_item[index].classList.contains("navbar__mobile-list-item--active") || 
            navbar_item[index].classList.contains("navbar__desktop-list-item--active")
           )
            {
            lastActiveMobileItem = navbar_item[index]
            lastActiveDesktopItem = navbarDesktopItem[index]
        }
    });
       //someItemIsActive e lastActiveItem são, basicamente, para evitar que todos elementos fiquem desativados. Se nenhum estiver ativo, o último continua ativo, até que tenha outro que possa ser ativado. 

    //o loop abaixo muda o item ativado na navbar. Apenas um mode estar ativo. Por isso, na comparação, verifica-se o elemento está na viewport (elInVW[i] == true) e se someItemIsActive for false, isto é, se nenhum elemento da navbar está ativa.
    for (let i = 0; i < elInVW.length; i++) {
        if (elInVW[i] == true && someItemIsActive == false) {
            someItemIsActive = true;
            navbar_item[i].classList.add("navbar__mobile-list-item--active")
            navbarDesktopItem[i].classList.add("navbar__desktop-list-item--active")
              //a navbar são exatamente iguais. Então, o script funciona para a navbar do pc e do mobile. 
        } else {
            navbar_item[i].classList.remove("navbar__mobile-list-item--active")
            navbarDesktopItem[i].classList.remove("navbar__desktop-list-item--active")
        }
    }

    if (!someItemIsActive) {
        lastActiveMobileItem.classList.add("navbar__mobile-list-item--active")
        lastActiveDesktopItem.classList.add("navbar__desktop-list-item--active")
    }
}

document.addEventListener("scroll", function (){ isInViewport(introduction_sct, aboutme_sct, skills_sct, projects_sct, contact_sct)}, 50)
  //Chama a função, toda vez que o evento scroll for disparado.