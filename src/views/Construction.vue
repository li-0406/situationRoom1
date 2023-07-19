<template>
  <el-row style="margin: 64px auto; width: 1480px">
    <el-col :span="24">
      <div class="title">
        <h1>施工影像</h1>
        <p class="subtitle">第一期主次幹管延壽工程：</p>
        <div>
          <div class="btn">
            <a
              v-for="(item, index) in btn"
              :key="item.id"
              :class="{ active: value === index }"
              :href="'#' + item.id"
              @click.prevent="selectButton(index, item.id)"
            >
              {{ item.name }}
              <span class="icon"><img src="../assets/video/icon.svg" /></span>
              <span class="icon1"><img src="../assets/video/icon1.svg" /></span>
            </a>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="24" style="padding-top: 32px">
      <div class="box firstBox">
        <div class="first">
          <h2>工程概述</h2>
          <p>
            衛工處於108年試辦第1期主、次幹管檢視及修繕延壽作業，檢視範圍為士林主幹管、建國南北路次幹管及吉林路次幹管。士林主幹管為臺北市最早期之污水下水道主幹管且已使用超過40年；另建國南北路次幹管與吉林路次幹管使用均已超過30年，且吉林路次幹管周邊曾於107年間發生過道路路面坍陷事件，故作為第1期主、次幹管檢視及延壽維護目標。
          </p>
          <h2>檢視設備</h2>
          <p>
            此次檢視作業採用CCTV及聲納併合探測系統(TVS6000)，其主要包括水下聲納檢測儀、主控器、連接電纜、帶顯示器的聲納資料處理平臺。該系統是目前檢測滿水管道最有效的做法，其主要原理為通過聲納檢測儀發出的聲波對管道斷面進行掃描，進而在監視器上呈現管道斷面圖像，再通過分析處理軟體對檢測圖像進行編輯和儲存；而聲納檢測儀可以固定在滑行器、牽引車或漂浮筏在管道內進行牽引作業。
          </p>
          <h2>檢視範圍</h2>
          <p style="line-height: 40px">
            士林主幹管：計16段長2209.85M <br />
            吉林路次幹管：計15段長1606.45M及1段自走式TV長82M<br />
            建國南北路次幹管：計32段長4306.45M
          </p>
        </div>
        <div class="pic"></div>
      </div>
    </el-col>

    <el-col :span="24" class="tube" v-for="item in data" :key="item.title"
      ><h2 class="title" :id="item.file">
        <span class="dot" :style="{ background: item.color }"></span
        >{{ item.title }}
      </h2>
      <div class="container">
        <div class="box" style="width: 788px">
          <h2>管渠檢視影像</h2>
          <div v-for="i in item.video" :key="i">
            <video
              ref="videoPlayer"
              controls
              style="width: 100%; border-radius: 12px; margin-top: 48px"
              :src="require(`@/assets//video/${item.file}/see/${i}`)"
            >
              <source type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="box" style="width: 548px">
          <h2 style="margin-bottom: 48px">延壽維護成果</h2>
          <div class="maintain" v-for="i in item.gain" :key="i.before">
            <div style="width: 38%" class="left">
              <div
                class="before"
                :style="{ backgroundImage: `url(${i.before})` }"
              ></div>
              <p class="be">Before</p>
              <p class="af">After</p>
            </div>
            <div style="width: 59%">
              <div
                class="after"
                :style="{ backgroundImage: `url(${i.after})` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup>
import { ref } from "vue";
let value = ref("");
const btn = ref([
  { name: "士林主幹管", id: "Shilin" },
  { name: "吉林路次幹管", id: "Jilin" },
  { name: "建國南北路次幹管", id: "Jianguo" },
]);
const selectButton = (index, id) => {
  const anchorElement = document.getElementById(id);
  if (anchorElement) anchorElement.scrollIntoView();
  value.value = index;
};

