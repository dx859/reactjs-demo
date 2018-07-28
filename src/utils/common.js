// 定时器延迟触发
export function debounce(fn , delay) {
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

export function strMapToObj(strMap) {
    let obj = Object.create(null);
    for (let [k,v] of strMap) {
        obj[k] = v;
    }
    return obj;
}