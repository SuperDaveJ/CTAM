var currentScore = 0;
var Answer_Array = new Array();
var Wrong_Answer_Array=[];

var currentPercentScore = 0;
var InCorrectAnswer_Array = [];

var QuestionRemediationA = new Array();
QuestionRemediationA[0] = "Module 2$What is the definition of Critical Thinking?";
QuestionRemediationA[1] = "Module 2$What role does critical thinking have in intelligence analysis?";
QuestionRemediationA[2] = "Module 2$What is NOT a common step in the critical thinking process?";
QuestionRemediationA[3] = "Module 2$What is the benefit of using critical thinking when analyzing information?";
QuestionRemediationA[4] = "Module 3$What is NOT a common type of critical thinker?";
QuestionRemediationA[5] = "Module 3$Uncritical thinkers can be described as….";
QuestionRemediationA[6] = "Module 3$How does critical thinking relate to intelligence analysis?";
QuestionRemediationA[7] = "Module 3$Uncritical thinkers have personal beliefs based on…";
QuestionRemediationA[8] = "Module 4$What are the Elements of Thought?";
QuestionRemediationA[9] = "Module 4$Which is NOT a basic component of the Elements of Thought?";
QuestionRemediationA[10] = "Module 4$What are Universal Intellectual Standards?";
QuestionRemediationA[11] = "Module 4$How can an analyst effectively use the Elements of Thought to make their thinking more rigorous?";
QuestionRemediationA[12] = "Module 6$What is a mindset?";
QuestionRemediationA[13] = "Module 6$Mindsets are also referred to as:";
QuestionRemediationA[14] = "Module 5$Which does NOT have an impact on your individual mindset?";
QuestionRemediationA[15] = "Module 7$What is perception?";
QuestionRemediationA[16] = "Module 7$What is NOT a characteristic of perception?";
QuestionRemediationA[17] = "Module 7$How does perception impact intelligence analysis?";
QuestionRemediationA[18] = "Module 9$What is memory?";
QuestionRemediationA[19] = "Module 9$Which is NOT a memory concept that affects critical thinking?";
QuestionRemediationA[20] = "Module 9$What is hindsight bias?";
QuestionRemediationA[21] = "Module 8$What are cognitive errors?";
QuestionRemediationA[22] = "Module 8$Which is NOT true about common cognitive errors?";
QuestionRemediationA[23] = "Module 8$Cognitive errors impact critical thinking by…";
QuestionRemediationA[24] = "Module 5$What is the role questions play in the critical thinking process?";
QuestionRemediationA[25] = "Module 5$What is brainstorming?";
QuestionRemediationA[26] = "Module 5$What is a hypothesis?";
QuestionRemediationA[27] = "Module 5,10$What is the Analysis of Competing Hypothesis (ACH) tool?";
QuestionRemediationA[28] = "Module 7$Which of the following is the correct definition of the Key Assumptions Analytic Method?";
QuestionRemediationA[29] = "Module 9$Why is the Indicators of Change Analytic Method a good method to use when analyzing information?";
QuestionRemediationA[30] = "Module 10$Why is the Devil's Advocacy Analytic Method a good method to use when analyzing information?";
QuestionRemediationA[31] = "Module 10$What is NOT an advantage to using the Red Teaming Analytic Method in intelligence analysis?";
QuestionRemediationA[32] = "Module 10$What is creative thinking?";
QuestionRemediationA[33] = "Module 10$What is vertical thinking?";
QuestionRemediationA[34] = "Module 10$What is NOT a strategy analysts can use to stimulate and increase creative thinking?";



var QuestionRemediationB = new Array();
QuestionRemediationB[0] = "Module 2$What does NOT belong? Critical thinking important to intelligence analysis because it…";
QuestionRemediationB[1] = "Module 2$As an analyst, your most important skill is an ability to think critically and communicate your thinking clearly. Knowing this, the most important thing you can do to enhance your skills is to:";
QuestionRemediationB[2] = "Module 2$What is the final step in the critical thinking process?";
QuestionRemediationB[3] = "Module 3$What are some consequences you can experience when you don't apply critical thinking skills in analysis?";


