//variables

const form = document.querySelector('form')
const list = document.querySelectorAll('.active')
const object = ['First Name', 'Last Name', 'Email', 'Password']


// event listener

form.addEventListener('submit', e => {
    e.preventDefault()
    let counter = 0
    const email = form.email
    list.forEach( test => {
        if( test.value.trim() === ''){
            test.nextElementSibling.textContent = `${object[counter]} cannot be empty`
            test.nextElementSibling.style.display = 'block'
            test.style.marginBottom = '0px'
            test.classList.add('border')
            test.parentElement.classList.add('big-error')
        
        }else{
            test.parentElement.classList.remove('big-error')
            test.nextElementSibling.style.display = 'none'
            test.style.marginBottom = '1.5rem'
            test.classList.remove('border')
            
        }
        counter++
    })

    
    if(!validateEmail(email.value)){
        email.nextElementSibling.textContent = `Looks like this is not an email`
        email.setAttribute('placeholder', 'email@example/com')
    }else{
        console.log('right mail')
    }

})

//form validation func

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

