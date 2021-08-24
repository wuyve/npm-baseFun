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
const randomNum = function (min, max, position = 0) {
  if (arguments.length < 2) throw new Error('请至少传入两个参数')
  const numMin = Number(min), numMax = Number(max), numPosition = Number(position)
  if (isNaN(numMin) || isNaN(numMax) || isNaN(numPosition)) throw new Error('传入的参数均为数字类型')
  if (numMin >= numMax) throw new Error('第一个值要小于第二个值')
  if (numPosition < 0) throw new Error('第三位参数必须为自然数')

  return (Math.random() * (numMax - numMin + 1) + numMin).toFixed(numPosition)
}


/**
 * 返回URL参数
 * @param {Object} argObj 可不传，默认为空对象
 * @param {String} argObj.url url参数，不传默认取当前页面的url
 * @param {String} argObj.param 要查找的url参数，不传默认返回全部参数对象
 * @returns 返回URL参数对象或者url参数值
 */
const getUrlParam = (argObj = {}) => {
  let newUrl = argObj.url || window.location.href
  newUrl = (newUrl.split('?'))[1]
  const strings = newUrl.split('&')
  const paramObj = {}
  for (let i = 0; i < strings.length; i++) {
    const temp = strings[i].split('=')
    paramObj[temp[0]] = decodeURIComponent(temp[1])
  }
  return argObj.param ? paramObj[argObj.param] || null : paramObj
}


/**
 * 返回参数的数据类型
 * @param {*} param 任意数据
 * @returns 参数类型
 */
const getParamType = param => Object.prototype.toString.call(param).slice(8, -1)


/**
 * 深拷贝
 * @param {Object} param 深拷贝源对象
 * @returns 返回深拷贝结果
 */
const deepClone = param => {
  const cloneObj = new param.constructor()
  if (typeof param === null) return param
  // A instanceof B： 指的是 B 的 prototypeOf 是否在 A 的原型链上
  if (param instanceof Date) return new Date(param)
  if (param instanceof RegExp) return new RegExp(param)
  if (typeof param !== 'object') return param
  for (let i in param) {
    cloneObj[i] = deepClone(param[i])
  }
  return cloneObj
}


/**
 * 数字转换千分位
 * @param {Number} num 要转换的数字
 * @returns 返回转换成功的数组
 */
const formatNum = num => {
  const newNum = Number(num)
  if (isNaN(newNum)) throw new Error('请输入数字')
  return newNum.toLocaleString()
}

/**
 * 数组对象去重
 * @param {Array} arr 需要去重的数组
 * @param {String} key 唯一值的键
 * @returns 返回去重后的数组
 */
const uniqArrObj = (arr, key) => {
  const obj = {}
  arr = arr.reduce((item, next) => {
    obj[next[key]] ? '' : obj[next[key]] = true && item.push(next)
    return item;
  }, [])
  return arr
}


/**
 * 数组去重
 * @param {Array} arr 需要去重的数组
 * @returns 返回去重后的数组
 */
const uniqArr = arr => Array.from(new Set(arr))


/**
 * 节流
 * @param {Function} fn 需要执行的方法
 * @param {Number} wait 执行等待时间，单位为ms
 */
const throttle = (fn, wait) => {
  let timer = null
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, wait)
    }
  }
}

export {
  randomArr, 
  randomNum, 
  getUrlParam, 
  getParamType, 
  deepClone,
  formatNum,
  uniqArr,
  uniqArrObj,
  throttle
}
