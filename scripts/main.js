import { Kids } from "./Kids.js"
import { Celebrities } from "./Celebrities.js"
import { Pairings } from "./Pairings.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Make A Memory For Kids</h1>
<article class="details">
    <section class="detail--column list details__kids">
        <h2>Kids</h2>
        ${Kids()}
    </section>

    <section class="detail--column list details__celebs">
        <h2>Celebrities</h2>
        ${Celebrities()}
    </section>
</article>

<article>
    <section class="detail--column list details__pairings">
        <h2>Pairings</h2>
        ${Pairings()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML