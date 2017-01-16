<?php

ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);

// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$company = strip_tags(htmlspecialchars($_POST['company']));
$typeOfDelivery = strip_tags(htmlspecialchars($_POST['typeOfDelivery']));
$itemDescription = strip_tags(htmlspecialchars($_POST['itemDescription']));
$specialRequirements = strip_tags(htmlspecialchars($_POST['specialRequirements']));
$industry = strip_tags(htmlspecialchars($_POST['industry']));
$foundOutThrough = strip_tags(htmlspecialchars($_POST['foundOutThrough']));

// Create the email and send the message
$to = 'info@crosstrack.sg'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nCompany: $company\n\n Delivery Type: $typeOfDelivery\n\n Item Description: $itemDescription\n\n Special Requirements: $specialRequirements\n\n Industry: $industry\n\n Means of knowing CrossTrack: \n$foundOutThrough\n\n";
$headers = "From: noreply@yourdomain.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
echo $to;
echo $email_subject;
echo $email_body;
echo $headers;

return mail($to,$email_subject,$email_body,$headers);
return true;
?>
