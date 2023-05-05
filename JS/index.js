
const firstName = document.querySelector('#FirstName')
const LastName = document.querySelector('#LastName')
const Password = document.querySelector('#Password')
const EmailAddress = document.querySelector('#EmailAddress')
const icon01 = document.querySelector('.fname .icon')
const icon02 = document.querySelector('.lname .icon')
const icon03 = document.querySelector('.email .icon')
const icon04 = document.querySelector('.pw .icon')   
const trial = document.querySelector('.trial')
const Claim = document.querySelector('.Claim')
const warn01 = document.querySelector(' .fname .warn')
const warn02 = document.querySelector('.lname .warn')
const warn03 = document.querySelector('.email .warn')
const warn04 = document.querySelector('.pw .warn')

const form = document.querySelector('form')



form.addEventListener('submit',function(e) {
  e.preventDefault();

  var p = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if(firstName.value==""){
    firstName.style.border = "3px solid hsl(0,75%,50%)"
    icon01.classList.add('show')

    warn01.classList.add('show')
  }
  else{
    firstName.style.border = "3px solid hsl(154,54%,59%)"
    icon01.classList.remove('show')

    warn01.classList.remove('show')
  }
  if(LastName.value == ""){
    LastName.style.border = "3px solid hsl(0,75%,50%)"
    icon02.classList.add('show')
    warn02.classList.add('show')
  }
  else{
    LastName.style.border = "3px solid hsl(154,54%,59%)"
    icon02.classList.remove('show')

    warn02.classList.remove('show')
  }
  if(!EmailAddress.value.match(p)){
    EmailAddress.style.border = "3px solid hsl(0,75%,50%)"
    icon03.classList.add('show')
    EmailAddress.style.color = " hsl(0,75%,50%)"
    
    warn03.classList.add('show')
  }
  else{
    EmailAddress.style.border = "3px solid hsl(154,54%,59%)"
    icon03.classList.remove('show')

    warn03.classList.remove('show')
  }
  if(Password.value == ""){
    Password.style.border = "3px solid hsl(0,75%,50%)"
    icon04.classList.add('show')
    warn04.classList.add('show')
  }
  else{
    Password.style.border = "3px solid hsl(154,54%,59%)"
    icon04.classList.remove('show')

    warn04.classList.remove('show')
  }

 })
