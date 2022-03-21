<template>

 <h1 class="gradient">MoodFarm
</h1>
  <div class="container vh-100 d-flex justify-content-center align-items-center">
  <div class="card ">
  
    <div class="vh-100 d-flex justify-content-center align-items-center">

      <button
      class="d-flex justify-content-center align-items-center col"
      :class="{active: isLogin}"
      @click="changeTologin"
      >
      Login
      </button>
      <button
      class="d-flex justify-content-center align-items-center col"
      :class="{active: isRegister}"
      @click="changeToregister"
      >
      Register
      </button>
    </div>
    <div class="row ph-5">
  <div class="col-12 m-auto panel">
    <loginTab v-if="isLogin" />
    <registerTab v-if="isRegister" />
  </div>
    </div>
    </div>
  </div>

</template>
<script>
import loginTab from '@/components/loginTab.vue';
import registerTab from '@/components/registerTab.vue';

export default {

  component: {
    loginTab,
    registerTab,
  },

  data() {
    return{
      isLogin: true,
      isRegister: false,
    };
  },
  methods: {
    changeToRegister() {
      this.isLogin = false;
      this.isRegister = true;
    },
    changeToLogin() {
      this.isLogin = true;
      this.isRegister = false;
    },
  },
};
</script>
    <style>
/* h1 */
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

  /* card*/ 

        @property --rotate {
  syntax: "<angle>";
  initial-value: 132deg;
  inherits: false;
} 

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
            background: #191c29;
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
            background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
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
            transition: opacity .5s;
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

    </style>
