
function getData(){

    const clearRestaurantResult = document.getElementById('restaurantTitle')
    clearRestaurantResult.replaceChildren()
    const clearLocations = document.getElementById('restaurantLocationList')
    clearLocations.replaceChildren()
    const clearInspections = document.getElementById('inspectionDateDetail')
    clearInspections.replaceChildren()
    const clearViolations = document.getElementById('violationDetail')
    clearViolations.replaceChildren()

    const boroughName = document.getElementById('boroughInput').value.toString()
    const reformattedBoroughName = capitalize(boroughName)
    const streetName = document.getElementById('streetInput').value.toUpperCase()
    const resturantName = document.getElementById('restaurantInput').value.toUpperCase()
   

    //need to add in if statement to use different urls when user inputs all search terms, 2, or just 1

    let url

    if ((resturantName != '') && (reformattedBoroughName == '') && (streetName == '')){
        url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' + 'dba=' + resturantName
    } else if ((resturantName != '') && (reformattedBoroughName != '') && (streetName == '')){
        url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' + 'dba=' + resturantName + '&boro=' + reformattedBoroughName
    } else if ((resturantName != '') && (reformattedBoroughName != '') && (streetName != '')) {
         url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' + 'dba=' + resturantName + '&boro=' + reformattedBoroughName + '&street=' + streetName
    } else if((resturantName == '') && (reformattedBoroughName != '') && (streetName == '')){
        url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' +  'boro=' + reformattedBoroughName
    } else if((resturantName =='') && (reformattedBoroughName != '') && (streetName != '')){
        url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' +  'boro=' + reformattedBoroughName + '&street=' + streetName
    } else if((resturantName == '') && (reformattedBoroughName == '') && (streetName != '')){
        url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' + 'street=' + streetName
    } else if((resturantName == '') && (reformattedBoroughName == '') && (streetName == '')){
        //add in some message to user about inputting search data
        url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?'
    } else {
        url = 'https://data.cityofnewyork.us/resource/43nn-pn8j.json?' + 'dba=' + resturantName + '&street=' + streetName
    }

    fetch (url)
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        console.log(url)
        for (i in data){

                const newRestaurantItem = document.createElement('p')
                const newRestaurant = document.createTextNode(data[i].dba)
                newRestaurantItem.appendChild(newRestaurant)
                const restaurantElem = document.getElementById('restaurantTitle')
                restaurantElem.appendChild(newRestaurantItem)

                const newLocationItem = document.createElement('p')
                const newLocation = document.createTextNode(data[i].building + ' ' + data[i].street + ' ' + data[i].boro)
                newLocationItem.appendChild(newLocation)
                const elem = document.getElementById('restaurantLocationList')
                elem.appendChild(newLocationItem)

                const newInspectionItem = document.createElement('p')
                const newInspectionDate = document.createTextNode(data[i].inspection_date.slice(0, 10))
                newInspectionItem.appendChild(newInspectionDate)
                const elem2 = document.getElementById("inspectionDateDetail")
                elem2.appendChild(newInspectionItem)

                const newViolationItem = document.createElement('p')
                const newViolation = document.createTextNode('🛑' + data[i].violation_description + ' ⏯️ CRITICALITY? ' + data[i].critical_flag)
                newViolationItem.appendChild(newViolation)
                const elem3 = document.getElementById('violationDetail')
                elem3.appendChild(newViolationItem)
                
        }
    })
    .then(() => {
        document.getElementById('restaurantInput').value = ''
        document.getElementById('boroughInput').value = ''
        document.getElementById('streetInput').value = ''
    })    
    .catch((err) => console.log('something went wrong', err))
}


document.getElementById("submit").addEventListener('click', getData)


function capitalize(string){

    return string.charAt(0).toUpperCase() + string.slice(1)
}
