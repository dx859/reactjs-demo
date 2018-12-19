// 定时器延迟触发
export function debounce(fn, delay) {
  let timer;

  return function () {

    let arg = arguments;
    let context = this;

    clearTimeout(timer);

    timer = setTimeout(function () {
      fn.apply(context, arg)
    }, delay)
  }
}