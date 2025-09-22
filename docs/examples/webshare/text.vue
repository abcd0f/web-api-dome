<template>
  <div>
    <button @click="shareLink">分享链接</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('');

const shareLink = async () => {
  const shareData = {
    title: '分享标题',
    text: '分享内容文字',
    url: 'https://example.com'
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      message.value = '分享成功 ✅';
    } catch (err) {
      message.value = `分享失败 ❌: ${err.message}`;
    }
  } else {
    message.value = '当前浏览器不支持 Web Share API';
  }
};
</script>
