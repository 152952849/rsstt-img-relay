/*
 * https://github.com/netnr/workers
 * 
 * 2019-10-12
 * netnr
 */


addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})


/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {

    //ȡ������һ��б�ܺ��������ϢΪ��������
    let url = request.url.substr(8);
    url = url.substr(url.indexOf('/') + 1);

    //���ض���
    var response;

    //��Ҫ���ԵĴ���
    if (request.method == "OPTIONS" || url.length < 3 || url.indexOf('.') == -1 || url == "favicon.ico" || url == "robots.txt") {
        //�����ʾ
        var htm = [];
        htm.push("Usage��Host/{URL}");

        response = new Response(htm.join('\n\n'), { status: 200 });
    } else {

        //����ǰ׺ http://
        if (url.toLowerCase().indexOf("http") == -1) {
            url = "http://" + url;
        }

        //���� fetch
        response = await fetch(url, {
            method: request.method,
            headers: request.headers
        });
    }

    //��ӿ���ͷ
    var myHeaders = new Headers(response.headers);
    myHeaders.set("Access-Control-Allow-Origin", "*");
    myHeaders.set("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    myHeaders.set("Access-Control-Allow-Headers", "*");

    return response;

    // return new Response('OK', { status: 200 })
}