import { getCelebs } from "./database.js";


document.addEventListener(
    "click", 
    (clickEvent) => {
        
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("celeb")){
            const [, celebId] = itemClicked.id.split("--")

            for (const celeb of celebrities) {
                if (celeb.id === parseInt(celebId)) {

            window.alert(`${celeb.name} is a ${celeb.sport}`)
                }
            }
        }
    }
)

const celebrities = getCelebs()

export const Celebrities = () => {
    let celebsHTML = "<ol>"

    for (const celeb of celebrities) {
        celebsHTML += `<li id="celeb--${celeb.id}">${celeb.name}</li>`
    }

    celebsHTML += "</ol>"

    return celebsHTML

}