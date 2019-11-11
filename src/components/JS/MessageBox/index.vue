<template>
  <div class="messageBox">
      <h2>定位</h2>
      <p>北京</p>
      <div>
          <div>取消</div>
          <div>切换定位</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.messageBox {
    width: 200px;
    height: 120px;
    background-color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    /* display: flex; */
    /* margin-top: -70px;
    margin-left: -100px; */
    transform: translate(-50%, -50%);
    border-radius: 5px;
    box-shadow: 1px 1px 20px 3px #cccccc;
}
.messageBox h2 {
    text-align: center;
    font-size: 18px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
}
.messageBox p {
    text-align: center;
    line-height: 40px;
}
.messageBox > div{
    display: flex;
    width: 100%;
    position: absolute;
    bottom: 0;
}
.messageBox > div div {
    flex: 1;
    text-align: center;
    line-height: 30px;
    border-top: 1px solid #eee;
}
.messageBox > div div:nth-child(1) {
    border-right: 1px solid #eee;
}
</style>