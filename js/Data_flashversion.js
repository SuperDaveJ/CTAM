
    var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    var xmlObj;
	var strImagePath = "";
	var userInstructions;
	var LessonName;
	/********************************************/
	var currentModule;
	var currentLesson ;
	var currentPage ;
	var GetCurrentLessonTitle;
	var GetLessonTitle = "";
	var GetCurrentModuleTitle;
	var GetModuleTitle = "";
	/********************************************/
	// to store active menu id
	var mActiveMenu;
	
	// Variable to check for last page for that module
	var mIsLastPage = false;
	
	//variables to store ids of anchor tags of menu items
	// These Ids should be same as Id attribute of menu item defined in xml
	var mMainMenuAnchorId = "AnchorMainMenu";
	var mResourcesMenuAnchorId = "AnchorResourceMenu";
	var mAudioMenuAnchorId = "AnchorAudioMenu";
	var mCCMenuAnchorId ="AnchorCCMenu";
	var mGlossaryMenuAnchorId = "AnchorGlossaryMenu";
	var mHelpMenuAnchorId  = "AnchorHelpMenu";
	var mExitMenuAnchorId  = "AnchorExitMenu";
	
	//Target path when user clicks on CC menu
	var CCUrl ;
	var MenuURL = "../../menu.html";
	
	var mCurrentModuleId ;
	
	// to store global resource path which is common to that course
	var mResourcePath;
	var mGlossaryPath;
	
	var mCurrentModule,mCurrentLesson,mCurrentPage;
	var CourseXMLDocument = "../../XML/Course_flashversion.xml";
	var BackOverImagePath = "../../images/back_over.jpg"
	var NormalBackImagePath = "../../images/back_0.jpg"
	var DisableBackImagePath =  "../../images/back_disable.jpg";
	var DisableNextImagePath =  "../../images/next_disable.jpg";

	var NextOverImagePath = "../../images/next_over.jpg"
	var NormalNextImagePath = "../../images/next_0.jpg"
	var PageUserInstructions = "";	
	var PageInstructions = "";	
	
	//////////For Page ID///
	var  Page_ID ;
	var  pageId_array;
	var moduleComletion = "0";
	///////////////////////
	var ReturnStringPath = "";
	
	////////////////
    function loadXML()
    {
      xmlDoc.async="false";
      xmlDoc.onreadystatechange=verify;
      xmlDoc.load(CourseXMLDocument);
      xmlObj=xmlDoc.documentElement;
    }

    function verify()
    {
      if (xmlDoc.readyState != 4)
      {
        return false;
      }

    }



function GetRollOverImagePath(obj)
{
	
loadXML();
	
    var menus = xmlDoc.getElementsByTagName("Menus")[0];   
    var totalMenus = menus.childNodes.length;
    var menuNode;
    var img_src="";
	
    //alert(totalMenus);
	
	for(var mnuCtr=0;mnuCtr<totalMenus;mnuCtr++)
    {
 
		
		imgName = menus.childNodes[mnuCtr].childNodes[5].text;
		if(imgName == obj.id)
		{
		    
     		img_src = menus.childNodes[mnuCtr].childNodes[4].text;
     		
		}
		
			
    }
	
	obj.src=img_src;
	//###
	//return img_src;

}



function GetRollOverImagePathByName(obj)
{
	
loadXML();
	
    var menus = xmlDoc.getElementsByTagName("Menus")[0];   
    var totalMenus = menus.childNodes.length;
    var menuNode;
    var img_src="";
	
    //alert(totalMenus);
	
	for(var mnuCtr=0;mnuCtr<totalMenus;mnuCtr++)
    {
 
		
		imgName = menus.childNodes[mnuCtr].childNodes[5].text;
		if(imgName == obj.id)
		{
		    
     		img_src = menus.childNodes[mnuCtr].childNodes[4].text;
     		
		}
		
			
    }
	
	//obj.src=img_src;
	return img_src;

}



function GetRollOutImagePath(obj)
{
    loadXML();
	
    var menus = xmlDoc.getElementsByTagName("Menus")[0];
    var totalMenus = menus.childNodes.length;
    var menuNode;
    var img_src="";
	
    //alert(totalMenus);
	
	for(var mnuCtr=0;mnuCtr<totalMenus;mnuCtr++)
    {
 		imgName = menus.childNodes[mnuCtr].childNodes[5].text;
		if(imgName == obj.id)
		{
     		    img_src = menus.childNodes[mnuCtr].childNodes[1].text;
		}
		
			
    }
	
	obj.src=img_src;

}

function GetRollOverPath(obj)
{
	//alert("Mouse over");
    var img_src="";
	if(obj.id == "imgPrev")
	{
    	img_src = BackOverImagePath;
		obj.src=img_src;
	}
	else if(obj.id == "imgNext")
	{
		img_src = NextOverImagePath;		
		obj.src=img_src;
	}
	
	//obj.src=img_src;

}
function GetRollOutPath(obj)
{
	
    var img_src="";
	if(obj.id == "imgPrev")
	{
    	img_src = NormalBackImagePath;
		obj.src=img_src;
	}
	else if(obj.id == "imgNext")
	{
		img_src = NormalNextImagePath;		
		obj.src=img_src;
	}

}

function focusOverNext()
{
	
	var obj = document.getElementById("imgNext");
	img_src = NextOverImagePath;
	obj.src=img_src;
}

function focusOutNext()
{
	var obj = document.getElementById("imgNext");
	img_src = NormalNextImagePath;
	obj.src=img_src;
	
}

function focusOverPrev()
{
	
	var obj = document.getElementById("imgPrev");
	img_src = BackOverImagePath;
	obj.src=img_src;
}

function focusOutPrev()
{
	var obj = document.getElementById("imgPrev");
	img_src = NormalBackImagePath;
	obj.src=img_src;
	
}

function GetRollOutImagePathByName(obj)
{
	
    loadXML();
	
    var menus = xmlDoc.getElementsByTagName("Menus")[0];   
    var totalMenus = menus.childNodes.length;
    var menuNode;
    var img_src="";
	
    //alert(totalMenus);
	
	for(var mnuCtr=0;mnuCtr<totalMenus;mnuCtr++)
    {
		imgName = menus.childNodes[mnuCtr].childNodes[5].text;
		if(imgName == obj.id)
		{
     		img_src = menus.childNodes[mnuCtr].childNodes[1].text;
		}
    }
	return img_src;
}

