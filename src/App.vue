<template>
  <nav>
    <div class="title">
      <div class="logo">
        <img src="./assets/logo.png" alt="" />
      </div>
      <div class="logoPhoto">
        <img src="./assets/LogoPhoto.png" alt="" />
      </div>
      <h1 style="font-size: 32px">延壽戰情室</h1>
    </div>
    <div class="btn">
      <router-link to="/">首頁</router-link>
      <span>
        <router-link to="/plan">計畫簡介</router-link>
      </span>

      <router-link to="/construction">施工影像</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss" scoped>
@import url("@/assets/app.css");
nav {
  background-color: #219ebc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 84px;
  .btn {
    display: flex;
    align-items: center;
    padding-right: 64px;
    a {
      color: #ffffff;
      font-size: 18px;
      display: block;

      text-decoration: none;

      &.router-link-exact-active {
        position: relative;
        border: #ffffff 1px solid;
        padding: 8px 24px;
        border-radius: 100px;
        &::before {
          content: "";
          width: 12px;
          height: 12px;
          background-color: #ffffff;
          display: inline-block;
          border-radius: 4px;
          margin-right: 10px;
        }
      }
    }

    span {
      margin: 0 68px;
    }
  }

  .title {
    color: #ffffff;
    font-size: 30px;
    display: flex;
    align-items: center;
    .logo {
      width: 50px;
      display: flex;
      align-items: center;
      margin-left: 40px;
      img {
        width: 100%;
      }
    }
    .logoPhoto {
      display: flex;
      align-items: center;
      margin: 0 20px 0 8px;
    }
  }
}
</style>
