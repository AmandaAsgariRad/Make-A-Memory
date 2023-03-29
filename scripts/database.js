const database = {
    kids: [{
        id: 1,
        name: "Christian Swindles",
        wish: "Throw the opening pitch at a baseball game",
        celebId: 2
    }, {
        id: 2,
        name: "Findlay Dumini",
        wish: "Drive a race car",
        celebId: 6
    }, {
        id: 3,
        name: "Micheil Guerrazzi",
        wish: "Visit the White House",
        celebId: 3
    }, {
        id: 4,
        name: "Karine McKennan",
        wish: "Drive a race car",
        celebId: 1
    }, {
        id: 5,
        name: "Cissy Weavers",
        wish: "Disney World trip and spend the day with Mickey Mouse",
        celebId: 8
    }, {
        id: 6,
        name: "Bendick Standbrooke",
        wish: "Sing a song with Taylor Swift and pet her cats",
        celebId: 7
    }, {
        id: 7,
        name: "Ethyl Capnell",
        wish: "Dunk on LeBron James",
        celebId: 4
    }, {
        id: 8,
        name: "Elisha Betchley",
        wish: "Ride on a helicopter",
        celebId: 9
    }, {
        id: 9,
        name: "Enrica Mathivan",
        wish: "Take care of ponies on a farm and spend the whole night riding one",
        celebId: 10
    }, {
        id: 10,
        name: "Humfrid Madner",
        wish: "Put out a fire as a fireman after riding on the truck with the siren on",
        celebId: 5
    }],

    celebrities: [{
        id: 1,
        name: "Alphonse Meron",
        sport: "Hockey"
    }, {
        id: 2,
        name: "Damara Penecust",
        sport: "Basketball"
    }, {
        id: 3,
        name: "Anna Bowton",
        sport: "Hockey"
    }, {
        id: 4,
        name: "Hunfredo Drynan",
        sport: "Baseball"
    }, {
        id: 5,
        name: "Elmira Bick",
        sport: "Gymnastics"
    }, {
        id: 6,
        name: "Bernie Dreger",
        sport: "Gymnastics"
    }, {
        id: 7,
        name: "Rolando Gault",
        sport: "Football"
    }, {
        id: 8,
        name: "Tiffanie Tubby",
        sport: "Basketball"
    }, {
        id: 9,
        name: "Tomlin Cutill",
        sport: "Hockey"
    }, {
        id: 10,
        name: "Arv Biddle",
        sport: "Football"
    }]
}

export const getKids = () => {
    return database.kids.map(kid => ({...kid}))
}

export const getCelebs = () => {
    return database.celebrities.map(celeb => ({...celeb}))
}
