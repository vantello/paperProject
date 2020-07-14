import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent{

  question: string;
  answer: string;
  formInterview = new FormGroup({
      question: new FormControl(''),
      answer: new FormControl('')
    });
  
  constructor() {}

  ngOnInit(): void {

  }

  submit(){
    var fullInterview: any = (<HTMLInputElement>document.getElementById("fullInterview"));
   // var fullInterview = <HTMLElement>.document.getElementById("fullInterview");
    var pQuestion = document.createElement('P');
    var pAnswer = document.createElement('P');
    
    this.question = `question=${this.formInterview.value.question}`;
    this.answer = `answer=${this.formInterview.value.answer}`;
    
    var questionText = document.createTextNode(this.question);
    var answerText = document.createTextNode(this.answer);

    pQuestion.appendChild(questionText);
    pAnswer.appendChild(answerText);
    fullInterview.appendChild(pQuestion);
    fullInterview.appendChild(pAnswer);
    
    this.formInterview.reset();


  }
}
