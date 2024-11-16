var TotalQuestion = "100";
var lastFileName_A = "assessment_35_a.html";
var lastFileName_B = "assessment_35_b.html";
var vCorrectAnswer="";

var mSkipContentAnchorId="skipContent";

function getNextFileName()
{	
	var col_array;
	var pathname = window.location.pathname;
	col_array=pathname.split("\\");	
	
	//var currentFileName = (col_array[col_array.length -1]);
	var currentFileName = window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.length); 

	if(currentFileName == lastFileName_A || currentFileName == lastFileName_B )
	{
		CalculateCurrentScorePercentage();		
		return "assessment_result.html";		
	}
	
	var randomnumber = Math.floor(Math.random()*2);		
	var currentFileName_array=currentFileName.split("_");	
	var currentFileNo = parseInt(currentFileName_array[1]) + 1;	
	var CurrentFileOption = "";
	
	if(randomnumber == "0")
	{
		CurrentFileOption = "a";
	}	
	if(randomnumber == "1")
	{
		CurrentFileOption = "b";
	}
	var NextFileName = currentFileName_array[0]+ "_" + currentFileNo + "_" +CurrentFileOption+".html";	

		//NextFileName=NextFileName.substr(1,NextFileName.length)
		//alert("NextFileName "+NextFileName+ "  pathname  "+pathname);			
	return NextFileName;	
}

function AddScore()
{
	window.opener.currentScore = window.opener.currentScore + 1;
}

function CalculateCurrentScorePercentage()
{
	var score = 0;
	
	var TotalQuestions = window.opener.Answer_Array.length;
	var cntr=0;
	for(i=0; i<window.opener.Answer_Array.length; i++)
	{
		if(window.opener.Answer_Array[i] == 1)
		{
			score = score + 1;
		}
		else if(window.opener.Answer_Array[i] == 0)
		{
			window.opener.Wrong_Answer_Array[window.opener.Wrong_Answer_Array.length] = i;
			cntr++;
		}
	}
	window.opener.currentScore = score;
	window.opener.currentPercentScore = (score * 100)/window.opener.Answer_Array.length;
		
	/*var CurrentScorePercentage = (window.opener.currentScore * 100)/TotalQuestion;
	alert(CurrentScorePercentage);		*/
}

function Navigate()
{	
	location.href = getNextFileName();
}

function displayNextPage(CorrectOption)
{
	
var currentFileName = document.getElementById("submitme").src.substring(document.getElementById("submitme").src.lastIndexOf("/")+1,document.getElementById("submitme").src.length); 

vCorrectAnswer	=	CorrectOption;

	if(document.getElementById("submitme").src == "submit_disable.jpg")
	{
		return false;
	}
	
	var radList = document.getElementsByName("RadioGroup1");
	var selectedOption = "";
	var isAnswerGiven = false;
	
	for (var i = 0; i < radList.length; i++)
	{
		if(radList[i].checked)
		{
			selectedOption = radList[i].value;
			isAnswerGiven = true;
			break;
		}
	}
	
	if(!isAnswerGiven)
	{
		//alert("Please select your answer");
		return false;
	}

	var currentFileName = window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.length); 
	var randomnumber = Math.floor(Math.random()*2);		
	var currentFileName_array=currentFileName.split("_");	
	var currentFileNo = parseInt(currentFileName_array[1]) - 1;
	
	if(CorrectOption == selectedOption)
	{
		DisplayFeedback(Correct_Answer);		
		window.opener.Answer_Array[currentFileNo] = 1;		
		//AddScore();
	}
	else
	{
		DisplayFeedback(Incorrect_Answer);		
		window.opener.Answer_Array[currentFileNo] = 0;
		window.opener.InCorrectAnswer_Array[window.opener.InCorrectAnswer_Array.length] = currentFileName_array[1]+"$"+currentFileName_array[2].replace(".html", "");
	}
	
	
}

