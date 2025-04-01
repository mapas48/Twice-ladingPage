import {mainContent,logoTwice,integrantContent} from './const/const.js'

function changeLogo() {
   try {
    setTimeout(() => {
        mainContent.removeChild(logoTwice);
        integrantContent.hidden = false;
    }, 2100);
   } catch (e) {
    e = "Ha ocurrido un error"
    mainContent.removeChild(logoTwice);
    mainContent.textContent = e
    console.log(e)
   }
}

changeLogo()


