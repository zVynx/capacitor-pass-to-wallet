export interface CapacitorPassToWalletPlugin {
  addToAppleWallet(options: { base64: string }): Promise<{ message: string }>;
  
  addMultipleToAppleWallet(options: {
    base64: string[];
  }): Promise<{ message: string }>;

  canAddToGoogleWallet(): Promise<{ isAvailable: boolean; reason?: string }>;

  addJwtToGoogleWallet(options: { jwt: string }): Promise<{ message: string; passAdded: boolean }>;
}
