import { getCelebs, getKids } from "./database.js";

const kids = getKids()
const celebrities = getCelebs()

export const Pairings = () => {
    let pairingsHTML = "<ul>"
    
   
        for (const kid of kids) {
            for (const celeb of celebrities) {
                if (celeb.id === kid.celebId)
            

            pairingsHTML += `<li>${kid.name} will be making memories with ${celeb.name}, a ${celeb.sport} star, by ${kid.wish}</li>
            `
        }
    }
        pairingsHTML += "</ul>"
    
    
        return pairingsHTML
    }


