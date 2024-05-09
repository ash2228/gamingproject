<?php
    $conn = new mysqli("localhost","id22143576_ash","Qwerty@4","id22143576_gaming");
    $result = $conn->query("SELECT * FROM GAMES");
    if ($result) {
        $games = array();
        while ($row = $result->fetch_assoc()) {
            $games[] = $row;
        }
        $result->free();

        echo json_encode($games);
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
?>
