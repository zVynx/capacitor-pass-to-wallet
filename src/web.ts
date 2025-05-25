import { WebPlugin } from '@capacitor/core';

import type { CapacitorPassToWalletPlugin } from './definitions';

export class CapacitorPassToWalletWeb
  extends WebPlugin
  implements CapacitorPassToWalletPlugin
{
  addToAppleWallet(options: { base64: string }): Promise<{ message: string }> {
    console.log(options.base64, 'Method not implemente on web.');
    throw new Error('Method not implemented on web.');
  }

  addMultipleToAppleWallet(options: {
    base64: string[];
  }): Promise<{ message: string }> {
    console.log(options.base64, 'Method not implemente on web.');
    throw new Error('Method not implemented.');
  }

  async canAddToGoogleWallet(): Promise<{ isAvailable: boolean; reason?: string }> {
    return { isAvailable: false, reason: 'Native Google Wallet SDK check is not applicable on the web.' };
  }

  async addJwtToGoogleWallet(options: { jwt: string }): Promise<{ message: string; passAdded: boolean }> {
    console.log('addToGoogleWalletJwt called on web. ', options.jwt);
    throw new Error('Method not implemented on web.');
  }
}
