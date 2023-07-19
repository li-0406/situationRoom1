<template>
  <el-row style="margin: 64px auto; width: 1400px">
    <el-col :span="24">
      <h2 class="middleTitle">管線延壽維護</h2>
    </el-col>
    <el-col :span="24" style="margin-bottom: 40px">
      <div class="box result">
        <h2 class="title">管線延壽檢視成果</h2>
        <div class="card">
          <div v-for="item in card" :key="item">
            <h3 class="word">{{ item.word }}</h3>
            <p class="sum">{{ item.length }}</p>
            <p style="font-size: 24px">{{ item.schedule }}</p>
            <div class="progress">
              <div
                class="bar"
                :class="{ first: item.schedule === '11.24%' }"
                :style="{ width: item.schedule }"
              ></div>
            </div>
          </div>
        </div>
        <div class="select">
          <div
            class="btn"
            v-for="(item, index) in result"
            :key="item"
            :class="{ active: value === index, disabled: index > 0 }"
          >
            <h3>{{ item }}</h3>
          </div>
        </div>
        <p style="text-align: right; margin: 16px 0 24px; font-size: 18px">
          單位(m)
        </p>
        <div class="container">
          <div class="value" v-for="item in information[0]" :key="item.name">
            <p :class="item.name?.length === 2 ? 'long-name' : ''">
              {{ item.name }}
            </p>
            <div class="bar" :style="{ width: item.width }"></div>
            <p>{{ item.num }}</p>
          </div>
        </div>
      </div>
    </el-col>

    <el-col :span="8">
      <div class="box year">
        <h2 class="title">管線使用年限比例圖</h2>
        <div class="circle">
          <div class="pie">
            <img src="../assets/year/Group3.svg" />
          </div>
          <!-- <img
            src="../assets/length/Vector3.svg"
            style="position: absolute; top: 10px; left: 60px; z-index: -1"
          />
          <p style="position: absolute; top: 55px; left: 45px">18.49%</p>
          <p style="position: absolute; top: 110px; left: 33px">20.88%</p>
          <p style="position: absolute; top: 130px; left: 120px">59.07%</p> -->
        </div>
        <div>
          <div class="tip" v-for="item in notFull" :key="item.text">
            <div class="square" :style="{ background: item.color }"></div>
            <p style="font-size: 20px">{{ item.text }}</p>
          </div>
        </div>
      </div>
    </el-col>

    <el-col :span="16">
      <div class="box totalPlan">
        <h2 class="title">總計畫長度</h2>
        <div class="chart">
          <div class="bar" style="height: 591px; padding-top: 12px">
            <BarChart />
          </div>
          <div>
            <div class="tip" v-for="item in options" :key="item">
              <div class="square" :style="{ background: item.color }"></div>
              <p style="font-size: 20px">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="box build">
        <div>
          <h2 class="title">管線佈建成果</h2>
          <p style="font-size: 16px; margin-top: 4px">(截至112/6/25)</p>
        </div>
        <div class="chart">
          <div class="card" v-for="item in semicircle" :key="item.name">
            <h3 class="name">{{ item.name }}</h3>
            <img :src="item.img" style="display: block; margin: 0 auto" />
            <div class="text">
              <p class="dot finish">{{ item.finish }}</p>
              <p class="dot plan">{{ item.plan }}</p>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="box length">
        <div>
          <h2 class="title">管線累積長度</h2>
        </div>
        <div class="chart">
          <div>
            <img src="../assets/circlechart.svg" alt="" />
          </div>
          <!-- <img
              style="position: absolute; top: -25px; left: 85px"
              src="../assets/length/Vector1.svg"
            />
            <img
              style="position: absolute; top: -57px; left: 80px"
              src="../assets/length/Vector2.svg"
            />
            <img
              style="position: absolute; top: -25px; left: 22px"
              src="../assets/length/Vector3.svg"
            />
            <p style="position: absolute; top: -35px; left: -32px">4.64%</p>
            <p
              style="
                position: absolute;
                top: -68px;
                left: 150px;
                white-space: nowrap;
              "
              class="dot orange"
            >
              0.09%
            </p>
            <p
              style="
                position: absolute;
                top: -36px;
                left: 150px;
                white-space: nowrap;
              "
              class="dot green"
            >
              0.07%
            </p>
            <p style="position: absolute; top: 65px; left: 8px">30.55%</p>
            <p style="position: absolute; top: 110px; left: 90px; color: #fff">
              64.65%
            </p> -->
          <ul>
            <li v-for="item in bar" :key="item.name" style="width: 836px">
              <div class="text">
                <p>{{ item.name }}</p>
                <p>{{ item.meter }}</p>
              </div>
              <div style="width: 100%">
                <div
                  :style="{ width: item.length, background: item.color }"
                  class="bar"
                ></div>
              </div>
            </li>
            <li class="sum">
              <p>合計</p>
              <p class="num">2,726,096.55</p>
            </li>
          </ul>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
