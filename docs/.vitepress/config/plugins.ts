/*
 * @Author: Sun wanglt-123@qq.com
 * @Date: 2025-09-09 10:14:54
 * @LastEditors: Sun wanglt-123@qq.com
 * @LastEditTime: 2025-09-09 13:31:28
 * @FilePath: \docs\docs\.vitepress\config\plugins.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import mdContainer from 'markdown-it-container';

import type { MarkdownRenderer } from 'vitepress';

import { createDemoContainer } from './demo';

export const mdPlugin = (md: MarkdownRenderer) => {
  md.use(mdContainer, 'demo', createDemoContainer(md));
};
