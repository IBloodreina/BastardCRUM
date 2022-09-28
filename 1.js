const doubleCheese = ["120 gram nöttkött", "cheezy dressing", "tomato"]
const london = ["120 gram nötkött", "originalddressing", "tomato"]
const manhattan = ["120 gram sojabönor", "chipotle dressing", "jalapeno"]
const newYork = ["120 gram nötkött", "sallad", "tomat", "rödlök", "dubbel ost"]
const texas = ["2x120 gram nötkött", "sallad", "jalapeno", "rödlök", "cheddar"]

 
const burgerData = [
    // { hamburgerCode: "01", hamburgerName: "Cheese meal", ingredients: {cheeseMeal}},
    { hamburgerCode: "01", hamburgerName: "Double cheese", ingredients: doubleCheese},
    { hamburgerCode: "02", hamburgerName: "London", ingredients: london},
    { hamburgerCode: "03", hamburgerName: "Manhattan Madness", ingredients: manhattan},
    { hamburgerCode: "04", hamburgerName: "New York", ingredients: newYork},
    { hamburgerCode: "05", hamburgerName: "Texas YiHaa", ingredients: texas},
]

const hamburger = document.querySelector(".bastard .hamburger") 
const ingredients = document.querySelector(".bastard .ingredients")
const burgerPicture = document.querySelector(".bastard img.Burger")
const show = document.querySelector(".optionWrap")

renderBurgers()

function renderBurgers () {
    let html = `<option value="">Välj burgare...</option>`

    for(let c of burgerData) {
        const name = c.hamburgerName
        const code = c.hamburgerCode

        html += `<option value="${code}">${name}</option>`
        
    }
    hamburger.innerHTML = html

}


function burgerChanged() {
    renderIngredients()
}


function renderIngredients() {

    let html= ""

    const selectedBurger = burgerData.find(b => b.hamburgerCode === hamburger.value) 

    for (let m of selectedBurger.ingredients) {
        console.log(m)

        html += `<li value="">${m}</li>`

    }
    
    ingredients.innerHTML = html

    let hcode = selectedBurger.hamburgerCode

    burgerPictureChange(hcode) 

}

function burgerPictureChange(hcode) {

    if (hcode === "01") {
        burgerPicture.src = "burgers/doublecheese.png"
        return
    }

    if (hcode === "02") {
        burgerPicture.src = "burgers/london.png"
        return
    }

    if (hcode === "03") {
        burgerPicture.src = "burgers/manhattan.png"
        return
    }
    
    if (hcode === "04") {
        burgerPicture.src = "burgers/newyork.png"
        return
    }

    if (hcode === "05") {
        burgerPicture.src = "burgers/texas.png"
        return
    }
    
}

function ShowMenu()
{
    optionWrap.classList.remove("hide")
}

