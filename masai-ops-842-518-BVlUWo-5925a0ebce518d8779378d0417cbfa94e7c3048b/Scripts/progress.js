// Write code for the Progress page here 

let done = JSON.parse(localStorage.getItem('done-list')) || []

let priList = JSON.parse(localStorage.getItem('priority-list'))

display(priList)
function display(arr){
    // document.getElementById('task-count').innerText = arr.length
    document.querySelector('tbody').innerHTML = ''
    arr.map((el,ind) => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
    
        td1.innerText = el.name;
        td2.innerText = el.desc;
        td3.innerText = el.start;
        td4.innerText = el.end;
        td5.innerText = el.priority;
        td6.innerText = 'Add'
    
        // after clicking on Add
        // delete from DOM
        // delete from ls (task-list)
        // add to ls (priority-list)
        td6.addEventListener('click', function(){
            done.push(el)
             // add to ls (priority-list)
            localStorage.setItem('done-list',JSON.stringify(done))
            // modifying actual data delete from ls (task-list)
            priList.splice(ind,1)
            // displaying modified data
            display(priList)
            // updated ls (task-list)
            localStorage.setItem('priority-list',JSON.stringify(priList))
        })
    
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector('tbody').append(tr)
    })
}