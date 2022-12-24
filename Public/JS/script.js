function onsubmit(e) {
    e.preventDefault()
    document.querySelector('#image').src = ''
    document.querySelector('.msg').textContent = ''
    const prompt = document.querySelector('#prompt').value
    const size = document.querySelector('#size').value

    if (prompt === '') {
        alert('oops at least add some text Ex. cat in the toilet')
        return

    }
    imageGenerator(prompt, size)
}
async function imageGenerator(prompt, size) {
    try {

        displaySpinner()
        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt,
                size,
            }),
        });

        if (!response.ok) {
            hideSpinner()
            throw new Error('we are not able to create image')
        }
        const data = await response.json()
        hideSpinner()
        const imageUrl = data.data
        document.querySelector('#image').src = imageUrl
    }
    catch (err) {
        document.querySelector('.msg').textContent = err

    }

}
function displaySpinner() {
    document.querySelector('.spinner').classList.add('show')
}
function hideSpinner() {
    document.querySelector('.spinner').classList.remove('show')
}
document.querySelector('#image-form').addEventListener('submit', onsubmit)