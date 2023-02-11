// Write code related to Done page here

// Write code for the Progress page here 

let done = JSON.parse(localStorage.getItem('done-list'))

display(done)
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
    
        td1.innerText = el.name;
        td2.innerText = el.desc;
        td3.innerText = el.start;
        td4.innerText = el.end;
        td5.innerText = el.priority;

    
        tr.append(td1,td2,td3,td4,td5);
        document.querySelector('tbody').append(tr)
    })
}