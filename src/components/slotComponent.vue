<template>
  <div>
    <header>
      <slot name="header">
        <p>헤더 슬롯 테스트</p>
      </slot>
    </header>
    <main>
      <slot>
        <p>메인 슬롯 테스트</p>
      </slot>
    </main>
    <footer>
      <slot name="footer">
        <p>푸터 슬롯 테스트</p>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'slotComponent',
};
</script>

<style scoped>

</style>
