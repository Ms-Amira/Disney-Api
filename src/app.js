document.addEventListener('DOMContentLoaded', function() {
fetch(`https://disneyapi.dev/`)
.then(resp => resp.json())
.then(data => {
    console.log(data)
}).catch(e => {
    console.log(e);
    })
})