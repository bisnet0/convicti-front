<template>
    <div class="features-card">
        <h3>Novas Funcionalidades</h3>
        <!-- Tabela -->
        <table class="features-table">
            <thead>
                <tr>
                    <th>Funcionalidade</th>
                    <th>Taxa De Uso</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="feature in features" :key="feature.id">
                    <td>{{ feature.name }}</td>
                    <td>
                        <span class="usage" :style="{ color: 'rgba(0, 236, 109, 1)' }">
                            {{ feature.total_usage }}%
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../../api'; // Ajuste o caminho conforme necessário

// Tipo para uma funcionalidade
interface FeatureItem {
    id: number;
    name: string;
    is_new: number;
    created_at: string;
    updated_at: string;
    total_usage: number;
}

// Tipo para a resposta da API
interface ApiResponse {
    data: {
        current_page: number;
        data: FeatureItem[];
        next_page_url: string | null;
        total: number;
    };
}

export default defineComponent({
    data() {
        return {
            features: [] as FeatureItem[], // Armazenar os itens retornados
            loading: true, // Estado de carregamento
        };
    },
    async mounted() {
        try {
            // Fazer a requisição à API e carregar as funcionalidades
            const response: { data: ApiResponse } = await apiClient.get<ApiResponse>('/api/v1/features?is_new=1');
            // Pegar apenas os dois primeiros itens do array
            this.features = response.data.data.data.slice(0, 2);
            this.loading = false;
        } catch (error) {
            console.error('Erro ao carregar as funcionalidades:', error);
            this.loading = false;
        }
    },
});
</script>

<style scoped>
.features-card {
    width: 1000px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 20px auto;
    text-align: left;
}

.features-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
}

.features-table th {
    background-color: #f4f4f4;
    padding: 8px;
    text-align: left;
    font-weight: bold;
    border-bottom: 2px solid #ddd;
}

.features-table td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
}

.features-table .usage {
    font-weight: bold;
}
</style>
