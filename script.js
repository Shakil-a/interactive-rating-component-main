// the algorithm is :

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('#submitBtn');
    const numButtons = document.querySelectorAll('.numBtn');
    let btnClickedValue = 0;
    const errorMessage = document.querySelector('#error-message');
    
    // 4. have an event listener to each button and if its clicked the value is stored in the empty variable
        numButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                btnClickedValue = e.target.dataset.number;
            })
        })

    // 5. we then want an event listener on the submit button on if theres a value we want to redirect to the success page with the users rating
    submitBtn.addEventListener('click', () => {
        if (btnClickedValue){
            localStorage.setItem('selectedRating', btnClickedValue);
            window.location.href = "successPage.html"
        }

        // included in the success message and if not we want an error message saying to pick a rating first.
        else {
           errorMessage.innerHTML = "Please pick a rating first"
        }
    })
})
