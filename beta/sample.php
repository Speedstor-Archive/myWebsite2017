<?php

class Customer{
     //Two Core components: properties and methods
     //Should use access identifier: public, private, protected;
     //protected identifier: could be access if it is extended by the class
     //method: a function within a class
     //!!!! public functions private proterties;
     public $id;
     public $name;
     public $email;
     public $location;

     //magic methods
     public function __construct(){

     }
     public function __destruct(){

     }

     public function getCustomer($id){
          $this->id = $id;
          return "life";
     }
}

//extentiate
$customer = new Customer;

echo $customer->getCustomer(2);



//tutorial
class Subscriber extends Customer{
     //abstract method needs to be in abstract class
     //static 
     //for static functions and variables:     self::variable;
     public function __construct(){
          parent::__construct();
     }
}


?>