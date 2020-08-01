import { fromEventPattern } from 'rxjs';

export * from './lib/core-data.module';
export { CurrencysService } from './lib/services/currencys/currencys.service';
export { CurrencyTradersService } from './lib/services/currency-traders/currency-traders.service';
export { SelectTraderGuard } from './lib/guards/select-trader.guard';