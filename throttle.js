console.log("节流")
const pic = document.getElementById('pic01');
pic.addEventListener('drag', throttle( e => {
    console.log(e.offsetX, e.offsetY)
}, 100))

function throttle(func, delay=100) {
    let timer = null;

    return function() {
        if (timer) {
            return
        }
        timer = setTimeout(() => {
            func.apply(this, arguments);
            timer = null
        },delay)
    }
}
