<template>
    <div class="features-card">
        <h2>Novas Funcionalidades</h2>
        <table class="styled-table" v-if="!loading && features.length > 0">
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
        <p v-if="loading">Carregando...</p>
        <p v-if="!loading && features.length === 0">Nenhuma funcionalidade disponível.</p>
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
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
}

.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
    width: 100%;
}

.styled-table thead tr {
    color: var(--secondary-color);
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody td {
    background-color: var(--tertiary-color);
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: var(--quaternary-color);
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: var(--primary-color);
}

table tr:last-child td:first-child {
    border-bottom-left-radius: 10px;
}

table tr:last-child td:last-child {
    border-bottom-right-radius: 10px;
}

table tr:first-child td:last-child {
    border-top-right-radius: 10px;
}

table tr:first-child td:first-child {
    border-top-left-radius: 10px;
}


.usage {
    font-size: 20px;
    font-weight: normal;
    font-family: 'Nunito', sans-serif;
    margin-left: auto;
    text-align: right;
}
</style>