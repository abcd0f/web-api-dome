<template>
  <div>
    <input type="file" ref="fileInput" />
    <button @click="shareFile">分享文件</button>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const fileInput = ref(null);
const message = ref('');

const shareFile = async () => {
  const files = fileInput.value.files;
  if (!files.length) {
    message.value = '请先选择文件';
    return;
  }

  const fileList = Array.from(files);

  if (navigator.canShare && navigator.canShare({ files: fileList })) {
    try {
      await navigator.share({
        files: fileList,
        title: '文件分享',
        text: '看看这个文件'
      });
      message.value = '文件分享成功 ✅';
    } catch (err) {
      message.value = `分享失败 ❌: ${err.message}`;
    }
  } else {
    message.value = '当前浏览器不支持文件分享';
  }
};
</script>
