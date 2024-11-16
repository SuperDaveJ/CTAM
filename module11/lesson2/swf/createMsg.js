		var child;
		var SubArray;
		function fncMessage()
		{
			child.print();
			child.close();
			/*var cnfStr="click OK to close the window.";
			var f=window.confirm(cnfStr);
			if(f)
			{
			child.close();
			}
			*/
		}
		function fnAssignSubArray(msg)
		{
		
		SubArray=msg.split("^")
		
		}
		function createPrintPage(args)
		{
			 msg =  args.split('^');
			 var cnfStr="click OK to close the window.";
			  var generator=window.open('','name','height=400,width=500');
			  child=generator;
  		generator.document.write('<html><head><title>CTAM</title>');
		//generator.document.write('</head><body scroll="yes" onLoad="javascript:self.print();var f=window.confirm();if(f)self.close();"');
		generator.document.write('</head><body scroll="yes" onLoad="javascript:window.opener.fncMessage();"');
			   generator.document.write('<p><font size="4"><b>File Cabinet:</b></font></p>');
			 
			   generator.document.write('<p><b>Traffic List:</b></p>');
			
				for(var i = 0 ; i < msg.length ; i++)
				{
					generator.document.write('<p><b>'+SubArray[i]+':</b><br> ' + msg[i] + '</p>');
					generator.document.write('<br>');
					
				}

			  //generator.document.write('<p><a href="javascript:self.close()">Close</a> the popup.</p>');
			  //generator.document.write('<p><a href="javascript:self.print()">Print</a> the popup.</p>');
			  generator.document.write('</body></html>');
			  generator.document.close();
		}

		var currentPopup=null;
		var flag=0;

function updatePopup(popup){

	currentPopup=popup;	
	flag=1;	
}
function pauseflash(mymovie) 	
{
	if(flag == 1){		
		document.getElementById(mymovie).TStopPlay(currentPopup);
		//alert('updatePopup :: '+currentPopup);	
		flag=2;						
	}
	else{ 		 
		 document.getElementById(mymovie).TPlay(currentPopup);	
		 flag=1;
	}	
} 


var myWind;
function fnOpenPopup(htmlName,scrW,scrH)
{
	var lPos = 0;//screen.width/2- scrW/2
	var tPos = 0;//screen.height/2-scrH/2
		
	// If folder structure changes then Just change the below path
	var htmlpath= "assets/newwindow.html?documentname="+htmlName;
	if (myWind != null) 
	{
	   myWind.close();
	   myWind = null;
	}
	//alert('htmlName: '+htmlpath);
	myWind=window.open(htmlpath,'win','width='+ scrW+',height='+ scrH+',menubar=yes,scrollbars=no,\
	toolbar=yes,status=yes,left='+ lPos+',top='+ tPos)
	//myWind.focus();
}

