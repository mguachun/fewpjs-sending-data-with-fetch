// Add your code here
//create a method that takes 2 arg called submitData
function submitData( name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        })
    })
    // call the response and parse it in JS Object
    .then(function (response){
        return response.json()
    })
    //access JS Object and find new id, append value to the DOM
    .then(function (object) {
        document.body.innerHTML = object["id"]
    })
    //make a catch that expects to received an obj w=on an error w/property message
    .catch(function (error){
        document.body.innerHTML = error.message
    })
}