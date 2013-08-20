<?php

    $name = $_POST['name'];
    $age = (int) $_POST['age'];
    $unchecked_age  = $_POST['age'];
    
    if($name === 'prashmit'){
        echo 'Hi there Mr. Prashmit Tanay';
    }else{
        echo 'I say hello only to Mr. Prashmit Tanay';
    }
    
    
    # something new
    
    // old and boring
    
    /* same old same old*/
?>

BTW... you entered these:<br>

<p>Name: <?php echo $name;?></p>
<p>Age: <?php echo $age;?></p>

Example for short tags: <?= $age ?> <br>

<!-- var_dump example -->
Checking var_dump <?= var_dump($unchecked_age)?> <br>

<a href="../simpleForm.html">Go Back</a>