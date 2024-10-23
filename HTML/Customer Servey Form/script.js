function selectGender(selected) {
    const genders = ['male', 'female', 'other'];
    genders.forEach(gender => {
        const checkbox = document.getElementById(gender);
        if (gender !== selected) {
            checkbox.checked = false;
        }
    });
}

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;

    const gender = [];
    if (document.getElementById('male').checked) gender.push('Male');
    if (document.getElementById('female').checked) gender.push('Female');
    if (document.getElementById('other').checked) gender.push('Other');

    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Create popup content
    const popupContent = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    // Display popup
    document.getElementById('popupContent').innerHTML = popupContent;
    document.getElementById('popup').style.display = 'block';

    // Reset form after closing popup
    document.getElementById('surveyForm').reset();
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
