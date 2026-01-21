document.addEventListener('DOMContentLoaded', function(){
    
    const form=document.querySelector('form');
    
    form.onsubmit = function(event){
        event.preventDefault()
        const outputDiv = document.querySelector('#console'); // Select the output div
        outputDiv.textContent = '';
        const nameInput = document.querySelector('#fname'); // Select the name input element
        const yearInput = document.querySelector('#dbirth'); // Select the date input element

        const name = nameInput.value; // Get the value of the name input
        const year = yearInput.value; // Get the value of the date input
        
        
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
