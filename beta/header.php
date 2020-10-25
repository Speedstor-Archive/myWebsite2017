<?php
     session_start();
?>
<!DOCTYPE html>
<head>
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Login System</title>
    <link rel="stylesheet" type="text/css" href="header.css">
    <link rel="stylesheet" type="text/css" href="footer.css">
	<link rel="stylesheet" type="text/css" href="main.css">
	<script type="text/javascript" src="js/javascript.js"></script>
</head>
<body style="margin:0;">
	<header id="mainHeader">
          <a href="tempGame/game.html"><h1>Speedstor</h1></a>
          <nav id="navBar">
               <a href="index.html"><button>Home</button></a>
               <a href="services.html"><button>Services</button></a>
               <a href="prices.html"><button>Prices</button></a>
               <a href="about.html"><button>About</button></a>
          
               <a onclick="start()" class="signIn">Log In </a>
          </nav>


          <div id="menuButton" onclick="toggleSidebar()">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
     
               <div id="sideBar">
                    <a href="#" class="getStartedMenu">Get Started</a>
                    <li class="sideBarTop" onclick="toggleSidebar()">X</li>
					
					<ul>
						<a href="index.html"><li class="sideMenu">Home</li></a>
						<a href="services.html"><li class="sideMenu">Services</li></a>
						<a href="prices.html"><li class="sideMenu">Prices</li></a>
						<a href="about.html"><li class="sideMenu">About</li></a>
						<a href="tempGame/game.html"><li class="sideMenu">Canvas</li></a>
						<a onclick="start()"><li class="sideMenu">Log In</li></a>
					</ul>
				</div>
        	</div>  
     </header>