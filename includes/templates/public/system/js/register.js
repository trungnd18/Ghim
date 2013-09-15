$(function() {
	
	function updateTips(t) {
		$("#error-reg").append(t);
		$("#error-reg").show();
		setTimeout(function(){
			$("#error-reg").fadeOut('slow',function(){
				$("#error-reg").hide();
			});
		},2000);
	}
	// Hàm kiểm tra độ dài của chuỗi
	function checkLength(o, n, min, max) {
		if ($.trim(o.val()).length > max || $.trim(o.val()).length < min) {
			updateTips("Độ dài của  " + n + " phải nằm trong khoảng " + min
					+ " - " + max + ".");
			return false;
		} else {
			return true;
		}
	}
	// Hàm kiểm tra tính hợp lệ của chuỗi
	function checkRegexp(o, regexp, n) {
		if (!(regexp.test($.trim(o.val())))) {
			updateTips(n);
			return false;
		} else {
			return true;
		}
	}
	// Hàm kiểm tra chuỗi có để trống
	function checkEmpty(o, n) {
		if ($.trim(o.val()).length <= 0) {
			updateTips(n + " không được bỏ trống ");
			return false;
		}
		return true;
	}
	function checkPass(p1, p2) {
		if ($.trim(p1.val()) != $.trim(p2.val())) {
			updateTips("Password nhập lại không đúng");
			return false;
		}
		return true;
	}
	var e = $("#emailR"), n = $("#nameR"), p = $("#passwordR"), rp = $("#passwordR2"), cp = $("input#recaptcha_response_field");
	$("#buttonRegister")
			.click(
					function() {
						$("#error-reg").html("");
						$("#error-reg").hide();
						var cVal = Recaptcha.get_challenge();
						var rVal = Recaptcha.get_response();
						var bValid = true;
						bValid = bValid && checkEmpty(e, "Email");
						bValid = bValid && checkLength(e, "Email", 6, 180);
						bValid = bValid
								&& checkRegexp(
										e,
										/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
										"Email không đúng định dạng");

						bValid = bValid && checkEmpty(n, "Tên hiển thị ");
						bValid = bValid && checkLength(n, "Tên hiển thị ", 5, 16);
						bValid = bValid
								&& checkRegexp(n, /^([0-9a-zA-Z])+$/,
										"Tên hiển thị chỉ bao gồm chữ và số");
						bValid = bValid && checkEmpty(p, "Password");
						bValid = bValid && checkLength(p, "Password", 6, 16);
						bValid = bValid
								&& checkRegexp(p, /^([0-9a-zA-Z])+$/,
										"Mật khẩu chỉ bao gồm chữ và số");
						bValid = bValid && checkEmpty(rp, "Password nhập lại ");
						bValid = bValid && checkPass(p, rp);
						bValid = bValid && checkEmpty(cp, "Captcha");
						if (bValid) {
							$.post(baseUrl('/user/register'), {
								email : e.val().toLowerCase(),
								name : n.val().toLowerCase(),
								password : p.val(),
								challenge : cVal,
								response : rVal
							}, function(data) {
								console.log(data);
								if (data != "ok") {
									updateTips(data);
									Recaptcha.reload();
								} else {
									window.location = baseUrl('');
								}

							}

							);

						}

					})
})
