/**
 * @function 随机数组
 * @param {Array} arr 要随机的数组
 * @returns 返回随机数组
 */
const randomArr = arr => {
  if (!(arr instanceof Array)) throw new Error('请传入数组')

  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    const index = parseInt(Math.random() * (len - i))
    const temp = arr[index]
    arr[index] = arr[len - i - 1]
    arr[len - i - 1] = temp
  }
  return arr
}


/**
 * 随机数
 * @param {Number} min 最小值
 * @param {Number} max 最大值
 * @param {Number} position 小数位数
 * @returns 返回结果
 */
const randomNum = (min, max, position = 0) => {
  const numMin = Number(min), numMax = Number(max), numPosition = Number(position)
  if (isNaN(numMin) || isNaN(numMax) || isNaN(numPosition)) throw new Error('传入的参数均为数字类型')
  if (numMin >= numMax) throw new Error('第一个值要小于第二个值')
  if (numPosition < 0) throw new Error('第三位参数必须为自然数')

  return (Math.random() * (numMax - numMin + 1) + numMin).toFixed(numPosition)
}

export {randomArr, randomNum}