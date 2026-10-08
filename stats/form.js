// Script to submit the ideas form

function submitForm(event) {
	event.preventDefault(); // Prevent default response

	const form = document.getElementById('form');
	const formData = new FormData(form);

	// Send the form data using fetch
	fetch('https://supernaturalist.pythonanywhere.com/submit', {
		method: 'POST',
		body: formData
	})
	.then(response => response.text())
	.then(data => {
		document.getElementById('responseMessage').innerText = data;
	})
	.catch(error => {
		console.error('Error:', error);
	});
}
