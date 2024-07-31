
const name = document.getElementById('name');
const password = document.getElementById('password');
const button = document.getElementById('button');

function user(name, password){
   if(name.value != 'Husanboy'){
    alert('Ismingizni tugri kiriting');
    name.style.outlineColor = 'red';
    return false
   }

   if(password.value != 19051905){
    alert('Men bergan kodni yoz');
    return false;
   }
    return true;
}




button && button.addEventListener('click', function(event){
    event.preventDefault();

   isVali = user(name, password);
   if(!isVali){
    return;
   }else{
    let cut = window.location.href.split(' ');
    window.location.assign(`${cut}/html/main.html`)
   }
   
})