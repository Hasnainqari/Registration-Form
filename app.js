// Get All Value

let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//Now Working For Reset Btn
resetBtn.addEventListener('click', (e) => {
    let city = document.getElementById('city');
    let course = document.getElementById('course');
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let cnic = document.getElementById('cnic');

    //Set Value
    city.value = '';
    course.value = '';
    name.value = '';
    email.value = '';
    phone.value = '';
    cnic.value = '';

});

//Now Start SendBtn
    sendBtn.addEventListener('click', (e) => {
        let city = document.getElementById('city');
        let course = document.getElementById('course');
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let phone = document.getElementById('phone');
        let cnic = document.getElementById('cnic');


    });


function formData(){
    var registrationForm = 
        {
            cityName: city.value,
            courseName: course.value,
            name: name.value,
            email: email.value,
            phone: phone.value,
            cnic: cnic.value,
        } 
    
    localStorage.setItem("Data",JSON.stringify(registrationForm));
}
