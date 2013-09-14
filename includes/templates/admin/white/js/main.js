function updateTip(n){
    console.log(n);
    $("#message-error").text(n);
     $('#message-error').show('fast',function(){
        setTimeout(function(){
            $("#message-error").hide('slow');
        },3000)
     });
    
}
function checkEmpty(s,n){
    if($.trim(s.val()).length<=0){
         updateTip(n+" is required and can't be empty");
        return false;
       
    }
    return true;
}
function checkEmptyQ(s,n){
    if($.trim(s.text()).length<=0){
         updateTip(n+" is required and can't be empty");
        return false;  
    }
    return true;
}
function checkLength(s,n,min,max){
    if($.trim(s.val()).length<=max&&$.trim(s.val()).length>=min){
        return true;
    }
    updateTip(n+" is not strictly between "+min+" and "+max);
    return false;
}
function checkLengthQ(s,n,min,max){
	
	
    if($.trim(s.text()).length<=max&&$.trim(s.text()).length>=min){
        return true;
    }
    updateTip(n+" is not strictly between "+min+" and "+max);
    return false;
}
function checkRegex(s,n,o){
    if(o.test($.trim(s.val())))
        return true;
    else{
        updateTip(n+" is not valid");
        return false;
    }
}
function checkConfirm(p1,p2,n){
    if($.trim(p1.val())==$.trim(p2.val())){
        return true;
    }else{
        updateTip(n+" did not match");
        return false;
    }
}
$(function(){
    var n=$("#name"),e=$("#email"),p=$("#password");
    var email_regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    var name_regex=/^[a-z+]/;
    $(".save-user").click(function(){
        $("#message-error").text("");
        var Valid=true;
        Valid=Valid&&checkEmpty(n,'Name');        
        Valid=Valid&&checkRegex(n,'Name',name_regex);
        Valid=Valid&&checkLength(n,'Name',6,30);
        Valid=Valid&&checkEmpty(e,'Email');      
        Valid=Valid&&checkRegex(e,'Email',email_regex);
        Valid=Valid&&checkLength(e,'Email',6,140);
        if($.trim(p.val()).length>0)
            Valid=Valid&&checkLength(p,'Password',6,100);
        if(Valid){           
            return true;
        }
        return false;      
    })
})

$(function(){
    var n=$("#name"),e=$("#email"),p=$("#password");
    var email_regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    var name_regex=/^[a-z+]/;
    $(".add-user").click(function(){
        $("#message-error").text("");
        var Valid=true;
        Valid=Valid&&checkEmpty(n,'Name');        
        Valid=Valid&&checkRegex(n,'Name',name_regex);
        Valid=Valid&&checkLength(n,'Name',6,30);
        Valid=Valid&&checkEmpty(e,'Email');      
        Valid=Valid&&checkRegex(e,'Email',email_regex);
        Valid=Valid&&checkLength(e,'Email',6,140);
        Valid=Valid&&checkEmpty(p,'Password');
        Valid=Valid&&checkLength(p,'Password',6,100);
        if(Valid){           
            return true;
        }
        return false;      
    })
})
$(function(){
    var n=$("#name"),e=$("#email"),p=$("#password");
    var email_regex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    var name_regex=/^[a-zA-Z\d]/;
    $(".login-admin").click(function(){
        console.log("trung");
        $("#message-error").text("");
        var Valid=true;
        Valid=Valid&&checkEmpty(e,'Email');      
        Valid=Valid&&checkRegex(e,'Email',email_regex);
        Valid=Valid&&checkLength(e,'Email',6,140);
        Valid=Valid&&checkEmpty(p,'Password'); 
        Valid=Valid&&checkLength(p,'Password',6,100);
        if(Valid){           
            return true;
        }
        return false;      
    })
})


$(function(){
    var n=$("#title"),q=$("#question"),qt=$("#questext");
    var name_regex=/^[a-z+]/;
    $(".edit-question").click(function(){
        $("#message-error").text("");
        var Valid=true;
        qt.html(q.val());
        Valid=Valid&&checkEmpty(n,'Title');
        Valid=Valid&&checkLength(n,'Title',10,100);
        Valid=Valid&&checkEmptyQ(qt,'Question'); 
        Valid=Valid&&checkLengthQ(qt,'Question',6,20000);
        if(Valid){           
            return true;
        }
        return false;      
    })
})
$(function(){
    var n=$("#title"),q=$("#question"),qt=$("#questext");
    var name_regex=/^[a-z+]/;
    $(".add-question").click(function(){
        $("#message-error").text("");
        var Valid=true;
        qt.html(q.val());
        Valid=Valid&&checkEmpty(n,'Title');
        Valid=Valid&&checkLength(n,'Title',10,100);
        Valid=Valid&&checkEmptyQ(qt,'Question'); 
        Valid=Valid&&checkLengthQ(qt,'Question',6,20000);
        if(Valid){           
            return true;
        }
        return false;      
    })
})
$(function(){
    var n=$("#name"),q=$("#description"),qt=$("#questext")
    var name_regex=/^[a-z+]/;
    $(".edit-tag").click(function(){
        $("#message-error").text("");
        var Valid=true;
        qt.html(q.val());
        Valid=Valid&&checkEmpty(n,'Tag name');
        Valid=Valid&&checkLength(n,'Tag name',2,10);
        Valid=Valid&&checkEmptyQ(qt,'Tag description'); 
        Valid=Valid&&checkLengthQ(qt,'Tag description',6,200);
        if(Valid){           
            return true;
        }
        return false;      
    })
})
$(function(){
    var n=$("#name"),q=$("#description"),qt=$("#questext");
    var name_regex=/^[a-z+]/;
    $(".add-tag").click(function(){
        $("#message-error").text("");
        var Valid=true;
        qt.html(q.val());
        Valid=Valid&&checkEmpty(n,'Tag name');
        Valid=Valid&&checkLength(n,'Tag name',2,10);
        Valid=Valid&&checkEmptyQ(qt,'Tag description'); 
        Valid=Valid&&checkLengthQ(qt,'Tag description',6,200);
        if(Valid){           
            return true;
        }
        return false;      
    })
})