import BarChart from "../components/BarChart.vue";

let value = ref(0);

const result = ref([
  "第一期延壽成果",
  "第二期延壽成果",
  "第三期延壽成果",
  "第四期延壽成果",
]);

const selectButton = (index) => (value.value = index);

const length = (value) => value * 0.00333;
//以300,000為100%長度，1000px最長長度  1000/300,000

const information = ref([
  [
    { name: "主次幹管", width: `${length(8205)}px`, num: "8,205" },
    { name: "分管", width: `${length(100000)}px`, num: "100,000" },
    { name: "支管", width: `${length(180000)}px`, num: "180,000" },
  ],
  [
    { name: "主次幹管", width: `${length(47991)}px`, num: "47,991" },
    { name: "分管", width: `${length(210000)}px`, num: "210,000" },
    { name: "支管", width: `${length(210000)}px`, num: "210,000" },
  ],
  [
    { name: "主次幹管", width: `${length(42937)}px`, num: "42,937" },
    { name: "分管", width: `${length(260000)}px`, num: "260,000" },
    { name: "支管", width: `${length(210000)}px`, num: "210,000" },
  ],
  [
    { name: "主次幹管", width: `${length(27361)}px`, num: "27,361" },
    { name: "分管", width: `${length(260000)}px`, num: "260,000" },
    { name: "支管", width: `${length(200000)}px`, num: "200,000" },
  ],
]);

const options = ref([
  { text: "第一期", color: "#023047" },
  { text: "第二期", color: "#219EBC" },
  { text: "第三期", color: "#8ECAE6" },
  { text: "第四期", color: "#FB8500" },
]);
const card = ref([
  { word: "所有管線", length: "108,205", schedule: "11.24%" },
  { word: "主次幹管", length: "8,205", schedule: "6.49%" },
  { word: "分管網", length: "100,000", schedule: "11.96%" },
]);
const semicircle = ref([
  {
    name: "主幹管",
    img: require("../assets/100.svg"),
    finish: "完成長度：49,528(m)",
    plan: "計畫長度：49,528(m)",
  },
  {
    name: "次幹管",
    img: require("../assets/97.14.svg"),
    finish: "完成長度：76,898(m)",
    plan: "計畫長度：79,160(m)",
  },
  {
    name: "主幹管",
    img: require("../assets/92.36.svg"),
    finish: "完成長度：835,830(m)",
    plan: "計畫長度：905,000(m)",
  },
]);

const bar = ref([
  {
    name: "支管及用戶連接管",
    meter: "1,762,557(m)",
    length: "64.65%",
    color: "#023047",
  },
  {
    name: "分管",
    meter: "832,744(m)",
    length: "30.55%",
    color: "#219EBC",
  },
  {
    name: "主次幹管",
    meter: "126,426(m)",
    length: "4.64%",
    color: "#8ECAE6",
  },
  {
    name: "聯絡管",
    meter: "2,507.65(m)",
    length: "0.09%",
    color: "#FF9914",
  },
  {
    name: "倒虹吸管",
    meter: "1,861.9(m)",
    length: "0.07%",
    color: "#FFE609",
  },
]);

const notFull = ref([
  { text: "40年以上未滿50年", color: "#FF9914" },
  { text: "30年以上未滿40年", color: "#8ECAE6" },
  { text: "20年以上未滿30年", color: "#219EBC" },
  { text: "未滿20年", color: "#023047" },
]);
</script>

