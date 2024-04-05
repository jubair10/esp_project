async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
            throw new Error('API request failed');
        }
        const data = await response.json();
        return data.slip.advice; // Return the advice
    } catch (error) {
        console.error(error); // Example: Logging the error to the console
        return null; // Return null in case of error
    }
}

const adviceElement = document.querySelector('#advice');
const btn = document.querySelector('#btn');

const btnImage = document.querySelector('#btn-image');
console.log(btnImage)
btn.addEventListener('click', async function() {
	btnImage.style.transform = 'rotate(360deg)';
    const data = await fetchAdvice(); // Fetch the advice asynchronously
    if (data !== null) {
		adviceElement.innerHTML = data; // Update the advice in the DOM
    } else {
		adviceElement.innerHTML = "Failed to fetch advice. Please try again later."; // Handle error case
    }
});
