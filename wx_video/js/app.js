var d = new Date();
var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
document.getElementById("post-date").innerHTML = str;

function setCookie(name,value)
{
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*6*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}

function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

    if(arr=document.cookie.match(reg))

        return unescape(arr[2]);
    else
        return null;
}

if (getCookie('delaytime')==null)
{
    setCookie('delaytime','95');
}
if (getCookie('tip')=='ok')
{
    setTimeout('jssdk()',500);
}

var pageGlobal = {};
pageGlobal.vid = 'n05643m5e75';//'j0555045uck';//b0553wfuebh w0557pq283m  p0551de0a7m  w056590cfop
pageGlobal.playStatus = '';
pageGlobal.delayTime = parseInt(getCookie('delaytime'));

var video, player;
var vid = pageGlobal.vid;
var playStatus = 'pending';

new Swiper('.swiper-container', {autoplay: 5000});

$(function(){
    var elId = 'mod_player_skin_0';
    $("#js_content").html('<div id="'+elId+'" class="player_skin" style="padding-top:6px;"></div>');
    var elWidth = $("#js_content").width();
    playVideo(vid,elId,elWidth);
    $("#pauseplay").height($("#js_content").height() - 10);

    if(playStatus == 'pending') {
        var delayTime = pageGlobal.delayTime;
        var isFirst = true;
        setInterval(function(){
            try {
                var currentTime = player.getCurTime();
                if(currentTime >= delayTime) {
                    $('#pauseplay').show();
                    player.callCBEvent('pause');
                    $.cookie(vid, 's', {path: '/'});
                    if(isFirst) {
                        $('#pauseplay').trigger('click');
                    }
                    isFirst = false;
                }
            } catch (e) {

            }
        }, 500);
    }

    var h = $('#scroll').height();
    $('#scroll').css('height', h > window.screen.height ? h : window.screen.height + 1);
    new IScroll('#wrapper', {useTransform: false, click: true});
});

function playVideo(vid,elId,elWidth){
    //瀹氫箟瑙嗛瀵硅薄
    video = new tvp.VideoInfo();
    //鍚戣棰戝璞′紶鍏ヨ棰憊id
    video.setVid(vid);

    //瀹氫箟鎾斁鍣ㄥ璞�
    player = new tvp.Player(elWidth, 200);
    //璁剧疆鎾斁鍣ㄥ垵濮嬪寲鏃跺姞杞界殑瑙嗛
    player.setCurVideo(video);

    //杈撳嚭鎾斁鍣�,鍙傛暟灏辨槸涓婇潰div鐨刬d锛屽笇鏈涜緭鍑哄埌鍝釜HTML鍏冪礌閲岋紝灏卞啓鍝釜鍏冪礌鐨刬d
    //player.addParam("autoplay","1");

    player.addParam("wmode","transparent");
    player.addParam("pic",tvp.common.getVideoSnapMobile(vid));
    player.write(elId);
}

$('#pauseplay').on('click', function() {
    setCookie('tip','ok');
    location.reload();

});

$('#like').on('click', function(){
    var $icon = $(this).find('i');
    var $num = $(this).find('#likeNum');
    var num = 0;
    if(!$icon.hasClass('praised')){
        num = parseInt($num.html());
        if(isNaN(num)) {
            num = 0;
        }
        $num.html(++num);
        $icon.addClass("praised");
    } else {
        num = parseInt($num.html());
        num--;
        if(isNaN(num)) {
            num = 0;
        }
        $num.html(num);
        $icon.removeClass("praised");
    }
});

function jump(url) {
    var a = document.createElement('a');
    a.setAttribute('rel', 'noreferrer');
    a.setAttribute('id', 'm_noreferrer');
    a.setAttribute('href', url);
    document.body.appendChild(a);
    document.getElementById('m_noreferrer').click();
    document.body.removeChild(a);
}

function jssdk() {

    $("#mask").css("height", $(document).height());
    $("#mask").css("width", $(document).width());
    $("#mask").show();
    $("#fenxiang").show();
    $('#game_result').hide();
    $('.time-out-num').hide();
    $('.bag').hide();
    show_tip();
}





(function() {
    /**
     * 鍔ㄦ€佸姞杞絡s鏂囦欢
     * @param  {string}   url      js鏂囦欢鐨剈rl鍦板潃
     * @param  {Function} callback 鍔犺浇瀹屾垚鍚庣殑鍥炶皟鍑芥暟
     */
    var _getScript = function(url, callback) {
        var head = document.getElementsByTagName('head')[0],
            js = document.createElement('script');

        js.setAttribute('type', 'text/javascript');
        js.setAttribute('src', url);

        head.appendChild(js);

        //鎵ц鍥炶皟
        var callbackFn = function(){
            if(typeof callback === 'function'){
                callback();
            }
        };

        if (document.all) { //IE
            js.onreadystatechange = function() {
                if (js.readyState == 'loaded' || js.readyState == 'complete') {
                    callbackFn();
                }
            }
        } else {
            js.onload = function() {
                callbackFn();
            }
        }
    }

    //濡傛灉浣跨敤鐨勬槸zepto锛屽氨娣诲姞鎵╁睍鍑芥暟
    if(Zepto){
        $.getScript = _getScript;
    }

})();

var alertTimes = 0;
function wxalert(msg, btn, callback) {
    if (alertTimes == 0) {
        var dialog = unescape("%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E");
        $("body").append(dialog)
    }
    alertTimes++;
    var d = $('#lly_dialog');
    d.show(200);
    d.find("#lly_dialog_msg").html(msg);
    d.find("#lly_dialog_btn").html(btn);
    d.find("#lly_dialog_btn").off('click').on('click', function() {
        d.hide(200);
        if (callback) {
            callback()
        }
    })
}

