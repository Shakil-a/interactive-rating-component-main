document.addEventListener('DOMContentLoaded', () => {
    const rating = localStorage.getItem('selectedRating');
    const ratingPara = document.querySelector('#selectedRatingPara');
    const body = document.querySelector('body');
    
    if(rating){
        ratingPara.textContent = `You selected ${rating} out of 5`
    }
    else{
        alert('please select a rating')
    }

    body.addEventListener('click', () => {
        window.location.href = "index.html";
        
    })
})

