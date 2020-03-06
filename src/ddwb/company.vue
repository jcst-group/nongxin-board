<template>
    <div class="company1">
        <headers></headers>
        <div style="position: relative;font-size: 16px;letter-spacing: 2px;top:-15px;left:30px;width:70px;margin-top:30px;height:30px;border-radius:5px;background:#00A75A;line-height:30px;text-align:center;color:#ffffff;cursor:pointer;" @click="backhome">返回</div>
        <div class="company-wrapper">
            <div class="message-team">
                <div class="message">
                    <div class="desc" style="padding:5px 0 0 20px">
                        <div class="title"><span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span><span style="vertical-align:middle;color:#fff">基础信息</span></div>
                        <div class="descs">Basic Information</div>
                    </div>
                    <div class="message-wrapper" style="padding:15px 15px 15px 5px;">
                        <div v-for="(item,index) in message" :key="index" style="padding:10px;background-color:#082E2E;white-space:nowrap">
                            <span class="name" :style="{width: index === 1 ? '27%' : '35%'}" style="display: inline-block; text-align:left;">
                                <span style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;"></span>
                                <span style="color: #fff;margin-left:5px;">{{item.name}}</span>
                            </span>
                            <span class="message-desc" style="display: inline-block; width:65%; text-align:right;color: #FCE700">{{item.desc}}</span>
                        </div>
                    </div>
                </div>
                <div class="team">
                    <div class="desc" style="padding:5px 0 0 20px">
                        <div class="title"><span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span><span style="vertical-align:middle;color:#fff;">服务团队</span></div>
                        <div class="descs">Service Team</div>
                    </div>
                    <div style="padding:20px;">
                        <table style="width:100%;height:40px;text-align:center;color:#fff;font-size:15px;">
                            <tr>
                                <td style="width:15%;border:1px solid #00A75A;">姓名</td>
                                <td style="width:25%;border:1px solid #00A75A;">专业背景</td>
                                <td style="width:35%;border:1px solid #00A75A;">学校</td>
                                <td style="width:10%;border:1px solid #00A75A;">学历</td>
                            </tr>
                        </table>    
                        <div id="srollbox" style="width:100%;height:390px;overflow:hidden;">
                            <table id="sroll" style="width:100%;height:100%;position:relative; top:0;">
                                <template v-for="(v,k) in team">
                                <tr :key="k" style="text-align:center;color:#fff;font-size:16px;">
                                    <td style="width:15%;border:1px solid #00A75A;color:#FCE700">{{v.name}}</td>
                                    <td style="width:25%;border:1px solid #00A75A;color:#FCE700">{{v.major}}</td>
                                    <td style="width:35%;border:1px solid #00A75A;color:#FCE700">{{v.school}}</td>
                                    <td style="width:10%;border:1px solid #00A75A;color:#FCE700">{{v.education}}</td>
                                </tr>
                                </template>
                            </table>
                            <table id="sroll1" style="width:100%;height:100%;position:relative; top:0">
                                <template v-for="(v,k) in team">
                                <tr :key="k" style="text-align:center;color:#fff;font-size:16px;">
                                    <td style="width:15%;border:1px solid #00A75A;color:#FCE700">{{v.name}}</td>
                                    <td style="width:25%;border:1px solid #00A75A;color:#FCE700">{{v.major}}</td>
                                    <td style="width:35%;border:1px solid #00A75A;color:#FCE700">{{v.school}}</td>
                                    <td style="width:10%;border:1px solid #00A75A;color:#FCE700">{{v.education}}</td>
                                </tr>
                                </template>
                            </table>
                        </div>
                    </div>
                    <!-- <div id="srollbox" style="margin:20px;height:430px;overflow:hidden;position:relative">
                        <table class="team-table">
                            <thead style="position:absolute; z-index: 99; width:100%; display:flex">
                                <th style="flex: 1">姓名</th>
                                <th style="flex: 2">专业背景</th>
                                <th style="flex: 3">学校</th>
                                <th style="flex: 1">学历</th>
                            </thead>
                            <tbody id="sroll" style="position:absolute;top:35px;width: 100%">
                                <tr v-for="(v,k) in team" :key="k" style="width:100%; display:flex">
                                    <td style="flex: 1">{{v.name}}</td>
                                    <td style="flex: 2">{{v.major}}</td>
                                    <td style="flex: 3">{{v.school}}</td>
                                    <td style="flex: 1">{{v.education}}</td>
                                </tr>
                                <tr v-for="(v,k) in team" :key="k" style="width:100%; display:flex">
                                    <td style="flex: 1">{{v.name}}</td>
                                    <td style="flex: 2">{{v.major}}</td>
                                    <td style="flex: 3">{{v.school}}</td>
                                    <td style="flex: 1">{{v.education}}</td>
                                </tr>
                            </tbody>
                            <tbody id="sroll1" style="position:absolute;top:235px;width: 100%">
                                <tr v-for="(v,k) in team" :key="k" style="width:100%; display:flex">
                                    <td style="flex: 1">{{v.name}}</td>
                                    <td style="flex: 2">{{v.major}}</td>
                                    <td style="flex: 3">{{v.school}}</td>
                                    <td style="flex: 1">{{v.education}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> -->
                </div>
            </div>
            <div class="company-info">
                <div class="info" style="text-align:center">
                    <div class="desc" style="padding:5px 0 0 0;text-align:center;width:400px;display:inline-block;border-bottom: 2px solid #082E2E">
                        <div class="title" ><span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span><span style="color:#fff;font-size:18px;vertical-align:middle;">公司简介</span><span style="font-size:15px;margin-left:8px;vertical-align:middle;">Company profile</span></div>
                    </div>
                    <div class="info-wrapper">
                        <p class="company-desc pppp" style="margin-top:20px"><img style="float:left;margin-right:10px;" :src="jianjiepng" width="50%" height="250px" alt="">{{companyProfile}}</p>
                        <!-- <p>公司注重科研能力的积累，组建了企业技术中心，联合北京大学药学院、中国中医科学院、成都中医药大学等实力科研院所，构建川麦冬全产业链研发平台，是成都中医药大学就业实践与教学实习基地，西南交通大学新品系选育研究基地。通过近十年的积累和沉淀，公司探索形成了“公司+基地+专业合作社+农户”的道地药材产业化运营模式”和 “七统一分”管理模式，以道地药材全产业链数字化管理云平台（AMS-ERP）为工具，实现中药农业全程动态追溯食品（饮料、配方茶、炖料包）、麦冬日化产品三大衍生产品系列。公司将以“不急不燥、从容人生”的产品理念，贴心服务客户，与客户携手共进，共创价值。</p> -->
                        <!-- <p class="company-desc" style="margin-top:20px"><img style="float:left;margin-right:10px;" :src="jianjiepng" src="../assets/ddwb.png" width="50%" height="250px" alt="">{{companyProfile}}</p> -->
                    </div>
                    <div class="movepoint1"></div>
                </div>
                <div class="videos">
                    <div class="video1">
                        <div class="desc" style="margin:0;padding:5px 0 0 20px">
                            <div class="title"><span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span><span style="color:#fff;vertical-align:middle;">公司介绍</span></div>
                            <div class="descs">Company introduction</div>
                        </div>
                        <div class="video-wrapper">
                            <video :src="companyvideo" controls></video>
                        </div>
                    </div>
                    <div class="video2">
                        <div class="desc" style="margin:0;padding:5px 20px 0 0;text-align:right;">
                            <div class="title" style="margin:0;"><span style="vertical-align:middle;color:#fff">产品介绍</span><span style="display:inline-block;margin-left:5px;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span></div>
                            <div class="descs">Product introduction</div>
                        </div>
                        <div class="video-wrapper">
                            <video :src="productvideo" controls></video>
                        </div>
                    </div>
                </div>
            </div>
            <div class="honors">
                <div class="model">
                    <div class="desc" style="margin:0;padding:5px 20px 0 0;text-align:right;">
                        <div class="title" style="margin:0;"><span style="vertical-align:middle;color:#fff">核心理念</span><span style="display:inline-block;margin-left:5px;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span></div>
                        <div class="descs">Core idea</div>
                    </div>
                    <div style="width:100%;height:100%;padding:20px;">
                        <div class="servcie">
                            <img :src="servicejpg" width="100%" height="320px" alt="">
                        </div>
                    </div>
                </div>
                <div class="main-honors">
                    <div class="desc" style="margin:0;padding:5px 20px 0 0;text-align:right;">
                        <div class="title" style="margin:0;"><span style="vertical-align:middle;color:#fff">主要荣誉</span><span style="display:inline-block;margin-left:5px;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span></div>
                        <div class="descs">Main honors</div>
                    </div>
                    <div style="width: 100%;height: 340px;padding:20px;">
                        <div class="lunbo" v-if='hppic.length'>
                            <Carousel autoplay :autoplay-speed="5000" loop class="lunbo-wrapper">
                                <CarouselItem v-for="(v,k) in hppic" :key="k">
                                    <img :src="geturl(v.pictureUrl)" width="100%" height="300" alt="">
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot style="margin:0px;"/>
    </div>
</template>
<script>
import roll from '../assets/js/roll.js';
import headers from '@/components/header/header1'
import Foot from '@/components/layouts/GlobalFooter.vue'
import {getCompany,getTeam} from '@/api/allapi'

export default {
    name: 'company',
    components: {
        headers,
        Foot
    },
    data () {
        return {
            message: [],
            info:{},
            companyvideo:'',
            productvideo:'',
            servicejpg:'',
            jianjiepng:'',
            hppic:[],
            companyProfile:'',
            team:[],
        }
    },
    created(){
        getCompany({id:1}).then(res=>{
            if(res.success){
                this.info=res.result;
                this.hppic=this.info.honorPicture;
                if(this.info.companyProfile){
                    this.companyProfile=this.info.companyProfile;
                }
                this.message=[{
                name: '企业名称：',
                desc: this.info.companyName
            }, {
                name: '地理位置：',
                desc: this.info.companyAddress
            }, {
                name: '主要品种：',
                desc: this.info.platCrop
            }, {
                name: '管理面积(亩)：',
                desc: this.info.manageArea
            }, {
                name: '管理合作社(个)：',
                desc: this.info.manageCooperation
            }];
            if(this.info.managePicture.length>0){
                this.servicejpg='/api/pictureInfo/show/'+this.info.managePicture[0].pictureUrl
            }
            if(this.info.companyPicture.length>0){
                this.jianjiepng='/api/pictureInfo/show/'+this.info.companyPicture[0].pictureUrl
            }
            if(this.info.videoCompany){
                this.companyvideo='/api/fileInfo/getVideo?fileUrl='+this.info.videoCompany.fileUrl;
            }
            if(this.info.videoProduct){
                this.productvideo='/api/fileInfo/getVideo?fileUrl='+this.info.videoProduct.fileUrl;
            }
            }
        })
        getTeam().then(res=>{
            if(res.success){
                this.team=res.result;
                this.$nextTick(() => {
                    if (this.baseScroll) {
                        clearInterval(this.baseScroll.timer)
                    }
                    let height=document.getElementById('sroll').offsetHeight;
                    this.baseScroll = new roll.Roll('srollbox', 'sroll', 'sroll1', -height+5)
                })
            }
        })
    },
    methods:{
        backhome(){
            this.$router.push({ name: 'home'});
        },
        geturl(url){
            return '/api/pictureInfo/show/'+url;
        },
    },
}
</script>
<style lang="stylus">
    .video1
        background-image url("../../src/assets/center_left.png") 
        background-repeat no-repeat
        background-size 100% 100%
    .video2
        background-image url("../../src/assets/center_right.png") 
        background-repeat no-repeat
        background-size 100% 100%
    .company1
        min-width 1750px
        background-image url("../../src/assets/background.png") 
        background-repeat no-repeat
        background-size 100% 100%
    .button
        position absolute
        height 30px
        color #fff
        width 80px
        top 120px
        left 15px
    .company-wrapper
        display flex
        margin 10px 15px 20px
        .desc
            height 45px
            color #00A75A
            font-size 16px
            padding-left 10px
            box-sizing border-box
            .title
                height 20px
                color #00A75A
                line-height 30px
            .descs
                font-size 14px
                line-height 32px
                // margin 0 16px
        .message-team
            flex 1
            height 100%
            .message
                height 315px
                background-image url("../../src/assets/left4_1.png") 
                background-repeat no-repeat
                background-size 100% 100%
                .message-wrapper
                    font-size 17px
                    height 270px
                    display flex
                    flex-direction column
                    justify-content space-around
                    div
                        flex 1
                        margin-left 10px
                        color #fff
                    div:nth-of-type(1)
                        margin-top 8px
            .team
                margin-top 20px
                background-image url("../../src/assets/left4_2.png") 
                background-repeat no-repeat
                background-size 100% 100%
                overflow hidden
                .team-table
                    overflow hidden
                    font-size 16px
                    height 430px
                    width 100%
                    color #FCE700
                    tr, th
                        background-color #082E2E
                        text-align center
                    td, th
                        border 1px solid #00A75A
                    th
                        color #fff
                        font-weight 500
                        height 35px
                        line-height 35px
                    tr
                        height 40px
                        line-height 40px
        .company-info
            flex 2
            margin 0 20px
            height 850px
            .info
                position relative
                height 560px
                background-image url("../../src/assets/center4_1.png") 
                background-repeat no-repeat
                background-size 100% 100%
                .movepoint1
                    position absolute
                    width 5%
                    height 5px
                    bottom -2px
                    background-image url("../../src/assets/movepoint.png") 
                    background-repeat no-repeat
                    background-size 100% 100%
                    animation mymove 10s infinite
                    -webkit-animation mymove 10s infinite
                @keyframes mymove
                    from {left:0%;}
                    to {left:95%;}
                @-webkit-keyframes mymove
                    from {left:0%;}
                    to {left:95%;}   
                .info-wrapper
                    padding 40px 20px 0 20px
                    p
                        color #fff
                        text-indent 2em
                        margin 0
                        text-align left
                        line-height 45px
                        font-size 20px
                        padding 0 10px
                        box-sizing border-box
            .videos
                margin-top 20px
                height 270px
                display flex
                div
                    flex 1
                    .video-wrapper
                        padding 20px
                        video
                            height 185px
                            width 100%
                div:nth-of-type(1)
                    margin-right 20px
        .honors
            flex 1
            .model
                background-image url("../../src/assets/right4_1.png") 
                background-repeat no-repeat
                background-size 100% 100%
                .servcie
                    height 340px
                    background-color #082E2E
                    img
                        position relative
                        top 50%
                        transform translateY(-50%)
            .main-honors
                margin-top 40px
                background-image url("../../src/assets/right4_2.png") 
                background-repeat no-repeat
                background-size 100% 100%
                .lunbo
                    height 100%
                    width 380px
                    position relative
                    left 50%
                    transform translateX(-50%)
                    .lunbo-wrapper
                        height 100%
                        .ivu-carousel-arrow
                            background-color rgba(0, 0, 0, 0.3)
                        .ivu-carousel-arrow:hover
                            background-color rgba(0, 0, 0, 0.8)
@media screen and (min-width: 2000px)
    .lunbo-title
        height 350px !important
    .name
        width 185px !important
        white-space nowrap
@media screen and (max-width: 1900px)
    .pppp
        line-height  40px  !important
</style>
