const PROFILE_STORAGE = "PROFILE-STORAGE";

function loadProfile(){
    try {
        const profileString = localStorage.getItem(PROFILE_STORAGE);
        const profileData = JSON.parse(profileString) || {
            nama: "Verry Pratama Saputra",
            jobTitle: "Front End Developer",
            availability: "Available",
            location: "Surabaya",
            age: "19",
            experience: "3 Tahun",
            email: "verry@example.com"
        };

        if (window.location.pathname.includes('form-edit.html')) {
            document.getElementById('profileNameInput').value = profileData.nama;
            document.getElementById('profileJobTitleInput').value = profileData.jobTitle;
            document.getElementById('profileAvailabilityInput').value = profileData.availability;
            document.getElementById('profileAgeInput').value = profileData.age;
            document.getElementById('profileLocationInput').value = profileData.location;
            document.getElementById('profileExperienceInput').value = profileData.experience;
            document.getElementById('profileEmailInput').value = profileData.email;
        } else {
            document.getElementById('profileName').innerText = profileData.nama;
            document.getElementById('profileJobTitle').innerText = profileData.jobTitle;
            document.getElementById('profileAvailability').innerText = profileData.availability;
            document.getElementById('profileAge').innerText = profileData.age;
            document.getElementById('profileLocation').innerText = profileData.location;
            document.getElementById('profileYOE').innerText = profileData.experience;
            document.getElementById('profileEmail').innerText = profileData.email;
        }
    } catch (error) {
        console.error("[loadProfile]:", error);
    }
}

function saveProfile(dataProfile){
    event.preventDefault()

    const nama = document.getElementById('profileNameInput').value;
    const jobTitle = document.getElementById('profileJobTitleInput').value;
    const availability = document.getElementById('profileAvailabilityInput').value;
    const age = document.getElementById('profileAgeInput').value;
    const location = document.getElementById('profileLocationInput').value;
    const experience = document.getElementById('profileExperienceInput').value;
    const email = document.getElementById('profileEmailInput').value;

    const profileData = {
        nama,
        jobTitle,
        availability,
        age,
        location,
        experience,
        email
    };

    localStorage.setItem(PROFILE_STORAGE, JSON.stringify(profileData));

    alert('Profil berhasil diperbarui!');
    window.location.href = 'index.html';
}

window.onload = loadProfile;

if (window.location.pathname.includes('form-edit.html')) {
    document.getElementById('editForm').addEventListener('submit', saveProfile); // Menambahkan listener untuk menangani submit form
}