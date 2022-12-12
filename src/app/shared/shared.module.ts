//modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';


//components
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [FooterComponent, NavComponent],
  exports: [FooterComponent, NavComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
})
export class SharedModule {}
