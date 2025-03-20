/// <reference types="vite/client" />
declare module 'process' {
    interface Env {
        VITE_APP_BASE_URL: string;
    }
}
