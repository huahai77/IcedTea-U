/**
 * 本地存储
 */

export const getStore = name => {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

export const setStore = (name, value) => {
  if(typeof value !== 'string') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(name, value)
}

export const removeStore = name => {
  window.localStorage.removeItem(name)
}

