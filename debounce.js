console.log("防抖");
const inputbox = document.getElementById('inputbox');
inputbox.addEventListener('keyup', debounce(e => {
    console.log(inputbox.value, "最后输入：",e.key)
},400))

function debounce(func, delay=200) {
    let timer = null;

    return function() {
        if(timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(() => {
        func.apply(this, arguments);
        timer = null;
    }, delay)
    }
}