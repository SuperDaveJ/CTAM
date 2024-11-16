
if(parent.ISDBSenrolled != 0){NextEnabled = 0};
//alert(parent.ISDBSenrolled)

if(typeof vWindowSize == "undefined")//does this variable exist?
	{vWindowSize = 1;}

var vAttempt = 1;
var Score=0
var vTriesAllowed

document.getElementById('submitme').style.display="none";

document.onkeydown = function()
{
    if(window.event && window.event.keyCode == 116)
    { // Capture and remap F5
        location.reload(true);
    }
}


function SubmitClicked()
{
	if(vType == "Knowledge")
    {
        vTriesAllowed=2
    }
    if(vType == "Assessment")
    {
        vTriesAllowed=1
    }	

	var form = document.form1
	var vResponse = ""
	
	//returns the checked item
	for (var i=0; i < form.Quiz.length; i++)  
		{
			if(form.Quiz[i].checked) 
				{
    				vResponse = form.Quiz[i].value;
				}
				//alert(vResponse)
		}
		if(vResponse=="")
		{
            //alert('Please Select the answer')
            document.getElementById('submitme').style.display="none";
            document.getElementById('Img1').style.display="";
		}
		else
		{
		
			if (vAttempt < vTriesAllowed)
				{
				  //they got it right
				  if (vResponse == vCorrectAnswer) 
					{
					    WindowSize=vWindowSize; DisplayFeedback('Correct'); 
					    
					}
					
					
					
				  //they got it wrong, and it's not the last available try
				  if (vResponse != vCorrectAnswer && vAttempt <= vTriesAllowed)
			  		{
							//tell them to try again
							{WindowSize=1; DisplayFeedback('Incorrect')}
							//alert("Answer is Incorrect");
					}		
				 }
				 
				  //they still got it wrong on their last try	
			else
				{
    				if (vResponse != vCorrectAnswer)		
				  	{ 
						//tell them the correct answer
						WindowSize=vWindowSize; DisplayFeedback('Incorrect')
						if(vTriesAllowed==1)
						{
						     Score=0
                             alert("Score="+Score )
                         }
						//alert("Answer is Incorrect");
					}	
				  if (vResponse == vCorrectAnswer) 		
				  {
				    WindowSize=vWindowSize; DisplayFeedback('Correct')
				    if(vTriesAllowed==1)
	                {
                        Score=1
                         alert("Score="+Score )
                    }
				  }
				}
		}
				
			
			
}
function enableCheck()
{
	 var form = document.form1
	for (var i=0; i < form.Quiz.length; i++)  
	{
		form.Quiz[i].disabled=false;
	}

}

function Navigate()
{
	if (vAttempt == vTriesAllowed)
		{
		    //parent.goToNextPage();
		     vAttempt = vAttempt + 1;
		}		
	if (vAttempt < vTriesAllowed)
		{
		    vAttempt = vAttempt + 1;
		    ResetClicked();
			enableCheck();
		}
}

function disableAll(){
	   	var form = document.form1; 
	    document.getElementById('submitme').style.display="none" ;
    	document.getElementById('Img1').style.display="" ;

		for (var i=0; i < form.Quiz.length; i++)  
		{
			form.Quiz[i].disabled=true;
		    if(form.Quiz[i].value == vCorrectAnswer) 
			{
				if(vAttempt < vTriesAllowed)
				{    
				}
				else
				{
					form.Quiz[i].checked = true ;
					//form.Quiz[i].disabled=false;
				}				
		    }		
		}
}

