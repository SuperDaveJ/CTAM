
    var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
    var xmlObj;
    function loadXML(xmlFile)
    {
      xmlDoc.async="false";
      xmlDoc.onreadystatechange=verify;
      xmlDoc.load(xmlFile);
      xmlObj=xmlDoc.documentElement;
    }

    function verify()
    {
      if (xmlDoc.readyState != 4)
      {
        return false;
      }

    }

///////////////////////////////////////////////////////////////////////////////////////////////

function writeTags(currentModule,currentLesson,currentPage)
// Function Start 
{	
	loadXML('../../XML/Course.xml');
	var modules = xmlDoc.getElementsByTagName("Modules")[0];
	var totalModules = modules.childNodes.length;
	

	var FooterHTMLStructure =  "<table width='100%' border='0' cellspacing='0' cellpadding='0'>" + 
      										" <tr>" + 
        									" <td width='95%' align='center' valign='middle'><table width='100%' border='0' cellpadding='0' cellspacing='0'>" +
								          	" <tr>" + 
            								" <td width='1%' align='left'><img src='../../images/prompt_lft.jpg' width='69' height='39' /></td>" + 
            								" <td width='90%' align='center' valign='middle' background='../../images/prompt_bg.jpg'><table width='100%' border='0'" + 
											" align='center' cellpadding='0' cellspacing='0'>" +
				              				" <tr>" +
                							"<td><img src='../../images/transparent.png' width='1' height='7' /></td>" +
              								"</tr>" +
              								"<tr>" +
                							"<td align='center' valign='middle' class='uitext'>User Instruction</td>" +
								            "</tr>" +
              								"<tr>" +
                							"<td ><img src='../../images/transparent.png' width='1' height='7' /></td>" +
              								"</tr>" +
            								"</table></td>" +
            								"<td width='1%' align='right'><img src='../../images/prompt_rht.jpg' width='12' height='39' /></td>" +
          									"</tr>" +
        									"</table></td>" +
        									"<td width='5%'><table width='100%' border='0' cellspacing='0' cellpadding='0'>" +
          									"<tr>";
	
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
											//alert("Pages.childNodes.length");
											document.getElementById("divHeader").innerHTML = "Page " + (m+1) + " of " + Pages.childNodes.length;
											var prevLinkText = m==0?'#':Pages.childNodes[m-1].getAttribute('Name');
											
											//var prevLink = "<td><a href=" + prevLinkText + "><img src='../../Images/back_0.jpg' width='49' height='39' style='text-decoration:none' /></a></td>";
											var prevLink = "<a href=" + prevLinkText + "><img src='../../Images/back_0.jpg' width='49' height='39' style='text-decoration:none' /></a>";
											
												var nextLinkText = getNextLinkText(currentModule,currentLesson,currentPage);
											//var nextLink = "<td><a href=" + nextLinkText + "><img src='../../Images/next_0.jpg' width='49' height='39' style='text-decoration:none'/></a></td>";
											var nextLink = "<a href=" + nextLinkText + "><img src='../../Images/next_0.jpg' width='49' height='39' style='text-decoration:none'/></a>";
											//alert(prevLink + nextLink);
											//document.getElementById("divFooter").innerHTML = prevLink + nextLink;
											document.getElementById("divFooter1").innerHTML = prevLink;
											document.getElementById("divFooter2").innerHTML = nextLink;
											document.getElementById("UserInstructions").innerHTML = currentPage;

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
} // Function End