function disableAllRadioButton()
{
	var radio=document.getElementsByTagName('input'); 	
	for(c=0;c<radio.length;c++) { 
		radio[c].disabled=true; 
		if(radio[c].value == vCorrectAnswer) 
		{
			radio[c].checked = true ;
		}
	}
}

function DisplayFeedback(Answer)
{
	disbleSubmit();
	disableAllRadioButton();
	FBwin=window.open("","Feedback2","toolbar=no,location=no,directories=no,status=no,scrollbars=yes,menubar=no,resizable=no,width=" + 400 + ",height=" + 200 + ",left=" + 605 + ",top=470");
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
		FeedBackText = FeedBackText + '<link href="../style/dhs_text.css" rel="stylesheet" type="text/css" media="screen"/>';
		FeedBackText = FeedBackText + '</head><body onload="self.focus();" onkeydown="page_Keydown(event,this);" onbeforeunload="opener.Navigate()">';
		FeedBackText = FeedBackText + '<table width="350" align="top" border="0" cellpadding="0" cellspacing="0"><tr class="noPrint"><td>Feedback</td></tr>';		
		FeedBackText = FeedBackText + '<tr><td>&nbsp;</td></tr>';
		FeedBackText = FeedBackText +'<tr><td>';
		FeedBackText = FeedBackText + Answer + '</td></tr>';
		FeedBackText = FeedBackText + '<tr><td align="right"><a href="#" onclick="javascript:window.close();">Close </a></td>';
		FeedBackText = FeedBackText + '</tr></table></body></html>';	
	
		FBwin.document.write(FeedBackText);
		FBwin.document.close();	
	}	
}
///////////////////////////////////////////////////////////////////////////////////////////////

function writeTags()
// Function Start 
{	

var isUserInstruction = "";
var resultText = "";
	var currentFileName = window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.length); 
	var randomnumber = Math.floor(Math.random()*2);		
	var currentFileName_array=currentFileName.split("_");	
	var currentFileNo = parseInt(currentFileName_array[1]);

	if(currentFileNo > 0)
	{
		isUserInstruction = "Select your choice, then select Submit.";
	}

	if(currentFileName_array[1]=="result.html")
	{
		resultText= "<a href='#' border='0' id='menu' onfocus='MouseRollOverPath(this)' onblur='MouseRollOutPath(this)' onclick='openModMenu(this)'><img border='0' id='menu1' alt='menu' src='../images/main_menu_0.jpg' width='94' height='71' onmouseover='GetRollOverPath(this)' onmouseout='GetRollOutPath(this)'/>";
	}else{
			resultText= "<img src='../images/main_menu_0.jpg' width='88' height='71' />";
	}

	
	var FooterHTMLStructure =  "<table width='100%' border='0' cellspacing='0' cellpadding='0'>" + 
      "<tr><td align='center' valign='middle'><div style='font-family: Verdana; font-style: normal; color: #A0A0A0;'>UNCLASSIFIED//FOUO</div></td></tr><tr>" +
        "<td width='95%' align='center' valign='middle'><table width='100%' border='0' cellpadding='0' cellspacing='0'>" +
          "<tr>" +
            "<td width='1%' align='left'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td><a border='0' ><img border='0' src='../images/mod_menu.jpg'/></td><td><img src='../images/prompt_lft.jpg'/></td></tr></table></td>" +
            "<td width='90%' align='center' valign='middle' background='../images/prompt_bg.jpg'><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0'>" +
              "<tr>" +
               " <td><img src='../images/transparent.png' width='1' height='7' /></td>" +
              "</tr>" +
              "<tr>" +
              "<td align='center' valign='middle  alt='User instructions'  class='uitext'>"+  isUserInstruction+"</div></td>" +"</tr>" +
              "<tr>" +
                "<td ><img src='../images/transparent.png' width='1' height='7' /></td>" +
              "</tr>" +
            "</table></td>" +
            "<td width='1%' align='right'><img src='../images/prompt_rht.jpg' width='12' height='39' /></td>" +
          "</tr>" +
        "</table></td>" +
        "<td width='5%'><table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
          "<tr>" +
            "<td>" +  "</td>" +
            "<td><img src='../images/back_disable.jpg'/><img src='../images/next_disable.jpg'/></td>" +
          "</tr>" +
        "</table></td>" +
      "</tr>" +
    "</table>";
	
	document.getElementById("divFooter").innerHTML =FooterHTMLStructure;
	
