$(function(){
	$.ajaxSetup({
		cache : false
	});
	
	$(document).ajaxError(function(event, jqXHR){
		console.log('entered');
		if(jqXHR.status === 412){
			window.location.reload(true);
			console.log(window.location);
		}
	});
});

var DCG = {
		role: null,
		researchWebsite: null,
		websiteId: 0,
		graphArrayDCG: null,
		turnId: 0,
		reportTab: null,
		testStyle: null,
		userBean: null,
		keywordUpdation: null,
		expectedUrl: null,
		testerData: null,
		testData: null,
		errorTestId: 0,
		permanotice: null,
		stack_bottomright : {"dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25}

}

$('#loginButton').click(function(event){
	event.preventDefault();
	var hashpassword = hex_md5($('#inputPassword').val());
	var salt = $('input#securitySalt').val();
	var saltedPassword = hex_md5(salt+hashpassword);
	$('#inputPassword').val(saltedPassword);
	$('form#loginForm').submit();
});

$('input#signIn').click(function(event){
	event.preventDefault();
	var hashpassword = hex_md5($('#inputPassword').val());
	var salt = $('input#securitySalt').val();
	var saltedPassword = hex_md5(salt+hashpassword);
	$('#inputPassword').val(saltedPassword);
	$('form#sw-login').submit();
});

function successFunc(jsonRes, templateRes){
	var json = _.first(jsonRes);
	var template = _.first(templateRes);
	var compiled = _.template(template, {'items':json});
	$('ul#topNavList').html(compiled);
}

function failureFunc(){
	console.log('failed');
}

function testInit(){
	$.ajax({
		url: 'rest/test/getteststyle'
	}).statusCode({
		200: function(data){
			DCG.userBean = data;
			if(data.testBean){
				DCG.testStyle = data.testBean.showitemlist;
			}
		}
	});
	
	
	$.ajax({
		url: 'rest/user/getselfdetails'
	}).statusCode({
		200: function(data){
			DCG.role = data.role;
		}
	})
}


(function($) {
    $.extend({
        toDictionary: function(query) {
            var parms = {};
            var items = query.split("&"); // split
            for (var i = 0; i < items.length; i++) {
                var values = items[i].split("=");
                var key = decodeURIComponent(values.shift());
                var value = values.join("=")
                parms[key] = decodeURIComponent(value);
            }
            return (parms);
        }
    })
})(jQuery);

    
(function($) {
    $.fn.serializeFormJSON = function() {
        var o = [];
        $(this).find('tr').each(function() {
            var elements = $(this).find('input, textarea, select')
            if (elements.size() > 0) {
                var serialized = $(this).find('input, textarea, select').serialize();
                var item = $.toDictionary(serialized );
                o.push(item);  
            }
        });
        return o;
    };
})(jQuery);

(function($) {
	$.fn.JSONFromSerialize = function() {

		var o = {};
		var a = this.serializeArray();
		$.each(a, function() {
			if (o[this.name]) {
				if (!o[this.name].push) {
					o[this.name] = [ o[this.name] ];
				}
				o[this.name].push(this.value || '');
			} else {
				o[this.name] = this.value || '';
			}
		});
		return o;
	};
})(jQuery);