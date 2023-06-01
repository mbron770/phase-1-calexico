// function init (){
//     const url = 'http://localhost:3000/menu'
//     fetch(url)
//     .then(response => response.json())
//     .then(menu => menu.forEach((item, index) => {
//         if (index == 0){
//             renderItemDetails(item)
//         }
//         renderItems(item)
//     })).catch(e => alert(e.message))
//     document.querySelector('#cart-form').addEventListener('submit', e => {
//         e.preventDefault()
//         const numberToAddText = document.querySelector('#cart-amount').value //= menu.number_in_bag
//         const numberInCartSpan = document.querySelector('#number-in-cart')
//         numberInCartSpan.textContent = parseInt(numberInCartSpan.textContent) + parseInt(numberToAddText)
//         e.target.reset()
        
//     })

//     function renderItems(item){
//         const itemName = document.createElement('span')
//         itemName.textContent = item.name
//         itemName.addEventListener('click', () => renderItemDetails(item))
//         document.querySelector('#menu-items').append(itemName)
//     }

//     function renderItemDetails(item){
//         document.querySelector('#dish-image').src = item.image
//         document.querySelector('#dish-name').textContent = item.name
//         document.querySelector('#dish-description').textContent = item.description
//         document.querySelector('#dish-price').textContent = item.price
//         document.querySelector('#number-in-cart').textContent = item.number_in_bag
//     }

// }

// init()

function init(){
    const url = 'http://localhost:3000/menu'
    fetch(url)
    .then(response => response.json())
    .then(menu => menu.forEach((item, index) => {
        if(index == 0){
            displayMenu(item)
        }
        renderItems(item)
    })).catch(error => alert(error.message))

    document.querySelector('#cart-form').addEventListener('submit', event => {
        event.preventDefault()
        const numberToBeAdded = document.querySelector('#cart-amount').value
        const currentNumberInCart = document.querySelector('#number-in-cart')
        currentNumberInCart.textContent = parseInt(currentNumberInCart.textContent) + parseInt(numberToBeAdded)
        event.target.reset()
    })


    function renderItems(item){
        const nameSpan = document.createElement('span')
        nameSpan.textContent = item.name
        nameSpan.addEventListener('click', () => displayMenu(item))
        document.querySelector('#menu-items').append(nameSpan)
   
    }

    function displayMenu(item){
        document.querySelector('#dish-image').src = item.image 
        document.querySelector('#dish-name').textContent = item.name
        document.querySelector('#dish-description').textContent = item.description
        document.querySelector('#dish-price').textContent = item.price
        document.querySelector('#number-in-cart').textContent = item.number_in_bag
    }

    
}

init()