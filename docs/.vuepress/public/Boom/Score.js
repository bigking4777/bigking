export const Score = function () {
    //创建分数
    var score;
    //游戏分数起始值
    this.scorestart = 0;
    this.init=function (x) {
        this.addScore(x)
    }
    this.clear = function () {
        
    }
    this.getScore = function () {
        return this.scorestart
    }
    this.addScore = function (x) {
        
        this.scorestart += x
        console.log(this.scorestart);
    }



}