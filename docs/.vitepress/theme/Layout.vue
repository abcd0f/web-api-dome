<script setup lang="ts">
import theme from 'vitepress/theme';

import { NolebaseEnhancedReadabilitiesMenu } from '@nolebase/vitepress-plugin-enhanced-readabilities/client';

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css';

const { Layout } = theme;
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <NolebaseEnhancedReadabilitiesMenu />
    </template>
  </Layout>
</template>
