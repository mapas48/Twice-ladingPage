import {mainContent,logoTwice,integrantContent,audioTwice,imgContainer,descriptionContainer,btnNext,nameint,livesint,foodint,descriptionInt,imgInt,vidContainer,videosection,openmodelbtn,modal,closeModal,linkVidInput,submitLinkinput,textlink} from '@/const/const.js';
import {videoMusic} from '@/id/videoMusic.js'
import {Integrants} from '@/id/integrant.js';

integrantContent.hidden = true;
videosection.hidden = true;
function  changeLogo() {
try { setTimeout(() => {
        mainContent.removeChild(logoTwice);
        mainContent.hidden = true;
        integrantContent.hidden = false;
    }, 2100);

} catch (e) {
    
    console.log(e)
}

}
const img = Integrants.map((element)=> element.source);
const details = Integrants.map((element)=> element.details);



let id = 1;
    btnNext.addEventListener("click",()=>{
        if (id == 9) {
        id = 0
        }
        
        imgInt.src = img[id];
        nameint.textContent = details[id].name;
        livesint.textContent = details[id].lives;
        foodint.textContent = details[id].food;
        descriptionInt.textContent = details[id].description;
        console.log(id);
        id++
        
    })


function videosTwice() {
    return new Promise((resolve, reject) => {
    resolve(()=>{
        setTimeout(() => {
            videosection.hidden = false;
        }, 2100);
    })
    reject("ha ocurrido un error")
})}

videosTwice().then((result)=>{
    result()
}).catch((e)=>{
    console.log(e)
})


    openmodelbtn.addEventListener("click",()=>{
        modal.showModal()
    })
    closeModal.addEventListener("click",()=>{
        modal.close()
    })

    // MAGIA
    submitLinkinput.addEventListener("click",()=>{
        if (linkVidInput.value == "") {
            textlink.classList.add("red");
            textlink.textContent = "Debes poner un Link"
        }else if(linkVidInput.value.includes("https://www.youtube.com/watch?v=")){
            textlink.classList.add("green");
            textlink.textContent = "Tu video se ha guardado correctamente"
            modal.close()
        }
        let IdValue = linkVidInput.value.slice(32,43);
        if (!IdValue) {
            textlink.classList.add("red");
            textlink.textContent = "Debes poner un Link Correcto"
        }else{
            try {
                vidContainer.innerHTML += `<div class="bg-white p-2 rounded-sm shadow">
                <lite-youtube videoid="${IdValue}" playlabel="Play: Crayon Physics Deluxe - Trailer HD" class="rounded-sm border-gray-400 border-solid border-3"></lite-youtube>
                <h3 class="text-lg font-black">Twice What is Love?</h3>
                <div class="dateVid flex gap-2">
                 <p class="font-bold">6 años</p>
                <p class="font-bold">840M</p>
                </div>
                </div>`
                
            } catch (error) {
                error = "ha Ocurrido un error"
                console.log(error)
            }
        }
    })





changeLogo()


