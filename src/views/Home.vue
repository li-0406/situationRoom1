<template>
  <el-row style="margin: 60px auto; width: 1400px">
    <el-col :span="24">
      <h2 class="middleTitle">管線延壽維護</h2>
    </el-col>
    <el-col :span="24" style="margin-bottom: 80px">
      <div class="box result">
        <h2 class="title">管線延壽檢視成果</h2>
        <div class="cards">
          <div class="card">
            <div>
              <h3 class="word">{{ card[0].word }}</h3>
              <div class="progress">
                <div
                  class="circle circle0"
                  :style="`--angle: calc(${card[0].schedule} * 3.6deg)`"
                >
                  <div class="value">{{ card[0].schedule }}%</div>

                  <div class="circleInner">
                    <img class="sea" src="../assets/sea.svg" />
                    <img class="sea1" src="../assets/sea1.svg" />
                  </div>
                </div>
              </div>
              <div class="view">
                <p class="sum">{{ card[0].viewlength }}</p>
                <p style="text-align: center">檢視長度(m)</p>
              </div>
              <div class="length">
                <p>{{ card[0].length }}</p>
                <p>管線長度(m)</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div>
              <h3 class="word">{{ card[1].word }}</h3>
              <div class="progress">
                <div
                  class="circle circle1"
                  :style="`--angle: calc(${card[1].schedule} * 3.6deg)`"
                >
                  <div class="value">{{ card[1].schedule }}%</div>
                  <div class="circleInner">
                    <img class="sea" src="../assets/sea.svg" />
                  </div>
                </div>
              </div>
              <div class="view">
                <p class="sum">{{ card[1].viewlength }}</p>
                <p style="text-align: center">檢視長度(m)</p>
              </div>
              <div class="length">
                <p>{{ card[1].length }}</p>
                <p>管線長度(m)</p>
              </div>
            </div>
          </div>
          <div class="card">
            <div>
              <h3 class="word">{{ card[2].word }}</h3>
              <div class="progress">
                <div
                  class="circle circle2"
                  :style="`--angle: calc(${card[2].schedule} * 3.6deg)`"
                >
                  <div class="value">{{ card[2].schedule }}%</div>
                  <div class="circleInner">
                    <img class="sea" src="../assets/sea.svg" />
                  </div>
                </div>
              </div>
              <div class="view">
                <p class="sum">{{ card[2].viewlength }}</p>
                <p style="text-align: center">檢視長度(m)</p>
              </div>
              <div class="length">
                <p>{{ card[2].length }}</p>
                <p>管線長度(m)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
    <el-col>
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

      <div class="container">
        <div class="value" v-for="item in information[0]" :key="item.name">
          <p :class="item.name?.length === 2 ? 'long-name' : ''">
            {{ item.name }}
          </p>
          <div class="bar" :style="{ width: item.width }"></div>
          <p>{{ item.num }}</p>
        </div>
        <p style="text-align: right; margin: 16px 0 24px; font-size: 18px">
          單位(m)
        </p>
      </div>
    </el-col>

    <el-col :span="8">
      <div class="box year">
        <h2 class="title" style="padding-bottom: 32px">管線使用年限比例圖</h2>
        <div class="circle">
          <div class="pie">
            <img src="../assets/year/Group3.svg" />
          </div>
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
        <h2 class="title" style="padding-bottom: 76px">總計畫長度</h2>
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
import { onMounted, ref } from "vue";
import BarChart from "../components/BarChart.vue";

let value = ref(0);

const result = ref([
  "第一期延壽成果",
  "第二期延壽成果",
  "第三期延壽成果",
  "第四期延壽成果",
]);

const trs = (item, name) => {
  let circle = document.querySelector(name);
  let value = document.querySelector(".value");
  let startValue = 0;
  let endValue = item.schedule;
  for (const i in item) {
    let speed = 100;
    let progress = setInterval(() => {
      startValue += 0.1;
      // value.textContent = `${startValue}%`;
      circle.style = `--angle: calc(${startValue} * 3.6deg)`;
      //console.log(startValue, endValue);
      if (startValue >= endValue) {
        clearInterval(progress); // 到達結束值時清除定時器
      }
    }, speed);
  }
};

