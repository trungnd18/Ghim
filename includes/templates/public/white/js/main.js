function format(i) {
	console.log(i);
}
function loadData(dom, data) {
	$(dom).load(data);
}
function changeClass(dom, classname, option) {

	$(dom).removeClass(classname);
	$(option).addClass(classname);
}
function loading() {
	$("#content").ajaxSend(function() {
		$("#wait").css("display", "block");
		// alert("start");
	});
	$("#content").ajaxSuccess(function() {
		$("#wait").css("display", "none");
		// alert("stop");
	});
}

$(document).ready(function() {
	loading();
	$('#hmenus a').click(function() {
		// history.pushState({}, "", "htm.simple");
		changeClass('#hmenus a', 'default', this);
	});
});
function changeTab(s) {
	$(s).click(function() {
		$(s).removeClass("youarehere");
		$(this).addClass("youarehere");
		// $('#question-list').load("./admin/index/view");

	});
}
function cmsTime(t){
	var time= new Date();
	var time_ago= new Date(t);
	time_ago = time_ago.getTime();
	cur_time = time.getTime();
	time_elapsed = (cur_time - time_ago)/1000;
	seconds = Math.round(time_elapsed);
	minutes = Math.round ( time_elapsed / 60 );
	hours = Math.round ( time_elapsed / 3600 );
	days = Math.round ( time_elapsed / 86400 );
	weeks = Math.round ( time_elapsed / 604800 );
	months = Math.round ( time_elapsed / 2600640 );
	years = Math.round ( time_elapsed / 31207680 );
	// Seconds
	if (seconds <= 60) {
		mtime=seconds +" seconds ago ";
	} 		// Minutes
	else if (minutes <= 60) {
		if (minutes == 1) {
			mtime= " 1 minute ago ";
		} else {
			mtime= " about "+ minutes+" minutes ago ";
		}
	} 		// Hours
	else if (hours <= 24) {
		if (hours == 1) {
			mtime= " 1 hour ago ";
		} else {
			mtime= " about "+hours+ " hours ago ";
		}
	} 		// Days
	else if (days <= 7) {
		if (days == 1) {
			mtime=" yesterday ";
		} else {
			mtime=" about "+days+" days ago ";
		}
	} 		// Weeks
	else if (weeks <= 4.3) {
		if (weeks == 1) {
			mtime="  1 week ago";
		} else {
			mtime=" about " +weeks+" weeks ago ";
		}
	} 		// Months
	else if (months <= 12) {
		if (months == 1) {
			mtime="  1 mounth ago ";
		} else {
			mtime=" about "+months+" months ago ";
		}
	} 		// Years
	else {
		if (years == 1) {
			mtime=" 1 year ago ";
		} else {
			mtime=" about "+years+" years ago ";
		}
	}
	return mtime;
}


$(function() {
	var email = $("#email"), password = $("#password"), allFields = $([]).add(
			email).add(password), tip = $("div#messages");
	function updateTip(s) {
		$("#error-login").append(s);
		$("#error-login").show();
		setTimeout(function(){
			$("#error-login").fadeOut('slow',function(){
				$("#error-login").hide();
			});
		},2000);
	}
	// Hàm check độ dài của chuỗi
	function checkLength(o, n, min, max) {
		if ($.trim(o.val()).length > max || $.trim(o.val()).length < min) {
			updateTip("Độ dài của  " + n + " phải nằm trong khoảng " + min
					+ " - " + max + ".");
			return false;
		} else {
			return true;
		}
	}
	// Hàm kiểm tra tính hợp lệ của chuỗi
	function checkRegexp(o, regexp, n) {
		if (!(regexp.test($.trim(o.val())))) {
			updateTip(n);
			return false;
		} else {
			return true;
		}
	}
	// Hàm kiểm tra chuỗi có để trống
	function checkEmpty(o, n) {
		if ($.trim(o.val()).length <= 0) {
			updateTip(n + " không được bỏ trống ");
			return false;
		}
		return true;
	}
	function checkuser(email,password){
		$.post(baseUrl('/user/valid'), {
			email : $.trim(email.val()),
			password : $.trim(password.val()),
		}, function(data, success) {
			if (data != ""){
				updateTip(data);
				return false;
			}else
				return true;
		}

		);
	}
	$("#buttonSignin")
			.click(
					function() {
						var bValid = true;
						$("#error-login").html("");
						$("#error-login").hide();
						bValid = bValid && checkEmpty(email, "Email");
						bValid = bValid && checkLength(email, "Email", 6, 80);
						bValid = bValid
								&& checkRegexp(
										email,
										/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
										"Email không đúng định dạng");

						bValid = bValid && checkEmpty(password, "Password");
						bValid = bValid
								&& checkLength(password, "Password", 6, 16);
						bValid = bValid
								&& checkRegexp(password, /^([0-9a-zA-Z])+$/,
										"Mật khẩu chỉ chửa chữ và số");

						if (bValid) {
							$.post(baseUrl('/user/login'), {
								email : $.trim(email.val()),
								password : $.trim(password.val()),
							}, function(data, success) {
								if (data != "ok")
									updateTip(data);
								else
									window.location = baseUrl('');

							}

							);
						}
					});
	$("#appForm").hide();
	$("#registerForm").hide();
	$("#showLogin").click(function() {
		allFields.removeClass("error");
		allFields.val("");
		$("#message").html("");
		$("#registerForm").hide();
		$("#appForm").slideToggle("slow");
	});
	$("#showRegister").click(function() {
		allFields.removeClass("error");
		allFields.val("");
		$("#message").html("");
		$("#appForm").hide();
		$("#registerForm").slideToggle("slow");
	});

});
// Question

