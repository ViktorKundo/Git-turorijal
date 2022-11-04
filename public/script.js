const { freemem } = require("os");

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const name = document.getElementById("name");

form.onsubmit = async e =>{
    e.preventDefault();
    try{
        const body ={
            email: email.value,
            password: password.value,
            name: name.value
        }
        const res = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type":"aplication/json"
            },
            body: JSON.stringify(body)
        })
        const json = await res.json();
        if(json.ok) throw new Error(json.message);
        alert("Uspesno registrovan");
    }
    catch(error){
        alert(error.message);
    }
}