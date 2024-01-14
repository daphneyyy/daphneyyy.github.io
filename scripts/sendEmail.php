<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $comment = $_POST['comment'];

    // Recipient email address
    $to = 'xuewenyang1@gmail.com';

    // Subject of the email
    $subject = 'New Contact Form Submission';

    // Compose the email message
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Comment:\n$comment\n";

    // Set additional headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    $success = mail($to, $subject, $message, $headers);

    // Check if the email was sent successfully
    if ($success) {
        echo "Thank you for contacting me! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
} else {
    // Handle invalid request method
    http_response_code(405);
    echo "Method Not Allowed";
}
?>