///////////////////////////////////////////////////////////////////////////////////////////////

function writeTags()
// Function Start 
{	

var col_array;
	var pathname = window.location.pathname;
   	col_array=pathname.split("\\");
	currentPage = (col_array[col_array.length -1]);
	currentLesson = (col_array[col_array.length -2]);
	currentModule = (col_array[col_array.length -3]);
	
	if(currentModule == undefined && currentLesson == undefined)
	{
	col_array=pathname.split("/");
	currentPage = (col_array[col_array.length -1]);
	currentLesson = (col_array[col_array.length -2]);
	currentModule = (col_array[col_array.length -3]);
	}
	mCurrentModule = currentModule;
    mCurrentLesson = currentLesson;
    mCurrentPage = currentPage;

	//For C2 to access unique Page ID////
	pageId_array=currentPage.split(".");
	Page_ID = pageId_array[0];
	//alert("currentPageId ="+currentPageId);

	/////////////////////////////////////

    //this.addEventListener("onkeydown",alert(''), false;
    loadcss();
	loadXML();
	//getAudioOnOff();

	//*LMS* For sending bookmark data to LMS////
	ReturnStringPath = mCurrentModule  + "/" + mCurrentLesson + "/" + mCurrentPage + "$" +window.opener.ModuleCompleted;
//alert("ReturnStringPath in write tags ="+ReturnStringPath);
	set_location(ReturnStringPath);
	///////////////////////////////////////////
	
	CCUrl =  mCurrentPage.substring(0,mCurrentPage.indexOf('.')) + "_cc.html";
	
	var modules = xmlDoc.getElementsByTagName("Modules")[0];
	var totalModules = modules.childNodes.length;
	var strmenu="";
	
	// Modules' Loop
	for(var i=0;i<totalModules;i++)
	// For Loop1 Start
	{
		// Lessons...
		//alert(modules.childNodes[i].childNodes.length);
		// Loop2 S
		for(var j=0; j<modules.childNodes[i].childNodes.length;j++)
		{
			// if1
			if(modules.childNodes[i].getAttribute("Name")==currentModule)
			{
			GetCurrentModuleTitle = (modules.childNodes[i].getAttribute("Title"));
			GetModuleTitle += GetCurrentModuleTitle;
			mCurrentModuleId =  modules.childNodes[i].getAttribute("Id");
			if(modules.childNodes[i].childNodes[j].nodeName=="Lessons")
			{
				var Lessons = modules.childNodes[i].childNodes[j];
				// for3 S
				for(var k=0;k<Lessons.childNodes.length;k++)
				{
					// if3
					if(Lessons.childNodes[k].nodeName=="Lesson")
					{
						/// Pages...
						// for4
						for(var l=0; l<Lessons.childNodes[k].childNodes.length;l++)
						{
							// if 4
							LessonName= currentLesson;
										if(Lessons.childNodes[k].getAttribute("Name")==currentLesson)
			{
										GetCurrentLessonTitle = (Lessons.childNodes[k].getAttribute("Title"));
										GetLessonTitle += GetCurrentLessonTitle;
				//if 5
							if(Lessons.childNodes[k].childNodes[l].nodeName=="Pages")
							{
								var Pages = Lessons.childNodes[k].childNodes[l];
								//alert(Pages);
								//alert(Pages.childNodes.length);
								// for 5
								for(var m=0;m<Pages.childNodes.length;m++)
								{
									
									// if 6
									if(Pages.childNodes[m].nodeName=="Page")
									{	//alert(Pages.childNodes[m].getAttribute("Name"));
										// if7
										if(Pages.childNodes[m].getAttribute("Name")==currentPage)
										{

											//var prevLinkText = m==0?'#':Pages.childNodes[m-1].getAttribute('Name');
											var prevLinkText = getPrevLinkText(currentModule,currentLesson,currentPage);
											
											//alert(prevLinkText);
											var prevLink, nextLink ;
											if(prevLinkText == "#")
											{
											    prevLink = "<a id='anchorBack' tabindex='12' ><img alt='Back button' src='" + DisableBackImagePath + "' width='49' height='39' border=0 style='text-decoration:none' id='imgPrev' /></a>";
											}
											else
											{
											    prevLink = "<a id='anchorBack' tabindex='12' href=" + prevLinkText + " onfocus='focusOverPrev()' onblur='focusOutPrev()' ><img alt='Back button' src='" + NormalBackImagePath + "' border=0 style='text-decoration:none' id='imgPrev' onmouseover='GetRollOverPath(this)' onmouseout='GetRollOutPath(this)'/></a>";
											}
											    
											
											
											var nextLinkText = getNextLinkText(currentModule,currentLesson,currentPage);
											
											if(nextLinkText == "#")
											{
											    nextLink = "<a id='anchorNext' tabindex='11' alt='Next button' ><img src='" + DisableNextImagePath + "' border=0 style='text-decoration:none' id='imgNext' /></a>";
												
												//nextLink = "<a id='anchorNext' tabindex='11' href=" + MenuURL  + " onfocus='focusOverNext()' onblur=focusOutNext() alt='Next button'><img alt='Next button' src='" + NormalNextImagePath + "' border=0 style='text-decoration:none' id='imgNext' onmouseover='GetRollOverPath(this)' onmouseout='GetRollOutPath(this)'/></a>";				
												
											    mIsLastPage = true;
											}
											else
											{
											
											
											    nextLink = "<a id='anchorNext' tabindex='11'  href=" + nextLinkText + " onfocus='focusOverNext()' onblur=focusOutNext() alt='Next button'><img alt='Next button' src='" + NormalNextImagePath + "' border=0 style='text-decoration:none' id='imgNext' onmouseover='GetRollOverPath(this)' onmouseout='GetRollOutPath(this)'/></a>";
											    mIsLastPage = false;
											}
											    
											
											 strmenu += prevLink + nextLink ;
											//Module 11 : Following Code is disabled 11-08-2009	
											 if(mCurrentModule=="module11")
											{
											 userInstructions = "";
											}
											else
											{
												 userInstructions = "Screen " + (m+1) + " of " + Pages.childNodes.length;
											}
											PageUserInstructions = Pages.childNodes[m].getAttribute("UserInstructions");
											 PageInstructions += PageUserInstructions;
										
									}										// if7
								}										// if 6							
							}// for 5
						} 				//if 5				
					} 							// if 4
					} 						// for4
				} 					// if3
				} 				// for3 S
			} 			//if2
			}  			// if1
		} 		// Loop2 S
	} 	// For Loop1 End
	
	var FooterHTMLStructure =  "<table width='100%' border='0' cellspacing='0' cellpadding='0'>" + 
      "<tr><td align='center' valign='middle'><div style='font-family: Verdana; font-style: normal; font-size: 14px; color: #A0A0A0;'>UNCLASSIFIED//FOUO</div></td></tr><tr>" +
        "<td width='95%' align='center' valign='middle'><table width='100%' border='0' cellpadding='0' cellspacing='0'>" +
          "<tr>" +
            "<td width='1%' align='left'><img src='../../images/prompt_lft.jpg' width='69' height='39' /></td>" +
            "<td width='90%' align='center' valign='middle' background='../../images/prompt_bg.jpg'><table width='100%' border='0' align='center' cellpadding='0' cellspacing='0'>" +
              "<tr>" +
               " <td><img src='../../images/transparent.png' width='1' height='7' /></td>" +
              "</tr>" +
              "<tr>" +
              "<td align='center' valign='middle'tabindex='13' alt='User instructions'  class='uitext'>" + PageInstructions + "</div></td>" +
              "</tr>" +
              "<tr>" +
                "<td ><img src='../../images/transparent.png' width='1' height='7' /></td>" +
              "</tr>" +
            "</table></td>" +
            "<td width='1%' align='right'><img src='../../images/prompt_rht.jpg' width='12' height='39' /></td>" +
          "</tr>" +
        "</table></td>" +
        "<td width='5%'><table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
          "<tr>" +
            "<td>" + strmenu + "</td>" +
            "<td><div id='divFooter2'></div></td>" +
          "</tr>" +
        "</table></td>" +
      "</tr>" +
    "</table>";
	
	document.getElementById("divFooter").innerHTML =FooterHTMLStructure;
	
	var displayMenu = fnWriteMenu();
	//alert(displayMenu);
var HeaderHTMLStructure =  "<table width='1010' border='0' cellspacing='0' cellpadding='0'>" +
"      <tr>" +
"        <td width='40%' align='left' valign='top'><table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
"          <tr>" +
"            <td width='9px'><img src='../../images/logo.jpg' width='118' height='114' /></td>" +
"            <td width='320' background='../../images/logo_bg.jpg'><table width='100%' border='0' align='left' cellpadding='0' cellspacing='0'>" +
"              <tr>" +
"                <td class='coursetitle'><img src='../../images/transparent.png' width='1' height='30' /></td>" +
"              </tr>" +
"              <tr>" +
"					<td class='coursetitle'>" + xmlDoc.getElementsByTagName("Course")[0].getAttribute("Name") + "</td>" +
"              </tr>" +
"              <tr>" +
"                <td class='comment'><img src='../../images/transparent.png' width='1' height='7' /></td>" +
"              </tr>" +
"              <tr>" +
"                <td align='left'><table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
"                  <tr>" +
"                    <td><table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
"                      <tr>" +
"                        <td align='left' class='comment'> </td>" +
"                        <td><img src='../../images/transparent.png' width='19'/></td>" +
"                        <td align='left' class='comment'> </td>" +
"                        </tr>" +
"                    </table></td>" +
"                    <td width='10%'>&nbsp;</td>" +
"                  </tr>" +
"                </table></td>" +
"              </tr>" +
"              <tr>" +
"                <td><img src='../../images/transparent.png' width='1' height='2' /></td>" +
"              </tr>" +
"            </table></td>" +
"            <td background='../../images/top_bg.jpg'><img src='../../images/transparent.png' width='1' height='1' /></td>" +
"          </tr>" +
"        </table></td>" +
"        <td width='60%' align='left' valign='top' class='to_bg'><table width='100%' border='0' cellpadding='0' cellspacing='0' class='to_bg'>" +
"          <tr align='left'>" +
"            <td valign='top'><table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
"              <tr>" +
"                <td class='pagetitle_Bg_Image'><table  border='0' cellpadding='0' cellspacing='0' class='pagetitle_Bg_Image'>" +
"                  <tr>" +
"                    <td width='80'>&nbsp;</td>" +
"                    <td align='left' tabindex='14' alt='Lesson name' valign='top' width='400px'><div id='title' class='Textnormal'>" + GetModuleTitle + " " + GetLessonTitle + "</div></td>" +
"                    </tr>" +
"                </table></td>" +
"                <td width='23%' class='pagetitlebg'><table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
"                    <tr>" +
"                      <td align='right' tabindex='15' alt='User instructions' class='Textnormal'><div class='Textnormal' id='divHeader'>" + userInstructions + "</div></td>" +
"                      <td><img src='../../images/transparent.png' width='5' height='43' /></td>" +
"                    </tr>" +
"                  </table></td>" +
"              </tr>" +
"            </table></td>" +
"          </tr>" +
"          <tr>" + 
"            <td align='right' valign='top'><table width='100' border='0' cellspacing='0' cellpadding='0'>" +
"              <tr>" +fnWriteMenu() +

/*"                <td><img src='../../images/main_menu_0.jpg' width='88' height='71' /></td>" +
"                <td><img src='../../images/resources_0.jpg' width='94' height='71' /></td>" +
"                <td><img src='../../images/audio_0.jpg' width='63' height='71' /></td>" +
"                <td><img src='../../images/cc_0.jpg' width='60' height='71' /></td>" +
"                <td><img src='../../images/glossary_0.jpg' width='83' height='71' /></td>" +
"                <td><img src='../../images/help_0.jpg' width='113' height='71' /></td>" +
"                <td><img src='../../images/exit_0.jpg' width='61' height='71' /></td>" +*/

"              </tr>" +
"            </table></td>" +
"          </tr>" +
"        </table></td>" +
"      </tr>" +
"</table>";
	
	   document.getElementById("divHeader").innerHTML = HeaderHTMLStructure;
	
	
	
} // Function End



