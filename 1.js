const burgerData = [

    { hamburgerCode: "01", hamburgerName: "Cheese meal", burgerIng},
    { hamburgerCode: "02", hamburgerName: "Spicy meal", spicyBurger},
    { hamburgerCode: "03", hamburgerName: "Vegan texas meal", veganTexas},
]

const veganTexas = ["vegan cheese", "chipotle dressing", "jalapeno"]
const cheeseMeal = ["cheese", "cheezy dressing", "tomato"]
const spicyBurger = ["cheese", "cheezy dressing", "tomato"]

const hamburger = document.querySelector(".bastard .hamburger") 

function burgerChanged() {



}
/*renderCounty()

function renderCounty() {
    let html = `<option value="">Välj län...</option>`

    for(let c of countyData) {
        const name = c.countyName
        const code = c.countyCode

        html += `<option value="${code}">${code} ${name}</option>`
        
    }
    county.innerHTML = html
}

function renderMunicipality() {

    if (county.value == "") {
        municipality.classList.add("hide")
        return
    }
    let html= `<option value="">Välj kommun...</option>`

    const selectedCounty = countyData.find(c=>c.countyCode == county.value)

    for (let m of selectedCounty.municipalities) {
        const municipalityFullCode = selectedCounty.countyCode + m.code
        html += `<option value="${m.code}">${municipalityFullCode} ${m.name}</option>`

    }

    municipality.innerHTML = html

    municipality.classList.remove("hide")

}

function countyChanged() {
    renderMunicipality()
    result.classList.add("hide")
}

// todo: write this function

function municipalityChanged() {

   todo: add code here 
}*/