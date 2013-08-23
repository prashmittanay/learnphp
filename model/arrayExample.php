<?php
    error_reporting(E_ALL);
    
    #defining an array
    #basic example

    $simpleArray  = [
        "foo" => "bar",
        "bar" => "foo"
    ];
    
    #multitype keys
    $multikeys = [
        "foo" => "newFoo",
        "bar" => "foo",
        "1" => "what?",
        "-1" => "minus one"
    ];
    
    #no keys
    $nokeys = ["nameOne", "nameTwo", "nameThree", "nameFour"];
    
    #multi-dimensional array
    $mdArary = [
        "foo" => "bar",
        42    => 24,
        "multi" => [
            "dimensional" => [
                 "array" => "foo"
            ]
        ]
    ];
?>

<p>Simple array example: <?= var_dump($simpleArray)?></p>
<p>Multi-type keys array example: <?= var_dump($multikeys)?></p>
<p>No keys array example: <?= var_dump($nokeys)?></p>
<p>Multi-dimensional array example: <?= var_dump($mdArary)?></p>

<p>Accessing the md-array: <?= var_dump($mdArary["multi"]["dimensional"])?></p>
<p>Multi-dimensional with print_r(): <?= print_r($mdArary)?></p>