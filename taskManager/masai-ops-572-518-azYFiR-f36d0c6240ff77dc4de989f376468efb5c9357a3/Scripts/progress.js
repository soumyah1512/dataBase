// Write code for the Progress page here  

let progress = JSON.parse(localStorage.getItem('priority-list'))
let done = JSON.parse(localStorage.getItem('done-list')) || []

let table = document.querySelector('tbody')

display(progress)

function display(data){
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
            done.push(el)
            localStorage.setItem('done-list',JSON.stringify(done))
            progress = progress.filter((el,i) => ind !== i)
            // progress.splice(ind,1)
            localStorage.setItem('priority-list',JSON.stringify(progress))
            display(progress)
        })
    
        tr.append(td1,td2,td3,td4,td5,td6)
    
        table.append(tr)
    })
}