var count=0;
$(function() {
	// Main Long Poll function
	var count=0;
	function handleServerMessage(data) {
			 count++;
			// window.document.title="Có "+count+" tin nhắn mới";
		//	 console.log(data);
		 
	}
	function longPoll(stamp) {
		// Open an AJAX call to the server's Long Poll PHP file
		
			$.get(baseUrl('/index/noti'),{tamp:stamp}, function(data) {
				// Callback to handle message sent from server (not
				// illustrated)
				if(data!=""){
					handleServerMessage(data);
					// Open the Long Poll again
					longPoll("noti");
				}else{
					longPoll();
				}
				
				
			});
	}
	// Make the initial call to Long Poll
	longPoll();
});

$(function() {

	$('.redactor').redactor({
		focus : true,
		lang : 'vi',
		fixed : true,
		callback : function(obj) {
			var callback = function() {

				var html = "<pre></pre>";
				obj.execCommand('inserthtml', html);
			}
			// add before
			obj.addBtnBefore('image', 'button1', 'Chèn dòng lệnh', callback);
		}
	});
});
function cutData(d) {
	var o=$(d);
	var s=o.text();
	return $.trim(s.substr(0, 55)) + "...";
}
function eachData(data) {
	var html = "";
	$
			.each(
					data,
					function(key, value) {
						html += "<div class=\"question-summary narrow\" id=\"question-summary-"
								+ value['id'] + "\">";
						html += "<div class='cp'>";
						html += "<div class='votes'>";
						html += "<div class=\"mini-counts\">"
								+ value['count_vote'] + "</div>";
						html += "<div>votes</div>";
						html += "</div>";
						html += "<div class=\"status unanswered\">";
						html += "<div class=\"mini-counts\">"
								+ value['count_answer'] + "</div>";
						html += "<div>answer</div>";
						html += "</div>";
						html += "<div class=\"views\">";
						html += "<div class=\"mini-counts\">"
								+ value['count_view'] + "</div>";
						html += "<div>views</div>";
						html += "</div>";
						html += "</div>";
						html += "<div id=\"game\" class=\"sum\"><h3>";
						html += "<a rel='tag' data-toggle=\"tooltip\" title=\""
								+ cutData(value['question']) + "\" href=\""
								+ baseUrl("/question/" + value['id'])
								+ "\" ";
						html += "class=\"question-hyperlink\"> "
								+ value['title'] + " </a></h3>";
						if (value['tag'] != null) {
							$.each(value['tag'], function(index, v) {
								html += "<a data-toggle=\"tooltip\" data-placement='top' ";
								html += "title=\"" + v['description']
										+ "\" href=\""
										+ baseUrl('/tag/view/id/' + v['id'])
										+ "\" ";
								html += "class=\"post-tag\" rel=\"tag\">"
										+ v['name'] + "</a>";
							}) 
						}
						html += "<div class=\"started\"><a href=\"#\" class=\"started-link\"><span title='"+value['time']+"' class=\"relativetime\">"
								+ cmsTime(value['time']) + "</span>";
						html += "</a><a  href=\""
								+ baseUrl("/user/" + value['id_user'])
								+ "\">" + value['name']
								+ "</a></div></div></div>";
					});
	return html;
}

// Tag
function eachTag(data){
	var html="";
	html+='<table id="tags-browser" class="table "><tbody><tr>';
	var i = 0;
	$.each(data,function(key, v) {
		html+="<td height=\"110px\" >";
		html+="<a class=\"post-tag\" href='" +baseUrl ( "/tag/view/id/" +v ['id'] ) + "'>" +v ['name'] +"</a>";
		html+="<span class=\"item-multiplier\"><span class=\"item-multiplier-x\">×</span>&nbsp;" +
				"<span class=\"item-multiplier-count\">" +v ['count'] + "</span></span>";
		html+="<div class=\"excerpt\">" +v ['description'] + "</div>";
		html+="<div><div class=\"stats-row fl\"><a href=\"#\" >35 asked today</a>, <a href=\"#\">" +
				"44 this week</a></div><div class=\"cbt\"></div></div></td>";
		i ++;
		if (i % 4 == 0) {
			html+="</tr><tr>";
		}
	});
	if ((i - 1) % 4 != 0) html+="</tr>";
	html+="</tbody></table>";	
	return html;
}
function eachUser(data){
	var html='<div id="user-browser"><table><tbody><tr>';
	var i = 0;
	$.each(data,function(key, v) {
		html += "<td><div class=\"user-info  user-hover\"><div class=\"user-gravatar48\">";
		html += "<a href='#'><img src=\""+v['url_avatar']+"\"";
		html += "alt='' width=\"48\" height=\"48\"></a></div><div class=\"user-details\">";
		html += "<a href='" +baseUrl ("/user/" +v ['id'])+ "'>" +v ['name'] + "</a><br> <span class=\"user-location\">Stokke,";
		html += "Norway</span><br> <span class=\"reputation-score\" dir=\"ltr\">" +v ['vote']+ "</span>";
		html += "</div><div class=\"user-tags\"><a href=\"#\">python</a>, <a href=\"#\">python-2.7</a>, <a href=\"#\">Zava</a>";
		html +="</div></div></td>";
		i ++;
		if (i % 4 == 0) {
			html += "</tr>";
			html += "<tr>";
		}
	});
	if ((i - 1) % 4 != 0) html+= "</tr>";	
	html+='</tbody></table></div>';
	return html;
}


