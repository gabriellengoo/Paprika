<template>
  <nav class="new-nav">
    <ul class="new-nav__list">
      <li class="new-nav__item">about</li>
      <li class="new-nav__item">support</li>
      <li class="new-nav__item">contacts</li>
      <li class="new-nav__item">team</li>
    </ul>
    <div class="new-nav__eyebrow">
      people-curated music multimedia
    </div>
  </nav>
</template>

<script>
export default {
  name: "NewNav",
};
</script>

<style scoped>
.new-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #f0f0f0;
  padding: 2rem;
}

.new-nav__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.new-nav__item {
  font-family: 'Apercu_Pro', sans-serif;
  font-size: 1.6667vw;
  color: #111;
  letter-spacing: -0.1667vw;
  text-align: center;
}

.new-nav__eyebrow {
  position: absolute;
  left: 0.5556vw;
  top: 2.7778vw;
  transform: rotate(-90deg);
  transform-origin: left top;
  font-family: 'Apercu_Pro', sans-serif;
  font-size: 1.0417vw;
  line-height: 1.07;
  letter-spacing: -0.0521vw;
  color: #c5c5c5;
  text-align: center;
  white-space: nowrap;
}
</style>