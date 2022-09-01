const loadDrink = async() => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
    const data = await res.json()
    return(data.drinks)
}
// console.log(drinksElement)
// drinks function 
const displayDrinks = async () => {
  const drinks = await loadDrink()
  console.log(drinks)
    const drinkContainer = document.getElementById('drink-list')
    drinks.forEach(drink => {
      console.log(drink)
      const {strDrinkThumb,strDrink,strInstructions} = drink
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="card w-96 bg-base-100 shadow-xl">
           <figure><img src="${strDrinkThumb}" alt="Shoes" /></figure>
           <div class="card-body">
             <h2 class="card-title">${strDrink}</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div class="card-actions justify-end">
               <button class="btn btn-primary w-full">View Details</button>
             </div>
           </div>
         </div>
        `
        drinkContainer.appendChild(div)
    })
}
displayDrinks()
// loadDrink()