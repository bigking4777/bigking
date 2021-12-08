<template>
  <div>
    <div class="all">
      <div class="left">
        <div class="left-title">
          <h1>第一关，过关条件：分数达到50</h1>
        </div>
        <h2>道具效果</h2>
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
        <h2>人物操作</h2>
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
        >
          下一关
        </div>
      </div>
    </div>
    <div class="timeOver">
      <div class="title">时间耗尽游戏结束</div>
      <div class="next">
        <div
          class="btn"
          id="timeBack"
        >
          返回
        </div>
      </div>
    </div>
    <div class="playerOver">
      <div class="title">人物死亡游戏结束</div>
      <div class="next">
        <div
          class="btn"
          id="playerBack"
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
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var game = new Game(); //这里是游戏主逻辑
      var enemyNum = 2; //怪物最多数量
      var minNum = 1; //怪物最少数量
      game.init(1, enemyNum, minNum); //初始化游戏
      console.log(game);
      setInterval(() => {
        game.run();
      }, 100); //定时执行可以画出游戏数据在canvas标签上
      setInterval(() => {
        game.runEnemy();
      }, 1000); //画出怪物走动方向
      setInterval(() => {
        game.getProp();
      }, 300); //随机掉落道具
      setInterval(() => {
        game.getplayer();
      }, 10); //实时获得人物的坐标
      document.onkeydown = function (ev) {
        game.onkeydown(ev.keyCode);
      }; //获取键盘按下事件
      document.onkeyup = function (ev) {
        game.onkeyup(ev.keyCode);
      }; //获取键盘松开事件
      var time = new Time();
      time.init(); //设置时间
      setInterval(() => {
        time.run()
      }, 1000); //判断时间是否超时
      var score = new Score();
      var passScore = 50; //过关分数设置
      score.pass = passScore;
      score.init(passScore);
    },
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
  margin-top: 100px;
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
}
.all {
  display: flex;
}
.left {
  width: 680px;
  height: 706px;
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