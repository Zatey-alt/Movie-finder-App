import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Shared/service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  constructor(
    private authService: ServiceService,
    private router: Router,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
   
  }





  onLogout() {
    this.authService.logout().subscribe(
      () => {
        this.router.navigate(['/signin']); 
      },
      (error) => {
        this.toastr.error('Failed to logout. Please try again.'); // Show error message on logout failure
      }
    );
  }
}
