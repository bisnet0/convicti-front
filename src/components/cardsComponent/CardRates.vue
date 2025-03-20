<template>
    <div class="card">
        <div class="card-header">
            <h3>Avaliações</h3><svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_203_123)">
                    <path
                        d="M21.6667 0H4.33333C1.93917 0 0 1.93917 0 4.33333V17.3333C0 19.7275 1.93917 21.6667 4.33333 21.6667H7.49667L11.5592 25.09C11.9708 25.4583 12.4908 25.6425 13.0108 25.6425C13.5308 25.6425 14.0183 25.4692 14.4083 25.1117L18.5792 21.6667H21.6667C24.0608 21.6667 26 19.7275 26 17.3333V4.33333C26 1.93917 24.0608 0 21.6667 0ZM18.6008 10.4217L16.25 12.3392L17.225 15.2967C17.355 15.6975 17.225 16.1417 16.8892 16.3908C16.5533 16.6508 16.0983 16.6617 15.7408 16.4342L13.0108 14.6575L10.3242 16.4558C10.1617 16.5642 9.96667 16.6183 9.77167 16.6183C9.56583 16.6183 9.34917 16.5533 9.17583 16.4233C8.84 16.1742 8.69917 15.73 8.82917 15.3292L9.76083 12.3392L7.39917 10.4217C7.085 10.1508 6.96583 9.7175 7.10667 9.3275C7.2475 8.9375 7.62667 8.6775 8.03833 8.6775H11.0175L12.0683 5.85C12.2092 5.46 12.5883 5.2 13 5.2C13.4117 5.2 13.7908 5.46 13.9317 5.85L14.9825 8.6775H17.9617C18.3733 8.6775 18.7525 8.9375 18.8933 9.3275C19.0342 9.7175 18.915 10.1617 18.6008 10.4325V10.4217Z"
                        fill="#C500D6" />
                </g>
                <defs>
                    <clipPath id="clip0_203_123">
                        <rect width="26" height="26" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
        <!-- Destaque com a média geral -->
        <p class="value">
            {{ averageEvaluation.toFixed(1) }}
            <span class="small-text">/5</span>
        </p>

        <!-- Detalhes por plataforma -->
        <div class="details">
            <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                {{ androidAverage.toFixed(1) }}</span>
            <span> <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.3639 8.50865C11.3799 7.26198 12.0332 6.11065 13.0952 5.45798C12.4226 4.49665 11.3352 3.90931 10.1626 3.87265C8.92858 3.74331 7.73258 4.61065 7.10392 4.61065C6.46325 4.61065 5.49525 3.88531 4.45258 3.90665C3.08125 3.95131 1.83325 4.71198 1.16591 5.91131C-0.254752 8.37131 0.804581 11.9873 2.16591 13.976C2.84725 14.95 3.64258 16.0373 4.68458 15.9993C5.70392 15.9573 6.08458 15.3493 7.31458 15.3493C8.53325 15.3493 8.89058 15.9993 9.95325 15.9746C11.0466 15.9566 11.7359 14.9966 12.3932 14.0133C12.8826 13.3193 13.2592 12.5526 13.5086 11.7413C12.2099 11.192 11.3652 9.91931 11.3639 8.50865Z"
                        fill="#303030" />
                    <path
                        d="M9.35655 2.56467C9.95255 1.84867 10.2466 0.928667 10.1752 0C9.26455 0.096 8.42255 0.531333 7.81855 1.21933C7.22188 1.89867 6.91922 2.78667 6.97788 3.68933C7.90122 3.69867 8.77788 3.284 9.35655 2.56467Z"
                        fill="#303030" />
                </svg>
                {{ iosAverage.toFixed(1) }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../../api'; // Ajuste o caminho conforme necessário

// Tipo para um item de avaliação
interface EvaluationItem {
    id: number;
    device_id: number;
    description: string;
    evaluation: number;
    improvements: string;
    created_at: string;
    updated_at: string;
    platform: string;
}

// Tipo para a resposta da API
interface ApiResponse {
    data: {
        current_page: number;
        data: EvaluationItem[];
        next_page_url: string | null;
        total: number;
    };
}

export default defineComponent({
    data() {
        return {
            averageEvaluation: 0, // Média geral de avaliações
            iosAverage: 0,        // Média de iOS
            androidAverage: 0,    // Média de Android
            loading: true,        // Estado de carregamento
        };
    },
    async mounted() {
        try {
            // Carregar todas as páginas de dados
            await this.fetchAllEvaluations();

            // Finalizar o carregamento
            this.loading = false;
        } catch (error) {
            console.error('Erro ao carregar as avaliações:', error);

            // Finaliza o carregamento mesmo em caso de erro
            this.loading = false;
        }
    },
    methods: {
        async fetchAllEvaluations() {
            let nextPageUrl: string | null = `/api/v1/evaluations?page=1`;
            let totalEvaluations = 0;
            let iosSum = 0;
            let androidSum = 0;
            let iosCount = 0;
            let androidCount = 0;

            while (nextPageUrl) {
                // Declarar explicitamente o tipo de 'response' para evitar conflitos com 'Response' do DOM
                const response: { data: ApiResponse } = await apiClient.get<ApiResponse>(nextPageUrl);
                const pageData = response.data.data;

                // Processar as avaliações desta página
                pageData.data.forEach((item) => {
                    totalEvaluations += item.evaluation;
                    if (item.platform === 'IOS') {
                        iosSum += item.evaluation;
                        iosCount++;
                    } else if (item.platform === 'ANDROID') {
                        androidSum += item.evaluation;
                        androidCount++;
                    }
                });

                // Atualizar a URL da próxima página
                nextPageUrl = pageData.next_page_url;
            }

            // Calcular médias
            const totalItems = iosCount + androidCount; // Para evitar dependência circular com response
            this.averageEvaluation = totalItems > 0 ? totalEvaluations / totalItems : 0;
            this.iosAverage = iosCount > 0 ? iosSum / iosCount : 0;
            this.androidAverage = androidCount > 0 ? androidSum / androidCount : 0;
        }

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

.value .small-text {
    font-size: 20px;
    font-weight: lighter;

}


.details {
    display: flex;
    gap: 10px;
    font-size: 18px;
}
</style>
