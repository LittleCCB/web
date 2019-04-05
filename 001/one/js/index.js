$(document).ready(function () {
    $(#password).change(function () {
        var reg = /^[a-zA-Z]\w{5,17}$/;
        var aaa = reg.test(this.value);
        if(aaa == true){
            $(#NO_1).style.display = 'none';
        }else {
            $(#NO_1).style.display = 'block';
        }
    })
});