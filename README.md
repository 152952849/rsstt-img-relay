# Cloudflare Workers

### ����
- ֧�ֿ�������ת����֧�ֿ�������Ľӿڣ�����ֱ�ӷ��� ajax��fetch
- ֧��HTTPS�����Զ�����ݽӿڲ�֧��HTTPS��

### �ӿ�
- `Host/{URL}`
- `https://cors.zme.ink/{URL}`

### ʾ��
- <https://cors.zme.ink/https://api.github.com>
- <https://cors.zme.ink/http://nginx.org/download/nginx-1.16.1.tar.gz>

```js
// ����������̨����
var $url = "http://wthrcdn.etouch.cn/weather_mini?citykey=101040100";
fetch("https://cors.zme.ink/" + $url).then(x => x.text()).then(console.log)
```

### ��װ
- <https://developers.cloudflare.com/workers/quickstart>

### Source
- <https://github.com/netnr/workers>