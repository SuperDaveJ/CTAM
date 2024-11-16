if(parent.ISDBSenrolled != 0){NextEnabled = 0};
//alert(parent.ISDBSenrolled)

if(typeof vWindowSize == "undefined")//does this variable exist?
	{vWindowSize = 1;}

var vAttempt = 1;
var vTriesAllowed;
var Score
// 20 Jan
var partial_incorrect=false;
ResetClicked();
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

	var form = document.form1
	var vResponse =new Array();
	var size=0
	var count=0
	var flag=true;
	

	    if(vType == "Knowledge")
        {
            vTriesAllowed=2
        }
        if(vType == "Assessment")
        {
            vTriesAllowed=1
        }
//Navigate();
	//returns the checked item


	for (var i=0; i < form.Quiz.length; i++)  
		{
		        
			if(form.Quiz[i].checked) 
				{
				//alert('value '+form.Quiz[i].value);
    				vResponse[size] = form.Quiz[i].value;
    				size=size+1
				}
				
		}
				if(vResponse.length==0)
		{
            //alert('Please Select the answer')
            document.getElementById('submitme').style.display="none";
            document.getElementById('Img1').style.display="";
		}
		else
		{

			if (vAttempt <= vTriesAllowed)
				{
				
				    for(var i=0; i<vResponse.length; i++)
				    {
				        for(var j=0; j<vCorrectAnswer.length; j++)
				        {  
				            if (vResponse[i] == vCorrectAnswer[j]) 
				            {
								partial_incorrect=true;
				                count=count+1				                
				            }							
				        }
				    }
				    
				    if(vCorrectAnswer.length == count && vResponse.length== vCorrectAnswer.length)
				    {
				    
                        WindowSize=vWindowSize; DisplayFeedback('Correct')
							vAttempt=vTriesAllowed;

                        if(vTriesAllowed==1)
						{
						     Score=1
                             alert("Score="+Score )
                         }
                    }
				   
				    else
				   {
				        WindowSize=1; DisplayFeedback('Incorrect')
				        if(vTriesAllowed==1)
						{
						     Score=0
                             alert("Score="+Score )
                         }
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
				    //alert("Answer is correct");
				  }
				}
		}	
			
}

function Navigate()
{
	//alert(vAttempt+' '+vTriesAllowed);
	if (vAttempt == vTriesAllowed)
		{
		    vAttempt = vAttempt + 1;
		    //parent.goToNextPage();
		}		
	if (vAttempt < vTriesAllowed)
		{
		    vAttempt = vAttempt + 1;
		    ResetClicked();
			enableCheck();
		}
}



function DisplayFeedback(Response)
{
	disableAll();
	document.getElementById('submitme').style.display="none" ;
    document.getElementById('Img1').style.display="" ;
	if(Response == "Correct") 
	{
	   Answer = 'Correct! '+vCorrectAnswerString;

		//disableAll();
	}
	if(Response == "Incorrect") 
	{
	    if(vAttempt < vTriesAllowed)
	    {
	         if(partial_incorrect)
			{
				Answer = 'Incorrect. One or more of your answers is incorrect. Close this box and try again.';
			}
			else
			{
				 Answer = 'Incorrect. None of your choices are correct. Close this box and try again.';
			}
	    }
	    if(vAttempt >= vTriesAllowed)
	    {    
	        Answer = 'Incorrect. The correct answers are displayed. '+vIncorrectAnswerString;
	        ResetClicked();
	        
            
	        var form = document.form1

            for(var j=0; j<vCorrectAnswer.length; j++)
			{ 
                 for (var i=0; i < form.Quiz.length; i++)  
	            {
		            if(form.Quiz[i].value == vCorrectAnswer[j]) 
			        {
				        form.Quiz[i].checked = true ;

			        }
			        //alert(vResponse)
	            }
	        }
			//disableAll();
	    }
	}

		
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
		FeedBackText = FeedBackText + '</head><body onload="self.focus();" onkeydown="page_Keydown(event,this);" onbeforeunload="opener.Navigate(); ">';//
		FeedBackText = FeedBackText + '<table width="350" align="top" border="0" cellpadding="0" cellspacing="0"><tr class="noPrint"><td>Feedback</td></tr>';		
		FeedBackText = FeedBackText + '<tr><td>&nbsp;</td></tr>';
		FeedBackText = FeedBackText +'<tr><td tabIndex="1" >';
		FeedBackText = FeedBackText + Answer + '</td></tr>';
		FeedBackText = FeedBackText + '<tr><td align="right" ><a href="#" onclick="javascript:self.close()"><br>Close </a></td>';
		FeedBackText = FeedBackText + '</tr></table></body></html>';	
	
		FBwin.document.write(FeedBackText);
		FBwin.document.close();	
		
	}	
}

function ResetClicked()
{
    var form = document.form1

	//returns the checked item
	for (var i=0; i < form.Quiz.length; i++)  
		{
			if(form.Quiz[i].checked) 
				{
						

    				form.Quiz[i].checked=false;

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

function Clicked(e)
{
    if (e.keyCode == 13) 
    {
        SubmitClicked();
    }
}

function ChangeState()
{
    var form = document.form1
	var vResponse = new Array();
	var flag =false;
	var size=0
	//alert("vAttempt= "+ vAttempt)
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
    				   //flag=true;
					   vResponse[size] = form.Quiz[i].value;
					   size=size+1
				    }
		    }
		if(vResponse.length==0)
		{
			 
			 document.getElementById('submitme').style.display="none" ;
            document.getElementById('Img1').style.display="" ;
		}
		else
		{
			document.getElementById('submitme').style.display="";
			 document.getElementById('Img1').style.display="none";
			
		}
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
    				form.Quiz[i].checked = true ;
					form.Quiz[i].disabled=false;
				}
				
		    }		
}

