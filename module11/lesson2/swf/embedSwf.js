
var flashvars = {};
		var params = { swliveconnect:"true" };
		var attributes = { id:"myCom", name:"myCom" };
		swfobject.embedSWF("Loader.swf", "myContent", "994", "484", "8.0.0", "swf/expressInstall.swf", flashvars, params, attributes);
		
		function myCom_DoFSCommand(command, args) {
			if(command=="send_sub")
			{
			fnAssignSubArray(args)
			}
		else
		{
			createPrintPage(args)
		}
		
		}
		
		/*function myCom_DoFSCommand(args) {
			alert(args)
			createPrintPage(args)
		}*/