function getNextLinkText(currentModule,currentLesson,currentPage)
{
//	alert("NextLinkTextCalled");
	var nextLinkText = "";
	
	loadXML();
	var modules = xmlDoc.getElementsByTagName("Modules")[0];
	var totalModules = modules.childNodes.length;
	//alert("Total Modules = " + totalModules);
	// Modules' Loop
	for(var i=0;i<totalModules;i++)
	// For Loop1 Start
	{
		// Lessons...
		//alert(modules.childNodes[i].childNodes.length);
		// Loop2 S
		for(var j=0; j<modules.childNodes[i].childNodes.length;j++)
		{
			// if1
			if(modules.childNodes[i].getAttribute("Name")==currentModule)
			{
			//if2
			if(modules.childNodes[i].childNodes[j].nodeName=="Lessons")
			{
				var Lessons = modules.childNodes[i].childNodes[j];
				// for3 S
				for(var k=0;k<Lessons.childNodes.length;k++)
				{
					// if3
					if(Lessons.childNodes[k].nodeName=="Lesson")
					{
						/// Pages...
						// for4
						for(var l=0; l<Lessons.childNodes[k].childNodes.length;l++)
						{
							// if 4
										if(Lessons.childNodes[k].getAttribute("Name")==currentLesson)
			{
				//if 5
							if(Lessons.childNodes[k].childNodes[l].nodeName=="Pages")
							{
								var Pages = Lessons.childNodes[k].childNodes[l];
//								//alert(Pages.childNodes.length);
								// for 5
								for(var m=0;m<Pages.childNodes.length;m++)
								{
									// if 6
									if(Pages.childNodes[m].nodeName=="Page")
									{
										// if7
										if(Pages.childNodes[m].getAttribute("Name")==currentPage)
										{
											// Last Page
											//alert(m);
											if(m==Pages.childNodes.length-1)
											{
												 var nextLessonFirstPageName = "";
												 if(k==Lessons.childNodes.length-1)
												 	nextLinkText = "#";												 	
												 else
												 {
													for(var n=0;n<Lessons.childNodes[k+1].childNodes.length;n++)
													{
														if(Lessons.childNodes[k+1].childNodes[n].nodeName=="Pages")
														{
														var nextPages = Lessons.childNodes[k+1].childNodes[n];
														for(var o=0;o<nextPages.childNodes.length;o++)
														{
															if(nextPages.childNodes[o].nodeName=="Page")
															{
																nextLessonFirstPageName = nextPages.childNodes[o].getAttribute("Name");
																break;
															}
														}
														}
													 	nextLinkText = "../" + Lessons.childNodes[k+1].getAttribute("Name") + "/" + nextLessonFirstPageName;
													}
												 }
											}
											else
											{
												nextLinkText = Pages.childNodes[m+1].getAttribute('Name')
											}
           								}										// if7
								}										// if 6							
							}// for 5
						} 				//if 5				
					} 							// if 4
					} 						// for4
				} 					// if3
				} 				// for3 S
			} 			//if2
			}  			// if1
		} 		// Loop2 S
	} 	// For Loop1 End	
	
	
	return nextLinkText;
}




