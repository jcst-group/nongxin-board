<template>
  <div class="base2">
<headers></headers>
<div style="position: relative;font-size: 16px;letter-spacing: 2px;top:-15px;left:30px;width:70px;margin-top:30px;height:30px;border-radius:5px;background:#00A75A;line-height:30px;text-align:center;color:#ffffff;cursor:pointer;" @click="backhome">返回</div>
    <a-row :gutter="16" style="padding:0 20px 40px 20px;margin:0;">

  <a-col :span="6">
          <div class="left1" style="width:100%;height:270px;margin-bottom:19px;">
              <div style="width:100%;height:60px;padding:10px 0;margin:2% 0 0 5%;">
                <span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span><span style="display:inline-block;vertical-align:middle;margin-left:10px;color:#fff;font-size:14px;font-weight: bold;">基础信息</span>
                <span style="display:block;color:#00A75A;font-size: 6px;">Basic information</span>
              </div>
              <div style="width:100%;height:80%;padding:0 20px 20px 20px;">
                <table style="width:100%;height:100%;background-color:#082E2E">
                       <tr style="color:#fff;font-size:16px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span style="color:#fff">所在地区：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{baseinformation.baseAddress}}</td>
                       </tr>
                        <tr style="color:#fff;font-size:16px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span style="color:#fff">基地：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{baseinformation.name}}</td>
                       </tr>
                        <tr style="color:#fff;font-size:16px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span style="color:#fff">基地范畴：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{baseinformation.baseCategory}}</td>
                       </tr>
                        <tr style="color:#fff;font-size:16px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span style="color:#fff">基地类型：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{baseinformation.baseType}}</td>
                       </tr>
                       <tr style="color:#fff;font-size:16px;">
                         <td style="text-align:left;width:50%;color:#7EFAFC"><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#FCE700;border-radius:50%;margin:0 10px 0 30px;"></span><span style="color:#fff">面积(亩)：</span></td>
                         <td style="text-align:left;width:50%;color:#FCE700">{{baseinformation.area}}</td>
                       </tr>
                   </table>
                   </div>
        </div>
        <div class="left2" style="width:100%;height:150px;margin-bottom:19px;">
          <div style="width:100%;height:60px;padding:10px 0;margin:2% 0 0 5%;">
                <span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span><span style="display:inline-block;vertical-align:middle;margin-left:10px;color:#fff;font-size:14px;font-weight: bold;">基地相关人员信息</span>
                <span style="display:block;color:#00A75A;font-size: 6px;">Service</span>
              </div>
              <div style="width:100%;height:67%;overflow:hidden;padding:0 20px 10px 20px;">
                <table style="width:100%;height:80%;margin:5px auto;background-color:#082E2E;">
                      <template v-for="(v,k) in basemannager">
                      <tr :key="k" style="text-align:center;font-size:14px;">
                        <td style="width:28%;color:	#FCE700;">{{v.realName}}</td>
                        <td style="width:72%;color:	#FCE700;text-align:left;"><span v-for="(v1,k) in v.roleList" :key="k">{{v1.name}}<span v-if="k!=v.roleList.length-1">、</span></span></td>
                      </tr>
                  </template>
                </table>
              </div>
        </div>
        <div class="left3" style="width:100%;height:392px;position:relative;">
          <!-- <div v-if="!isshow" style="width:96%;height:300px;position:absolute;background:rgba(255,255,255,0.2);left:2%;bottom:2%;z-index:999;text-align:center;padding-top:75px;"><div style="width:100%;height:150px;background:rgba(0,0,0,1);"><span style="line-height:150px;color:#fff;">暂无监控视频</span></div></div> -->
          <div style="width:100%;height:60px;padding:10px 0;">
             <a-row>
              <a-col :span="12">
                <div style="margin:2% 0 0 5%;">
                  <span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span>
                  <span style="display:inline-block;vertical-align:middle;margin-left:10px;color:#fff;font-size:14px;font-weight: bold;">基地实景</span>
                  <span style="display:block;color:#00A75A;font-size: 6px;">Base Reality</span>
                </div>
              </a-col>
              <a-col :span="8" v-if="this.equipmentId">
                <a-button @click="goArtel" class="data-btn" style="background-color:#00A75A;border-color:#00A75A;color:#fff">
                  实时监测数据
                  <a-icon type="right" />
                </a-button>
              </a-col>
            </a-row>
              </div>
              <div class="img-content" v-if="baseinfo.basePic && baseinfo.basePic.length">
                
                  <Carousel arrow='never' :autoplay-speed="5000" :autoplay='baseinfo.basePic.length > 1' loop class="lunbo-wrapper" style="text-align:center">
                      <CarouselItem v-for="(v,k) in baseinfo.basePic" :key="k">
                        <a :href="baseinfo.panoramaUrl" target="_blank">
                            <img :src="geturl(v.pictureUrl)" width="100%" height="280px" alt="">
                        </a>
                      </CarouselItem>
                  </Carousel>
                
              </div>
              <!-- <div style="width:100%;height:338px;border-radius:15px;padding:10px 15px 35px 15px;overflow: hidden;">
                <video id="myVideo"  style="width:100%;height:100%" ref="myPlayer" controls :src="address"></video>
              </div> -->
        </div>
      </a-col>