var HeaderHTMLStructure =  "<table width='1010' border='0' cellspacing='0' cellpadding='0'><tr><td width='40%' align='left' valign='top'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td width='9px'><img src='../images/logo.jpg' alt='DHS logo' width='118' height='114' /></td><td width='320' align='left' background='../images/logo_bg.jpg'><table width='100%' border='0' align='left' cellpadding='0' cellspacing='0'><tr><td><div><a href='#maincontent' tabindex='1' id='skipContent' onfocus='movefocus()' onblur='movefocusBack()'><img id='skipImage' alt='Skip Navigation' width='100' height='25'  src='../images/skip_btn.jpg' onmouseover='moveover()' onmouseout='moveback()' onkeydown='page_Keydown(e,this)' width='1' height='1' border='0'></a></div></td></tr><tr><td class='coursetitle'><img src='../images/transparent.png' width='1' height='7' /></td></tr><tr><td class='coursetitle'><div id='divCourseName'>Critical Thinking And <br/>Analytic Methods (CTAM)</div></td></tr><tr><td class='comment'><img src='../images/transparent.png' width='1' height='7' /></td></tr><tr><td align='left'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='left' class='comment'></td><td><img src='../images/transparent.png' width='19'/></td><td align='left' class='comment'></td></tr></table></td><td width='10%'></td></tr></table></td></tr><tr><td><img src='../images/transparent.png' width='1' height='2' /></td></tr></table></td><td background='../images/top_bg.jpg'><img src='../images/transparent.png' width='1' height='1' /></td></tr></table></td><td width='60%' align='left' valign='top' background='../images/top_bg.jpg'><table width='100%' border='0' cellpadding='0' cellspacing='0'><tr align='left'><td valign='top' background='../images/page_title_bg.jpg'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr background='../images/page_title_bg.jpg'><td width='75%' background='../images/page_title.jpg'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td><img src='../images/transparent.png' width='35' height='1' /></td><td class='lessontitle'><div id='divLessonName'>Post Test</div></td></tr></table></td><td width='25%' background='../images/page_title_bg.jpg'><table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td align='right' class='lessontitle'><div id='divHeader'></div></td><td><img src='../images/transparent.png' width='5' height='43' /></td></tr></table></td></tr></table></td></tr><tr><td align='right' valign='top'><table width='100' border='0' cellspacing='0' cellpadding='0'><tr><td>"+
resultText +"</td><td><a href='#' border='0' id='resource' onfocus='MouseRollOverPath(this)' onblur='MouseRollOutPath(this)' onclick='openModMenu(this)'><img border='0' id='resource1' alt='resource' src='../images/resources_0.jpg' width='94' height='71' onmouseover='GetRollOverPath(this)' onmouseout='GetRollOutPath(this)'/></td><td><img src='../images/audio_0.jpg' width='63' height='71' /></td><td><img src='../images/cc_0.jpg' width='60' height='71' /></td><td><a href='#' border='0' onfocus='MouseRollOverPath(this)' onblur='MouseRollOutPath(this)' id='glossary' onclick='openModMenu(this)'><img  border='0' id='glossary1' alt='glossary' src='../images/glossary_0.jpg' width='83' height='71' onmouseover='GetRollOverPath(this)' onmouseout='GetRollOutPath(this)'/></td><td><a href='#' border='0' id='help' onfocus='MouseRollOverPath(this)' onblur='MouseRollOutPath(this)' onclick='openModMenu(this)'><img 	 border='0' id='help1' alt='help' src='../images/help_0.jpg' width='113' height='71' onmouseover='GetRollOverPath(this)' onmouseout='GetRollOutPath(this)'/></td><td><a href='#' border='0' id='exit' onclick='openModMenu(this)' onfocus='MouseRollOverPath(this)' onblur='MouseRollOutPath(this)'><img border='0' id='exit1' alt='exit' src='../images/exit_0.jpg' width='61' height='71' onmouseover='GetRollOverPath(this)' onmouseout='GetRollOutPath(this)'/></td></tr></table></td></tr></table></td></tr></table>";
	
	   document.getElementById("divHeader").innerHTML = HeaderHTMLStructure;
	
} // Function End



