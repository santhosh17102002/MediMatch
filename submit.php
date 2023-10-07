<?php
    $db_hostname = "127.0.0.1";
    $db_username = "root";
    $db_password = "root";
    $db_name = "Medimatch";
    $conn = mysqli_connect($db_hostname, $db_username, $db_password, $db_name);
    if (!$conn) {
        echo "Connection failed: " . mysqli_connect_error();
        exit;
    }
    $Fname=$_POST['Fname'];
    
    $Lname=$_POST['Lname'];
    $Email=$_POST['Email'];
    $password=$_POST['password'];


    $sql = "INSERT INTO LOGIN (Fname,Lname, Email, password) VALUES ('$Fname','$Lname', '$Email', '$password')";
    $result = mysqli_query($conn, $sql);
    if (!$result) {
        echo "Error: " . mysqli_error($conn);
        exit;
    }

    echo "Registration successful";
    mysqli_close($conn);

?>