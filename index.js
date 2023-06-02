// function init(){
//     const url = 'http://localhost:3000/menu'
//     fetch(url)
//     .then(response => response.json())
//     .then(menu => menu.forEach((item, index) => {
//         if(index == 0){
//             displayMenu(item)
//         }
//         renderItems(item)
//     })).catch(error => alert(error.message))

//     let cartTotal 

//     document.querySelector('#cart-form').addEventListener('submit', event => {
//         event.preventDefault()
//         const numberToBeAdded = parseInt(document.querySelector('#cart-amount').value)
//         cartTotal.number_in_bag += numberToBeAdded
//         const currentNumberInCart = document.querySelector('#number-in-cart')
//         currentNumberInCart.textContent = parseInt(currentNumberInCart.textContent) + numberToBeAdded
//         event.target.reset()
//     })


//     function renderItems(item){
//         const nameSpan = document.createElement('span')
//         nameSpan.textContent = item.name
//         nameSpan.addEventListener('click', () => displayMenu(item))
//         document.querySelector('#menu-items').append(nameSpan)
   
//     }

//     function displayMenu(item){
//         cartTotal = item
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
    
    let number 

    function displayMenu(item){
        number = item
        document.querySelector('#dish-image').src = item.image 
        document.querySelector('#dish-name').textContent = item.name
        document.querySelector('#dish-description').textContent = item.description
        document.querySelector('#dish-price').textContent = item.price
        document.querySelector('#number-in-cart').textContent = item.number_in_bag
    }

    document.querySelector('#cart-form').addEventListener('submit', event => {
        event.preventDefault()
        const numberToBeAdded = parseInt(document.querySelector('#cart-amount').value)
        number.number_in_bag += numberToBeAdded
        const currentNumberInCart = document.querySelector('#number-in-cart')
        currentNumberInCart.textContent = parseInt(currentNumberInCart.textContent) + numberToBeAdded

        fetch(`${url}/${number.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify(number)
        })

        event.target.reset()
    })

    function renderItems(item){
        const nameSpan = document.createElement('span')
        nameSpan.textContent = item.name
        nameSpan.addEventListener('click', () => displayMenu(item))
        document.querySelector('#menu-items').append(nameSpan)
   
    }

    

}

init()