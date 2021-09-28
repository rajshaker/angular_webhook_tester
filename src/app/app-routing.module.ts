import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MandateStepperFormComponent } from './mandate-stepper-form/mandate-stepper-form.component';
import { HppFormComponent } from './hpp-form/hpp-form.component';

const routes: Routes = [
  { path: 'mandate', component: MandateStepperFormComponent },
  { path: 'hpp',     component: HppFormComponent            }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