function getPrevLinkText(currentModule,currentLesson,currentPage)
{
//	alert("NextLinkTextCalled");
	var prevLinkText = "";
	
	loadXML();
	var modules = xmlDoc.getElementsByTagName("Modules")[0];
	var totalModules = modules.childNodes.length;
	//alert("Total Modules = " + totalModules);
	// Modules' Loop
	for(var i=0;i<totalModules;i++)
	// For Loop1 Start
	{
		// Lessons...
		//alert(modules.childNodes[i].childNodes.length);
		// Loop2 S
		for(var j=0; j<modules.childNodes[i].childNodes.length;j++)
		{
			// if1
			if(modules.childNodes[i].getAttribute("Name")==currentModule)
			{
			//if2
			if(modules.childNodes[i].childNodes[j].nodeName=="Lessons")
			{
				var Lessons = modules.childNodes[i].childNodes[j];
				// for3 S
				for(var k=0;k<Lessons.childNodes.length;k++)
				{
					// if3
					if(Lessons.childNodes[k].nodeName=="Lesson")
					{
						/// Pages...
						// for4
						for(var l=0; l<Lessons.childNodes[k].childNodes.length;l++)
						{
							// if 4
										if(Lessons.childNodes[k].getAttribute("Name")==currentLesson)
			{
				//if 5
							if(Lessons.childNodes[k].childNodes[l].nodeName=="Pages")
							{
								var Pages = Lessons.childNodes[k].childNodes[l];
//								//alert(Pages.childNodes.length);
								// for 5
								for(var m=0;m<Pages.childNodes.length;m++)
								{
									// if 6
									if(Pages.childNodes[m].nodeName=="Page")
									{
										// if7
										if(Pages.childNodes[m].getAttribute("Name")==currentPage)
										{
											// First Page
											//alert(m);
											if(m==0)
											{
												 var prevLessonLastPageName = "";
												 if(k==0)
												 	prevLinkText = "#";
												 else
												 {
													for(var n=0;n<Lessons.childNodes[k-1].childNodes.length;n++)
													{
														if(Lessons.childNodes[k-1].childNodes[n].nodeName=="Pages")
														{
														var prevPages = Lessons.childNodes[k-1].childNodes[n];
														for(var o=0;o<prevPages.childNodes.length;o++)
														{
//															//alert("Prev Pages " + prevPages.childNodes.length);
															if(prevPages.childNodes[o].nodeName=="Page" && o == prevPages.childNodes.length-1)
															{
																prevLessonLastPageName = prevPages.childNodes[o].getAttribute("Name");
																break;
															}
														}
														}
													 	prevLinkText = "../" + Lessons.childNodes[k-1].getAttribute("Name") + "/" + prevLessonLastPageName;
													}
												 }
											}
											else
											{
												prevLinkText = Pages.childNodes[m-1].getAttribute('Name')
											}
           								}										// if7
								}										// if 6							
							}// for 5
						} 				//if 5				
					} 							// if 4
					} 						// for4
				} 					// if3
				} 				// for3 S
			} 			//if2
			}  			// if1
		} 		// Loop2 S
	} 	// For Loop1 End	
	
	
	return prevLinkText;
}


