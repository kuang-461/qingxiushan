// JavaScript Document
	function checkLength(){
		var password=document.getElementById("txtpassword"); //获取密码框值
		var account=document.getElementById("account");
		if(account.value.length<=0)
		{alert("用户名不能为空!");}
		else {if(password.value.length<=0){alert("密码不能为空!");}
		else{alert("登录成功");}
			}
		}