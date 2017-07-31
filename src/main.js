$(function(){
		var xiaomi = `<div class="layout-logo">
						<img src="../dist/img/xue.jpg" width="32" height="32">
						<span class="msg">你好，我是小雪，将为你解答所有问题</span>
	            </div>`;
		$(".content").append(xiaomi);
		$("#button1").click(function(){
			var usertext = $("#sendContent").val();
				if(usertext=='')return;
					var me = `<div class="layout-logo right">
	            	<span class="msg">${usertext}</span>
	            	<img src="../dist/img/yang.jpg" width="32" height="32">
	            </div>`	
				$(".content").append(me);
				$("#sendContent").val("");//清空输入框

				$.ajax({
					type:"get",
					url:"http://www.tuling123.com/openapi/api?key=ef9b8562691547afac0ccc40d18f9295&info="+usertext,//json数据
					success:function(result){
						//对象解构赋值
						//var {test:test,url:url}=result;方法一
						var {text,url}=result;//方法二
						var tmp=`<span>${text}</span>`;
						if(url!=undefined){
							tmp+=`<a href='${url}' target="_blank">点我查看(⊙o⊙)哦</a>`;}
							var xiaomi = `<div class="layout-logo">
							<img src="../dist/img/xue.jpg" width="32" height="32">
						<span class="msg">${tmp}</span>
	            </div>`;
		$(".content").append(xiaomi);
						
					}
				});

		});

		document.onkeyup = function (event) {
            var e = event || window.event;
            var keyCode = e.keyCode || e.which;
            if(keyCode==13)
			 $("#button1").click();
        	}

	});