///////////////////////////////////////////////////////////////////////////////////////////////
function fnWriteMenu()
{
    loadXML();
	
	//alert(xmlDoc.getElementsByTagName("Logos")[0].getAttribute("value"));
	//alert(xmlDoc.getElementsByTagName("Path")[0].getAttribute("value"));
	
    var menus = xmlDoc.getElementsByTagName("Menus")[0];   
    var totalMenus = menus.childNodes.length;
    var menuNode;
    var strmenu="";
    
    //Header Details
    /*
	var tagName,  imgPath, tagWidth, tagHeight;
    var logoSrc= xmlDoc.getElementsByTagName("LogoSrc")[0].getAttribute("value");
    var logoBackground=xmlDoc.getElementsByTagName("LogoBackground")[0].getAttribute("value");
    logoTransparentImage=xmlDoc.getElementsByTagName("logoTransparentImage")[0].getAttribute("value");
    var logoPageTitleBg=xmlDoc.getElementsByTagName("LogoPageTitleBg")[0].getAttribute("value");
    var logoTopBg=xmlDoc.getElementsByTagName("LogoTopBg")[0].getAttribute("value");
    var logoTitleText=xmlDoc.getElementsByTagName("LogoTitleText")[0].getAttribute("value");
    var logoComment1=xmlDoc.getElementsByTagName("LogoComment1")[0].getAttribute("value");
    var logoComment2=xmlDoc.getElementsByTagName("LogoComment2")[0].getAttribute("value");
    var menuUpperText =xmlDoc.getElementsByTagName("MenuUpperText ")[0].getAttribute("value");
    */
    
	for(var mnuCtr=0;mnuCtr<totalMenus;mnuCtr++)
    {
        tagName = menus.childNodes[mnuCtr].childNodes[0].text;
        mnuName=menus.childNodes[mnuCtr].getAttribute("Name");
        anchorId=menus.childNodes[mnuCtr].getAttribute("Id");
        imgPath = menus.childNodes[mnuCtr].childNodes[1].text;
        tagWidth = menus.childNodes[mnuCtr].childNodes[2].text;
        tagHeight = menus.childNodes[mnuCtr].childNodes[3].text;
		imgRollOverPath = menus.childNodes[mnuCtr].childNodes[4].text;
		imgName = menus.childNodes[mnuCtr].childNodes[5].text;
		tabIndex = menus.childNodes[mnuCtr].childNodes[6].text;
		altText= menus.childNodes[mnuCtr].childNodes[7].text;;
        
        //strmenu += "\n<td ><a  tabindex='" + tabIndex + "' contentImage='" + imgName + "' onkeydown='menuButton_Keydown(event,this)' onfocus='simple_roll(this);' onblur='simple_normal(this);'><" + tagName + " src='" + imgPath + "' width='" + tagWidth + "' id='" + imgName +"' onmouseover='GetRollOverImagePath(this)' onmouseout='GetRollOutImagePath(this)' name='" + mnuName +"' alt='" + altText + "' onclick='fnMenuAction(this)' /></a></td>";       
        strmenu += "\n<td ><a id='" + anchorId + "'  tabindex='" + tabIndex + "' contentImage='" + imgName + "' onkeydown='menuButton_Keydown(event,this)' onfocus='simple_roll(this);' onblur='simple_normal(this);'><" + tagName + " src='" + imgPath + "' width='" + tagWidth + "' id='" + imgName +"' onmouseover='GetRollOverImagePath(this)' onmouseout='GetRollOutImagePath(this)' name='" + mnuName +"' alt='" + altText + "' onclick='fnMenuAction(this)' /></a></td>";       
        //alert(strmenu);
    }
	 //alert(strmenu);
	 
	 return strmenu;
	
}

function simple_roll(obj) 
{
    var name = obj.contentImage;
    var  newloc = GetRollOverImagePathByName(document.getElementById(name));
    //var newloc = GetRollOverImagePathByName(obj.name);
    
    //alert(obj.focusImage);
    eval ('window.document.' + name + '.src = \'' + newloc + '\'');

}

function simple_normal(obj) 
{
    var name = obj.contentImage;
    var  newloc = GetRollOutImagePathByName(document.getElementById(name));
    //var newloc = GetRollOverImagePathByName(obj.name);
    
    //alert(obj.focusImage);
    eval ('window.document.' + name + '.src = \'' + newloc + '\'');

}


function open_edit_window
( 
 myLocation, myName, myWidth, myHeight) 
{
	//alert('dfgfdgfdgfdgfdsgfds');
	myWin= open(myLocation, myName ,"width="+myWidth+",height="+myHeight+",location=no,status=no,toolbar=no,menubar=no,scrollbars=yes,top=134,left=505");
	myWin.focus();		
}   

