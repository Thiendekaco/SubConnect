declare const _default: {
    connectWallet: typeof import("@subwallet-connect/core/dist/connect").default;
    disconnectWallet: typeof import("@subwallet-connect/core/dist/disconnect").default;
    setChain: typeof import("@subwallet-connect/core/dist/chain").default;
    state: {
        get: () => import("@subwallet-connect/core/dist/types").AppState;
        select: {
            (): import("rxjs").Observable<import("@subwallet-connect/core/dist/types").AppState>;
            <T extends keyof import("@subwallet-connect/core/dist/types").AppState>(stateKey: T): import("rxjs").Observable<import("@subwallet-connect/core/dist/types").AppState[T]>;
        };
        actions: {
            setWalletModules: typeof import("@subwallet-connect/core/dist/store/actions").setWalletModules;
            setLocale: typeof import("@subwallet-connect/core/dist/store/actions").setLocale;
            updateNotify: typeof import("@subwallet-connect/core/dist/store/actions").updateNotify;
            customNotification: typeof import("@subwallet-connect/core/dist/store/actions").customNotification;
            preflightNotifications: typeof import("@subwallet-connect/core/dist/preflight-notifications").preflightNotifications;
            updateBalances: typeof import("@subwallet-connect/core/dist/update-balances").default;
            updateAccountCenter: typeof import("@subwallet-connect/core/dist/store/actions").updateAccountCenter;
            setPrimaryWallet: typeof import("@subwallet-connect/core/dist/store/actions").setPrimaryWallet;
            updateTheme: typeof import("@subwallet-connect/core/dist/store/actions").updateTheme;
            updateAppMetadata: typeof import("@subwallet-connect/core/dist/store/actions").updateAppMetadata;
        };
    };
};
export default _default;
