/**
 * Created by Muralidharan on 11/10/2016.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);

