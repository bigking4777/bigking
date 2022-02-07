<template>
  <div>
    <div class="all">
      <div class="left">
        <div class="left-title">
          <h1>过关条件：分数达到500</h1>
        </div>
        <div>道具效果</div>
        <div class="allTool">

          <div class="tool">
            <img
              src="../public/img/tool_01.png"
              width="30px"
              alt=""
            >
            <p>增加爆炸直径</p>
          </div>
          <div class="tool">
            <img
              src="../public/img/tool_02.png"
              width="30px"
              alt=""
            >
            <p>分数加60</p>
          </div>
          <div class="tool">
            <img
              src="../public/img/tool_03.png"
              width="30px"
              alt=""
            >
            <p>时间增加30s</p>
          </div>
          <div class="tool">
            <img
              src="../public/img/tool_04.png"
              width="30px"
              alt=""
            >
            <p>人物移速增加</p>
          </div>
          <div class="tool">
            <img
              src="../public/img/tool_05.png"
              width="30px"
              alt=""
            >
            <p>炸弹数量增加</p>
          </div>

        </div>
        <div>人物操作</div>
        <div class="all-operate">
          <div class="operate">
            <div class="operate-top">
              <img
                src="../public/img/up.png"
                width="60px"
                alt=""
              >
            </div>
            <div class="operate-bottom">
              <div>
                <img
                  src="../public/img/left.png"
                  width="60px"
                  alt=""
                >
              </div>
              <div>
                <img
                  src="../public/img/down.png"
                  width="60px"
                  alt=""
                >
              </div>
              <div>
                <img
                  src="../public/img/right.png"
                  width="60px"
                  alt=""
                >
              </div>

            </div>
            <p>上下左右操控玩家移动</p>

          </div>

          <div class="operate-kong">
            <img
              src="../public/img/kong.png"
              width="200px"
              height="60px"
              alt=""
            >
            <p class="kong-p">空格操控玩家放置炸弹</p>
          </div>

        </div>
        <div style="font-size:25px">
          时间：{{time.num}}

        </div>
        <div  style="font-size:25px">

        分数：{{score.num}}
      </div>
      </div>
      <div
        class="main"
        id="box"
      >
      
        <canvas
          id="mycanvas"
          width=680
          height=600
        >
        </canvas>
      </div>

    </div>

    <div class="gameOver">
      <div class="title">恭喜过关</div>
      <div class="next">
        <div
          class="btn"
          id="nextPass"
          @click="reset"
        >
         重置
        </div>
      </div>
    </div>
    <div class="timeOver">
      <div class="title">时间耗尽游戏结束</div>
      <div class="next">
        <div
          class="btn"
          id="timeBack"
          @click="reset"
        >
          返回
        </div>
      </div>
    </div>
    <div class="playerOver">
      <div class="title">游戏结束</div>
      <div class="next">
        <div
          class="btn"
          id="playerBack"
          @click="reset"
        >
          返回
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Game } from "../public/Boom/Game";
import { Time } from "../public/Boom/Time";
import { Score } from "../public/Boom/Score";
export default {
  data() {
    return {
      game:{
        run:null,
        runEnemy:null,
        getProp:null,
        getplayer:null,
      },
      time:{
        getTime:null,
        run:null,
        num:0
      },
      score:{
        getScore:null,
        num:0
      }
      
    };
  },
  watch:{
    'time.num':{
      handler(val){
        if(!val){
          var timeover = document.getElementsByClassName("timeOver")[0];
            timeover.className = 'timeOver show'
            clearInterval(time);
        }
      }
    },
    'score.num':{
      handler(val){
        console.log(123);
        if(val>=300){
           var gameover = document.getElementsByClassName("gameOver")[0];
            gameover.className = 'gameOver show'
        }
      }
    }
  },
  mounted() {
    this.init();
  },
  beforeDestroy(){
    Object.keys(this.game).forEach(res=>{
      clearInterval(this.game[res])
    })
    Object.keys(this.time).forEach(res=>{
      clearInterval(this.time[res])
    })
  },
  methods: {
    init() {
      
      var game = new Game(); //这里是游戏主逻辑
      var score = new Score();
      var time = new Time();
      var enemyNum = 20; //怪物最多数量
      
      game.init(1, enemyNum, enemyNum,score,game); //初始化游戏
      console.log(game);
      this.game.run = setInterval(() => {
        game.run(score,time);
      }, 100); //定时执行可以画出游戏数据在canvas标签上
      this.game.runEnemy = setInterval(() => {
        game.runEnemy();
      }, 1000); //画出怪物走动方向
      this.game.getProp = setInterval(() => {
        game.getProp();
      }, 6000); //随机掉落道具
      this.game.getplayer = setInterval(() => {
        game.getplayer();
      }, 10); //实时获得人物的坐标
      document.onkeydown = function (ev) {
        game.onkeydown(ev.keyCode);
      }; //获取键盘按下事件
      document.onkeyup = function (ev) {
        game.onkeyup(ev.keyCode);
      }; //获取键盘松开事件
      
      this.time.getTime = setInterval(()=>{
        this.time.num = time.getTime()
      },1000) 
      this.time.run = setInterval(()=>{
        time.setTime()
      },1000) 
      
      score.init(0); //过关分数设置
      this.score.getScore = setInterval(()=>{
        this.score.num = score.getScore()
      },100)
    },
    reset(){
      var playerover = document.getElementsByClassName("playerOver")[0];
      playerover.className = 'playerOver'
      Object.keys(this.game).forEach(res=>{
      clearInterval(this.game[res])
    })
    Object.keys(this.time).forEach(res=>{
      clearInterval(this.time[res])
    })
      this.init()
    }
  },
};
</script>
<style lang='less' scoped>
* {
  margin: 0;
  padding: 0;
}
#mycanvas {
  border: 1px solid grey;
}
.main {
  width: 680px;
  /*margin: auto;*/
}
.main {
  position: relative;
  background: gray;
}

#mycanvas {
}
.gameOver {
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  width: 400px;
  height: 200px;
  background: white;
  border-radius: 10px;
  display: none;
}
.gameOver.show {
  display: flex;
  flex-direction: column;
}
.timeOver {
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  width: 400px;
  height: 200px;
  background: white;
  border-radius: 10px;
  display: none;
}
.timeOver.show {
  display: flex;
  flex-direction: column;
}
.playerOver {
  position: absolute;
  top: calc(50% - 200px);
  left: calc(50% - 200px);
  width: 400px;
  height: 200px;
  background: white;
  border-radius: 10px;
  display: none;
}
.playerOver.show {
  display: flex;
  flex-direction: column;
}
.title {
  width: 400px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
}

.next {
  height: 100px;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
  width: 60px;
  height: 30px;
  color: white;
  background: #27a;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  cursor: pointer;
}
.all {
  display: flex;
}
.left {
  width: 680px;
  background: #fe9738;
}
.left h2 {
  margin: 10px;
}
.left-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.allTool {
  display: flex;
}
.tool {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  color: black;
  font-size: 20px;
  font-weight: bold;
}
.all-operate {
  display: flex;
}
.operate {
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 20px;
}
.operate-top {
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.operate-bottom {
  display: flex;
}
.operate-kong {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  flex-direction: column;
  position: relative;
}
.kong-p {
  position: absolute;
  bottom: 0;
}
</style>