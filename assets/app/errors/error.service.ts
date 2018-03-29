import { EventEmitter } from '@angular/core';

import { Error } from './error.model';

export class ErrorService {
	errorOccurred = new EventEmitter<Error>();

	handleError(error: any) {
		const errorData = new Error(error.title, error.error.errmsg);
		this.errorOccurred.emit(errorData);
	}
}