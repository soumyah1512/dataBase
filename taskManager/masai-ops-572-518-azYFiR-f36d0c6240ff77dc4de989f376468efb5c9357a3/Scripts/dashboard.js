// Write code related to dashboard page here

let tasks = JSON.parse(localStorage.getItem('task-list'))
let priority = JSON.parse(localStorage.getItem('priority-list')) || []

let table = document.querySelector('tbody')

display(tasks)

function display(data){
    document.getElementById('task-count').innerText = data.length
    table.innerHTML = ''
    data.map((el,ind) => {
        let tr = document.createElement('tr')
    
        let td1 = document.createElement('td')
        td1.innerText = el.name
        let td2 = document.createElement('td')
        td2.innerText = el.description
        let td3 = document.createElement('td')
        td3.innerText = el.start
        let td4 = document.createElement('td')
        td4.innerText = el.end
        let td5 = document.createElement('td')
        td5.innerText = el.priority
        let td6 = document.createElement('td')
        td6.innerText = 'Add'

        td6.addEventListener('click',function(){
            // console.log(el)
            priority.push(el)
            localStorage.setItem('priority-list',JSON.stringify(priority))
            tasks = tasks.filter((el,i) => ind !== i)
            // console.log(tasks)
            // tasks.splice(ind,1)
            localStorage.setItem('task-list',JSON.stringify(tasks))
            display(tasks)
        })
    
        tr.append(td1,td2,td3,td4,td5,td6)
    
        table.append(tr)
    })
}


let filter = document.getElementById('filter')

filter.addEventListener('change', function(){
    // console.log(filter.value)
    let filtered = filter.value

    if(filtered === '')display(tasks)
    else
    {
        let filteredData = tasks.filter((el) => el.priority === filtered)
        
        // When you use filter, it will go through the array's elements
        // one by one, and then return those elements
        // whose priority is the selected priority (filtered)
        
        display(filteredData)
    }

})


// let arr = []

// 11:30-02:00

// td3.innerText = "Del";
//     td3.addEventListener("click", () => {
//       LSData = LSData.filter((el, i) => {
//         if (index === i) {
//           return false;
//         } else {
//           return true;
//         }
//       });
