/**
 * 各种环境变量
 */

// 是否开发模式
export default process.env.NODE_ENV === 'development'

// 是否生产模式
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
