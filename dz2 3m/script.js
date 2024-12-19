let btn = document.getElementById('btn1')
let root = document.getElementById('root1')
btn.addEventListener('click', function(e){
    e.preventDefault()
    let user = document.getElementById('user1')
    let id = user.value
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        
        root.innerHTML += `<div><h1>${data.name}</h1><h1>${data.username}</h1><h1>${data.phone}</h1></div>`
    })
})