function fnMenuAction(obj)
{
    
    var menuName;
    if(obj.contentImage == undefined)
        menuName=obj.name;
    else
        menuName =obj.contentImage;
        
    mActiveMenu =  menuName;    
    
    var modules = xmlDoc.getElementsByTagName("Modules")[0];
	var totalModules = modules.childNodes.length;
	var modules, lessons, pages;
	var mnuTargetUrl;
	
	//Take XML Tag Node Constants
	var mainMenuTagName="MainMenu";
	var resourceTagName = "Resources";
	var audioTagName = "Audio";
	var ccTagName = "CC";
	var glossaryTagName = "Glossary";
	var helpTagName= "Help";
	var exitTagName = "Exit"
	
	//Static Data
	var mainMenuUrl="../../menu.html";
	var helpMenuUrl="../../Help.html";
	var exitMenuUrl="../../Launch.html";
	
	// Code to get globl Resource.html and Glossary.html paths
	fnGetResourceAndGlossaryPath();
    
	if(menuName == mainMenuTagName)
	{
		//window.close();
		//window.opener.focus()
		if (confirm("Are you sure you want to go back to the main menu ?"))
			{ 
				if(mIsLastPage == true)
				{
					window.location.replace(mainMenuUrl + "?mod=" + mCurrentModuleId );
				}
				else
				{
					window.location.replace(mainMenuUrl );
				}
			}	

		
	}
	if(menuName == helpTagName)
	{
	    //window.open(helpMenuUrl  ,100,100,50,50,'',5,true,true,true);
	    window.open(helpMenuUrl,'Help','width=505,height=538,left=505,top=134,scrollbars=yes').focus();;
	   
	}
    if(menuName == exitTagName)
	{
	   //window.opener.close();
	  //window.opener.close();
	   if (confirm("Are you sure you want to exit the course ?"))
			{ 
					 window.close();
			} else {          
				
			} 
	}
    if(menuName== resourceTagName)
    {
        //myWin= open(mResourcePath, '' ,"width=1010,height=806,location=no,status=yes,toolbar=no,menubar=no,scrollbars=auto,top=0,left=0");
       
	   //Module 11 : Following Code is disabled 11-08-2009

	   // window.open(mResourcePath,'','width=505,height=538,left=505,top=134');
    }
//    if(menuName== ccTagName)
//    {
//        window.open(CCUrl,'','width=505,height=538,left=505,top=134');
//    }
    if(menuName== glossaryTagName)
    {
        //window.open(mGlossaryPath ,500,500,10,10,'',5,true,true,true);
        //window.open(mGlossaryPath ,'','width=400,height=450,left=600,top=250');
        window.open(mGlossaryPath,'Glossary','width=505,height=538,left=505,top=134,scrollbars=yes').focus();
    }

	//alert(mResourcePath + "," + mGlossaryPath);
	
	for(var modCtr=0;modCtr<totalModules;modCtr++)
	{
	    if(modules.childNodes[modCtr].getAttribute("Name")== mCurrentModule)
	    {
	    //alert(totalModules);
	        lessons = modules.childNodes[modCtr].childNodes[0];
		    for(var lsnCtr=0; lsnCtr<lessons.childNodes.length;lsnCtr++)
		    {
		    //alert(lessons);
			    if(lessons.childNodes[lsnCtr].getAttribute("Name")== mCurrentLesson)
			    {
			        pages= lessons.childNodes[lsnCtr].childNodes[0];
			        for(var pgCtr=0; pgCtr<pages.childNodes.length;pgCtr++)
			        {
			            if(pages.childNodes[pgCtr].getAttribute("Name")== mCurrentPage)
			            {
			                if(menuName== audioTagName)
			                {
			                    //if(pages.childNodes[pgCtr].childNodes[1].getAttribute("Enabled")=="Yes")
			                    //{
			                        mnuTargetUrl =pages.childNodes[pgCtr].childNodes[0].getAttribute("FlashControlId");
			                        if (mnuTargetUrl != "")
			                            pauseflash(mnuTargetUrl);
			                    //}
			                }
                            
							//Module 11 : Following Code is disabled 11-08-2009
							/*
							if(menuName== ccTagName)
                            {
                                //alert("getMediaValue ="+getMediaValue());
								if (getMediaValue()== "ON")
                                    window.open(CCUrl,'','width=505,height=538,left=505,top=134,scrollbars = yes');
                                else
                                    window.open('../../default_cc.html','','width=505,height=538,left=505,top=134');
                            }
							*/
			                

			                break;
			            }
			        }
			        break;
                }
            }
            break;
        }
    }
    //alert(mCurrentModule);
    
}



function menuButton_Keydown(e,obj)
{
    if (e.keyCode != 13) 
    {
        return;
    }
    fnMenuAction(obj);
}


function pauseflash(mymovie) 
{ 
//Module 11 : Following Code is disabled 11-08-2009

	/*
    if (document.getElementById(mymovie).IsPlaying())
	    document.getElementById(mymovie).StopPlay();
    else
	    document.getElementById(mymovie).Play();
	*/
	    
	//alert(document.getElementById(mymovie).IsPlaying());
} 



function loadcss()
{
    var cssFileName = "../../style/dhs_text.css";
    var fileref=document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", cssFileName)
  
    document.getElementsByTagName("head")[0].appendChild(fileref)
}



function fnGetResourceAndGlossaryPath()
{
    loadXML();
    mResourcePath = xmlDoc.getElementsByTagName("Course")[0].getAttribute("ResourcePath");
    mGlossaryPath = xmlDoc.getElementsByTagName("Course")[0].getAttribute("GlossaryPath");
}

function getAudioOnOff()
{
    var modules = xmlDoc.getElementsByTagName("Modules")[0];
	var totalModules = modules.childNodes.length;
	var modules, lessons, pages;
	var mnuTargetUrl;
	
	for(var modCtr=0;modCtr<totalModules;modCtr++)
	{
	    if(modules.childNodes[modCtr].getAttribute("Name")== mCurrentModule)
	    {
	        lessons = modules.childNodes[modCtr].childNodes[0];
		    for(var lsnCtr=0; lsnCtr<lessons.childNodes.length;lsnCtr++)
		    {
			    if(lessons.childNodes[lsnCtr].getAttribute("Name")== mCurrentLesson)
			    {
			        pages= lessons.childNodes[lsnCtr].childNodes[0];
			        for(var pgCtr=0; pgCtr<pages.childNodes.length;pgCtr++)
			        {
			            if(pages.childNodes[pgCtr].getAttribute("Name")== mCurrentPage)
			            {
	                        mnuTargetUrl =pages.childNodes[pgCtr].childNodes[0].getAttribute("FlashControlId");
	                        if (mnuTargetUrl != "")
	                        {
	                            //alert("done");
	                            pauseflash(mnuTargetUrl);
	                        }
			                break;
			            }
			        }
			        break;
                }
            }
            break;
        }
    }
}

