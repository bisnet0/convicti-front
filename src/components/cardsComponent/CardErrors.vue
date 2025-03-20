<template>
    <div class="card">
        <div class="card-header">
            <h3>Erros</h3><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_203_152)">
                    <path
                        d="M23.3409 9.48L19.8399 3.48C18.9469 1.95 17.2929 1 15.5219 1H8.45092C6.67992 1 5.02492 1.951 4.13192 3.48L0.630916 9.48C-0.275084 11.034 -0.275084 12.965 0.630916 14.519L4.13192 20.519C5.02492 22.049 6.67892 22.999 8.44992 22.999H15.5209C17.2919 22.999 18.9469 22.048 19.8399 20.519L23.3399 14.519C24.2459 12.965 24.2469 11.034 23.3409 9.48ZM15.7069 14.292C16.0979 14.683 16.0979 15.315 15.7069 15.706C15.5119 15.901 15.2559 15.999 14.9999 15.999C14.7439 15.999 14.4879 15.901 14.2929 15.706L11.9999 13.413L9.70692 15.706C9.51192 15.901 9.25592 15.999 8.99992 15.999C8.74392 15.999 8.48792 15.901 8.29292 15.706C7.90192 15.315 7.90192 14.683 8.29292 14.292L10.5859 11.999L8.29292 9.706C7.90192 9.315 7.90192 8.683 8.29292 8.292C8.68392 7.901 9.31592 7.901 9.70692 8.292L11.9999 10.585L14.2929 8.292C14.6839 7.901 15.3159 7.901 15.7069 8.292C16.0979 8.683 16.0979 9.315 15.7069 9.706L13.4139 11.999L15.7069 14.292Z"
                        fill="#FF5050" />
                </g>
                <defs>
                    <clipPath id="clip0_203_152">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <!-- Destaque com o total de erros -->
        <p class="value">{{ totalErrors }}</p>
        <!-- Detalhes por plataforma -->
        <div class="details">
            <span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_203_111)">
                        <path
                            d="M11.6819 10.228C11.3139 10.228 11.0153 9.93004 11.0153 9.56204C11.0153 9.19404 11.3133 8.89538 11.6813 8.89538C12.0493 8.89538 12.3479 9.19338 12.3479 9.56138C12.3479 9.92938 12.0499 10.2274 11.6819 10.228ZM4.31793 10.228C3.94993 10.228 3.65127 9.93004 3.65127 9.56204C3.65127 9.19404 3.94927 8.89538 4.31727 8.89538C4.68527 8.89538 4.98393 9.19338 4.98393 9.56138C4.98393 9.92938 4.68593 10.2274 4.31793 10.228ZM11.9206 6.21471L13.2519 3.90871C13.3286 3.77604 13.2833 3.60671 13.1506 3.53004C13.0179 3.45338 12.8486 3.49871 12.7719 3.63138L11.4239 5.96671C10.3933 5.49604 9.23527 5.23404 7.99994 5.23404C6.7646 5.23404 5.6066 5.49604 4.57527 5.96604L3.22727 3.63138C3.1506 3.49871 2.98127 3.45338 2.8486 3.52938C2.7166 3.60604 2.6706 3.77538 2.74727 3.90804L4.0786 6.21471C1.79193 7.45804 0.228601 9.77271 -0.000732422 12.508H15.9993C15.7706 9.77271 14.2073 7.45804 11.9206 6.21471Z"
                            fill="#00EC6D" />
                    </g>
                    <defs>
                        <clipPath id="clip0_203_111">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                {{ androidErrors }}</span>
            <span><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.3639 8.50865C11.3799 7.26198 12.0332 6.11065 13.0952 5.45798C12.4226 4.49665 11.3352 3.90931 10.1626 3.87265C8.92858 3.74331 7.73258 4.61065 7.10392 4.61065C6.46325 4.61065 5.49525 3.88531 4.45258 3.90665C3.08125 3.95131 1.83325 4.71198 1.16591 5.91131C-0.254752 8.37131 0.804581 11.9873 2.16591 13.976C2.84725 14.95 3.64258 16.0373 4.68458 15.9993C5.70392 15.9573 6.08458 15.3493 7.31458 15.3493C8.53325 15.3493 8.89058 15.9993 9.95325 15.9746C11.0466 15.9566 11.7359 14.9966 12.3932 14.0133C12.8826 13.3193 13.2592 12.5526 13.5086 11.7413C12.2099 11.192 11.3652 9.91931 11.3639 8.50865Z"
                        fill="#303030" />
                    <path
                        d="M9.35655 2.56467C9.95255 1.84867 10.2466 0.928667 10.1752 0C9.26455 0.096 8.42255 0.531333 7.81855 1.21933C7.22188 1.89867 6.91922 2.78667 6.97788 3.68933C7.90122 3.69867 8.77788 3.284 9.35655 2.56467Z"
                        fill="#303030" />
                </svg>
                {{ iosErrors }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../../api'; // Ajuste o caminho, se necessário

// Tipo para um item de erro
interface ErrorItem {
    id: number;
    device_id: number;
    details: string;
    created_at: string;
    updated_at: string;
    platform: string;
}

// Tipo para a resposta da API
interface ApiResponse {
    data: {
        current_page: number;
        data: ErrorItem[];
        next_page_url: string | null;
        total: number;
    };
}

export default defineComponent({
    data() {
        return {
            totalErrors: 0, // Total destacado
            iosErrors: 0,   // Contagem de erros em iOS
            androidErrors: 0, // Contagem de erros em Android
            loading: true,  // Estado de carregamento
        };
    },
    async mounted() {
        try {
            // Carregar todas as páginas de dados
            await this.fetchAllErrors();

            // Finalizar o carregamento
            this.loading = false;
        } catch (error) {
            console.error('Erro ao carregar os erros:', error);

            // Finalizar o estado de carregamento em caso de erro
            this.loading = false;
        }
    },
    methods: {
        async fetchAllErrors() {
            let nextPageUrl: string | null = `/api/v1/errors?page=1`;
            let iosCount = 0;
            let androidCount = 0;

            while (nextPageUrl) {
                // Fazer requisição à API
                const response: { data: ApiResponse } = await apiClient.get<ApiResponse>(nextPageUrl);
                const pageData = response.data.data;

                // Processar os erros desta página
                pageData.data.forEach((item) => {
                    if (item.platform === 'IOS') {
                        iosCount++;
                    } else if (item.platform === 'ANDROID') {
                        androidCount++;
                    }
                });

                // Atualizar o total de erros
                this.totalErrors = pageData.total;

                // Atualizar a URL da próxima página
                nextPageUrl = pageData.next_page_url;
            }

            // Atualizar contadores finais
            this.iosErrors = iosCount;
            this.androidErrors = androidCount;
        },
    },
});
</script>

<style scoped>
.card {
    width: 100%;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 1px;
    /* Diminuído para reduzir a altura */
}

.card-header {
    display: flex;
    justify-content: space-between;
    /* Mantém o "Downloads" à esquerda e o SVG à direita */
    align-items: center;
    /* Alinha verticalmente ao centro */
    font-size: 18px;
    font-weight: bold;
}

.card h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(48, 48, 48, 0.349)
}

.value {
    font-size: 40px;
    font-weight: bold;
    font-family: 'Nunito', sans-serif;
    color: rgb(0, 0, 0);
}

.details {
    display: flex;
    gap: 10px;
    font-size: 18px;
}
</style>
