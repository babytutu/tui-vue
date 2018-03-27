/**
 * 模板字符串的标签方法
 *
 * @param {string} input 输入的字符串
 * @param {any[]} keys 模板字符串内 ${} 生成的 keys 数组
 * @returns
 */
function template(input, ...keys) {
  /**
   *  填充模板字符串中的对应值
   *
   *  @param {...number|object|any[]} values 对应模板字符串 key 值的内容
   */
  const render = (...values) => {
    let index = 0
    const output = [input[index]]
    const dict = values[values.length - 1] || {}

    keys.map(key => output.push(Number.isInteger(key) ? values[key] : dict[key], input[++index]))

    return output.join('')
  }

  return render
}

/**
 * 转换为驼峰
 * @param {string} str -分隔字符串
 * @returns {string} 驼峰字符串
 */
function camelCase(str){
  return str.replace(/-(\w)/g, ($0, $1) => $1.toUpperCase())
}

/**
 * 首字母大写
 * @param {string} str -分隔字符串
 * @returns {string} 首字母大写的字符串
 */
function upcase(str) {
  return str.replace(/^\S/, s => s.toUpperCase())
}

module.exports = {
  template,
  camelCase,
  upcase
}