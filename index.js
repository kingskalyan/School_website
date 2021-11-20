<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pallavi Vidya Mandir High School </title>
    <style>
        .container {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }



        .container h1 {
            font-size: 50px;
            font-family: 'Times New Roman', Times, serif;
            color: #fff;
            text-align: center;
        }

        .container p {
            font-size: 20px;
            font-family: 'Times New Roman', Times, serif;
            color: #fff;
            text-align: center;
        }

        .container a {
            font-size: 20px;
            font-family: 'Times New Roman', Times, serif;
            color: #fff;
            text-align: center;
        }

        h1 {
            color: rgb(188, 181, 194);
            font-size: 50px;
            text-align: center;
        }

        .sch-act iframe {
            display: flex;
            flex-direction: row;
            padding: 10px;
            justify-content: space-around;
            /* font-style: ; */
        }

        .cul-act iframe {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 3px;
        }

        body {

            background-color: whitesmoke;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

            width: 100%;
            height: 100%;

        }

        .nav ul {
            background-color: #1bfaad;
            height: 30px;
            width: 90%;
            margin: auto;
            border-radius: 20px;
            display: flex;
            list-style: none;
            align-items: center;
            cursor: pointer;
            box-shadow: 0px 0px 10px #000000;
        }

        .nav ul li {
            margin: 50px;
            display: grid;
            grid-template-rows: auto;
        }

        .nav ul a {
            text-decoration: none;
            color: #000;
        }

        .nav ul a :hover {
            color: #fff;
        }

        .logo {
            display: flex;
            align-content: center;
            padding-bottom: 10px;
            padding-left: 40%;
            width: 20%;
            height: 20%;
        }

        .highlighted {
            margin: 50px;
            color: rgb(14, 168, 130);
            cursor: pointer;
            text-shadow: #000000 0px 0px 10px;
        }

        .dark-mode {
            background-color: #242526;
            color: whitesmoke;
            border: none;
        }

        #whatsapp_float {
            position: fixed;
            width: 60px;
            height: 60px;
            bottom: 40px;
            right: 40px;
            background-color: #25d366;
            color: #FFF;
            border-radius: 50px;
            text-align: center;
            font-size: 30px;
            box-shadow: 2px 2px 3px #999;
            z-index: 100;
        }

        .whatsapp-icon {
            margin-top: 16px;
        }

        /* for mobile */
        @media screen and (max-width: 767px) {
            .whatsapp-icon {
                margin-top: 10px;
            }

            #whatsapp_float {
                width: 40px;
                height: 40px;
                bottom: 20px;
                right: 10px;
                font-size: 22px;
            }

            .nav ul li {
                margin: 10px;
                display: grid;
                grid-template-rows: auto;

            }

            .nav ul {
                margin-left: 20px;
                display: flex;

                justify-content: space-around;
                text-decoration: none;
                color: #000;
            }

            .scl-name {
                font-size: larger;
                margin-left: 35px;
            }

            .sch-act iframe {
                display: flex;
                flex-direction: column;
                width: 10px;
                justify-content: space-evenly;
            }

            .sch-act-name,
            .abt-sch {
                font-size: medium;
            }

            #home {
                font-size: medium;
            }
            .sch-pic{
                width:60%;
                height: 70%;
                margin-bottom: 20px;
            }
            .abt-scl{
                letter-spacing: 2px;
                overflow: hidden;
                width: 100%;
                font-size: medium;
            }

        }

        .nav input {
            margin-left: 500px;
            border-radius: 20px;
            border: none;
            text-align: 20px;
            display: grid;
            grid-template-columns: auto;
        }

        .sch-pic {
            width: 30%;
            margin-left: 50%;
        }

        .abt-scl {
            justify-content: space-between;
            text-align: center;
            font-size: large;
            width: 100%;
            margin: 50px;
        }

        .scl-name {
            color: #4e5892;
            
        }
    </style>
    <script>
        function myfunction() {
            var ele = document.body;
            ele.classList.toggle("dark-mode");
        }


    </script>
</head>

<body>
    <div>
        <img class='logo'
            src="data:image/jpeg;base64,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">
    </div>
    <div class="nav">
        <ul>

            <a href="#home">
                <li class="home">Home</li>
            </a>
            <a href="https://wa.me/7981937439">
                <li class="contact">Contact</li>
            </a>
            <a href="#footer">
                <li class="about">About Us</li>
            </a>


        </ul>
        <marquee class="highlighted">*Adimissions are opened now</marquee>
        <button onclick="myfunction()">☀</button>
    </div>

    <strong>
        <h1 class="scl-name">Pallavi Vidya Mandir High School</h1>
    </strong>
    <h2 class="sch-act-name">School Activites</h2>
    <div classs="sch-act">

        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ITQ5mePu3GE"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/z3FfYTPAPOI"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>

        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/x33uWXYg8zs"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
    <h2 id='home'>Culture Activites</h2>
    <div class="cul-act">
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/YXKpvQSBN2Q"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/-mYnbYU1fwM"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/a__G4EIYSxY"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
    </div>
    <div id='footer'>
        <h2 class="abt-sch">About Our School</h2>
        <img class="sch-pic"
            src="https://th.bing.com/th/id/OIP.AsdNMLHfg8QttuK7D-EZVQHaFj?w=230&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" /><br>

        <strong><i>
                <p class='abt-scl'>All great men have been taught to read and write at their schools. It is our school
                    that endows us with the right values at an early age. We teach a set of strong moral values that
                    serve us later in our lives. School life is the period that makes up most of your childhood
                    memories. We learn to laugh, cry, share, and support by co-habiting with our classmates.Our School
                    is the framework that builds our moral characters and serves as a pathway that we must follow to
                    achieve your dreams.
                <p>
            </i></strong>
    </div>

    <div class="footer2">

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <a href="https://wa.me/7981937439" id="whatsapp_float" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>

    </div>


</body>

</html>