function getNextLinkText(currentModule,currentLesson,currentPage)
{
//	alert("NextLinkTextCalled");
	var nextLinkText = "";
	
	loadXML('../../XML/Course.xml');
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
//								alert(Pages.childNodes.length);
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

///////////////////////////////////////////////////////////////////////////////////////////////


    function writeHeader(currentPage)
    {
        var currentPageNo, totalPagesCount;
        
        loadXML('../../XML/Course1.xml');
        
        totalPagesCount = xmlDoc.getElementsByTagName("PageName").length;
        

        for(i=0;i<xmlDoc.getElementsByTagName("PageName").length;i++)
        {
            if(xmlDoc.getElementsByTagName("PageName")[i].childNodes[0].nodeValue == currentPage)
            {
                currentPageNo = i+1;
            }
        }

    	document.getElementById("divHeader").innerHTML = "Page "+ currentPageNo +" of "+totalPagesCount;
    }



    function writeFooter(currentPage)
    {
		//alert('hello');
		var prevPage, nextPage;
		
        loadXML('../../XML/Course1.xml');

		var nodeLength = xmlDoc.getElementsByTagName("Lesson").length
		var getLesson = xmlDoc.getElementsByTagName("Lesson")[0].getAttribute("Name");
		//alert(nodeLength);
		//alert(getLesson);
		for(i=0;i<xmlDoc.getElementsByTagName("Lesson").length;i++)
		{
			
			alert(xmlDoc.getElementsByTagName("Lesson")[i].getAttribute("Name"));
			
			
		}
		
		
		for(i=0;i<xmlDoc.getElementsByTagName("PageName").length;i++)
			{
				//if(xmlDoc.getElementsByTagName("PageName")[0].childNodes[0].nodeValue != currentPage)
				//{
					
					if(xmlDoc.getElementsByTagName("PageName")[i].childNodes[0].nodeValue == currentPage)
					{
						if(xmlDoc.getElementsByTagName("PageName")[0].childNodes[0].nodeValue == currentPage)
						{
							prevPage=xmlDoc.getElementsByTagName("PageName")[0].childNodes[0].nodeValue;
						}
						else
						{
							prevPage=xmlDoc.getElementsByTagName("PageName")[i -1].childNodes[0].nodeValue;	
						}
						
						if(xmlDoc.getElementsByTagName("PageName")[nodeLength-1].childNodes[0].nodeValue == currentPage)
						{
							//alert("Now next should take me to second lessons first page");
							nextPage=xmlDoc.getElementsByTagName("PageName")[nodeLength-1].childNodes[0].nodeValue;
						}
						else
						{
							nextPage=xmlDoc.getElementsByTagName("PageName")[i+1].childNodes[0].nodeValue;
						}
					}
				//}
			}
		

		//if(document.getElementById("divHeader").innerHTML == "Page 0 of 6")
		if(xmlDoc.getElementsByTagName("PageName")[0].childNodes[0].nodeValue == currentPage)
		{
        document.getElementById("divFooter").innerHTML = "<a href='#'><img src='../../Images/back_0.jpg' width='49' height='39' style='text-decoration:none' /></a></td><td><a href=" + nextPage + "><img src='../../Images/next_0.jpg' width='49' height='39' style='text-decoration:none'/></a></td>";
		
		}
		else if(xmlDoc.getElementsByTagName("PageName")[nodeLength-1].childNodes[0].nodeValue == currentPage)
		{
			  //alert("Take me to second lesson");
			  //alert(xmlDoc.getElementsByTagName("Moveto")[0].childNodes[0].nodeValue);
			  //nextPage = xmlDoc.getElementsByTagName("Moveto")[0].childNodes[0].nodeValue;
			   //document.getElementById("divFooter").innerHTML = "<a href=" + prevPage + "><img src='../../Images/back_0.jpg' width='49' height='39' style='text-decoration:none' /></a></td><td><a href=" + nextPage + "><img src='../../Images/next_0.jpg' width='49' height='39' style='text-decoration:none'/></a></td>";
		
		}
		else
		{
			
			 document.getElementById("divFooter").innerHTML = "<a href=" + prevPage + "><img src='../../Images/back_0.jpg' width='49' height='39' style='text-decoration:none' /></a></td><td><a href=" + nextPage + "><img src='../../Images/next_0.jpg' width='49' height='39' style='text-decoration:none'/></a></td>";
		
		}

    }