QuestionRemediationB[4] = "Module 3$Drs. Elder and Paul define what types of critical thinkers?";
QuestionRemediationB[5] = "Module 3$If we don't learn to think critically, we….";
QuestionRemediationB[6] = "Module 3$Which is NOT a possible characteristic of intelligence analysts who think uncritically?";
QuestionRemediationB[7] = "Module 3$When we think uncritically, it is:";
QuestionRemediationB[8] = "Module 4$Why are the Elements of Thought important to critical thinking?";
QuestionRemediationB[9] = "Module 4$How many basic components are there in the Elements of Thought?";
QuestionRemediationB[10] = "Module 4$How are Universal Intellectual Standards used in thinking?";
QuestionRemediationB[11] = "Module 4$How can an analyst effectively use the Universal Intellectual Standards to make their thinking more rigorous?";
QuestionRemediationB[12] = "Module 6$How are mindsets present in thought patterns?";
QuestionRemediationB[13] = "Module 6$What do mindsets allow us to do?";
QuestionRemediationB[14] = "Module 6$How do mindsets impact intelligence analysis?";
QuestionRemediationB[15] = "Module 7$How persistent is perception in thought patterns?";
QuestionRemediationB[16] = "Module 7$How does perception relate to cognitive errors?";
QuestionRemediationB[17] = "Module 7$In intelligence analysis, what effect does perception have in the process?";
QuestionRemediationB[18] = "Module 9$How does memory affect critical thinking?";
QuestionRemediationB[19] = "Module 9$Which is NOT a common memory concept?";
QuestionRemediationB[20] = "Module 9$How does hindsight bias affect critical thinking?";
QuestionRemediationB[21] = "Module 8$Cognitive errors are…";
QuestionRemediationB[22] = "Module 8$When thinking critically, cognitive errors can be recognized as...";
QuestionRemediationB[23] = "Module 8$How can you combat cognitive errors?";
QuestionRemediationB[24] = "Module 8$What types of questions should you ask when beginning an analytic process?";
QuestionRemediationB[25] = "Module 5$What is NOT a common rule when applying the brainstorming technique?";
QuestionRemediationB[26] = "Module 5$How are hypotheses used in intelligence analysis?";
QuestionRemediationB[27] = "Module 5,10$How can the Analysis of Competing Hypothesis (ACH) tool help the intelligence analysis process?";
QuestionRemediationB[28] = "Module 7$Which is NOT a benefit of applying the Key Assumptions Analytic Method when analyzing information?";
QuestionRemediationB[29] = "Module 9$Define the Indicators of Change Analytic Method.";
QuestionRemediationB[30] = "Module 10$Define the Devil's Advocacy Analytic Method.";
QuestionRemediationB[31] = "Module 10$Which of these accurately define the Red Teaming Analytic Method?";
QuestionRemediationB[32] = "Module 10$Which of the following is not true about creative thinking?";
QuestionRemediationB[33] = "Module 10$What is lateral thinking?";
QuestionRemediationB[34] = "Module 10$Which of these best practices have NOT been found to be helpful to analysts in improving their creative thinking skills?";

function goToAssessment()
{
	openAssessment(getNextFileName(),'Assessment','1010','706')
}

function openAssessment( myLocation, myName, myWidth, myHeight) {
		myWin= open(myLocation, myName ,"width="+myWidth+",height="+myHeight+",location=no,status=no,toolbar=no,menubar=no,scrollbars=auto,top=0,left=0");
		myWin.focus();		
}

function clearAllPreviousData()
{
	currentScore = 0;
	Answer_Array = new Array();
	Wrong_Answer_Array=[];

	currentPercentScore = 0;
	InCorrectAnswer_Array = [];

}