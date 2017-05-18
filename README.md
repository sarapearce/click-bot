PURPOSE: This project is an automation I wrote as an efficiency for a task I was given by a client

USE CASE: The client needed me to QA one of their exams where the students when through a pre-established
workflow of questions. The test had a set number of multiple choice questions, then the free response question after those. At
the time of my testing, the client had no clean way to access those free response questions independent of the test system, so I literally
had to click through 6-10 Multiple Choice questions, answers didn't matter, until I could get to a significant, 
testable question. 

HOW TO USE THE BOT: 
1. Map the selectors in each function to buttons on your web page buttons you want clicked. 
2. Copy/Paste into the console of your exam, hit enter.
3. Ta-Da, buttons are clicked to progress through the exam. Sit back. Drink iced tea.
4. Once bot gets to a question without multiple choice buttons, the finite set of clicks with expire and you
can test the question.


ASSUMPTIONS:
1. UI needs to be Angular or other JS framework that is able to refresh sections without updating the entire page, or bot will 
not be able to work continuously
2. The questions are grouped in Multiple Choice format for < 13 questions, then a free response question.
3. The free response question has no button ids that are identical to those in the multiple choice questions.

KNOWN ISSUES
1. Timers are not precise, but more like an assault rifle pointed at buttons on the page. More accuracy and precision needs to 
be added to the timers.
