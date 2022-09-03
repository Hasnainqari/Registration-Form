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
function registeration (){
    sendBtn.addEventListener('click', (e) => {
        let city = document.getElementById('city');
        let course = document.getElementById('course');
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let phone = document.getElementById('phone');
        let cnic = document.getElementById('cnic');
    
        //Set Value And LocalStorage
        
        city = city.value;
        localStorage.setItem('city', city);
        
        course = course.value;
        localStorage.setItem('course', course);
    
        name = name.value;
        localStorage.setItem('name', name);
    
        email = email.value;
        localStorage.setItem('email', email);
    
        phone = phone.value;
        localStorage.setItem('phone', phone);
    
        cnic = cnic.value;
        localStorage.setItem('cnic', cnic);
    
    });
}
registeration();