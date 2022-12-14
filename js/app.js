const loadDrink = async(drinkName) => {
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`)
    const data = await res.json()
    displayDrinks(data.drinks)
}
// console.log(drinksElement)
// drinks function 
const displayDrinks = (drinks) => {
  const drinkContainer = document.getElementById('drink-list')
  drinkContainer.textContent =``
  // console.log(drinks.length)
  // console.log(drinks.length)
  // not found container
  const notFound = document.getElementById('not-found')
  console.log(notFound)
  if (drinks === null) {
    console.log('notFound')
    notFound.classList.remove('hidden')
  }
  else {
    console.log('found')
    notFound.classList.add('hidden')
  }
    drinks && drinks.forEach(drink => {
      console.log(drink)
      const {strDrinkThumb,strDrink,idDrink} = drink
        const div = document.createElement('div')
        div.innerHTML = `
         <div class="card w-96 bg-base-100 shadow-xl">
           <figure><img src="${strDrinkThumb}" alt="Shoes" /></figure>
           <div class="card-body">
             <h2 class="card-title">${strDrink}</h2>
             <p>If a dog chews shoes whose shoes does he choose?</p>
             <div class="card-actions justify-end">
             <a href="#my-modal-2" class="btn" onclick="drinkDetails('${idDrink}')">open modal</a>
             </div>
           </div>
         </div>
        `
        drinkContainer.appendChild(div)
    })
  loading(false)
}
// loading function 
const loading = (isLoading) =>{
  const loadingContainer = document.getElementById('loading')
  if (isLoading === true) {
    loadingContainer.classList.remove('hidden')
  }
  else {
    loadingContainer.classList.add('hidden')
  }
}
// search processing
const processSearch = () => {
  loading(true)
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value
  loadDrink(searchText)
  searchField.value = ''
}
// event listener in search field
document.getElementById('search-field').addEventListener('keypress', (event) => {
  const enterPress = event.key

  if (enterPress === 'Enter') {
    processSearch()
  }
})
// function for product details modal
const drinkDetails = async(id) => {
  const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  const data = await res.json()
  displayDetails(data.drinks)
}
// display details 
const displayDetails = (singleDrink) => {
  const details = document.getElementById('details')
  singleDrink && singleDrink.forEach(drink => {
    details.innerHTML = ''
    const { strDrinkThumb,strDrink, strAlcoholic, strCategory, strInstructions } = drink
    console.log(strDrink, strAlcoholic)
    details.innerHTML = `
    <div class="modal-box">
      <img class="h-52 w-full" src="${strDrinkThumb}" alt="">
       <p>${strInstructions}</p>
       <div class="modal-action">
       <a href="#" class="btn btn-sm btn-circle absolute right-2 top-2">???</a>
       </div>
    </div>
    `
    
  })
}


// displayDrinks()
loadDrink('vodka')