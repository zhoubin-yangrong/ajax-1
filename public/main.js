console.log('我是main.js')
getJs.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '/2.js')
    request.onload = () => {
        let script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('js请求失败了')
    }
    request.send()
}
getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // 请求状态数值正常  执行下面的代码
                let style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }
            else {
                // 请求状态完成如果status不在200-300内  就显示报错
                alert('css加载错误')
            }
        }
    }
    request.send()
}
getHtml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", '/3.html')
    request.onload = () => {
        let div = document.createElement('div')
        div.innerHTML = request.response
        document.body.append(div)
    }
    request.onerror = () => {
        console.log('js请求失败了')
    }
    request.send()
}
getXml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status == 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())

        }
    }
    request.send()
}
getJson.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status == 200) {
            const obj = JSON.parse(request.response)
            myName.textContent = obj.name

        }
    }
    request.send()
}
let n = 1;
getNext.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n + 1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status == 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            }
            )
        }
    }
    n++
    request.send()
}