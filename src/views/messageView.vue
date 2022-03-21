<template>

        <h1 class="gradient">MoodFarm
 </h1>
    <div class="card">
        <div class="vh-100 d-flex justify-content-center align-items-center">
            <div class="login-panel card p-3">
                <form action="login.html" method="post">
                    <h2 class="text-center">DAY</h2>
                    <div class="form-floating mb-3">
                        <div class="form-floating mb-3">
                            <div class="mb-3">
                                <div class="mb-3">
                                    <label for="" class="form-label"></label>
                                    <textarea placeholder="how's going today?" class="form-control" name="comment" id="" rows="13" cols="30"></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="button">
                            <div class="row">
                                <div class="col d-flex justify-content-center">
                                    <button class="btn btn-info" type="submit">send</button>
                                </div>
                            </div>
                        </div>
                     </div>   
                </form>
            </div>
        </div>
    </div> 
   

</template>









    <style>
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');


        .gradient {
            background-image: linear-gradient(90deg, rgba(94, 114, 235, 1) 0%, rgba(255, 145, 144, 1) 56%, rgba(254, 193, 149, 1) 100%);
            color: transparent;
            -webkit-background-clip: text;

            animation: move 1s infinite;
            height: 30vh;
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: top;
            font-family: 'Pacifico', cursive;
            font-size: 20vmin;
            /* background: #EDDDD4; */
        }

        @keyframes move {
            50% {
                background-image: linear-gradient(262deg, rgba(94, 114, 235, 1) 0%, rgba(255, 145, 144, 1) 56%, rgba(254, 193, 149, 1) 100%);
            }
        }

        /* .container{
            width: 100vw;
            min-height: 100vh;
        } */

        /* @property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
} */

        :root {
            --card-height: 80vh;
            --card-width: calc(var(--card-height) / 1.5);
        }


        body {
            min-height: 100vh;
            background: #212534;
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-top: 9rem;
            padding-bottom: 2rem;
            box-sizing: border-box;
        }


        .card {
            background: #e0e4f8;
            width: var(--card-width);
            height: var(--card-height);
            padding: 3px;
            position: relative;
            border-radius: 6px;
            justify-content: center;
            align-items: center;
            text-align: center;
            display: flex;
            font-size: 1.5em;
            color: rgb(88 199 250 / 0%);
            cursor: pointer;
            font-family: cursive;
        }

        .card:hover {
            color: rgb(88 199 250 / 100%);
            transition: color 1s;
        }

        .card:hover:before,
        .card:hover:after {
            animation: none;
            opacity: 0;
        }


        .card::before {
            content: "";
            width: 104%;
            height: 102%;
            border-radius: 8px;
            background-image: linear-gradient(var(--rotate), #e7ff5d, #eef10d 43%, #fc7e09);
            position: absolute;
            z-index: -1;
            top: -1%;
            left: -2%;
            animation: spin 2.5s linear infinite;
        }

        .card::after {
            position: absolute;
            content: "";
            top: calc(var(--card-height) / 6);
            left: 0;
            right: 0;
            z-index: -1;
            height: 100%;
            width: 100%;
            margin: 0 auto;
            transform: scale(0.8);
            filter: blur(calc(var(--card-height) / 6));
            background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
            opacity: 1;
            transition: opacity 2.5s;
            animation: spin 2.5s linear infinite;
        }

        @keyframes spin {
            0% {
                --rotate: 0deg;
            }

            50% {
                --rotate: 100deg;
            }

            100% {
                --rotate: 360deg;
            }
        }

        a {
            color: #212534;
            text-decoration: none;
            font-family: sans-serif;
            font-weight: bold;
            margin-top: 2rem;
        }
        .form-control{
            background-color: #fff;
        }
    </style>





 
