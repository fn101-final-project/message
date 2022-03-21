<template>

          <div class="container">
              <div class="col">
        <h1 class="gradient">MoodFarm</h1>
   </div> 

  <div class="container">
      <div class="py-2 justify-content-flex-end">
          <button class="btn btn-info ">管理</button>
      </div>
                  <div class="card w-75">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">留言者內容</p>
                      <a href="#" class="btn btn-primary">回覆</a>
                    </div>
                  </div>
                  <div class="card w-75">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">留言者內容</p>
                      <a href="#" class="btn btn-primary">回覆</a>
                    </div>
                  </div>
                  <div class="card w-75">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">留言者內容</p>
                      <a href="#" class="btn btn-primary">回覆</a>
                    </div>
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
}
@keyframes move {
            50% {
                background-image: linear-gradient(262deg, rgba(94, 114, 235, 1) 0%, rgba(255, 145, 144, 1) 56%, rgba(254, 193, 149, 1) 100%);
            }
        }

.body {
    background: rgb(3, 3, 3);
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing:border-box;

}



</style>




