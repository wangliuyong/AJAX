let button=document.getElementById("button");
let number = document.getElementById('number');
//XMLHttpRequest是浏览器给出的一个用来进行请求相关的接口
button.addEventListener('click',()=>{
    
    let request=new XMLHttpRequest();//s=声明一个请求对象
     
    request.open('GET', '/xxx') //配置这个请求1.方式2.路径3.是否异步，默认异步。
    //open之后readystate已经变成了1
    request.setRequestHeader('wang','18')
    request.setRequestHeader('Content-Type','text/html')
    //request.send()//发送这个请求
    request.send('我偏要设置第四部分')
    request.onreadystatechange = function () {
        console.log(request.readyState) //request.readyState返回请求的状态包括：0（open方法还未调用）1（send方法还未调用）2（send方法被掉用，已经获得响应头和状态码）3（正在下载响应体，responseText已经获得部分数据）4（整个请求已经完成）
        if (request.status >= 400) { //request.status返回状态码。request.statusText 
            console.log("请求失败")
        } else {
            console.log("请求成功了")
            //console.log(request.responseText)//响应第四部分的内容
            let string = request.responseText
        
            let object = window.JSON.parse(string)
            let string2=request.getAllResponseHeaders()
            console.log(string2)
        }
    } //请求的状态发生改变事件

})




