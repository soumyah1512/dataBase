// Write code related to Home page here 

let data = JSON.parse(localStorage.getItem('task-list')) || []

let form  = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    console.log(form);
    let obj = {
        name: form.name.value,
        desc: form.desc.value,
        start: form.start.value,
        end: form.end.value,
        priority: form.priority.value
    };

    console.log(obj);
    data.push(obj);
    localStorage.setItem('task-list',JSON.stringify(data))
})