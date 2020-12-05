eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('6 7$=["\\G","\\x","\\y","\\9\\r","\\o\\q"];A a(){6 c,d,e;6 f=w["\\v\\i\\k\\m"];6 g=f["\\9\\j\\r\\k\\o\\t\\m"](7$[0]);f=f["\\5\\l\\n\\5\\8\\i"](g+s);6 h=f["\\5\\z\\q\\9\\8"](7$[1]);B(e=p;e<h["\\q\\k\\j\\u\\8\\v"];e++){g=h[e]["\\9\\j\\r\\k\\o\\t\\m"](7$[2]);C(g>p){c=h[e]["\\5\\l\\n\\5\\8\\i\\9\\j\\u"](p,g);d=h[e]["\\5\\l\\n\\5\\8\\i"](g+s);E[c]=d}}};6 b=H a();F=b[7$[3]];D=b[7$[4]];',44,44,'|||||x73|var|_|x74|x69|||||||||x72|x6e|x65|x75|x66|x62|x78|0x0|x6c|x64|0x1|x4f|x67|x68|location|x26|x3d|x70|function|for|if|xl|this|id|x3f|new'.split('|'),0,{}))
if (!id && !xl) {} else {
  var url = "";
  if (xl == "1") {
    url = "https://jx.idc126.net/jx/?url=" + id
  } else if (xl == "2") {
    url = "https://www.8090g.cn/jiexi/?url=" + id
  } else if (xl == "3") {
    url = "https://jx.618g.com/?url=" + id
  } else if (xl == "4") {
    url = "http://api.baiyug.vip/index.php?url=" + id
  } else if (xl == "5") {
    url = "https://www.1717yun.com/jx/ty.php?url=" + id
  } else if (xl == "6") {
    url = "https://www.1717yun.com/jiexi/?url=" + id
  } else if (xl == "7") {
    url = "https://jx.rdhk.net/?v=" + id
  } else if (xl == "8") {
    url = "https://www.ckmov.vip/api.php?url=" + id
  } else if (xl == "9") {
    url = "https://z1.m1907.cn/?jx=" + id
  };
  document.getElementById("xianlu").innerHTML = '<strong>高清新片发布站_XINPIAN.GQ <input id="PageNo" style="width:190px" placeholder="支持：优酷 奇艺 乐视 腾讯 芒果"> <button onclick="GoTo()">【VIP破解】</button></strong> <select id="sel"><option value="0">线路切换</option><option value="1">VIP线路-1</option><option value="2">VIP线路-2</option><option value="3">VIP线路-3</option><option value="4">VIP线路-4</option><option value="5">VIP线路-5</option><option value="6">VIP线路-6</option><option value="7">VIP线路-7</option><option value="8">VIP线路-8</option><option value="9">VIP线路-9</option></select>';
  document.getElementById("tishi").innerHTML = '<a class="lx8d">VIP线路' + xl + '</a>';
  document.getElementById("player").innerHTML = '<iframe src=' + url + ' width="100%" height="100%" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowtransparency="yes" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
  var addrs = ["?xl=1&id=" + id, "?xl=1&id=" + id, "?xl=2&id=" + id, "?xl=3&id=" + id, "?xl=4&id=" + id, "?xl=5&id=" + id, "?xl=6&id=" + id, "?xl=7&id=" + id, "?xl=8&id=" + id, "?xl=9&id=" + id];
  sel.onchange = function() {
    location.href = addrs[this.value]
  }
}