function getMediaValue()
{
    var modules = xmlDoc.getElementsByTagName("Modules")[0];
	var totalModules = modules.childNodes.length;
	var modules, lessons, pages;
	var mnuTargetUrl;
	var mediaYesNo, flashCtlId, returnValue;
	
	for(var modCtr=0;modCtr<totalModules;modCtr++)
	{
	    if(modules.childNodes[modCtr].getAttribute("Name")== mCurrentModule)
	    {
	        lessons = modules.childNodes[modCtr].childNodes[0];
		    for(var lsnCtr=0; lsnCtr<lessons.childNodes.length;lsnCtr++)
		    {
			    if(lessons.childNodes[lsnCtr].getAttribute("Name")== mCurrentLesson)
			    {
			        pages= lessons.childNodes[lsnCtr].childNodes[0];
			        for(var pgCtr=0; pgCtr<pages.childNodes.length;pgCtr++)
			        {
			            if(pages.childNodes[pgCtr].getAttribute("Name")== mCurrentPage)
			            {
			                
	                        mediaYesNo =pages.childNodes[pgCtr].getAttribute("Media");
	                        flashCtlId =pages.childNodes[pgCtr].childNodes[0].getAttribute("FlashControlId");
	                        break;
			            }
			        }
			        break;
                }
            }
            break;
        }
    }
    //alert("mediaYesNo ="+mediaYesNo);
    if(mediaYesNo== "Yes" || flashCtlId != "")
        returnValue="ON";       // CC On
    else
        returnValue="OFF";      // CC Off
        
    return returnValue;
}

function querySt(ji)
 {
    hu = window.location.search.substring(1);
    gy = hu.split("&");
    for (i=0;i<gy.length;i++) 
    {
    ft = gy[i].split("=");
        if (ft[0] == ji) 
        {
            return ft[1];
        }
    }
}

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
  if(e.altKey && keychar=="M")
    document.getElementById(mMainMenuAnchorId).focus();
  else if(e.altKey && keychar=="R")
    document.getElementById(mResourcesMenuAnchorId).focus();
  else if(e.altKey && keychar=="A")
    document.getElementById(mAudioMenuAnchorId).focus();
  else if(e.altKey && keychar=="C")
    document.getElementById(mCCMenuAnchorId).focus();
  else if(e.altKey && keychar=="G")
    document.getElementById(mGlossaryMenuAnchorId).focus();
  else if(e.altKey && keychar=="H")
    document.getElementById(mHelpMenuAnchorId).focus();
  else if(e.altKey && keychar=="X")
    document.getElementById(mExitMenuAnchorId).focus();
  else if(e.altKey && keychar=="B")
    document.getElementById('anchorBack').focus();
  else if(e.altKey && keychar=="N")
    document.getElementById('anchorNext').focus();


}

// A function for getting image path dynamicaly according to querystring
function fnGetImagePath()
{
    
    var modId, imgPath;
    modId = querySt("mod");
    
         if(modId== "1")
            imgPath = "images/mod2.jpg";
        else if(modId== "2")
            imgPath = "images/mod3.jpg";
        else if(modId== "3")
            imgPath = "images/mod4.jpg";
        else if(modId== "4")
            imgPath = "images/mod5.jpg";
        else if(modId== "5")
            imgPath = "images/mod6.jpg";
        else if(modId== "6")
            imgPath = "images/mod7.jpg";
        else if(modId== "7")
            imgPath = "images/mod8.jpg";
        else if(modId== "8")
            imgPath = "images/mod9.jpg";
        else if(modId== "9")
            imgPath = "images/mod10.jpg";
        else if(modId== "10")
            imgPath = "images/mod11.jpg";
        else if(modId== "11")
            imgPath = "images/mod12.jpg";
        else if(modId== "12")
            imgPath = "images/all_complete.jpg";
        else
            imgPath = "images/menu.jpg";
    
    return imgPath;
}


function fnGetMouseOverImage(menuNum)
{
    var modId, imgPath;
    modId = querySt("mod");
    
    
    if(modId== undefined)
        modId = 0;
    
    modId = 2;
    //alert((parseInt(modId)+1)  ==  menuNum);
    //alert(menuNum);
    if( (parseInt(modId)+1)== menuNum)
    {
        //alert("Yes");
        return "YES";
    }
    else 
    {
        //alert("NO");
        return "NO" ;
    }
        
//    if(modId==undefined)
//        imgPath=""
//     if(modId== menuNum+1)
//        alert("Menu1");

}

function fnOpenExtLink(fileName, title)
{
    return window.open(fileName,title,'width=1010,height=592,left=0,top=114,scrollbars = yes');
}

///////////////////////////////////////////////////////////////////////////////
//*LMS*  funtions starts //SCORM///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
var findAPITries=1;
var API = null;
var	timerID = null
var	timerRunning = false
var	startDate
var	startSecs
var timeValue
var timecnt=0;
var lessonStatus=false;
var Bookmark_location="";//"module3/lesson1/m3l1020.html$1"
var SetMasteryScore=100;
var prevLesson_Status = ""
var gpercentage =""; 
var ok1 =0;
var userattemparr = new Array();
var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
var xmlObj;
//-----------------------------------------------------------------------
function FindAPI(win)
{
   while ((win.API == null) && (win.parent != null) && (win.parent != win))
   {
      findAPITries++;
      // Note: 7 is an arbitrary number, but should be more than sufficient
      if (findAPITries > 7) 
      {
        parent.status = "Error finding API -- too deeply nested.";
         return null;
      }
      
      win = win.parent;

   }
   return win.API;
}
//-----------------------------------------------------------------------
function GetAPI()
{

   var API = FindAPI(window);
   if ((API == null) && (window.opener != null) && (typeof(window.opener) != "undefined"))
   {
      API = FindAPI(window.opener);
   }
   if (API == null)
   {
     parent.status = "Unable to find an API adapter";
   }

   return API
}
//-----------------------------------------------------------------------
function initSco()