<a-col :span="12" style="position:relative">
        <div class="center-head" v-if="this.orderObj">
          <div><a-icon type="double-right" style="margin-right:5px"/>工单总数：<span>{{orderObj.total}}</span></div>
          <div><a-icon type="double-right" style="margin-right:5px"/>未完成工单数：<span>{{orderObj.unexecutedCount}}</span></div>
          <div><a-icon type="double-right" style="margin-right:5px"/>即将处理工单：<span>{{orderObj.pendingCount}}</span></div>
        </div>
       <div class="center1" style="width:100%;height:550px;margin-bottom:20px;">
         <div class="movepoint1"></div>
         <div style="width:170px;height:30px;padding:10px 0;margin:auto;">
                 <span style="display:inline-block;vertical-align:middle;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span>
                 <span style="display:inline-block;vertical-align:middle;margin:0 10px 0 8px;color:#fff;font-size:15px;font-weight: bold;">数据地图</span>
                  <span style="display:inline-block;vertical-align:middle;color:#00A75A;font-size: 6px;">The data map</span>
              </div>
              <div style="width:100%;height:520px;padding:15px;">
              <div id="container" style="width:100%;height:100%;position:relative">
               <div v-if="tip" class="tip" style="position:absolute;width:40%;height:30px;z-index:99;top:5px;left:30%;color:#fff;text-align:center;line-height:30px;">
                 {{tip}}
               </div>
              </div>
              </div>
       </div>
        <div class="center2" style="width:100%;height:290px;">
          <a-col class="center-left">
            <div class="movepoint2"></div>
            <div style="height:60px;padding:10px 0;margin-left:10px;">
              <div>
                <span style="display:inline-block;vertical-align:middle;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span>
                <span style="display:inline-block;vertical-align:middle;margin:0 10px 0 8px;color:#fff;font-size:15px;font-weight: bold;">种植工单</span>
              </div>
              <span style="display:inline-block;vertical-align:middle;color:#00A75A;font-size: 6px;">Planting scheme</span>
            </div>
            <div id="srollbox" style="width:100%;height:75%;overflow:hidden;">
              <table id="sroll" style="width:100%;height:100%;position:relative; top:0">
                <template v-for="(v,k) in workrecord">
                  <tr :key="k" style="text-align:center;color:#fff;font-size:16px;">
                    <!-- <td style="width:20%;color:#EFDD04">{{v.solarTerm?v.solarTerm.displayName:null}}</td> -->
                    <td style="width:25%;">{{v.executionTime}}</td>
                    <td style="width:35%;color:#EFDD04">{{v.farmingItem?v.farmingItem.farmingName:null}}</td>
                    <td style="width:40%;white-space:nowrap">{{v.name}}</td>
                  </tr>
                </template>
              </table>
              <table id="sroll1" style="width:100%;height:100%;position:relative; top:0">
                <template v-for="(v,k) in workrecord">
                  <tr :key="k" style="text-align:center;color:#fff;font-size:16px;">
                    <!-- <td style="width:20%;color:#EFDD04">{{v.solarTerm?v.solarTerm.displayName:null}}</td> -->
                    <td style="width:25%;">{{v.executionTime}}</td>
                    <td style="width:35%;color:#EFDD04">{{v.farmingItem?v.farmingItem.farmingName:null}}</td>
                    <td style="width:40%">{{v.name}}</td>
                  </tr>
                </template>
              </table>
            </div>
          </a-col>
          <a-col class="center-right">
            <a-col :span="13" style="padding:0 40px 0 0;">
              <div class="but1" @click="showbaogao(4)" style="font-size:16px;height:30px;border-radius:3px;min-width:70px;color:#fff;text-align:center;line-height:30px;cursor:pointer;">优品图片</div>
            </a-col>
            <div class="movepoint2"></div>
            <div style="height:60px;padding:10px 0;margin-right:10px;text-align:right">
              <div>
                <span style="display:inline-block;vertical-align:middle;margin:0 10px 0 8px;color:#fff;font-size:15px;font-weight: bold;">果品评分</span>
                <span style="display:inline-block;vertical-align:middle;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span>
              </div>
              <span style="display:inline-block;vertical-align:middle;color:#00A75A;font-size: 6px;">Fruit detection</span>
            </div>
            <div class="rate-wrapper">
              <div class="flex-wrapper">
                <div>果皮颜色：</div>
                <div v-if="this.fruitColors.length" style="padding:18px 0">
                  <span v-for="(color,index) in fruitColors" :class="{'active': color === fruitObj.fruitColor}" :key="index">
                    {{color}}
                  </span>
                </div>
              </div>
              <div class="flex-wrapper">
                <div>果实形状：</div>
                <div>
                  <a-rate v-if="fruitObj.fruitShape" :defaultValue="fruitObj.fruitShape" allowHalf disabled></a-rate>
                </div>
              </div>
              <div class="flex-wrapper">
                <div>果肉饱满度：</div>
                <div>
                  <a-rate v-if="fruitObj.fruitPlumpness" :defaultValue="fruitObj.fruitPlumpness" allowHalf disabled></a-rate>
                </div>
              </div>
            </div>
          </a-col>
        </div>
      </a-col>

      <a-col :span="6">
        <div class="right1" style="width:100%;height:290px;margin-bottom:10px;">
          <div style="width:100%;height:60px;padding:10px 0;">
            <a-row>
              <a-col :span="12" style="padding:0 40px 0 0;">
                 <div class="but1" @click="showbaogao(1)" style="font-size:16px;height:33px;margin-top:-10px;border-radius:3px;min-width:70px;color:#fff;text-align:center;line-height:33px;cursor:pointer;">查看报告</div>
              </a-col>
              <a-col :span="12">
                <a-row :gutter="16">
                  <a-col :span="16" style="float: right;">
                    <div style="margin:2% 15% 0 0;text-align:right;">
                  <span style="display:inline-block;vertical-align:middle;margin-right:10px;color:#fff;font-size:14px;font-weight: bold;">土壤检测</span><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span>
                  <span style="display:block;color:#00A75A;font-size: 6px;">Soil monitoring</span>
                </div>
                  </a-col>
                </a-row>
                
              </a-col>
            </a-row>
              </div>

              <div id="graph1" style=" width: 100%;height: 82%;"></div>
        </div>
         <div class="right2" style="width:100%;height:275px;margin-bottom:10px;">
          <div style="width:100%;height:60px;padding:10px 0;">
                 <a-row>
              <a-col :span="12" style="padding:0 40px 0 0;">
                <div class="but1" @click="showbaogao(2)" style="font-size:16px;height:33px;margin-top:-10px;border-radius:3px;min-width:70px;color:#fff;text-align:center;line-height:33px;cursor:pointer;">查看报告</div>
              </a-col>
              <a-col :span="12" >
                <a-row :gutter="16">
                  <a-col :span="8">
                   
                  </a-col>
                  <a-col :span="16">
                    <div style="margin:2% 15% 0 0;text-align:right;position:relative">
                  <span style="display:inline-block;vertical-align:middle;margin-right:10px;color:#fff;font-size:14px;font-weight: bold;">农残检测</span><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span>
                  <span style="display:block;color:#00A75A;font-size: 6px;white-space: nowrap;position: absolute;right: 0;">Detection of pesticide residues</span>
                </div>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
              </div>
              <div id="graph3" style=" width: 95%;height: 81%;"></div>
               <!-- <div style="width:100%;height:67%;">
                   <table style="width:100%;height:100%;">
                     <template v-for="v in airtest">
                       <tr :key="v.id" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:33%">{{v.testName}}</td>
                         <td style="width:33%">{{v.amount}}mg/L</td>
                         <td style="width:33%;color:#66F8AF;">{{v.status}}</td>
                       </tr>
                     </template>
                   </table>
                </div> -->
        </div>
        <div class="right3" style="width:100%;height:275px;">
          <div  style="width:100%;height:50px;padding:10px 0 0;">
                 <a-row>
                <a-col :span="12" style="padding:0 40px 0 0;">
                <div class="but1" @click="showbaogao(3)" style="font-size:16px;height:33px;margin-top:-10px;border-radius:3px;min-width:70px;color:#fff;text-align:center;line-height:33px;cursor:pointer;">查看报告</div>
              </a-col>
              <a-col :span="12">
                  <a-col :span="24">
                    <div style="margin:2% 15% 0 0;text-align:right;">
                  <span style="display:inline-block;vertical-align:middle;margin-right:10px;color:#fff;font-size:14px;font-weight: bold;">可溶性固形物含量(糖度)</span><span class="icon" style="display:inline-block;width:10px;height:10px;background-color:#00A75A;border-radius:50%;"></span>
                  <span style="display:block;color:#00A75A;font-size: 6px;">Soluble solids content</span>
                </div>
                  </a-col>
              </a-col>
            </a-row>
              </div>

              <div id="graph2" style=" width: 100%;height: 81%;"></div>

              <!-- <div style="width:100%;height:86%;">
                   <table style="width:100%;height:100%;">
                     <template v-for="v in watertest">
                       <tr :key="v.id" style="text-align:center;color:#fff;font-size:16px;border-bottom: 1px solid rgba(221, 215, 215, 0.1);">
                         <td style="width:33%">{{v.testName}}</td>
                         <td style="width:33%">{{v.amount}}mg/m²</td>
                         <td style="width:33%;color:#66F8AF;">{{v.status}}</td>
                       </tr>
                     </template>
                   </table>
                </div> -->
        </div>
      </a-col>

    </a-row>
    <Foot style="margin:0px;"/>
    <a-modal
      class="tubaogao"
      title="土壤检测报告"
      v-model="visible1"
      @ok="handleOk"
      :footer="null" 
    >
      <img style="width:100%;height:100%;" :src="getbaogao(1)">
    </a-modal>
    <a-modal
      title="农残检测报告"
      v-model="visible2"
      @ok="handleOk"
      :footer="null"
    >
      <img style="width:100%;height:100%;" :src="getbaogao(2)">
    </a-modal>
    <a-modal
      title="可溶性固形物含量(糖度)报告"
      v-model="visible3"
      @ok="handleOk"
      :footer="null"
    >
      <img style="width:100%;height:100%;" :src="getbaogao(3)">
    </a-modal>
    <a-modal
      title="优品图片"
      v-model="visible4"
      :footer="null"
    >
      <img style="width:100%;height:100%;" :src="getbaogao(4)">
    </a-modal>
  </div>
