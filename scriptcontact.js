document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        // Example validation
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var feedback = document.getElementById("feedback").value;

        if (!name || !email || !feedback) {
            alert("Harap mengisi semua field yang wajib.");
            event.preventDefault();
        } else {
            alert("Form berhasil dikirim!");
        }
    });
});
