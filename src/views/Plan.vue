<template>
  <el-row style="margin: auto; width: 1480px">
    <el-col :span="24" style="padding: 64px 0 40px 0">
      <h1>計畫簡介</h1>
    </el-col>
    <el-col :span="24">
      <div class="box plan">
        <img src="../assets/plan/map.jpg" style="border-radius: 12px" />
        <div class="text">
          <h2>計畫緣起</h2>
          <p>
            臺北市為全國最早建設污水下水道之城市，自民國61年起開始實施工程建設計畫，迄今已逾50年。於地底默默輸送污水至污水處理廠淨化再排放河川，24小時全年無休，已有20%污水管使用超過30年，許多管渠正面臨老舊問題，因此「管渠延壽」確保本市污水管渠設施排水功能正常運作為當務之急。
          </p>
          <p style="margin-top: 1em">
            延長管渠壽命、預防損壞及延長使用年限，以污水下水道系統全生命週期的概念出發，臺北市衛工處於108年啟動「管渠延壽檢視計畫」，除了維持既有污水管渠正常輸送功能，未來預計分為4期，計畫以12年完成臺北市轄內超過170萬公尺的主次幹管及分支管檢視作業，以健康的污水下水道繼續為市民服務，共創良好的衛生環境。
          </p>
        </div>
      </div>
    </el-col>
    <el-col :span="24" style="margin: 40px 0 64px">
      <div class="box maintain">
        <div class="text">
          <h2>管渠延壽維護</h2>
          <p style="margin-top: 60px; font-size: 20px">
            污水管渠檢視維護作業分為三階段，調查階段、評估階段、方案研擬階段。
          </p>
          <div class="content">
            <div class="part" v-for="item in content" :key="item.tip">
              <div class="tip">
                <p class="title">
                  <span
                    class="square"
                    :style="{ background: item.color }"
                  ></span
                  >{{ item.tip }}
                </p>
              </div>
              <div class="contentText">
                <p style="font-size: 22px; width: 540px">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="pic">
          <div class="boat"></div>
          <div class="tv"></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref } from "vue";

const content = ref([
  {
    tip: "調查階段",
    color: "#0D735A",
    text: "調查階段將進行管渠全面檢視，早期委託專業潛水人員穿戴作業服裝，手持燈光及攝影機進入管內辦理檢視工作，以縱走方式進行拍攝與檢查下水道內狀況，由於幹管內跨度過長、流量湍急，不易進行擋水及導水作業，且易產生有害氣體，故大多利用聲納船結合CCTV的方式，進行水面上與水面下的檢視，過程中謹慎小心，以確保安全與檢視成果的完整性。",
  },
  {
    tip: "評估階段",
    color: "#16BF95",
    text: "評估階段針對調查時產出之檢視影像，進行污水管內部檢視狀況分析，將損壞情形分為結構性與排水功能損壞，以損壞狀況分類、損壞程度分級評估。",
  },
  {
    tip: "方案研擬階段",
    color: "#CCDD20",
    text: "於方案研擬階段中針對損壞程度重度之部分，如滲漏、破損龜裂等狀況進行後續修繕作業工法研擬。",
  },
]);
</script>

<style lang="scss" scoped>
h1 {
  display: flex;
  align-items: center;
  &::before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 4px;
    margin-right: 16px;
    background: #171b3c;
  }
}
h2 {
  margin-bottom: 48px;
  font-weight: 500;
  font-size: 26px;
}
.box {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.68);

  box-shadow: -1px 1px 8px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);

  display: flex;
  justify-content: space-between;
}

.plan {
  padding: 32px 60px 32px 32px;
  .text {
    width: 422px;

    p {
      text-indent: 2em;
      font-size: 20px;
    }
  }
}
.maintain {
  padding: 32px 32px 32px 60px;
  display: flex;
  justify-content: space-between;
  .text {
    width: 801px;
    .part {
      display: flex;
      justify-content: space-between;
      margin-top: 60px;
      font-size: 20px;
      .tip {
        display: flex;
        align-items: flex-start;

        .title {
          font-weight: 500;
          padding: 4px 24px;
          border-radius: 100px;
          background: #171b3c;
          color: #fff;
          white-space: nowrap;
          display: flex;
          align-items: center;
        }

        .square {
          width: 12px;
          height: 12px;
          border-radius: 4px;
          margin-right: 16px;
          display: inline-block;
        }
      }
      .contentText {
        width: 588px;
        display: flex;
        justify-content: right;
      }
    }
  }
  .pic {
    width: 467px;
    .boat {
      height: 332px;
      border-radius: 12px;
      background: url("../assets/plan/boat.png") lightgray 50% / cover no-repeat;
    }
    .tv {
      height: 349px;
      border-radius: 12px;
      background: url("../assets/plan/CCTV.png") lightgray 50% / cover no-repeat;
      margin-top: 29px;
    }
  }
}
</style>
