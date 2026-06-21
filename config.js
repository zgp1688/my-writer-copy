/**
 * DeepSeek API 配置文件
 *
 * 配置方式（任选其一）：
 *
 * 方式 1 — 直接在此文件填写（适合本地开发）：
 *   将下方 DEEPSEEK_API_KEY 的值改为你的 API Key
 *
 * 方式 2 — 在页面中配置（推荐）：
 *   打开网页 → 点击右上角「API 设置」→ 输入 Key 并保存
 *   Key 会存储在浏览器 localStorage 中
 *
 * 获取 API Key：
 *   1. 访问 https://platform.deepseek.com
 *   2. 注册 / 登录账号
 *   3. 进入「API Keys」页面创建新 Key
 *   4. 复制以 sk- 开头的 Key
 */
const CONFIG = {
  // 在此填写你的 DeepSeek API Key（留空则使用页面设置中的 Key）
  DEEPSEEK_API_KEY: 

  // API 地址（一般无需修改）
  DEEPSEEK_API_URL: 'https://api.deepseek.com/chat/completions',

  // 默认模型
  DEEPSEEK_MODEL: 'deepseek-chat',
};
