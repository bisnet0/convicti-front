<template>
    <div>
        <h3>Feedbacks</h3>
        <table class="styled-table" v-if="!loading && feedbacks.length > 0">
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
import apiClient from '../../api'; // Adjust the path if needed

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
            feedbacks: [] as FeedbackItem[],
            loading: true,
        };
    },
    async mounted() {
        try {
            const response: { data: ApiResponse } = await apiClient.get<ApiResponse>('/api/v1/evaluations?page=1');
            this.feedbacks = response.data.data.data.slice(0, 2); // Get the first two feedbacks
            this.loading = false;
        } catch (error) {
            console.error('Error loading feedbacks:', error);
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
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 1);
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
}

.styled-table thead tr {
    color: var(--secondary-color);
    text-align: left;
}


.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody td:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

.styled-table tbody td {
    background-color: var(--terciary-color);
}

.styled-table tbody td:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: var(--primary-color);
}
</style>
