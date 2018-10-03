const roommates = require('./roommates/render')
const data = require('./roommates/data')

const roommatesContainer = document.querySelector('#roommates')
roommates.showAll(roommatesContainer)

const newRoommateButton = document.querySelector('#new-roommate-button')
newRoommateButton.addEventListener('click', (event) => {
  event.preventDefault()
  const sidebar = document.querySelector('#sidebar')
  roommates.showNewForm(sidebar)
  
  const form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    //const username = document.querySelector('#username')
    //console.log(username.value)
    //console.log(event.target.username.value)
    
    const {avatar, username, faction, street, suite, city, zipcode} = event.target
    
    const newFriend = {
      'avatar': avatar.value,
      'username': username.value,
      'faction': faction.value,
      'address': {
        'street': street.value,
        'suite': suite.value,
        'city': city.value,
        'zipcode': zipcode.value
      } 
    }
    data.push(newFriend)
    roommates.showAll(roommatesContainer)
  })
})


