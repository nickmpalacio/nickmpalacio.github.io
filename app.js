



function getData(){

    let boroughName = document.getElementById('boroughInput').value.toString()
    let reformattedBoroughName = capitalize(boroughName)
    let streetName = document.getElementById('streetInput').value.toUpperCase()
    let resturantName = document.getElementById('restaurantInput').value.toUpperCase()
    console.log(boroughName)

    //need to add in if statement to use different urls when user inputs all search terms, 2, or just 1

    let url

    if (reformattedBoroughName.value =! ''){
         url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' + 'dba=' + resturantName + '&boro=' + reformattedBoroughName
    } else {
         url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' + 'dba=' + resturantName
    }

    fetch (url)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        console.log(resturantName)
        console.log(url)
        
    })
    .then(() => document.getElementById('restaurantInput').value = '')    
    .catch((err) => console.log('something went wrong', err))
}

document.getElementById("submit").addEventListener('click', getData)


function capitalize(string){

    return string.charAt(0).toUpperCase() + string.slice(1)
}