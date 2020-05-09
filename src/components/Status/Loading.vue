<template>
  <div class="box">
    <div class="load loading6">
      <div class="shape shape1"></div>
      <div class="shape shape2"></div>
      <div class="shape shape3"></div>
      <div class="shape shape4"></div>
    </div>
    <p>加载中</p>
  </div>
</template>

<script>
export default {
  name: "Loading",
  data() {
    return {};
  },
};
</script>
<style scoped="true">
.load {
  width: 30px;
  height: 30px;
  position: relative;
}
.box p {
  margin-top: 20px;
  margin-left: -5px;
  text-align: center;
  color: #71777c;
  font-size: 14px;
}
.load.loading6 {
  -webkit-animation: rotation 1s infinite;
  animation: rotation 1s infinite;
}
.load.loading6 .shape {
  width: 12px;
  height: 12px;
  border-radius: 2px;
}
.load .shape {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 1px;
}
.load .shape.shape1 {
  left: 0;
  background-color: #5c6bc0;
}
.load .shape.shape2 {
  right: 0;
  background-color: #8bc34a;
}
.load .shape.shape3 {
  bottom: 0;
  background-color: #ffb74d;
}
.load .shape.shape4 {
  bottom: 0;
  right: 0;
  background-color: #f44336;
}

.loading6 .shape1 {
  -webkit-animation: animation6shape1 2s linear 0s infinite normal;
  animation: animation6shape1 2s linear 0s infinite normal;
}

@-webkit-keyframes animation6shape1 {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(0, 18px);
    transform: translate(0, 18px);
  }
  50% {
    -webkit-transform: translate(18px, 18px);
    transform: translate(18px, 18px);
  }
  75% {
    -webkit-transform: translate(18px, 0);
    transform: translate(18px, 0);
  }
}

@keyframes animation6shape1 {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(0, 18px);
    transform: translate(0, 18px);
  }
  50% {
    -webkit-transform: translate(18px, 18px);
    transform: translate(18px, 18px);
  }
  75% {
    -webkit-transform: translate(18px, 0);
    transform: translate(18px, 0);
  }
}
.loading6 .shape2 {
  -webkit-animation: animation6shape2 2s linear 0s infinite normal;
  animation: animation6shape2 2s linear 0s infinite normal;
}

@-webkit-keyframes animation6shape2 {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(-18px, 0);
    transform: translate(-18px, 0);
  }
  50% {
    -webkit-transform: translate(-18px, 18px);
    transform: translate(-18px, 18px);
  }
  75% {
    -webkit-transform: translate(0, 18px);
    transform: translate(0, 18px);
  }
}

@keyframes animation6shape2 {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(-18px, 0);
    transform: translate(-18px, 0);
  }
  50% {
    -webkit-transform: translate(-18px, 18px);
    transform: translate(-18px, 18px);
  }
  75% {
    -webkit-transform: translate(0, 18px);
    transform: translate(0, 18px);
  }
}
.loading6 .shape3 {
  -webkit-animation: animation6shape3 2s linear 0s infinite normal;
  animation: animation6shape3 2s linear 0s infinite normal;
}

@-webkit-keyframes animation6shape3 {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(18px, 0);
    transform: translate(18px, 0);
  }
  50% {
    -webkit-transform: translate(18px, -18px);
    transform: translate(18px, -18px);
  }
  75% {
    -webkit-transform: translate(0, -18px);
    transform: translate(0, -18px);
  }
}

@keyframes animation6shape3 {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(18px, 0);
    transform: translate(18px, 0);
  }
  50% {
    -webkit-transform: translate(18px, -18px);
    transform: translate(18px, -18px);
  }
  75% {
    -webkit-transform: translate(0, -18px);
    transform: translate(0, -18px);
  }
}
.loading6 .shape4 {
  -webkit-animation: animation6shape4 2s linear 0s infinite normal;
  animation: animation6shape4 2s linear 0s infinite normal;
}

@-webkit-keyframes animation6shape4 {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(0, -18px);
    transform: translate(0, -18px);
  }
  50% {
    -webkit-transform: translate(-18px, -18px);
    transform: translate(-18px, -18px);
  }
  75% {
    -webkit-transform: translate(-18px, 0);
    transform: translate(-18px, 0);
  }
}

@keyframes animation6shape4 {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  25% {
    -webkit-transform: translate(0, -18px);
    transform: translate(0, -18px);
  }
  50% {
    -webkit-transform: translate(-18px, -18px);
    transform: translate(-18px, -18px);
  }
  75% {
    -webkit-transform: translate(-18px, 0);
    transform: translate(-18px, 0);
  }
}
</style>
