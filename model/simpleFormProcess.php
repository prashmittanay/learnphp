<?php

    $name = $_POST['name'];
    $age = (int) $_POST['age'];
    
    if($name === 'prashmit'){
        echo 'Hi there Mr. Prashmit Tanay';
    }else{
        echo 'I say hello only to Mr. Prashmit Tanay';
    }
?>

BTW... you entered these:<br>

<p>Name: <?php echo $name;?></p>
<p>Age: <?php echo $age;?></p>

<a href="../simpleForm.html">Go Back</a>