import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector } from "@angular/core";
import { NotificationService } from "./shared/messages/notification.service";
import { LoginService } from "./security/login/login.service";

@Injectable()
export class AplicationErrorHandler extends ErrorHandler {

    constructor(
        private ns: NotificationService,
        private injector: Injector
    ) {
        super()
    }
    handleError(errorResponse: HttpErrorResponse | any) {
        if (errorResponse instanceof HttpErrorResponse) {
            const msg = errorResponse.error.message;
            switch (errorResponse.status) {
                case 401:
                    this.injector.get(LoginService).handleLogin()
                    break;
                case 403:
                    this.ns.notify(msg || 'Não autorizado')
                    break;
                case 404:
                    this.ns.notify(msg || 'Recurso não encontrado.')
                    break;
            }
        }
        super.handleError(errorResponse)
    }
}