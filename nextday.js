import { eggs, farm } from "./start.js"


const nextday = () =>{
    const change = eggs.map((egg, index, arr) => {
        if (Math.random() > 0.5 ) {
            if(egg ==="🥚") arr[index]= "🐣"
            else if (egg === "🐣") arr[index] = "🐤"
            else if (egg === "🐤") arr[index] = "🐔"
        }
        
        else arr[index] = egg
    })
    while (farm.firstChild){
        farm.firstChild.remove();
    }
    eggs.forEach(egg => {
        farm.insertAdjacentHTML("beforeend", `
          <div class = "eggbox">${egg}</div>
        `)
    })
}

document.getElementById('nextbuttton').addEventListener('click', nextday)