document.addEventListener('DOMContentLoaded', function(){
    
    const form=document.querySelector('form');
    
    form.onsubmit = function(event){
        event.preventDefault()
        const outputDiv = document.querySelector('#console'); // Select the output div
        outputDiv.textContent = '';
        let name = document.querySelector('#fname').value
        
        let year = document.querySelector('#dbirth').value
        
        
        let dob = year.split("-")[0];
        
        if (!year) {
            alert("Pick a date. Time travel isn’t enabled yet.");
            return;
        }
        
        let message = '';

        if (dob <= 1964)
            message = `${name}, you are a Boomer!`;
        else if (dob <= 1980)
            message = `${name}, you are Generation X!`;
        else if (dob <= 1996)
            message = `${name}, you are a Millennial!`;
        else if (dob <= 2012)
            message = `${name}, you are Generation Z!`;
        else
            message = `${name}, you are Gen Alpha!`;
        
        outputDiv.textContent = message;

        nameInput.value = '';
        yearInput.value = '';
    };
    
}
)
