//get params from url
export function getParams(url) {
	url = url || window.location.href;
	if(url.indexOf('#') != -1) {
		url = url.split('#')[1];
	}

	let params = '';
	if(url.indexOf('?') != -1) {
		params = url.substr(url.indexOf('?') + 1);
	}

	let obj = {};
	if(params) {
		let arr = [];
		if(params.indexOf('&') == -1) {
			arr = [params];
		} else {
			arr = params.split('&');
		}
		for(let i = 0; i < arr.length; i++) {
			let s = arr[i].split('=');
			obj[s[0]] = decodeURIComponent(s[1]);
		}
	}
	return obj;
}

//set session
export function setSi(k, val) {
	if(typeof val == 'string') {
		sessionStorage.setItem(k, val);
		return val;
	} else {
		sessionStorage.setItem(k, JSON.stringify(val));
		return val;
	}
}

//get session
export function getSi(k) {
	let uu = sessionStorage.getItem(k);
	try {
		if(typeof JSON.parse(uu) != 'number') {
			uu = JSON.parse(uu);
		}
	} catch(e) {}
	return uu;
}

//set local
export function setLoc(k, val) {
	if(typeof val == 'string') {
		localStorage.setItem(k, val);
		return val;
	} else {
		localStorage.setItem(k, JSON.stringify(val));
		return val;
	}
}

//get local
export function getLoc(k) {
	let uu = localStorage.getItem(k);
	try {
		if(typeof JSON.parse(uu) != 'number') {
			uu = JSON.parse(uu);
		}
	} catch(e) {}
	return uu;
}

// 清除浏览器内存数据 @k 需求清除内存字段的键名 @m 指定需要清除的存储空间 有两个值's'或者'l';没有k值则清除内存数据
export function clearKey(k, m) {
	m = m || 's';
    if(k) {
        m == 'l' ? localStorage.removeItem(k) : sessionStorage.removeItem(k);
    } else {
        sessionStorage.clear();
        localStorage.clear();
    }
}

//获取屏幕宽度高度
export function getClient() {
	let clientWidth = document.documentElement.clientWidth;
	let clientHeight = document.documentElement.clientHeight;
	return {
		clientWidth,
		clientHeight
	}
}

//序列化对象和数组
export function serialize(data) {
	if(data != null && data != undefined && data != '') {
		try {
			return JSON.parse(JSON.stringify(data));
		} catch(e) {
			if(data instanceof Array) {
				return [];
			} else {
				return {};
			}
		}
	}
	return data;
}

//格式化金额
export function formatPrice(price) {
	if(typeof price == 'string') {
		price = parseFloat(price);
	}
	return(Math.round(price * 10) / 10);
}

//判断当前运行的浏览器环境
export function browser() {
	let os = {};
	let ua = window.navigator.userAgent.toLowerCase();
	os.isAndroid = /android/.test(ua); //browser,wechat,android
	os.isIOS = /iphone|ipad|ipod/.test(ua); //browser,wechat,ios
	os.isBrowser = /macintel|win32/.test(navigator.platform.toLowerCase()); //browser
  os.isWeixin = ua.indexOf('micromessenger') != -1; //wechat
  os.isAlipay = ua.indexOf('alipayclient') != -1; //ali
	os.isApp = function() {
		return(this.isAndroid || this.isIOS) && !this.isWeixin && !this.isBrowser && !this.isAlipay;
	}

	return os;
}


//验证手机号码
export function checkPhone(phone) {
	return !!/^1[3578]\d{9}$/.test(phone);
}



//去除字符串左右两边的空格
export function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

//获取域名
export function dirPath() {
	var uu = window.location;
	var mu = uu.pathname.split('/');
	uu = uu.origin + '/' + mu[1];
	return {
		'project': mu[1],
		'path': uu
	};
}

Array.prototype.indexOfArr = function(obj) {
	let res = -1;
	this.filter(function(e, i) {
		let keys = ''
		for(let key in obj) {
			keys = key
		}
		if(obj[keys] == e[keys]) {
			res = i;
		}
	})
	return res;
}

//生成随机字符串 @randomFlag是否生成确定长度的字符串
export function randomWord(randomFlag, min, max){
    var str = "",
        pos,
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}

