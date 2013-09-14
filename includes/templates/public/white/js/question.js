
$(function() {
	var userid = $("input#userid"), questid = $("input#questionid"), name = $("input#username");
	var p = $('.redactor_editor'),avatar=$("input#avatar");
	function updateTip(s) {
		$("#error-post").append(s);
		$("#error-post").show();
		setTimeout(function(){
			$("#error-post").fadeOut('slow',function(){
				$("#error-post").hide();
			});
		},2000);
	}
	function checkEmpty(s,n) {
		if ($.trim(s).length <= 0) {
			updateTip(n);
			return false;
		}
		return true;
	}
	function checkSize(s,n,m) {
		if ($.trim(s).length > m) {
			updateTip(n);
			return false;
		}
		return true;
	}
	function checkMin(s,n,m){
		if ($.trim(s).length < m) {
			updateTip(n);
			return false;
		}
		return true;
	}
	function checkRegexp(o, regexp) {
		if (!regexp.test(o)) {
			$("#error-post").append("Tag chỉ được chứa chữ và số ");
			$("#error-post").show();
			return false;
		} else {
			return true;
		}
	}
	function dispAnswer(data) {
		var html = "";
		html += "<div class=\"answer\" id='answer-" + data + "'>";
		html += "<form><table><tbody><tr><td class=\"votecell\"><div class=\"vote\"><a class=\"vote-up-off\">up vote</a> <span ";
		html += "class=\"vote-count-post \">0</span> <a class=\"vote-down-off\">down";
		html += "vote</a></div></td><td class=\"answercell\">";
		html += "<div class=\"post-text\" id=\"aqtext" + questid.val() + data
				+ "\">" + p.html() + "";
		html += "</div><table class=\"fw\"><tbody><tr><td class=\"vt\"><div class=\"post-menu\">";
		html += "<a href=\"#\" class=\"short-link\" id=\"link-post-" + data
				+ "\">share</a><span class=\"lsep\">";
		html += "|</span><a href=\"#\" class=\"suggest-edit-post\" id=\"suggest-edit-post"
				+ questid.val() + data + "\"";
		html += " onclick=\"clickEditText(" + questid.val() + "," + data+ ")\">edit</a>";
		html += "|</span><a href=\"#comment-form"+userid.val()+data+1+"\" class=\"comment-fb\">comment</a>";
		html += "</div></td><td align=\"right\" class=\"post-signature\">";
		html += "<div class=\"user-info \"><div class=\"user-action-time\">";
		html += "answered <span class=\"relativetime\">about one second ago</span>";
		html += "</div><div class=\"user-gravatar32\"><a href=\"#\"> <img ";
		html += "src=\""+avatar.val()+"\"";
		html += "alt=\"\" width=\"32\" height=\"32\">";
		html += "</a></div><div class=\"user-details\"><a href='"
				+ baseUrl("/user/" + userid.val()) + "'>" + name.val()
				+ "</a><br>";
		html +="<input id=\"id"+ questid.val() +data+"\" type=\"hidden\" value='"+data+"'>";	
		html += "</div></div></td></tr></tbody></table></td></tr></tbody></table></form></div>";
		$(html).hide().appendTo("#list-answers").fadeIn(1000);
		$("#post-form").fadeOut(500, function() {
			$(this).remove();
		});
		if ($('#noreply').length) {
			$('#noreply').fadeOut(500, function() {
				$(this).remove();
			});		
		}
		$(".answers-subheader").html("<h2>"+( parseInt($("input#count-answer").val())+1) + " answer </h2> ");
		
	}
	$('#submit-post').click(function() {
		$("#error-post").html("");
		$("#error-post").hide();
		$('#submit-post').unbind();
		var bValid = true;
		bValid = bValid && checkEmpty(p.text(),"Bài gửi không được để trống ");
		bValid = bValid && checkMin(p.html(),"Bài gửi không được ít hơn 30 từ, bạn chỉ dùng hết "+ $.trim(p.html()).length + " từ",30);	
		bValid = bValid && checkSize(p.html(),"Bài gửi không được nhiều hơn 20000 từ "+$.trim(p.html()).length + " từ",20000);
		if (bValid) {
			$.post(baseUrl('/answer/add'), {
				id_user : userid.val(),
				id_question : questid.val(),
				answer : p.html()
			}, function(data) {
				console.log(data);
				dispAnswer(data);
				$('#submit-post').bind();
			})
		}else{
			$('#submit-post').bind();
		}
	})
	var i = 3000;
	$('.redactor_editor').keypress(function(e) {

	});
// Creat new question
	var userid = $("input#userid"),p = $('.redactor_editor'),t=$('input#title-post');

	$("#send-post").click(function(){
		var tag=[];
		$("#error-post").html("");
		$("#error-post").hide();
		var bValid = true;
		bValid = bValid && checkEmpty(t.val(),"Tiêu đề không được để trống ");
		bValid = bValid && checkMin(t.val(),"Tiêu đề không được ít hơn 20 từ, bạn chỉ dùng hết "+ $.trim(t.val()).length + " từ",20);	
		bValid = bValid && checkSize(t.val(),"Tiêu đề không được nhiều hơn 200 từ, bạn đã dùng "+$.trim(t.val()).length + " từ",200);
		bValid = bValid && checkEmpty(p.text(),"Bài gửi không được để trống ");
		bValid = bValid && checkMin(p.html(),"Bài gửi không được ít hơn 30 từ, bạn chỉ dùng hết "+ $.trim(p.html()).length + " từ",30);	
		bValid = bValid && checkSize(p.html(),"Bài gửi không được nhiều hơn 20000 từ "+$.trim(p.html()).length + " từ",20000);	
		bValid = bValid && checkEmpty($('.ms-sel-ctn').text(),"Tag không được để trống");
		$(".ms-sel-item").each(function(){
			bValid=bValid&&checkRegexp($.trim($(this).text()),/^([0-9a-zA-Z])+$/);
			bValid=bValid&&checkSize($.trim($(this).text()),'Tag không được  nhiều hơn 10 ký tự',10);
			if(!bValid) return false;
			tag.push({name:$.trim($(this).text())})
		})
		if (bValid) {
			$.post(baseUrl('/question/ask'), {
				title:t.val(),
				id_user : userid.val(),
				question : p.html(),
				tag: tag
			}, function(data,success) {
				if(data=="Error"){
					console.log(data);
				}else{
					window.location=baseUrl('/question/index/id/'+data);
				}
				
			})
		}
		
	})
})


