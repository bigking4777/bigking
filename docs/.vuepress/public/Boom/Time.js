export const Time = function() {
    //游戏时间长度5分钟
    this.timeW = 300;
    this.setTime=function() {
        if (this.timeW >0) {
            this.timeW--;
        }else{
            
            
        }
    }
    this.addTime = function(){
        this.timeW+=50;
    };
    this.getTime = function () {
        return this.timeW
    }
}