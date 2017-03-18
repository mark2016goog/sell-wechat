<template>
  <div class="star">
    <span v-for="item_class in item_classes" :class="item_class"></span>
  </div>
</template>
<script>
  export default{
    props:['score'],
    computed:{
      item_classes(){
        var result = [];
        var on_size = Math.floor(this.score);
        for(var i = 0;i < on_size;i++){
          result.push('on');
        }
        var decimal = (this.score-on_size);

        if(decimal>=0.5){
          result.push('on');
        }
        else if(decimal == 0){
          result.push('off');
        }
        else{
          result.push('half');
        }
        while(i < 4){
          result.push('off');
          i++;
        }
        return result;
      }
    }
  }
</script>

<style>
  .star {
    font-size: 0;
  }
  .star span{
    width: 24px;
    height: 24px;
    margin-right: 16px;
    display: inline-block;
    font-size: 12px;
  }
  .star span.on{
    background: url('../../common/images/star24_on@2x.png') no-repeat center center;
    background-size: 24px 24px;
  }
  .star span.half{
    background: url('../../common/images/star24_half@2x.png') no-repeat center center;
    background-size: 24px 24px;
  }
  .star span.off{
    background: url('../../common/images/star24_off@2x.png') no-repeat center center;
    background-size: 24px 24px;
  }
</style>