console.log('Promise')

const url = "README.md"

function httpRequest(method, url, postData = null, async = true) {  //可以使用 TS 声明非必填参数，也可以使用 REST 参数分割
    let xhr = new XMLHttpRequest()
    let res 
    xhr.open(method, url, async);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText)
                res = xhr.responseText
            } else if (xhr.status === 404){
                console.log(`${url} Not Found`)
                res = `${url} Not Found`
            }
        }
    }
    xhr.send(JSON.stringify(postData))
    return res
}

//函数形式
function httpRequest_Promise(method, url, postData = null, async = true) {  //可以使用 TS 声明非必填参数，也可以使用 REST 参数分割
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(method, url, async);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText)
                    resolve(xhr.responseText)
                } else if (xhr.status === 404){
                    console.log(`${url} Not Found`)
                    reject(`${url} Not Found`)
                }
            }
        }
        xhr.send(JSON.stringify(postData))
    })
}

//对象形式
const httpRequestPromise = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, obj.async);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log(xhr.responseText)
                    resolve(xhr.responseText)
                } else if (xhr.status === 404){
                    console.log(`${url} Not Found`)
                    reject(`${url} Not Found`)
                }
            }
        }
        xhr.send(JSON.stringify(obj.postData))
    })
}

console.log(httpRequest("GET", url))    //无返回值

httpRequest_Promise("GET", url)     //有返回值
.then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})

httpRequestPromise({
    method: 'GET',
    url: url,
    postData: null,
    async: true
}).then(res => {
    console.log(res)
}).catch(err => {
    console.error(err)
})