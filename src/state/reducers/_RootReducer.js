import { AppStateReducer, InitialAppState } from './AppStateReducer';
import {
  CloudflareConfigReducer,
  InitialCloudflareConfigState
} from './CloudflareConfigReducer';
import { InitialScannerState, ScannerReducer } from './ScannerReducer';

import { combineReducers } from '_Shared/reducerUtils';

export const _InitialRootState = {
  App: InitialAppState,
  CloudflareConfig: InitialCloudflareConfigState,
  Scanner: InitialScannerState
};

export const _RootReducer = combineReducers({
  App: AppStateReducer,
  CloudflareConfig: CloudflareConfigReducer,
  Scanner: ScannerReducer
});
