document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    var formData = new FormData(this);

    // Send the data to the PHP script using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_email.php", true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Display the response from the PHP script
            document.getElementById("response").innerHTML = xhr.responseText;
        }
    };

    xhr.send(formData);
});
