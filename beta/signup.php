<?php
    require "header.php";
?>

    <main>
        <div class="mainDiv">
            <h1>Sign up</h1>
            <h1 style="font-size:25px; color:orange">beta</h1>
            <?php
                if(isset($_GET['error'])){
                    if($_GET['error'] == 'emptyfields'){
                        echo "<h2 style='color: red;'> Fill in all fields!</h2>";
                    }
                }
            ?>
            <form action="includes/signup.inc.php" method="post">
                <input type="text" name="uid" placeholder="Username...">
                <input type="text" name="mail" placeholder="Email...">
                <input type="password" name="pwd" placeholder="Password...">
                <input type="password" name="pwd-repeat" placeholder="Retype Password...">
                <button style="margin-bottom: 30px;" type="submit" name="signup-submit">Sign up</button>
            </form>
        </div>
        <p>You are logged out</p>
        <p>You are logged in</p>
    </main>

<?php
    require "footer.php";
?>