// JavaScript Document



function push_app_store(i) {
    var url_arr = ["https://itunes.apple.com/cn/app/jiu-yun-da-mai-jiu-jiu-shang/id960210865?mt=8","https://itunes.apple.com/cn/app/xiao-da-kuai-pao/id1079848152?mt=8","https://itunes.apple.com/cn/app/xiao-niu-ji-pei/id1116898640?mt=8","https://itunes.apple.com/cn/app/xiang-le-me/id1067738843?mt=8","https://itunes.apple.com/cn/app/mai-mai-tong-xiang-le-me/id1091138907?mt=8"]
    window.open(url_arr[i])
}

function push_profile(password) {
    if (password == "117320") {
        window.open("../source/profile.pdf")
    }
}
function ipunt_password() {
    var str = prompt("请输入授权码")
    if (str){
        if (str == '117320') {
            push_profile(str)
        } else {
            alert('授权码输入不正确')
        }
    }
}