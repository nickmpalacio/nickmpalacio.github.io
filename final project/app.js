
let boroughName
let streetName


function getData(){

    let resturantName = document.getElementById('restaurantInput').value.toUpperCase()
    const url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' + 'dba=' + resturantName

    fetch (url)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        console.log(resturantName)
        console.log(url)
    })
    .catch((err) => console.log('something went wrong', err))
}

document.getElementById("submit").addEventListener('click', getData)
