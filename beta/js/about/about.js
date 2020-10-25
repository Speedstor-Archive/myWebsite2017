function validateForm(){
     var name = document.forms["contactForm"]["name"].value;
     if(name == null || name == ""){
          alert("A name is required");
          return false;
     }
     if(name.length < 2){
          alert("Please enter your real name");
          return false;
     }
}


//intem for form submit
document.getElementById('').addEventListener(submit, save);

function save(e){
     var siteName = document.getElementBydId().value;
     var name = document.getElementBydId().value;

     var stuff = {
          life: siteName;
          url: name;
     }

     localStorage.setItem('test', 'Hellow World');
     localStoarge.getItem('test');


     e.preventDefult();
}