{
		API = GetAPI();
		if( API != null )
		{
			var ret;
			var code;
			var diag;
			API.LMSInitialize("");
			startclock();
			
			set_val("cmi.core.score.max",100);
			set_val("cmi.core.score.min",0);

			var status = get_val("cmi.core.lesson_status")
			
			if (status == "not attempted")
			{
			  // the student is now attempting the lesson
			  set_val("cmi.core.lesson_status","incomplete");
			}
			
			tempPage=get_val("cmi.core.lesson_location")
			//alert("in init got page from LMS"+tempPage);
			
			Bookmark_location=tempPage;
			
			code = API.LMSGetLastError();
			ret = API.LMSGetErrorString( code );
			diag = API.LMSGetDiagnostic( "" );	

		}
		
}
///////////////////////////////////////////////////////////////////////
function set_val( gname,gvalue )
{
	API = GetAPI();
	if( API != null )
	{
		var ret;
		var code;
		var diag;		
		//alert(gname)
		API.LMSSetValue( gname, gvalue );		
		code = API.LMSGetLastError();
		ret = API.LMSGetErrorString( code );
		diag = API.LMSGetDiagnostic( "" );		
	}
	//modified here for commit
	commit();
};
//-----------------------------------------------------------------------
function get_val( gname )
{	
	API = GetAPI();
	if( API != null )
	{
	
	var ret1,ret2;
		var code;
		var diag;
				
		ret1 = API.LMSGetValue( gname );		
		code = API.LMSGetLastError();
		ret2 = API.LMSGetErrorString( code );
		diag = API.LMSGetDiagnostic( "" );
	//alert ("inside "+gname+ " "+ret1)
	return ret1;		
		
	}
	
};
//-----------------------------------------------------------------------
function commit()
{	
	API = GetAPI();
	if( API != null )
	{
		var ret = "";
		var code;
		var diag;
		
		API.LMSCommit("");
		code = API.LMSGetLastError();
		ret = API.LMSGetErrorString( code );
		diag = API.LMSGetDiagnostic( "" );		
	}
	
};
//-----------------------------------------------------------------------
function finish() {
	API = GetAPI();
	//alert("API ="+API);	
	if (API != null) {
		var ret;
		var code;
		var diag;
	}
};
///////////////////////////////////////////////////////////////////////
//called from exit button
function exit()
{
	
		API = GetAPI();
			
		if( API != null )
		{
		
			var ret;
			var code;
			var diag;
			
			
			//set_val("cmi.core.lesson_location",Bookmark_location);
			
			sTime=stopclock();
			sTime=String(sTime)
				
			set_val("cmi.core.session_time",sTime);
            //fnFinalUpdates() 
			
			ret = API.LMSFinish("");
			code = API.LMSGetLastError();
			ret = API.LMSGetErrorString( code );
			diag = API.LMSGetDiagnostic( "" );
          
		}

	//alert("Exiting");
};
//


function stopclock()
{

	clearTimeout(timerID)
	return timeValue;

}
//-----------------------------------------------------------------------
function startclock()
{

	showtime()
	
}
//-----------------------------------------------------------------------
function showtime()
{
	timecnt++;
	var newElapsedTime
	var hours = Math.floor( timecnt / 3600 )
	newElapsedTime = timecnt - (hours*3600)

	var minutes = 	Math.floor( newElapsedTime / 60 )
	newElapsedTime = newElapsedTime - (minutes*60)

	var seconds = newElapsedTime

	timeValue = "" + hours
	if(hours<10)
	{
		timeValue = "0" + hours
	}
	timeValue  += ((minutes < 10) ? ":0" : ":") + minutes
	timeValue  += ((seconds < 10) ? ":0" : ":") + seconds
	// Update display
	timerID = setTimeout("showtime()",1000)
}

function fnGetBookMark()
{
	API = GetAPI();
	if (API == null) {
		return "offline";
	} else {
		return Bookmark_location;
	}
}

function set_location(setbookmark)

{
	
Bookmark_location=setbookmark;
set_val("cmi.core.lesson_location",Bookmark_location);

//commit();
}

function fnSetLastPage(lastpge)
{

lessonStatus= lastpge;


}
////////// Added here
function fnAssessment_status(percentage) {

  gpercentage = parseInt(percentage);
  //alert("gpercentage ="+gpercentage);
}

function fnFinalUpdates() {
	//alert("gpercentage ="+gpercentage);
	if (gpercentage != "") {
		
		if (gpercentage >= 80) {
			ok1 = 1;//completed
		}
		else{
			ok1 = 0;
		}
		set_val("cmi.core.score.raw", gpercentage);
	}
	//alert("ok in final update = "+ok1+" gpercentage = "+gpercentage);
	if (ok1 == 1) {
		set_val("cmi.core.lesson_status", "completed");
		
	} else {
		set_val("cmi.core.lesson_status", "incomplete");
	}
}


function fnComplete_status(ok){
	ok1 = ok;
	fnFinalUpdates()
}

function isModule3Completed()
{
	var modId, imgPath;
    
    //var Bookmark_location = "module3/lesson1/m3l1020.html$1";
	if( API != null )
	{
		var arBookmarkModule = window.opener.Bookmark_location.split("/");//window.opener.
		modId = arBookmarkModule[0];    
		
		var arBookmarkStatus = window.opener.Bookmark_location.split("$");//window.opener.

		if(modId == "module3" && arBookmarkStatus[1] == "1")
		{ 
			return 1;
		}
		else
		{
			return 0;
		}
    }
	else
	{
		if(window.opener.ModuleCompleted == "module1" || window.opener.ModuleCompleted == "module2" || window.opener.ModuleCompleted == "module3" )
		{
			return 1;
		}
		else
		{
			return 0;
		}
	}
    
}

function fnGetImagePath()
{   
    var modId, imgPath;
    if( API != null )
	{ // LMS
		var arBookmarkModule = window.opener.Bookmark_location.split("/");//window.opener.
		modId = arBookmarkModule[0];    
		
		var arBookmarkStatus = window.opener.Bookmark_location.split("$");//window.opener.
		
		if(modId == "module1" && arBookmarkStatus[1] == "1")
		{ 
			imgPath = "images/mod_1_complete.jpg";       
		}
		else if(modId == "module2" && arBookmarkStatus[1] == "1")
		{ 
			imgPath = "images/mod_2_complete.jpg";       
		}
		else if(modId == "module3" && arBookmarkStatus[1] == "1")
		{ 
			imgPath = "images/mod_3_complete.jpg";       
		}
		else
		{
		   imgPath = "images/mod_3.jpg";
		}
	}
	else
	{ // Offline
		if(window.opener.ModuleCompleted == "module1")
		{ 
		 imgPath = "images/mod_1_complete.jpg";       
		}
		else if(window.opener.ModuleCompleted == "module2")
		{ 
		 imgPath = "images/mod_2_complete.jpg";       
		}
		else if(window.opener.ModuleCompleted == "module3")
		{ 
		 imgPath = "images/mod_3_complete.jpg";       
		}
		else
		{
		   imgPath = "images/mod_3.jpg";
		}
	}
    return imgPath;
}