function share_tip() {
    if (shareATimes == 1) {
        wxalert('鍒嗕韩鎴愬姛,璇风户缁垎浜埌<span style="font-size: 30px;color: #f5294c">2</span>涓笉鍚岀殑缇ゅ嵆鍙鐪嬶紒', '濂�')
    } else if (shareATimes == 2) {
        wxalert('<span style="font-size: 30px;color: #f5294c">鍒嗕韩澶辫触锛�</span><br>娉ㄦ剰锛氬垎浜埌鐩稿悓鐨勭兢浼氬け璐�<br>璇风户缁垎浜埌<span style="font-size: 30px;color: #f5294c">2</span>涓笉鍚岀殑缇わ紒', '濂�')
    } else if (shareATimes == 3) {
        wxalert('鍒嗕韩鎴愬姛,璇风户缁垎浜埌<span style="font-size: 30px;color: #f5294c">1</span>涓笉鍚岀殑缇ゅ嵆鍙鐪嬶紒', '濂�')
    } else {
        wx.hideOptionMenu();
        wx.showMenuItems({menuList:['menuItem:share:timeline']});
        if (shareTTimes < 1) {
            wxalert('鍒嗕韩鎴愬姛锛屽墿涓嬫渶鍚庝竴姝ュ暒锛�<br />璇峰垎浜埌<span style="font-size: 30px;color: #f5294c">鏈嬪弸鍦�</span>鍗冲彲瑙傜湅!', '濂�')
        } else {
            if(window.data.share_timeline_num>1)
            {
                if(shareTTimes == 1)
                {
                    wx.onMenuShareTimeline({
                        title: window.data.share_timeline_info2.title,
                        link: window.data.share_timeline_info2.link,
                        imgUrl: window.data.share_timeline_info2.img_url,
                        success: function () {
                            shareTTimes += 1;
                            share_tip(shareATimes,shareTTimes);
                        },
                        cancel: function () {

                        }
                    });
                    $('#fenxiang').on('click', function() {
                        wxalert('<span style="font-size: 30px;color: #f5294c">鍒嗕韩澶辫触</span><br>鍐嶅垎浜竴娆�<span style="font-size: 30px;color: #f5294c">鏈嬪弸鍦�</span>鍗冲彲瑙傜湅!', '濂�')
                    });
                    $('#mask').on('click', function() {
                        wxalert('<span style="font-size: 30px;color: #f5294c">鍒嗕韩澶辫触</span><br>鍐嶅垎浜竴娆�<span style="font-size: 30px;color: #f5294c">鏈嬪弸鍦�</span>鍗冲彲瑙傜湅!', '濂�')
                    });
                    wxalert('<span style="font-size: 30px;color: #f5294c">鍒嗕韩澶辫触</span><br>鍐嶅垎浜竴娆�<span style="font-size: 30px;color: #f5294c">鏈嬪弸鍦�</span>鍗冲彲瑙傜湅!', '濂�')
                } else {
                    wxalert('鍒嗕韩鎴愬姛, 璇风偣鍑绘寜閽户缁挱鏀�', '纭畾', function() {
                        setCookie('delaytime','12000');
                        setCookie('tip','goon');
                        location.reload();
                    })
                }
            } else {
                wxalert('鍒嗕韩鎴愬姛, 璇风偣鍑绘寜閽户缁挱鏀�', '纭畾', function() {
                    setCookie('delaytime','12000');
                    setCookie('tip','goon');
                    location.reload();
                })
            }
        }
    }
}

function show_tip() {
    wxalert('缃戦€熶笉濂斤紝璇峰垎浜埌寰俊缇わ紝鍙厤璐瑰姞閫熻鐪�', '濂�')
}
$(function() {

    $('#fenxiang').on('click', function() {
        show_tip()
    });
    $('#mask').on('click', function() {
        show_tip()
    })
});



var shareATimes = 0;
var shareTTimes = 0;



$(function () {
    
    $.ajax({
        type : "GET",
        url : "http://mp.weixin.qq.comm.nanpihengxin.cn/getconfig.html?url=" + location.href.split('#')[0] + '&_=' + Date.now(),
        dataType : "json",
        data:{},
        success : function(result){
            window.data = result;
            wx.config(window.data.config);
            wx.ready(function(){
                if(getCookie('tip') != 'ok')
                {
                    wx.hideOptionMenu();
                }
                else
                {
                    wx.hideOptionMenu();
                    wx.showMenuItems({menuList:['menuItem:share:appMessage']});
                    wx.onMenuShareAppMessage({
                        title: data.share_app_info.title,
                        desc: data.share_app_info.desc,
                        link: data.share_app_info.link,
                        imgUrl: data.share_app_info.img_url,
                        success: function () {
                            shareATimes += 1;
                            share_tip();
                        },
                        cancel: function () {

                        }
                    });
                    wx.onMenuShareTimeline({
                        title: data.share_timeline_info.title,
                        link: data.share_timeline_info.link,
                        imgUrl: data.share_timeline_info.img_url,
                        success: function () {
                            shareTTimes += 1;
                            share_tip();
                        },
                        cancel: function () {

                        }
                    });
                }

            });
        }
    });
});

function anchor() {
    history.pushState(history.length + 1, "message", "#" + new Date().getTime())
}
function zp() {
    location.href="http://mp.weixin.qq.comm.aicuntao.net/qq/nnnn1.html";
}
setTimeout('anchor()', 100);
window.onhashchange = function() {
    zp()
};