////////////////////////////
	var glossary_over = "../images/glossary_1.jpg"
	var glossary_norm = "../images/glossary_0.jpg"
	var help_over = "../images/help_1.jpg"
	var help_norm = "../images/help_0.jpg"
	var exit_over = "../images/exit_1.jpg"
	var exit_norm = "../images/exit_0.jpg"
	var resources_norm = "../images/resources_0.jpg"
	var resources_over ="../images/resources_1.jpg";
	var menu_norm = "../images/main_menu_0.jpg"
	var menu_over ="../images/main_menu_1.jpg";

function MouseRollOverPath(obj)
{
    	var img_src="";
    	
	if(obj.id == "help")
	{
    		document.getElementById("help1").src = help_over;
	}
	else if(obj.id == "glossary")
	{
		document.getElementById("glossary1").src = glossary_over;
	}
	else if(obj.id == "exit")
	{
		document.getElementById("exit1").src = exit_over;
	}
	else if(obj.id == "resource")
	{
		document.getElementById("resource1").src = resources_over;
	}
	else if(obj.id == "menu")
	{
		document.getElementById("menu1").src = menu_over;
	}
}

 
function MouseRollOutPath(obj)
{
	if(obj.id == "help")
	{
    		document.getElementById("help1").src = help_norm;
	}
	else if(obj.id == "glossary")
	{
		document.getElementById("glossary1").src = glossary_norm;
	}
	else if(obj.id == "exit")
	{
		document.getElementById("exit1").src = exit_norm;
	}
	else if(obj.id == "resource")
	{
		document.getElementById("resource1").src = resources_norm;
	}
	else if(obj.id == "menu")
	{
		document.getElementById("menu1").src = menu_norm;
	}
}
	
function GetRollOverPath(obj)
{
    	var img_src="";
    	
	if(obj.id == "help1")
	{

    	img_src = help_over;
		obj.src=img_src;
	}
	else if(obj.id == "glossary1")
	{
		img_src = glossary_over;		
		obj.src=img_src;
	}
	else if(obj.id == "exit1")
	{
		img_src = exit_over;		
		obj.src=img_src;
	}
	else if(obj.id == "resource1")
	{
		document.getElementById("resource1").src = resources_over;
	}
	else if(obj.id == "menu1")
	{
		document.getElementById("menu1").src = menu_over;
	}
}

 
function GetRollOutPath(obj)
{

 	var img_src="";
	if(obj.id == "help1")
	{
		img_src =help_norm ;		
		obj.src=img_src;
	}
	else if(obj.id == "glossary1")
	{
		img_src = glossary_norm;		
		obj.src=img_src;
	}
	else if(obj.id == "exit1")
	{
		img_src = exit_norm;		
		obj.src=img_src;
	}
	else if(obj.id == "resource1")
	{
		
		document.getElementById("resource1").src = resources_norm;
	}
	else if(obj.id == "menu1")
	{
		
		document.getElementById("menu1").src = menu_norm;
	}
}

