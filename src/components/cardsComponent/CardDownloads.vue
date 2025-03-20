<template>
    <div class="card">
        <div class="card-header">
            <h3>Downloads</h3><svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                xmlns="http://www.w3.org/2000/svg">

                <g clip-path="url(#clip0_203_94)">
                    <path
                        d="M19.4719 7.74149C19.1123 7.66999 18.8187 7.44574 18.6681 7.12507C16.9868 3.58149 13.0965 1.60007 9.20519 2.31724C5.66052 2.96724 2.88177 5.7969 2.28919 9.35999C2.11369 10.4119 2.12669 11.4649 2.32494 12.4908C2.38994 12.8256 2.24586 13.1982 1.95011 13.4669C0.70969 14.5947 -0.000976562 16.2012 -0.000976562 17.8761C-0.000976562 21.1607 2.67161 23.8344 5.95736 23.8344H17.874C22.3547 23.8344 25.999 20.1901 25.999 15.7094C25.999 11.8473 23.2539 8.49657 19.4709 7.74257L19.4719 7.74149ZM16.3812 15.9337L13.4486 18.8662C13.0294 19.2855 12.4779 19.4967 11.9265 19.4989L11.9168 19.5011L11.907 19.4989C11.3556 19.4967 10.8042 19.2855 10.3849 18.8662L7.45236 15.9337C7.02877 15.5101 7.02877 14.8254 7.45236 14.4018C7.87594 13.9782 8.56061 13.9782 8.98419 14.4018L10.8334 16.2511V10.8344C10.8334 10.2353 11.3188 9.75107 11.9168 9.75107C12.5148 9.75107 13.0001 10.2353 13.0001 10.8344V16.2511L14.8494 14.4018C15.2729 13.9782 15.9576 13.9782 16.3812 14.4018C16.8048 14.8254 16.8048 15.5101 16.3812 15.9337Z"
                        fill="#0578BE" />
                </g>
                <defs>
                    <clipPath id="clip0_203_94">
                        <rect width="26" height="26" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>

        <!-- Exibe os dados após o carregamento -->
        <p class="value">{{ totalDownloads }}</p>
        <div class="details">
            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                {{ androidCount }}</span>
            <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_203_96)">
                        <path
                            d="M12.3639 8.50865C12.3799 7.26198 13.0332 6.11065 14.0952 5.45798C13.4226 4.49665 12.3352 3.90931 11.1626 3.87265C9.92858 3.74331 8.73258 4.61065 8.10392 4.61065C7.46325 4.61065 6.49525 3.88531 5.45258 3.90665C4.08125 3.95131 2.83325 4.71198 2.16591 5.91131C0.745248 8.37131 1.80458 11.9873 3.16591 13.976C3.84725 14.95 4.64258 16.0373 5.68458 15.9993C6.70392 15.9573 7.08458 15.3493 8.31458 15.3493C9.53325 15.3493 9.89058 15.9993 10.9532 15.9746C12.0466 15.9566 12.7359 14.9966 13.3932 14.0133C13.8826 13.3193 14.2592 12.5526 14.5086 11.7413C13.2099 11.192 12.3652 9.91931 12.3639 8.50865Z"
                            fill="#303030" />
                        <path
                            d="M10.3565 2.56467C10.9525 1.84867 11.2466 0.928667 11.1752 0C10.2646 0.096 9.42255 0.531333 8.81855 1.21933C8.22188 1.89867 7.91922 2.78667 7.97788 3.68933C8.90122 3.69867 9.77788 3.284 10.3565 2.56467Z"
                            fill="#303030" />
                    </g>
                    <defs>
                        <clipPath id="clip0_203_96">
                            <rect width="16" height="16" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                {{ iosCount }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../../api'; // Ajuste o caminho, se necessário

// Tipos para os dados da API
interface DownloadItem {
    id: number;
    device_id: number;
    created_at: string;
    updated_at: string;
    platform: string;
}

interface ApiResponse {
    data: {
        current_page: number;
        data: DownloadItem[];
        next_page_url: string | null;
        total: number;
    };
}

export default defineComponent({
    data() {
        return {
            totalDownloads: 0, // Total destacado
            iosCount: 0,      // Contagem de iOS
            androidCount: 0,  // Contagem de Android
            loading: true,    // Indica que o carregamento está em andamento
        };
    },
    async mounted() {
        try {
            // Chama a função que carrega todos os dados
            await this.fetchAllPages();

            // Define que o carregamento foi concluído
            this.loading = false;
        } catch (error) {
            console.error('Erro ao carregar os dados:', error);

            // Mesmo em caso de erro, interrompe o "loading"
            this.loading = false;
        }
    },
    methods: {
        async fetchAllPages() {
            let currentPage = 1;
            let nextPageUrl: string | null = `/api/v1/downloads?page=${currentPage}`;
            let ios = 0;
            let android = 0;

            while (nextPageUrl) {
                const response: { data: ApiResponse } = await apiClient.get<ApiResponse>(nextPageUrl);
                const pageData = response.data.data;

                // Somar as plataformas desta página
                pageData.data.forEach((item) => {
                    if (item.platform === 'IOS') {
                        ios++;
                    } else if (item.platform === 'ANDROID') {
                        android++;
                    }
                });

                // Atualizar o total de downloads
                this.totalDownloads = pageData.total;

                // Atualizar a URL da próxima página
                nextPageUrl = pageData.next_page_url;
            }

            // Atualizar os contadores finais
            this.iosCount = ios;
            this.androidCount = android;
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
