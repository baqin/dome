<template>
  <div>
    <div>
      <img src="../assets/头像.jpg" alt="" />
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onBeforeUnmount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
export default {
  setup(props, ctx) {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const data = reactive({})
    return { ...toRefs(data) }
  }
}
</script>

<style lang="scss" scoped></style>