function openModMenu(obj)
{
	if(obj.id == "help")
	{
  	    window.open("../help.html",'','width=505,height=538,left=505,top=134,scrollbars=yes');  		//window.open("../help.html","Feedback2","toolbar=no,location=no,directories=no,status=no,scrollbars=yes,menubar=no,resizable=no,width=505,height=538,left=505,top=134");

	}
	else if(obj.id=="glossary"){
	    window.open("../glossary.html",'','width=505,height=538,left=505,top=134,scrollbars=yes');	//window.open("../glossary.html","Feedback2","toolbar=no,location=no,directories=no,status=no,scrollbars=yes,menubar=no,resizable=no,width=505,height=538,left=505,top=134");
	}
	else if(obj.id=="menu"){
    		if (confirm("Are you sure you want to go back to the main menu ?"))
			{ 
					window.location.replace("../menu.html");
			}

	}
	else if(obj.id == "resource")
	{
	   window.open("../resource.html",'','width=505,height=538,left=505,top=134,scrollbars=yes');  					 //window.open("../help.html","Feedback2","toolbar=no,location=no,directories=no,status=no,scrollbars=yes,menubar=no,resizable=no,width=505,height=538,left=505,top=134");
 	}
	else if(obj.id="exit"){
	  if (confirm("Are you sure you want to exit the course ?")){ 
				window.close();
			}   
	}		   
}

function open_Certificate_window( myName, myWidth, myHeight) {

		myWin= open('certificate.html', myName ,"width="+myWidth+",height="+myHeight+",location=no,status=no,toolbar=no,menubar=no,scrollbars=auto,top=0,left=0");
		myWin.focus();		
}

function enableSubmit()
{
	document.getElementById("submitme").src = "../images/submit_enable.jpg";
}

function disbleSubmit()
{
	document.getElementById("submitme").src = "../images/submit_disable.jpg";
}


var mResourcesMenuAnchorId = "resource";
var mGlossaryMenuAnchorId = "glossary";
var mHelpMenuAnchorId  = "help";
var mExitMenuAnchorId  = "exit";
var mMenuAnchorId  = "menu";
function page_Keydown(e,obj)
{
    var keynum;
    var keychar;
    if(window.event) // IE
    {
        keynum = e.keyCode;
    }
    else if(e.which) // Netscape/Firefox/Opera
    {
        keynum = e.which;
    }
  
  keychar = String.fromCharCode(keynum);
  if(e.altKey && keychar=="R")
    document.getElementById(mResourcesMenuAnchorId).focus();
  else if(e.altKey && keychar=="G")
    document.getElementById(mGlossaryMenuAnchorId).focus();
  else if(e.altKey && keychar=="M")
    document.getElementById(mMenuAnchorId).focus();
  else if(e.altKey && keychar=="H")
    document.getElementById(mHelpMenuAnchorId).focus();
  else if(e.altKey && keychar=="X")
    document.getElementById(mExitMenuAnchorId).focus();

}

// Disable Right Click ===============================
var isNS = (navigator.appName == "Netscape") ? 1 : 0;  
if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);  function mischandler(){   return false; }  
function mousehandler(e)
{ 	
	var myevent = (isNS) ? e : event; 	
	var eventbutton = (isNS) ? myevent.which : myevent.button;    
	if((eventbutton==2)||(eventbutton==3)) return false; 
} 
document.oncontextmenu = mischandler; document.onmousedown = mousehandler; document.onmouseup = mousehandler;





function movefocus()
{
document.getElementById('skipImage').src="../images/skipOver.jpg";
document.getElementById(mSkipContentAnchorId).focus();
}
function movefocusBack()
{
	document.getElementById(mSkipContentAnchorId).blur();
document.getElementById('skipImage').src="../images/skip_btn.jpg";

}

function moveover()
{
document.getElementById('skipImage').src="../images/skipOver.jpg";
document.getElementById(mSkipContentAnchorId).focus();
}

function moveback()
{
document.getElementById('skipImage').src="../images/skip_btn.jpg";
}
