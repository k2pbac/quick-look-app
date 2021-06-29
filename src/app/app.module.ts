import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MainSectionComponent } from './main-section/main-section.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MainSectionComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatSidenavModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    FlexLayoutModule,
    MatCardModule,
    HttpClientModule,
    MatTooltipModule,
    AppRoutingModule,
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
