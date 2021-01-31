import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {

  public githubUserQuery:string;
  public githubProfile:any;
  public githubRepos:any[];
  public errorMessage:string;

  constructor(private githubService:GithubService,
              private ngxSpinner:NgxSpinnerService) { }

  public searchUser(){
    if(this.githubUserQuery === undefined || this.githubUserQuery == ''){
      alert('Please enter a user name');
      return;
    }
    // display the spinner before the service call
    this.ngxSpinner.show();
    // to get the github profile
    this.githubService.getProfile(this.githubUserQuery).subscribe((data) => {
      this.githubProfile = data;
    } , (error) => {
      this.errorMessage = error;
    });

    // get the github repos
    this.githubService.getRepos(this.githubUserQuery).subscribe((data) => {
      this.githubRepos = data;
      // stop the spinner display
      this.ngxSpinner.hide();
    } , (error) => {
      this.errorMessage = error;
    });
  }

  ngOnInit(): void {
  }

}