<style lang="scss" scoped>
.box {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.68);
  box-shadow: -1px 1px 8px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  padding: 32px;
}
.title {
  font-size: 28px;
  font-weight: 500;
}

.dot::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 16px;
}

.square {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  margin-right: 16px;
}

.build {
  margin: 80px 0 24px;
  .chart {
    margin: 48px 20px 0;
    display: flex;
    justify-content: space-between;

    .card {
      .name {
        margin-bottom: 16px;
      }
      .text {
        .finish {
          margin-top: 13px;
          &::before {
            background: #023047;
          }
        }
        .plan::before {
          background: #c2c2c2;
        }
      }
    }
  }
}

.length {
  .chart {
    display: flex;
    margin-top: 22px;
    align-items: flex-end;
    ul {
      list-style-type: none;
      margin-left: auto;

      li {
        margin-bottom: 20px;
        .text {
          display: flex;
          justify-content: space-between;
          font-weight: 500;
        }

        &:last-child {
          margin: 20px 0 0 0;
        }

        .bar {
          height: 20px;
          border-radius: 4px;
          margin-top: 8px;
        }
      }
      .sum {
        .num {
          font-size: 48px;
          font-weight: 700;
          &::after {
            content: "m";
            font-size: 18px;
            font-weight: 400;
            margin-left: 8px;
          }
        }
      }
    }
  }
}

.middleTitle {
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 24px;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 4px;
    background: #171b3c;
    margin-right: 16px;
  }
}

.year {
  display: flex;
  flex-direction: column;
  margin-right: 12px;

  .circle {
    width: 100%;
    margin: 20px 0 60px;
    position: relative;

    .pie {
      display: flex;
      justify-content: right;
      margin-right: 30px;
    }
  }
  .tip {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.totalPlan {
  margin-left: 12px;
  .chart {
    display: flex;
    align-items: center;
    .bar {
      flex: 1;
      margin-right: 80px;
    }
  }
  .tip {
    font-size: 20px;
    display: flex;
    align-items: center;
    margin: 0 20px 8px 0;
  }
}

.result {
  padding: 32px 48px;
  .card {
    display: flex;
    justify-content: space-between;
    margin: 48px 0 80px;

    > div {
      flex: 1;
      background: #e0e0e0;
      padding: 20px 20px 32px;
      border-radius: 16px;
      &:nth-child(2) {
        margin: 0 32px;
      }
    }

    .sum {
      font-size: 48px;
      font-weight: 700;
      margin: 4px 0 40px;
      &::after {
        content: "m";
        font-size: 18px;
        font-weight: 400;
        margin: 0 12px 0 8px;
      }
    }
    .progress {
      width: 100%;
      height: 20px;
      background: #c2c2c2;
      border-radius: 4px;
      margin-top: 4px;
      .bar {
        height: 20px;
        background: #219ebc;
        border-radius: 4px;
      }
      .first {
        background: #023047;
      }
    }
  }
  .select {
    display: flex;
    flex-wrap: wrap;

    .btn {
      border-radius: 8px;
      border: 2px solid #023047;
      background: rgba(255, 255, 255, 0.68);
      color: #023047;
      padding: 12px 24px;
      margin-right: 16px;
      cursor: pointer;
      // &:hover {
      // background: #6e8b9a;
      // border: 2px solid #6e8b9a;
      // color: #fff;
      // transition: background 0.3s, color 0.3s, border 0.3s;
      // }
    }
    .active {
      background-color: #023047;
      color: #fff;
    }
    .disabled {
      pointer-events: none;
      background: #c2c2c2;
      border: 2px solid #c2c2c2;
      color: #fff;
    }
  }
  .container {
    font-size: 24px;
    .value {
      display: flex;
      align-items: center;
      .bar {
        height: 20px;
        background: #fb8500;
        border-radius: 4px;
        margin: 0 16px;
        transition: 0.3s;
      }

      .long-name {
        width: 96px;
        text-align: right;
      }
    }
    .value:nth-child(2) {
      margin: 16px 0;
    }
  }
}
</style>
