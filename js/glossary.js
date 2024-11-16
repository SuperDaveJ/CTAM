var xmlDoc = new ActiveXObject("MSXML.DOMDocument"); 
var xmlObj

function GetGlossary()
{
        xmlDoc.async="false"; 
        xmlDoc.onreadystatechange=verify;
        xmlDoc.load('xml\\glossary.xml'); 
        xmlObj=xmlDoc.documentElement; 
    
    var glossaryLetters = "";
    var headers = false;
    
    var glossaryTerms = "<table width='90%' border='0' cellspacing='0' cellpadding='3'>";
    
    var alphabet = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
        
        for (i=0;i<alphabet.length;i++) 
        {        
            
            termName = alphabet[i];
            var lt = false;    
            
            glossaryTerms += "<tr><td style='color:#85b150; font-size:32px; padding-left: 40px;' width='10%'><b><a name='" + termName + "'>" + termName + "</a></b></td><td valign='middle'><hr align='left' width='100%' color='#85b150' style='height:10px;' /></td></tr>";

			glossaryTerms += "<tr><td colspan='2' style='padding-left: 20px;'><hr align='left' width='100%' color='#ece9de' /></td></tr>";

			// Run a loop to see if header letter has any words
                for (x=0; x < xmlObj.childNodes.length; x++) {                    
                    
                    if (xmlObj.childNodes(x).getAttribute("name").charAt(0) == termName) {  
                        lt = true;
                    } 
                                                           
                }
                
                // If header letter has words, link it, otherwise don't
                if (lt == true) 
                {
                    glossaryLetters += "<b><a href='#" + termName + "' >" + termName + "</a></b>&nbsp;&nbsp;&nbsp;";
                    
                    for (x=0; x < xmlObj.childNodes.length; x++) 
                    {                    
                    
                        if (xmlObj.childNodes(x).getAttribute("name").charAt(0) == termName) 
                        {  
                            glossaryTerms += "<tr><td valign=top style='padding-left: 20px; color:black;' colspan='2'><b><a id=name='" + xmlObj.childNodes(x).getAttribute("id") + "' name='" + xmlObj.childNodes(x).getAttribute("id") + "'></a>" + xmlObj.childNodes(x).getAttribute("name") + "</b></td></tr><tr><td valign=top style='padding-left: 20px; color:black;' colspan='2'>" + xmlObj.childNodes(x).getAttribute("desc") + "</td></tr><tr><td colspan=2 height=12 style='padding-left: 20px;'><hr align='left' width='100%' color='#ece9de' /></td></tr>";
                        } 
                                                               
                    }
                    
                } 
                else 
                {
                    glossaryLetters +=  "<b>" + termName + "</b>&nbsp;&nbsp;&nbsp;";
                }

				glossaryTerms += "<tr><td colspan=2 align=right><a href='#top' title='Navigate to the top of the Window'>top</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='javascript:window.parent.close();' title='Close Glossary Window'>close</a></td></tr>";
       
        
            }

    document.getElementById("glossaryLetters").innerHTML = "<br />" + glossaryLetters;
    document.getElementById("definitionWords").innerHTML = glossaryTerms;
    
        
   // currentLoc = document.location.href;    
    //glossID = currentLoc.split("#");
    
    //if(glossID[1]) 
    //{
       // window.scrollBy(0,0);
        //window.scrollBy(0,getElementTop(glossID[1]));
   // }

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