</template>
<script>
import roll from '../assets/js/roll.js';
import MapLoader from '@/utils/loadMap.js'
import headers from '@/components/header/header1'
import Foot from '@/components/layouts/GlobalFooter.vue'
import axios from 'axios'
import { getBaseInfoById,getPesticideResidues,getSugarContent,getEquipmentByBaseId,getFruitColor,getOrderCount } from '@/api/allapi'

export default {
  components: {
      headers,
      Foot
    },
  data(){
    return{
       workrecord:[],
        soiltest:[],
        watertest:[],
        airtest:[],
        baseinformation:{},
        basemannager:[],
        map:null,
        basemarker:null,
        info:[],
        infoWindow:null,
        basenum:0,
        nowTimed:'',
        nowTimem:'',
        baseinfo:{},
        plotinfo:[],
        temperature:[],
        time:[],
        amount1:[],
        item1:[],
        amount2:[],
        item2:[],
        amount3:[],
        item3:[],
        tianqi:[],
        visible1:false,
        visible2:false,
        visible3:false,
        visible4:false,
        addresss: [],
        address: '',
        curLock: false,
        tip:'',
        plot5:[],
        polygonss:[],
        baseName:'',
        isshow:'',
        airPic: '',
        sugarPic: '',
        equipmentId: null,
        fruitColors: [],
        fruitObj: {},
        orderObj: null
    }
  },
  created(){
    this.basenum=Number(this.$route.query.baseId);
    this.baseName=this.$route.query.baseName;
    this.getAddress();
    getFruitColor().then(res => {
      if (res.success) {
        this.fruitColors = res.result ? res.result : []
      }
    })
    getOrderCount({
      baseId: this.basenum
    }).then(res => {
      if (res.success) {
        this.orderObj = res.result || null
      }
    })
  },
  mounted(){
    let that=this;
    that.baseinformation={};
    that.basemannager=[];
    getPesticideResidues({
      baseId:this.basenum
    }).then(res => {
      if (res.success) {
        if (!res.result) {
          return
        }
        res.result.pesticideResidues.forEach(item => {
          this.amount3.push(item.value);
          this.item3.push(item.item);
        })
        if (res.result.pictureInfo) {
          this.airPic = res.result.pictureInfo.pictureUrl
        }
        this.drawLine3();
      }
    })
    getSugarContent({
      baseId:this.basenum
    }).then(res => {
      if (res.success) {
        if (!res.result) {
          return
        }
        res.result.sugarContent.forEach(item => {
          this.amount2.push(item.sugarContent);
          this.item2.push(item.detectionTime);
        })
        if (res.result.pictureInfo) {
          this.sugarPic = res.result.pictureInfo.pictureUrl
        }
        this.drawLine2();
      }
    })
    if (this.basenum !== 87) {
      getEquipmentByBaseId({
        baseId:this.basenum
      }).then(res => {
        if (res.success) {
          if (res.result.length) {
            this.equipmentId = res.result[0].equipmentId
            window.sessionStorage.equipmentName = res.result[0].equipmentName
          }
        }
      })
    }
    getBaseInfoById({baseId:this.basenum}).then(res=>{
      if(res.success){
        // that.isshow=res.result.videoEquipmentList.length;
        if (!res.result) {
          return
        }
        that.baseinfo=res.result;
        that.baseinformation.baseAddress=that.baseinfo.address.street;
        that.baseinformation.name=that.baseinfo.baseName;
        that.baseinformation.baseCategory=that.baseinfo.category?that.baseinfo.category.displayName:'暂无';
        that.baseinformation.baseType=that.baseinfo.baseType?that.baseinfo.baseType.displayName:'暂无';
        that.baseinformation.area=that.baseinfo.acreage;
        that.baseinformation.yield=(that.baseinformation.area*0.24).toFixed(2);
        that.basemannager=that.baseinfo.baseUser;
        that.workrecord=[];
        this.fruitObj = res.result.fruitGrading ? res.result.fruitGrading : [{}]
        for(let i=0;i<that.baseinfo.cropBatchList.length;i++){
          for(let j=0;j<that.baseinfo.cropBatchList[i].workOrderList.length;j++){
            that.baseinfo.cropBatchList[i].workOrderList[j].name=that.baseinfo.cropBatchList[i].batchName;
            that.baseinfo.cropBatchList[i].workOrderList[j].executionTime=that.baseinfo.cropBatchList[i].workOrderList[j].executionTime.split(' ')[0];
          }
          that.workrecord=that.workrecord.concat(that.baseinfo.cropBatchList[i].workOrderList);
        }
        that.$nextTick(() => {
          if (that.baseScroll) {
            clearInterval(that.baseScroll.timer)
          }
          let height=document.getElementById('sroll').offsetHeight;
          that.baseScroll = new roll.Roll('srollbox', 'sroll', 'sroll1', -height+5)
        })
        let test=that.baseinfo.baseTestingVoList;
        that.amount1=[];
        that.item1=[];
        for(let i=0;i<test.length;i++){
          if(test[i].itemName.value===3){
            that.amount1.push(test[i].value);
            that.item1.push(test[i].item);
          }
          this.drawLine1();
        }     
        that.iniMap();
        window.addEventListener('done2', function(){
          let lng=that.baseinfo.longitude;
          let lat=that.baseinfo.latitude;
          var icon = new AMap.Icon({
            size: new AMap.Size(30, 45),    // 图标尺寸
            image: require('../assets/base.png'),  // Icon的图像
            imageOffset: new AMap.Pixel(0, 0),  // 图像相对展示区域的偏移量，适于雪碧图等
            imageSize: new AMap.Size(30, 45)   // 根据所设置的大小拉伸或压缩图片
          });
          that.basemarker= new AMap.Marker({
            position: new AMap.LngLat(lng, lat),
            icon:icon
          });
          that.map.add(that.basemarker);
          that.map.setFitView( );
          that.basemarker.on("click",function(e) {that.infowindow(e);});
          that.basemarker.on("mousemove",function(e) {that.tip=that.baseinfo.baseName});
          that.basemarker.on("mouseout",function(e) {that.tip=''});  

          that.plot5=that.baseinfo.lotList;
          let a=[];
          for(let i=0;i<that.plot5.length;i++){
            a.push(that.plot5[i].id);
          }
          that.addBlockOnMap(a);
        });
      }
    })
},

  methods:{
    goArtel() {
      this.$router.push({
        path: '/test',
        query: {
          baseId: this.basenum,
          equipmentId: this.equipmentId
        }
      })
    },
    geturl(url){
        return '/api/pictureInfo/show/'+url;
    },
    backhome(){
      this.$router.push({ name: 'home'});
    },
    addBlockOnMap(value){
      this.polygonss=[];
      for(let j=0; j<value.length;j++){
        let a=value[j];
        for(let i=0;i<this.plot5.length;i++){
          let item = this.plot5[i];
          if(item.id==a){
            if(item.remark!=undefined && item.remark!=null && item.remark.trim()!=""){
              let remarkJson2 = eval('(' + item.remark + ')');
              let newPath = [];
              for(let i=0;i<remarkJson2.path.length;i++){
                let point=remarkJson2.path[i];
                newPath.push(new AMap.LngLat(point.lng,point.lat));
              }
              remarkJson2.path = newPath;
              let polygon2 = new AMap.Polygon(remarkJson2);
              this.polygonss.push(polygon2);
              this.map.add(polygon2);
              this.map.setFitView( );
            }
          }
        }
      }
      let that=this;
      for(let i=0;i<that.polygonss.length;i++){
        // that.polygonss[i].on("click",function(e) {that.$router.push({ name: 'plot',query:{baseId:Number(that.basenum),plotId:that.plot5[i].id}})});
        that.polygonss[i].on("mousemove",function(e) {that.tip=that.plot5[i].lotName});
        that.polygonss[i].on("mouseout",function(e) {that.tip=''});
      }
    },
    selectAddress(datas) {
      if (datas.length != 0) {
        this.address = datas[1]
        // this.$nextTick(() => {
        //   this.player = new EZUIPlayer('myVideo');
        // })
      }
    },
    getAddress (token) {
      var date = new Date().toString().split(' ')
      var month = new Date().getMonth() + 1
      var str = ''
      this.date = str + date[3] + '-' + month + '-' + date[2]
      this.hours = date[4]
      let params = 'appKey=c949347ff85947d39f0749143b0a76f6&appSecret=83a5afbe9249c08698e53a92e97edc53'
      let curToken = token ? token : window.localStorage.token
      axios.post('https://open.ys7.com/api/lapp/live/video/list', curToken, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        if (res.data.code == 200) {
          if (res.data.data && res.data.data.length && this.baseinfo.videoEquipmentList) {
              this.addresss.push({
                label: this.baseinfo.baseName,
                children: []
              })
              var aa=1;
              res.data.data.forEach((item,i) => {
                for(let j=0; j<this.baseinfo.videoEquipmentList.length;j++){
                  if (item.liveAddress&&(item.deviceSerial==this.baseinfo.videoEquipmentList[j].serialNumber)) {
                  this.addresss[0].children.push({
                    label: '通道' + aa,
                    value: res.data.data[i].liveAddress
                  })
                  aa++;
                }
                }
              })
          }
        }else if (res.data.code == 10002) {
            axios.post('https://open.ys7.com/api/lapp/token/get', params, {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            }).then(res => {
              if (res.data.code == 200) {
                token = 'accessToken=' + res.data.data.accessToken + '&pageStart=0&pageSize=50'
                window.localStorage.setItem('token', token)
                this.getAddress(token)
              }
            })
        }
        // this.$nextTick(() => {
        //   myVideo.addEventListener('play', () => {
        //   this.player.on()
        //   })
        // })
      })
    },

    getbaogao(a){
      var url=null;
      if(a==1){
        if(this.baseinfo.soilPic){
          url='/api/pictureInfo/show/'+this.baseinfo.soilPic.pictureUrl;
        }
      }
      if(a==2){
        if(this.airPic){
          url='/api/pictureInfo/show/'+this.airPic;
        }
      }
      if(a==3){
       if(this.sugarPic){
          url='/api/pictureInfo/show/'+this.sugarPic;
        }
      }
      if(a==4){
        if(this.baseinfo.fruitReportPic){
          url='/api/pictureInfo/show/'+this.baseinfo.fruitReportPic.pictureUrl;
        }
      }
      return url
    },
    showbaogao(a){
      switch (a) {
        case 1:
          this.visible1=true;
          break;
        case 2:
          this.visible2=true;
          break;
        case 3:
          this.visible3=true;
          break;
        case 4:
          this.visible4=true;
          break;
        default:
          break;
      }
      
    },

    handleOk(){
      this.visible=false;
    },

    timeFormate(timeStamp) {
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      this.nowTimed = year + "/" + month + "/" + date +"/";
      this.nowTimem = hh+":"+mm ;
    },

    nowTimes(){
      this.timeFormate(new Date());
    },

    drawLine(){
      let that=this;
      var myChart = that.$echarts.init(document.getElementById('graphwendu'))
      window.addEventListener("resize", function() {
        myChart.resize();
	    })
      myChart.setOption({
        tooltip : {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '3%',
          top: '15%',
          containLabel: true
        },
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : that.time,
            axisLine:{
              lineStyle:{
                color:'#fff',
              }
            }
          }
        ],
        yAxis : [
          {
            name:'单位(℃)',
            type : 'value',
            splitLine:{
              show:false
            },
            axisLine:{
              lineStyle:{
                color:'#fff',
              }
            }
          }
        ],
        series : [
          {
            name:'气温',
            type:'line',
            stack: '总量',
            data:that.temperature,
            smooth: true,
            symbol: "none",
            itemStyle: {
              color: '#0154C8'
            },
            areaStyle: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgb(0, 0, 255,0.7)'
              }, {
                offset: 1,
                color: 'rgb(255, 255, 255,0.1)'
              }])
            },
          },
        ]
      });
    },

  drawLine1(){
    let that=this;
    var myChart1 = that.$echarts.init(document.getElementById('graph1'))
    window.addEventListener("resize", function() {
      myChart1.resize();
	  })
    myChart1.setOption({
      color: ['#000'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {
        type : 'shadow'
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '20%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : that.item1,
          axisLine:{
            lineStyle:{
              color:'#fff',
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            rotate: 0,
            margin: 20,
            formatter: function(params) {
              var newParamsName = '';
              var paramsNameNumber = params.length;
              var provideNumber = 3;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = '';
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                      tempStr = params.substring(start, end) + '\n';
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName
            }
          },
        }
      ],
      yAxis : [
        {
          name:'单位(mg/kg)',
          splitLine:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color:'#fff',
            }
          },
          type : 'value'
        }
      ],
      series : [
        {
          name:'每千克中含量',
          type:'bar',
          barWidth: '60%',
          data:that.amount1,
          itemStyle: {
            normal: {
              color: new that.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {offset: 0,color: "#00A75A"},
                {offset: 1,color: "#00A75A"}
              ]),
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#fff',
                  fontSize: 10
                }
              }
            }
          },
        }
      ]
    });
  },

  drawLine2(){
    let that=this;
    var myChart1 = that.$echarts.init(document.getElementById('graph2'))
    window.addEventListener("resize", function() {
      myChart1.resize();
	  })
    myChart1.setOption({
      color: ['#3398DB'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '15%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : that.item2,
          axisLine:{
            lineStyle:{
              color:'#fff',
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            rotate: 0,
            margin: 20,
            // formatter: function(params) {
            //     var newParamsName = '';// 最终拼接成的字符串
            //     var paramsNameNumber = params.length;// 实际标签的个数
            //     var provideNumber = 3;// 每行能显示的字的个数
            //     var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
            //     /**
            //      * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
            //      */
            //     // 条件等同于rowNumber>1
            //     if (paramsNameNumber > provideNumber) {
            //         /** 循环每一行,p表示行 */
            //         for (var p = 0; p < rowNumber; p++) {
            //             var tempStr = '';// 表示每一次截取的字符串
            //             var start = p * provideNumber;// 开始截取的位置
            //             var end = start + provideNumber;// 结束截取的位置
            //             // 此处特殊处理最后一行的索引值
            //             if (p == rowNumber - 1) {
            //                 // 最后一次不换行
            //                 tempStr = params.substring(start, paramsNameNumber);
            //             } else {
            //                 // 每一次拼接字符串并换行
            //                 tempStr = params.substring(start, end) + '\n';
            //             }
            //             newParamsName += tempStr;// 最终拼成的字符串
            //         }
            //     } else {
            //         // 将旧标签的值赋给新标签
            //         newParamsName = params;
            //     }
            //     //将最终的字符串返回
            //     return newParamsName
            // }
          },
        }
      ],
      yAxis : [
        {
          name:'单位(%)',
          splitLine:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color:'#fff',
            }
          },
          type : 'value'
        }
      ],
      series : [
        {
          name:'百分比',
          type:'line',
          barWidth: '60%',
          data:that.amount2,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#00A75A' // 0% 处的颜色
              }, {
                offset: 1, color: '#082E2E' // 100% 处的颜色
              }],
            }
          },
          itemStyle: {
            normal: {
              color: '#FCE700',
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#fff',
                  fontSize: 10
                },
              },
              lineStyle:{
                color:'#00A75A' //改变折线颜色
              }
            }
          },
        }
      ]
    });
  },
  drawLine3(){
    let that=this;
    var myChart1 = that.$echarts.init(document.getElementById('graph3'))
    window.addEventListener("resize", function() {
      myChart1.resize();
	  })
    myChart1.setOption({
      color: ['#00A75A'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {
          type : 'shadow'
        }
      },
      grid: {
        left: '5%',
        right: '5%',
        bottom: '10%',
        top: '15%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : that.item3,
          axisLine:{
            lineStyle:{
            color:'#fff',
            }
          },
          axisTick: {
            alignWithLabel: true
          },
          // axisLabel: {
					// 	interval: 0,
					//   rotate: 0,
					// 	textStyle: {
					// 	            color: "#fff",
					// 	            fontSize: 10,
					// 	            }
          //    }
          axisLabel: {
            rotate: 0,
            margin: 10,
            interval: 0,
            textStyle: {
              color: "#fff",
              fontSize: 11,
            },
            formatter: function(params) {
              var newParamsName = '';
              var paramsNameNumber = params.length;
              var provideNumber = 3;
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = '';
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                      tempStr = params.substring(start, end) + '\n';
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName
            }
          },
        }
      ],
      yAxis : [
        {
          name:'单位(mg/kg)',
          splitLine:{
            show:false
          },
          axisLine:{
            lineStyle:{
              color:'#fff',
            }
          },
          type : 'value',
          max: 0.02
        }
      ],
      series : [
        {
          name:'每公斤中的含量',
          type:'bar',
          areaStyle: {
             normal: {
            color: new that.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0,color: "#00A75A"},
                {offset: 0.5,color: "#00A75A"},
                {offset: 1,color: "#00A75A"}])
             }
          },
          smooth: true,
          data:that.amount3,
          itemStyle: {
            normal: {
              color:"#00A75A",
              label: {
                show: true, //开启显示
                position: 'top', //在上方显示
                textStyle: { //数值样式
                  color: '#fff',
                  fontSize: 10
                }
              },
            }
          },
        }
      ]
    });
  },

     //地块弹窗
        infowindow(e){
          this.info=[];
          this.getinfo();
          this.infoWindow = new AMap.InfoWindow({
            content: this.info.join(""),
          });
          this.infoWindow.open(this.map,[e.lnglat.lng,e.lnglat.lat]);
        },

        getinfo(){
          this.info = [];
          var a=this.baseinfo.address.province+this.baseinfo.address.city+this.baseinfo.address.area+this.baseinfo.address.street;
          var b=this.baseinfo.category?this.baseinfo.category.displayName:'暂无';
          var c=this.baseinfo.baseType?this.baseinfo.baseType.displayName:'暂无';
          var d=this.baseinfo.baseName;
          var e=this.baseinfo.acreage;
          var f=this.plot5.length;
          // this.info.push("<div style=\"width:200px;margin:20px 25px;\"><table>");
          // this.info.push("<tr style=\"color:#fff;\"><td style=\"width:80px;padding:0;\">基地名称：</td><td>"+d+"</td></tr>");
          // this.info.push("<tr style=\"color:#fff;\"><td style=\"width:80px;\">基地面积：</td><td>"+e+"亩</td></tr>");
          // this.info.push("<tr style=\"color:#fff;\"><td style=\"width:80px;\">基地地址：</td><td>"+a+"</td></tr>");
          // this.info.push("<tr style=\"color:#fff;\"><td style=\"width:80px;\">基地范畴：</td><td>"+b+"</td></tr>");
          // this.info.push("<tr style=\"color:#fff;\"><td style=\"width:80px;\">基地类型：</td><td>"+c+"</td></tr>");
          // this.info.push("<tr style=\"color:#fff;\"><td style=\"width:80px;\">地块数量：</td><td>"+f+"个</td></tr>");
          // this.info.push("</table></div>");

          this.info.push("<div style=\"width:200px;margin:20px 25px;\">");
          this.info.push("<div style=\"color:#fff;\"><div style=\"width:80px;float:left;padding:5px;\">基地名称：</div><div style=\"width:120px;float:left;padding:5px;\">"+d+"</div></div>");
          this.info.push("<div style=\"color:#fff;\"><div style=\"width:80px;float:left;padding:5px;\">基地面积：</div><div style=\"width:120px;float:left;padding:5px;\">"+e+"亩</div></div>");
          this.info.push("<div style=\"color:#fff;\"><div style=\"width:80px;float:left;padding:5px;\">基地地址：</div><div style=\"width:120px;float:left;padding:5px;\">"+a+"</div></div>");
          this.info.push("<div style=\"color:#fff;\"><div style=\"width:80px;float:left;padding:5px;\">基地范畴：</div><div style=\"width:120px;float:left;padding:5px;\">"+b+"</div></div>");
          this.info.push("<div style=\"color:#fff;\"><div style=\"width:80px;float:left;padding:5px;\">基地类型：</div><div style=\"width:120px;float:left;padding:5px;\">"+c+"</div></div>");
          this.info.push("<div style=\"color:#fff;\"><div style=\"width:80px;float:left;padding:5px;\">地块数量：</div><div style=\"width:120px;float:left;padding:5px;\">"+f+"个</div></div>");
          this.info.push("</div>");
        },

        iniMap(){
          let that = this
          MapLoader().then(AMap => {
            let googleLayer = new AMap.TileLayer({
              getTileUrl: 'http://mt{1,2,3,0}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x=[x]&y=[y]&z=[z]&s=Galile'
            });//定义谷歌卫星切片图层
            let roadNetLayer = new AMap.TileLayer.RoadNet({
              opacity:0
            }); //定义一个路网图层
            that.map = new AMap.Map('container', {
              zoom: 15,
              layers:[googleLayer,roadNetLayer], //设置图层
            });
            that.map.on("complete", function(){
            var myEvent = new CustomEvent('done2',{});
            if(window.dispatchEvent) {
              window.dispatchEvent(myEvent);
            } else {
              window.fireEvent(myEvent);
            }
            });
          })
        }
  }
}
</script>
<style>
.ant-rate {
  width: 100%;
}
.ant-modal-header{
  background:#0f3b39 !important;
  border-bottom: 1px solid #00a75a !important;
}
.ant-modal-content{
  border: 1px solid #00a75a !important;
}
.ant-modal-body{
  background:#0f3b39 !important;
}
.ant-modal-title,.ant-modal-close-x{
  color:#fff !important;
}
.ant-btn:hover, .ant-btn:focus{
  color: #fff
}
</style>
<style scoped>
.center-left {
  display: inline-block;
  width: 57%;
  height: 100%;
  position: relative;
  margin-right: 0px;
  background-image: url("../../src/assets/center-left.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.center-right{
  display: inline-block;
  width: 41%;
  padding-left: 8px;
  height: 100%;
  float: right;
  background-image: url("../../src/assets/center-right.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.rate-wrapper {
  width: 100%;
  height: 70%;
  margin-top: 5px;
  background: #082E2E;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.rate-wrapper .flex-wrapper {
  height: 70px;
  display: flex;
  line-height: 60px;
  width: 90%;
  margin: 0 auto;
  font-size: 16px;
  color: #fff;
}
.rate-wrapper .flex-wrapper div:nth-of-type(1) {
  text-align: right;
  line-height: 65px;
  width: 108px;
}
.rate-wrapper .flex-wrapper div:nth-of-type(2) span {
  flex: 1;
  height: 26px;
  line-height: 26px;
}
.rate-wrapper .flex-wrapper div:nth-of-type(2) {
  flex: 1;
  display: flex;
  text-align: center
}
.rate-wrapper .flex-wrapper .active {
  background-color: #FCE700;
  color: #082E2E;
  border-radius: 13px
}
.left3 >>> .ivu-cascader-menu{
  background:#fff;
}
.left1{
  background-image:url("../../src/assets/left2_1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.left2{
  background-image:url("../../src/assets/left2_2.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.left3{
  background-image:url("../../src/assets/left2_3.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.base2{
  min-width: 1650px;
  background-image: url("../../src/assets/background.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.center-head {
  position: absolute;
  width: 90%;
  color: #fff;
  top: -60px;
  left: 34px;
  background: linear-gradient(90deg,rgba(2,31,35,0.2),rgba(0,167,90,0.2),rgba(2,31,35,0.2));
  height: 40px;
  line-height: 40px;
  display: flex
}
.center-head div {
  flex: 1;
  text-align: center;
  color: #00A75A;
  font-size: 16px;
}
.center-head div span {
  color: #FCE700;
  font-size:20px
}
.center1{
  position: relative;
  background-image:url("../../src/assets/center1_1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.movepoint1{
  position:absolute;
  width:5%;
  height:5px;
  bottom:-2px;
  background-image:url("../../src/assets/movepoint.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
  animation:mymove 10s infinite;
  -webkit-animation:mymove 10s infinite;
}      
@keyframes mymove{
    from {left:0%;}
    to {left:95%;}
}
@-webkit-keyframes mymove{
    from {left:0%;}
    to {left:95%;}
}
.tip{
  background-image:url("../../src/assets/tip.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.center2{
  position: relative;
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.movepoint2{
  position:absolute;
  width:5%;
  height:5px;
  bottom:-2px;
  background-image:url("../../src/assets/movepoint1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
  animation:mymovee 10s infinite;
  -webkit-animation:mymovee 10s infinite;
}      
@keyframes mymovee{
    from {left:95%;}
    to {left:0%;}
}
@-webkit-keyframes mymovee{
    from {left:95%;}
    to {left:0%;}
}
.right1{
  background-image:url("../../src/assets/right2_1.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.right2{
  background-image:url("../../src/assets/right2_2.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
}
.right3{
  background-image:url("../../src/assets/right2_2.png");
  background-repeat:no-repeat;
  background-size:100% 100%; 
}
.but1{
  background-image:url("../../src/assets/anniu.png");
  background-repeat:no-repeat;
  background-size:100% 100%; 
}
.data-btn{
  position: absolute;
  top: 40px;
  right: -60px;
}
.img-content{
  margin: 0 auto;
  padding: 40px 20px 0 20px;
}
#container >>> .amap-info-content {
background-color:rgba(35, 35, 35, 0.6);
 border-radius:10px 10px;
box-shadow: rgba(255, 255, 255, 0.5) 0px 0px 10px;
}
#container >>> .amap-info-sharp{
border-top: 8px solid rgba(35, 35, 35, 0.6);
}
</style>
<style lang='stylus'>
@media screen and (min-width: 2000px)
  body
    line-height 28px !important
.headleft
{
position: relative;
top:32px;
left: -8px;
width:56px;
height:2px;
/* Rotate div */
transform:rotate(-37deg);
-moz-transform:rotate(-37deg); /* Firefox */
-webkit-transform:rotate(-37deg); /* Safari 和 Chrome */
-o-transform:rotate(-37deg); /* Opera */
}
.headright
{
position: relative;
top:34px;
right: 8px;
width:56px;
height:2px;
/* Rotate div */
transform:rotate(37deg);
-moz-transform:rotate(37deg); /* Firefox */
-webkit-transform:rotate(37deg); /* Safari 和 Chrome */
-o-transform:rotate(37deg); /* Opera */
}

</style>
