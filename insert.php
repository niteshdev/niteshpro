<?php
 

$servername = "localhost";
$username = "root";
$password = "123"; //Your User Password
$dbname = "nitesh"; //Your Database Name


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO employee (firstname, lastname, email, age)
VALUES ('$firstname', '$lastname', '$email' , $age)";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>



