const url = '//didsell.local/api';

const datax = {
    email: "enzo@brdsoft.com.br",
    password: "Mudar123@"
}

fetch(url+"/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(datax)
})
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        fetch(url+"/customer",{
            method: "GET",
            headers: { 
                "Authorization": "Bearer "+data.token 
            }
        })
            .then (response => {
                return response.json();
            })
            .then (data => {
                data.forEach (customer => {
                    console.log(customer);
                })
            })
    })