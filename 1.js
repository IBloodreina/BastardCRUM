const cheeseMeal = ["cheese", "cheezy dressing", "tomato"]
const spicyBurger = ["cheese", "cheezy dressing", "tomato"]
const veganTexas = ["vegan cheese", "chipotle dressing", "jalapeno"]
 
const burgerData = [
    // { hamburgerCode: "01", hamburgerName: "Cheese meal", ingredients: {cheeseMeal}},
    { hamburgerCode: "01", hamburgerName: "Cheese meal", cheeseMeal},
    { hamburgerCode: "02", hamburgerName: "Spicy meal", spicyBurger},
    { hamburgerCode: "03", hamburgerName: "Vegan texas meal", veganTexas},
]
 
const hamburger = document.querySelector(".bastard .hamburger") 
const ingredients = document.querySelector(".bastard .ingredients")
 
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