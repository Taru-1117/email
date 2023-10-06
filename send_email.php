<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "bansaltaru482@gmail.com"; // Specify your email address here
    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";

    $mailResult = mail($to, $subject, $message, $headers);

    if ($mailResult) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent.";
    }
}
?>
