function loadFile(event) {
    const image = document.getElementById('profileImage');
    image.src = URL.createObjectURL(event.target.files[0]);
}

function toggleEdit() {
    const bio = document.getElementById('userBio');
    const interests = document.getElementById('userInterests');
    const email = document.getElementById('emailText');

    const isEditable = bio.contentEditable === "true";

    // Toggle editable states
    bio.contentEditable = !isEditable;
    interests.contentEditable = !isEditable;
    email.contentEditable = !isEditable;

    if (isEditable) {
        // Save the changes
        bio.contentEditable = false;
        interests.contentEditable = false;
        email.contentEditable = false;

        alert('Profile updated successfully!');
    } else {
        alert('You can now edit your Bio, Interests, and Email.');
    }
}

function toggleConfirm(){
    location.reload();
}