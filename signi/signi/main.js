/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
        iconEye = document.getElementById(inputIcon)
    
    iconEye.addEventListener('click', ()=>{
        if(input.type ==== "password"){

            input.type = 'text'
        }else{
            input.type = 'password'
        }
    })
}

const newLocal = 'input-icon'
showHiddenPass('input-passed',newLocal)