// Menampilkan tanggal dan waktu
function updateDateTime() {
    const tanggalElement = document.getElementById("tanggal");
    const waktuElement = document.getElementById("waktu");

    const now = new Date();
    const optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    tanggalElement.textContent = now.toLocaleDateString('id-ID', optionsDate);
    waktuElement.textContent = now.toLocaleTimeString('id-ID');
}
setInterval(updateDateTime, 1000);

// Login Admin
const adminPassword = "admin123";

function showLoginForm() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("loginBtn").style.display = "none";
}

function login() {
    const password = document.getElementById("adminPassword").value;
    if (password === adminPassword) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("input-section").style.display = "block";
    } else {
        document.getElementById("error-message").textContent = "Password salah!";
    }
}

function backToMain() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("loginBtn").style.display = "block";
}

// Update data pengingat
function updateReminder() {
    const pelajaran = document.getElementById("pelajaranInput").value.split(",");
    const tugas = document.getElementById("tugasInput").value.split(",");
    const seragam = document.getElementById("seragamInput").value;

    document.getElementById("pelajaranList").innerHTML = pelajaran.map(item => `<li>${item}</li>`).join("");
    document.getElementById("tugasList").innerHTML = tugas.map(item => `<li>${item}</li>`).join("");
    document.getElementById("seragam").textContent = seragam || "Belum diatur";
}
