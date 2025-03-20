<template>
    <div class="feedback-card">
        <h3>Feedbacks</h3>
        <!-- Tabela -->
        <table class="feedback-table">
            <thead>
                <tr>
                    <th>Avaliação</th>
                    <th>Data</th>
                    <th>Avaliação</th>
                    <th>Melhorias</th>
                    <th>Plataforma</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="feedback in feedbacks" :key="feedback.id">
                    <td>{{ feedback.description }}</td>
                    <td>{{ formatDate(feedback.created_at) }}</td>
                    <td>{{ feedback.evaluation }}</td>
                    <td>{{ feedback.improvements }}</td>
                    <td>{{ feedback.platform }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../../api'; // Ajuste o caminho, se necessário

// Tipo para um item de feedback
interface FeedbackItem {
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
        data: FeedbackItem[];
        next_page_url: string | null;
        total: number;
    };
}

export default defineComponent({
    data() {
        return {
            feedbacks: [] as FeedbackItem[], // Armazenar os dois primeiros feedbacks
            loading: true, // Estado de carregamento
        };
    },
    async mounted() {
        try {
            // Chamar a API e carregar os feedbacks
            const response: { data: ApiResponse } = await apiClient.get<ApiResponse>('/api/v1/evaluations?page=1');
            // Acessar corretamente o array de dados e pegar os dois primeiros itens
            this.feedbacks = response.data.data.data.slice(0, 1);
            this.loading = false;
        } catch (error) {
            console.error('Erro ao carregar os feedbacks:', error);
            this.loading = false;
        }
    },

    methods: {
        formatDate(date: string): string {
            const options: Intl.DateTimeFormatOptions = {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            };
            return new Date(date).toLocaleDateString('pt-BR', options);
        },
    },
});
</script>

<style scoped>
.feedback-card {
    width: 1000px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 20px auto;
    text-align: left;
}

.feedback-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
}

.feedback-table th {
    background-color: #f4f4f4;
    padding: 8px;
    text-align: left;
    font-weight: bold;
    border-bottom: 2px solid #ddd;
}

.feedback-table td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
}

.feedback-table tr:last-child td {
    border-bottom: none;
}
</style>