onMounted(() => {
  trs(card.value[0], ".circle0");
  trs(card.value[1], ".circle1");
  trs(card.value[2], ".circle2");
});
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
  {
    word: "總計",
    viewlength: "288,205",
    length: "1,759,725",
    schedule: "16.38",
  },
  {
    word: "主次幹管",
    viewlength: "8,205",
    length: "126,426",
    schedule: "6.49",
  },
  {
    word: "分支管",
    viewlength: "280,000",
    length: "1,633,299",
    schedule: "17.14",
  },
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
  { text: "40年以上未滿50年", color: "#FB8500" },
  { text: "30年以上未滿40年", color: "#8ECAE6" },
  { text: "20年以上未滿30年", color: "#FFE609" },
  { text: "10年以上未滿20年", color: "#6E8B9A" },
  { text: "未滿10年", color: "#023047" },
]);
</script>

<style lang="scss" scoped>
.box {
  border-radius: 16px;
  border: 8px solid #219ebc;
  padding: 32px;
}
.title {
  font-size: 28px;
  font-weight: 500;
  color: #219ebc;
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
            background: #fb8500;
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
  padding-bottom: 80px;
  display: flex;
  align-items: center;
  &::before {
    content: "";
    width: 12px;
    height: 12px;
    display: inline-block;
    border-radius: 4px;
    background: #ff9914;
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
  .cards {
    display: flex;
    justify-content: space-between;
    margin-top: 48px;
  }
  .card {
    h3 {
      text-align: center;
      font-size: 30px;
    }
    > div {
      padding: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .view {
      text-align: center;
      color: #ff9914;
      .sum {
        font-size: 48px;
        font-weight: 700;
      }
      p {
        font-size: 30px;
        font-weight: 500;
        &:last-child {
          display: flex;
          align-items: center;
          &::before {
            content: "";
            width: 16px;
            height: 16px;
            display: inline-block;
            border-radius: 4px;
            background: #ff9914;
            margin-right: 16px;
          }
        }
      }
    }
    .length {
      color: #858585;
      text-align: center;
      margin-top: 40px;
      p {
        font-size: 30px;
        font-weight: 500;
        &:last-child {
          display: flex;
          align-items: center;
          &::before {
            content: "";
            width: 16px;
            height: 16px;
            display: inline-block;
            border-radius: 4px;
            background: #c2c2c2;
            margin-right: 16px;
          }
        }
      }
    }

    .progress {
      margin: 40px 0;

      .circle {
        position: relative;
        background: conic-gradient(#fb8500 var(--angle, 0deg), #e0e0e0 0deg);
        width: 320px;
        height: 320px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        .circleInner {
          position: absolute;
          height: 280px;
          width: 280px;
          border-radius: 50%;
          background: #fff;
          overflow: hidden;
          .sea {
            position: absolute;
            z-index: 1;
            bottom: -25px;
          }
          .sea1 {
            position: absolute;
            z-index: 1;
            bottom: -25px;
          }
        }
        &::before {
          content: "";
        }
      }
      .value {
        position: relative;
        font-size: 36px;
        font-weight: 700;
        z-index: 1;
      }
      // @keyframes progressAnimation {
      //   0% {
      //     --angle: 0deg; /* 動畫起始角度為 0deg */
      //   }
      //   50% {
      //     --angle: 60deg; /* 動畫起始角度為 0deg */
      //   }
      //   100% {
      //     --angle: 180deg;
      //   }
      // }
    }
  }
}
.select {
  display: flex;
  flex-wrap: wrap;

  .btn {
    border-radius: 8px 8px 0px 0px;
    color: #023047;
    padding: 12px 24px;
    border: 2px solid #8ecae6;
    color: #219ebc;
    cursor: pointer;
    // &:hover {
    // background: #6e8b9a;
    // border: 2px solid #6e8b9a;
    // color: #fff;
    // transition: background 0.3s, color 0.3s, border 0.3s;
    // }
  }
  .active {
    background-color: #219ebc;
    border: 2px solid #219ebc;
    color: #fff;
  }
  .disabled {
    cursor: not-allowed;
  }
}
.container {
  font-size: 24px;
  margin: 32px 0 120px;
  padding: 0 48px;
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
</style>