const data = ref([
  {
    title: "士林主幹管",
    color: "#0D735A",
    file: "Shilin",
    video: ["1.mp4", "2.mp4"],
    gain: [
      {
        before: require("../assets/video/Shilin/fix/before1.jpg"),
        after: require("../assets/video/Shilin/fix/after1.jpg"),
      },
      {
        before: require("../assets/video/Shilin/fix/before2.jpg"),
        after: require("../assets/video/Shilin/fix/after2.jpg"),
      },
    ],
  },
  {
    title: "吉林路次幹管",
    color: "#16BF95",
    file: "Jilin",
    video: ["1.mp4", "2.mp4"],
    gain: [
      {
        before: require("../assets/video/Jilin/fix/before1.jpg"),
        after: require("../assets/video/Jilin/fix/after1.jpg"),
      },
      {
        before: require("../assets/video/Jilin/fix/before2.jpg"),
        after: require("../assets/video/Jilin/fix/after2.jpg"),
      },
    ],
  },
  {
    title: "建國南北路次幹管",
    color: "#CCDD20",
    file: "Jianguo",
    video: ["1.mp4", "2.mp4"],
    gain: [
      {
        before: require("../assets/video/Jianguo/fix/before1.jpg"),
        after: require("../assets/video/Jianguo/fix/after1.jpg"),
      },
      {
        before: require("../assets/video/Jianguo/fix/before2.jpg"),
        after: require("../assets/video/Jianguo/fix/after2.jpg"),
      },
    ],
  },
]);
</script>

<style lang="scss" scoped>
.title {
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
  .subtitle {
    margin: 32px 0 20px 32px;
    font-size: 24px;
  }
  .btn {
    display: flex;
    padding-left: 32px;
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      padding: 12px 24px;
      border: 2px solid #023047;
      background: rgba(255, 255, 255, 0.68);
      border-radius: 8px;
      margin-right: 16px;
      font-size: 24px;
      font-weight: 500;
      color: #023047;
      &:hover {
        cursor: pointer;
        background: #6e8b9a;
        color: #fff;
        border: 2px solid #6e8b9a;
        transition: background 0.3s, color 0.3s, border 0.3s;
      }
      &:hover .icon1 {
        display: block;
        transition: 0.3s;
      }
      &:hover .icon {
        display: none;
      }
    }
    .icon1 {
      display: none;
    }
    img {
      vertical-align: middle;
      margin-left: 16px;
    }
    .active {
      background-color: #023047;
      color: #fff;
      .icon {
        display: none;
      }
      .icon1 {
        display: block;
      }
    }
  }
}
.box {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.68);

  box-shadow: -1px 1px 8px 0px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  padding: 20px 32px 32px;
}
.firstBox {
  padding: 32px 32px 32px 60px;
  display: flex;
  justify-content: space-between;
  .first {
    width: 588px;
    h2 {
      margin: 40px 0 24px;
      &:first-child {
        margin-top: 0;
      }
    }
    P {
      font-size: 22px;
    }
  }
  .pic {
    border-radius: 12px;
    width: 752px;
    background: url("../assets/video/first.png") lightgray 50% / cover no-repeat;
  }
}
.tube {
  .title {
    //display: inline-block;
    background: #171b3c;
    border-radius: 100px;
    color: #fff;
    padding: 4px 24px;
    margin: 120px 0 32px;
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .dot {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 4px;
    margin-right: 16px;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
}
.maintain {
  display: flex;
  justify-content: space-between;
  margin-bottom: 219.25px;
  &:last-child {
    margin-bottom: 0;
  }
  .left {
    position: relative;
    .be {
      font-size: 20px;
      color: #858585;
      margin-top: 12px;
    }
    .af {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 32px;
      font-weight: 700;
      color: #171b3c;
    }
  }
  .before {
    width: 100%;
    height: 121px;
    border-radius: 12px;
    background: url("../assets/video/first.png") lightgray 50% / cover no-repeat;
  }
  .after {
    width: 100%;
    height: 277px;
    border-radius: 12px;
    background: url("../assets/video/first.png") lightgray 50% / cover no-repeat;
  }
}
</style>
