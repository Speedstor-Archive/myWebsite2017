<?php
    require "header.php";
?>

    <main>
        <div class="mainDiv">
            <?php
                if(isset($_SESSION['userId'])){
                    echo '
                    <form action="includes/logout.inc.php" method="post">
                    <div style="height: 10px;"></div>
                    <h1 style="font-size:25px; color:orange">beta</h1>
                        <div style="height: 30px;"></div>
                        <button style="margin-bottom: 30px;" type="submit" name="logout-submit">Logout</button>
                    </form>';
                }else {
                    echo '<form action="includes/login.inc.php" method="post">
                    <div style="height: 10px;"></div>
                    <h1 style="font-size:25px; color:orange">beta</h1>
                    <input type="text" name="mailuid" placeholder="Username/Email...">
                    <input type="password" name="pwd" placeholder="Password...">
                    <button type="submit" name="login-submit">Login</button>
                </form>
                <button style="margin-top: 40px;"><a href="signup.php">Sign up</a></button>
                    <div style="height: 30px;"></div>';
                }
            ?>
        </div>
        <?php
            if(isset($_SESSION['userId'])){
                echo '<p>You are logged in,'.$_SESSION['userUid'].'. Welcome</p>';
            }else {
                echo '<p>You are logged out</p>';
            }
        ?>
    </main>

<?php
    require "footer.php";
?>