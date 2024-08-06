// the algorithm is :

document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('#submitBtn');
    const numButtons = document.querySelectorAll('.numBtn');
    let btnClickedValue = 0;
    
    // 4. have an event listener to each button and if its clicked the value is stored in the empty variable
        numButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                btnClickedValue = e.target.dataset.number;
                console.log(btnClickedValue)
            })
        })

    // 5. we then want an event listener on the submit button on if theres a value we want to redirect to the success page with the users rating
    // included in the success message and if not we want an error message saying to pick a rating first.
})
