<template>
    <div class="header1">
       <div class="center">
           <span class="title1">梅州柚高值利用全程信息化平台</span>
           <div class="top_left">
                <img src="../../assets/jcst_logo.png">
           </div>
           <div class="top_right">
                <div class="wrapper1">
                    <span class="weather1"><img v-if="tupian" :src="tupian">{{curCity}} {{weather}} {{temperature}}℃</span>
                    <span class="date1">{{date}}</span>
                </div>
           </div>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    created() {
        setInterval(() => {
            var date = new Date().toString().split(' ')
            var month = new Date().getMonth() + 1
            var str = ''
            this.date = str + date[3] + '-' + month + '-' + date[2] + ' ' + date[4]
        }, 1000)
        axios.get("/tq",{params:{from:'5',lat: 24.289099,lng: 116.122045,needMoreDay:1},
        headers:{Authorization:"APPCODE 912f4ba38a394870aed1d60aca9a34fb"}}).then((res)=>{
            if (res.status === 200) {
              this.weather = res.data.showapi_res_body.now.weather
              this.weathercode = res.data.showapi_res_body.now.weather_code
              this.temperature = res.data.showapi_res_body.now.temperature
              this.curCity = res.data.showapi_res_body.cityInfo.c3
            }
        });
    },
    data() {
        return {
            date: '',
            weather: '',
            weathercode:'',
            tupian:'',
            temperature: '',
            curCity: '',
            lei:['04','05'],
            sun:['00','29','30','99'],
            bigyu:['08','09','10','11','12','19','22','23','24','25'],
            smallyu:['03','06','07','21','301'],
            moreyu:['01','02','18','20','31','53'],
            xue:['06','13','14','15','16','17','26','27','28','302'],
        }
    },
    watch:{
        weathercode:function(){
            let a=this.weathercode;
            if(this.lei.indexOf(a)>-1){
                this.tupian= require('../../assets/lei.png');
            }
            if(this.sun.indexOf(a)>-1){
                this.tupian= require('../../assets/sun.png');
            }
            if(this.bigyu.indexOf(a)>-1){
                this.tupian= require('../../assets/bigyu.png');
            }
            if(this.smallyu.indexOf(a)>-1){
                this.tupian= require('../../assets/smallyu.png');
            }
            if(this.moreyu.indexOf(a)>-1){
                this.tupian= require('../../assets/moreyun.png');
            }
            if(this.xue.indexOf(a)>-1){
                this.tupian= require('../../assets/xue.png');
            }
        }
    },
}
</script>
<style lang="stylus">
.header1
    min-width 1200px
    padding-top 9px 
    .center
        position relative
        width 100%
        height 110px 
        text-align center
        background-image url("../../assets/head.png") 
        background-repeat no-repeat
        background-size 100% 100%
        .title1
            line-height 75px
            color #ffffff
            font-size 35px
        .top_left
            position absolute
            bottom 10px
            left 20px
            width 20%
            height 70px
            background-image url("../../assets/top_left.png")
            background-repeat no-repeat
            background-size 100% 100%
            img
                width 70%
                height 54px
        .top_right
            position absolute
            bottom 10px
            right 20px
            width 20%
            height 70px
            background-image url("../../assets/top_right.png")
            background-repeat no-repeat
            background-size 100% 100%  
            .wrapper1
                margin-top 10px
            img
                width 25px
                height 25px
                margin-right 10px
                vertical-align middle 
            .weather1
                display block
                color #ffffff
                font-size 16px
                vertical-align middle
            .date1
                display block
                margin-top 5px
                color #ffffff
                font-size 16px
</style>

