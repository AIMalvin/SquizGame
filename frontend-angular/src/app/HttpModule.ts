import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [
        HttpClientModule, // Ajoutez HttpClientModule ici pour configurer HttpClient localement
    ],
    exports: [
        HttpClientModule, // Vous pouvez également exporter HttpClientModule si nécessaire
    ],
})
export class HttpModule {}
