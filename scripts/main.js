const roommates = require('./roommates/render')

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
    const newFriend = {
      'avatar': event.target.avatar.value,
      'username': event.target.username.value,
      'faction': event.target.faction.value,
      'address': {
        'street': event.target.street.value,
        'suite': event.target.suite.value,
        'city': event.target.city.value,
        'zipcode': event.target.zipcode.value
      } 
    }
    data.push(newFriend)

  })
})


