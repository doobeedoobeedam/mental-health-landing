

function isNumber(str) {
    return !isNaN(str);
}

function checkboxIsChecked() {
    const checkbox = document.getElementById('status');
    return checkbox.checked;
}

function validateFormData(formData) {
    return (
        formData !== null &&
        isNumber(formData.zipCode) &&
        formData.status === true
    );
}

function handleGetFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zip-code').value;
    const status = checkboxIsChecked();

    return {
        name: name,
        email: email,
        city: city,
        zipCode: zipCode,
        status: status,
    };
}

function submit(event) {
    event.preventDefault();
    const formData = handleGetFormData();

    if (!validateFormData(formData)) {
        const warningDiv = document.getElementById('warning');
        warningDiv.textContent = 'Periksa form anda sekali lagi';
    } else {
        const warningDiv = document.getElementById('warning');
        warningDiv.textContent = '';

        console.log(formData);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('myForm').addEventListener('submit', submit);
});