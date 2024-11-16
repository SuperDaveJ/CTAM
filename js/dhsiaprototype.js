
function open_edit_window( myLocation, myName, myWidth, myHeight) {	alert('dfgfdgfdgfdgfdsgfds');
		myWin= open(myLocation, myName ,"width="+myWidth+",height="+myHeight+",location=no,status=yes,toolbar=no,menubar=no,scrollbars=auto,top=0,left=0");
		myWin.focus();		
}

function open_course_window( myLocation, myName, myWidth, myHeight) {	
		window.opener.top.location = myLocation;
		window.close();		
}



