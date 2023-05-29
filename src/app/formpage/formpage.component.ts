import { Component } from '@angular/core';
import { AppService } from '../app.service';
// Toastr
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
// Form
import { NgForm } from '@angular/forms';
// Router
import { Router } from '@angular/router';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.component.html',
  styleUrls: ['./formpage.component.scss'],
})
export class FormpageComponent {
  countries: any[] = [{ text: 'Loading...', value: 'Loading...' }];

  warningOrSuccess: any = 'warning';

  occupations = [
    { text: 'Frontend Developer', value: 'Frontend Developer' },
    { text: 'Backend Developer', value: 'Backend Developer' },
    { text: 'Designer', value: 'Designer' },
    { text: 'Devops Engineer', value: 'Devops Engineer' },
  ];

  countriesApiObservable!: Subscription;

  constructor(
    private appService: AppService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  onChange(form: NgForm) {
    this.warningOrSuccess = form.valid ? 'success' : 'warning';
  }

  // Function called when the form is submitted.
  onSubmit(form: NgForm) {
    if (!form.value.successful) {
      this.toastr.error(
        'The form has to be successful before you can continue!',
        'Error!'
      );
    } else {
      this.toastr.success(
        'The form has been submitted successfully!',
        'Success!'
      );
      this.router.navigate(['/success']);
    }
  }

  ngOnInit() {
    // API call to fetch countries

    this.countriesApiObservable = this.appService
      .getCountries()
      .subscribe((data: any[]) => {
        this.countries = [];
        for (let country in data) {
          let countryObj = {
            text: data[country],
            value: data[country],
          };

          this.countries.push(countryObj);
        }
      });
  }

  ngOnDestory() {
    this.countriesApiObservable.unsubscribe();
  }
}
