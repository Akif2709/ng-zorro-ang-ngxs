import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from './icons-provider.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { nl_NL } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import nl from '@angular/common/locales/nl';
import { StoreModule } from './store/store.module';
import { CardItemComponent } from './components/card-item/card-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DemoNgZorroAntdModule } from './ng-zorro-antd.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { SendOfferFormComponent } from './pages/send-offer-form/send-offer-form.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';

registerLocaleData(nl);

@NgModule({
  declarations: [AppComponent, CardItemComponent, HomePageComponent, DetailsPageComponent, SendOfferFormComponent, SearchFieldComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    IconsProviderModule,
    FormsModule,
    StoreModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: nl_NL }],
  bootstrap: [AppComponent],
})
export class AppModule {}
