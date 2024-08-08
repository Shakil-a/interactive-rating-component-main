// the algorithm is :

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('#submitBtn');
    const numButtons = document.querySelectorAll('.numBtn');
    let btnClickedValue = 0;
    const errorMessage = document.querySelector('#error-message');
    

    // 4. have an event listener to each button and if its clicked the value is stored in the empty variable
    const handleButtonClick = (e) => {
        btnClickedValue = e.target.dataset.number;
    }

    // 5. we then want an event listener on the submit button on if theres a value we want to redirect to the success page with the users rating

    const handleSubmitClick = () => {
        if (!btnClickedValue) {
            displayErrorMessage("Please pick a rating first");
            return;
        }
        saveRatingAndRedirect(btnClickedValue);
    };
    

    const saveRatingAndRedirect = (rating) => {
        localStorage.setItem('selectedRating', rating);
        window.location.href = "successPage.html";
    };
    
    const displayErrorMessage = (message) => {
        errorMessage.innerHTML = message;
    };
    
    const clearErrorMessage = () => {
        errorMessage.innerHTML = "";
    };

    const addEventListenersToButtons = (buttons, event, handler) => {
        buttons.forEach(button => button.addEventListener(event, handler));
    };
    
    addEventListenersToButtons(numButtons, 'click', handleButtonClick);
    submitBtn.addEventListener('click', handleSubmitClick);
})
