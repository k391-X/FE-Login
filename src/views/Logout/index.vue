<template></template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { notifyMessage } from '../../utils/index'
import { logout } from '../../services/request/api'

const router = useRouter()

onMounted(() => {
  methodLogout()
  router.push('/login')
})

const methodLogout = () => {
  logout()
  notifyMessage(200, 'Bye!')
}
</script>
