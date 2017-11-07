import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SomeModuleRoutingModule } from './some-module-routing.module';

import * as typelessPackage from 'typeless-package';
typelessPackage.method();

@NgModule({
  imports: [
    CommonModule,
    SomeModuleRoutingModule
  ],
  declarations: []
})
export class SomeModuleModule { }
