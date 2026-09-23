import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-account-transactions-page',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<div>Account Transactions</div>`,
})
export class AccountTransactionsPageComponent {}
