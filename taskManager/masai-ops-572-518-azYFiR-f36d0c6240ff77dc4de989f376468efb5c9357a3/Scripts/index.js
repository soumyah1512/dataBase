// Write code related to Home page here 

let form = document.querySelector('form')
let data = JSON.parse(localStorage.getItem('task-list')) || []

// console.log(form)

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let obj = {
        name: form[0].value,
        description: form[1].value,
        start: form[2].value,
        end: form[3].value,
        priority: form[4].value
    }
    
    data.push(obj)

    localStorage.setItem('task-list',JSON.stringify(data))

})

// localStorage
// key:value
// key -> Name
// value -> data (Array of objects)
// localStorage.setItem('keyName', JSON.stringify(data))
// JSON.parse(localStorage.getItem('keyName'))