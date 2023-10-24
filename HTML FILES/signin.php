<?php
    $db_hostname = "127.0.0.1";
    $db_username = "root";
    $db_password = "";
    $db_name = "test";
    $conn = mysqli_connect($db_hostname, $db_username, $db_password, $db_name);
    if (!$conn) {
        echo "Connection failed: " . mysqli_connect_error();
        exit;
    }

    $Email = $_POST['Email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM LOGIN WHERE Email='$Email' AND password='$password'";
    $result = mysqli_query($conn, $sql);
    if (!$result) {
        echo "Error: " . mysqli_error($conn);
        exit;
    }
    if (mysqli_num_rows($result) > 0) {
        header("Location: ../index.html");
        
    } else {
        header("Location: login.html");
        
    }

    mysqli_close($conn);
?>
