<template>
    <div class="card">
        <h3>Avaliações</h3>
        <!-- Destaque com a média geral -->
        <p class="value">{{ averageEvaluation.toFixed(1) }}/5</p>
        <!-- Detalhes por plataforma -->
        <div class="details">
            <span>📥 {{ androidAverage.toFixed(1) }}</span>
            <span>🍏 {{ iosAverage.toFixed(1) }}</span>
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
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
}

.value {
    font-size: 24px;
    font-weight: bold;
}

.details {
    display: flex;
    gap: 10px;
    font-size: 18px;
}
</style>
