<template>
  <svg
    width="1764"
    height="1449"
    viewBox="0 0 1764 1449"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="3.5" cy="23.5" r="3.5" fill="white" />
    <circle cx="324.5" cy="61.5" r="3.5" fill="white" />
    <circle cx="9.5" cy="291.5" r="2.5" fill="white" />
    <circle cx="486.5" cy="681.5" r="3.5" fill="white" />
    <circle cx="486.5" cy="681.5" r="3.5" fill="white" />
    <circle cx="734.5" cy="46.5" r="3.5" fill="white" />
    <circle cx="96" cy="565" r="5" fill="white" />
    <circle cx="1019.5" cy="3.5" r="3.5" fill="white" />
    <circle cx="1183" cy="163" r="5" fill="white" />
    <circle cx="1421.5" cy="68.5" r="3.5" fill="white" />
    <circle cx="1683.5" cy="54.5" r="3.5" fill="white" />
    <circle cx="1595.5" cy="431.5" r="2.5" fill="white" />
    <circle cx="1727.5" cy="570.5" r="3.5" fill="white" />
    <circle cx="1364.5" cy="640.5" r="3.5" fill="white" />
    <circle cx="1011.5" cy="687.5" r="2.5" fill="white" />
    <circle cx="578.5" cy="346.5" r="2.5" fill="white" />
    <circle cx="550.5" cy="1055.5" r="2.5" fill="white" />
    <circle cx="983" cy="429" r="5" fill="white" />
    <circle cx="40.5" cy="951.5" r="3.5" fill="white" />
    <circle cx="573.5" cy="1295.5" r="2.5" fill="white" />
    <circle cx="1065.5" cy="1445.5" r="3.5" fill="white" />
    <circle cx="1634" cy="1305" r="5" fill="white" />
    <circle cx="1155.5" cy="895.5" r="3.5" fill="white" />
    <circle cx="69.5" cy="1418.5" r="3.5" fill="white" />
    <circle cx="1058.5" cy="1203.5" r="3.5" fill="white" />
    <circle cx="1760.5" cy="994.5" r="3.5" fill="white" />
  </svg>
</template>

<style lang="scss" scoped>
svg {
  width: 100vw;
  height: 100vh;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -9999;

  circle {
    transform-origin: center;
    animation: 300s linear rotate infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
