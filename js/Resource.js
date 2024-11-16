
var xmlDoc = new ActiveXObject("MSXML.DOMDocument"); 
var xmlObj
var mywindow2= null;

function fnOpenLink(obj)
{
    var fileObj= "";
    //alert(obj);
    var fileName= obj.getAttribute("file");
    
	if(mywindow2 == null ){
				mywindow2 =  fnOpenExtLink(fileName,fileObj);
		//mywindow2 =  window.open (fileName,fileObj);
		
	}else if(String(mywindow2) == fileObj)
	{		
		mywindow2.close();
		//mywindow2 =  window.open (fileName,fileObj);		
		mywindow2 =  fnOpenExtLink (fileName,fileObj);		
	}
	else
	{
		//mywindow2 =  window.open (fileName,fileObj);
		mywindow2 =  fnOpenExtLink(fileName,fileObj);
	}
	//mywindow2.focus();
	
}
function populateReferences() 
{
        xmlDoc.async="false"; 
        xmlDoc.onreadystatechange=verify;
        xmlDoc.load('xml\\Resource.xml'); 
        xmlObj=xmlDoc.documentElement; 
    //loadXML('D:\\Documents and Settings\\preetis\\Desktop\\Html_Templ\\Resource.xml');

    var Resource = "<ul>";
    ;
    for (i=0; i < xmlObj.childNodes.length; i++) 
    {
        fileLoc= "'" + xmlObj.childNodes(i).getAttribute("file") + "'";
        tagVal = xmlObj.childNodes(i).getAttribute("name");
        title="";
        //alert();
        //Resource += "<li><a target='_blank' class='reference' href='" + xmlObj.childNodes(i).getAttribute("file") + "'>" + xmlObj.childNodes(i).getAttribute("name") + "</a></li>";
        Resource += "<li><a id='anchorView" + i +  "' class='reference'  name='" + fileLoc + "' href='#' onclick='fnOpenLink(xmlObj.childNodes(" + i + "))'>" + tagVal + "</a></li>";
        //alert(Resource );
    }

    Resource += "</ul>"
    
    if (Resource == "<ul></ul>") {
        Resource = "There are currently no resources."
    }
    
    document.getElementById("ResourceDiv").innerHTML = Resource + "<br /><br /><a href='javascript:window.close();'>Close window</a>";
}

function verify() 
{          
    // 0 Object is not initialized          
    // 1 Loading object is loading data         
     // 2 Loaded object has loaded data          
     // 3 Data from object can be worked with          
     // 4 Object completely initialized          
     if (xmlDoc.readyState != 4)          
     {                   
        return false;          
     } 
}



function fnOpenExtLink(fileName, title)
{
    return window.open(fileName,title,'width=1010,height=592,left=0,top=114,location=yes');
}