function DisplayFeedback(Response)
{
	disableAll();
	document.getElementById('submitme').style.display="none" ;
    document.getElementById('Img1').style.display="" ;
 	if(Response == "Correct") 
	{
		Answer = 'Correct! '+vQues+' '+vCorrectAnswerString.toLowerCase()+' Close this box and select Next to continue.'
	    if(vAttempt = vTriesAllowed)
	    {    
	        document.getElementById('submitme').style.display="none" ;
            document.getElementById('Img1').style.display="" ;	
		}
		disableAll();		
	};
	
	if(Response == "Incorrect") 
	{
	    if(vAttempt < vTriesAllowed)
	    {    
	        Answer = 'Incorrect. Close this box and try again.'
	    }
	    if(vAttempt >= vTriesAllowed)
	    {    
			Answer = 'Incorrect. The correct answer is displayed. '+vQues+' '+vCorrectAnswerString.toLowerCase()+' You may want to review this section before continuing. Close this box and select Next to continue.';
			disableAll();
	    }
	};

		

	FBwin=window.open("","Feedback2","toolbar=no,location=no,directories=no,status=no,scrollbars=yes,menubar=no,resizable=no,width=" + 400 + ",height=" + 200 + ",left=" + 585 + ",top=380");
	//08 Jan
	window.opener.feedBack_ref=FBwin;
	/////////////////
	if (FBwin != null)
	{
	if (FBwin.opener == null) {FBwin.opener = window};
		FeedBackText = ''
    
		FeedBackText = FeedBackText + '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head>';
		FeedBackText = FeedBackText + '<title>Feedback  &nbsp; &nbsp; &nbsp; &nbsp; </title>';
		FeedBackText = FeedBackText + '<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />';
		FeedBackText = FeedBackText + '<script language="JavaScript" type="text/javascript">';		
		FeedBackText = FeedBackText + 'function page_Keydown(e,obj)';
		FeedBackText = FeedBackText + '{';
        FeedBackText = FeedBackText + 'var keynum;';
	    FeedBackText = FeedBackText + 'var keychar;';
        FeedBackText = FeedBackText + 'keynum = e.keyCode;';
		FeedBackText = FeedBackText + 'keychar = String.fromCharCode(keynum);';
		FeedBackText = FeedBackText + 'if(e.altKey && keychar=="C")';
		FeedBackText = FeedBackText + 'window.close();';
		FeedBackText = FeedBackText + '}';
		FeedBackText = FeedBackText + '</script>';
		FeedBackText = FeedBackText + '<link href="../../style/dhs_text.css" rel="stylesheet" type="text/css" media="screen"/>';
		FeedBackText = FeedBackText + '</head><body onload="self.focus();" onkeydown="page_Keydown(event,this);" onbeforeunload="opener.Navigate()">';
		FeedBackText = FeedBackText + '<table width="350" align="top" border="0" cellpadding="0" cellspacing="0"><tr class="noPrint"><td>Feedback</td></tr>';		
		FeedBackText = FeedBackText + '<tr><td>&nbsp;</td></tr>';
		FeedBackText = FeedBackText +'<tr><td tabIndex="1" >';
		FeedBackText = FeedBackText + Answer + '</td></tr>';
		FeedBackText = FeedBackText + '<tr><td align="right"><a href="#" onclick="javascript:self.close()"><br>Close </a></td>';
		FeedBackText = FeedBackText + '</tr></table></body></html>';	
	
		FBwin.document.write(FeedBackText);
		FBwin.document.close();	
	}		
}

function ResetClicked()
{
    var form = document.form1
	var vResponse = ""
	document.getElementById('submitme').style.display="none" ;
  	document.getElementById('Img1').style.display="" ;
	//returns the checked item
	for (var i=0; i < form.Quiz.length; i++)  
		{
			if(form.Quiz[i].checked) 
				{
    				form.Quiz[i].checked=false;
				}
		}
		
}

function ChangeState()
{
    var form = document.form1
	var vResponse = ""
	//alert("vAttempt="+ vAttempt)
	if(vAttempt > vTriesAllowed)
	{
	    document.getElementById('submitme').style.display="none";
    	document.getElementById('Img1').style.display="";
	}
	else
	{
		//returns the checked item
	    for (var i=0; i < form.Quiz.length; i++)  
		    {
			    if(form.Quiz[i].checked) 
				    {
    				    document.getElementById('submitme').style.display="";
    				    document.getElementById('Img1').style.display="none";
				    }
		    }
	}
}
function Clicked(e)
{
    if (e.keyCode == 13) 
    {
        SubmitClicked();
    }
   
}