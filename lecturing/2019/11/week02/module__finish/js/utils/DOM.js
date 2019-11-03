export const el = (selector, context = document) => 
  context.querySelector(selector)

export const elList = (selector, context = document) => 
  context.querySelectorAll(selector)

export const on = (el, type, listener, capture = false) =>
  el.addEventListener(type, listener, capture)

export const off = (el, type, listener, capture = false) =>
  el.removeEventListener(type, listener, capture)