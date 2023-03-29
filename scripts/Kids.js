import { getKids } from "./database.js";


document.addEventListener(
    "click", 
    (clickEvent) => {
        
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("kid")){
            const [, kidId] = itemClicked.id.split("--")

            for (const kid of kids) {
                if (kid.id === parseInt(kidId)) {

            window.alert(`${kid.name} wishes to ${kid.wish}`)
                }
            }
        }
    }
)



const kids = getKids()

export const Kids = () => {
    let kidsHTML = "<ol>"

    for (const kid of kids) {
        kidsHTML += `<li id="kid--${kid.id}">${kid.name}</li>`
    }

    kidsHTML += "</ol>"

    return kidsHTML
}

