let form = document.querySelector('form');

const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const pass = document.getElementById('pass')
const conpass = document.getElementById('conpass')

const name_error = document.getElementById('name_error')
const phone_error = document.getElementById('phone_error')
const pass_error = document.getElementById('pass_error')
const con_error = document.getElementById('con_error')

form.addEventListener('submit', sendData)
form.addEventListener('submit',(e) => {
                e.preventDefault();
                if(name.value.length >= 20){
                    name_error.innerHTML = 'Name cannot be more than 20 characters'
                }else{
                    name_error.innerHTML = ''
                }

                if(phone.value.length !=10){
                    phone_error.innerHTML = 'Please enter a valid phone number'
                }else{
                    phone_error.innerHTML = ''
                }

                if(pass.value.length >=20){
                    pass_error.innerHTML = 'Password too long'
                }else if(pass.value.length <=6){
                    pass_error.innerHTML = 'Password too short'
                }else{
                    pass_error.innerHTML = '';
                    if(pass.value != conpass.value){
                        pass_error.innerHTML = 'Passwords do not match';
                        con_error.innerHTML = 'Passwords do not match';
                    }else{
                        pass_error.innerHTML = '';
                        con_error.innerHTML = '';
                    }
                }
            })

function sendData(e){
    e.preventDefault();

    let formData = new FormData(form);

    let params = {
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: formData.get('name'),
            email:formData.get('email'),
            phone:formData.get('phone'),
            message:formData.get('message')
        }),
        method:"POST"
    }

    fetch('http://localhost:3000/formData', params)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
    })
    .catch(error => {
        console.error('Error:',err)
    });
}

