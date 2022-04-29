import { ToastService } from './../_services/toastService';
import { Component, TemplateRef } from '@angular/core';


@Component({
    selector: 'app-toasts',
    templateUrl: './appToasts.component.html',
    host: { '[class.ngb-toasts]': 'true' }
})
export class AppToastsComponent {
    constructor(public toastService: ToastService) {
        
    }

    isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}