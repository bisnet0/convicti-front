<template>
    <div class="card">
        <h3>Erros</h3>
        <!-- Destaque com o total de erros -->
        <p class="value">{{ totalErrors }}</p>
        <!-- Detalhes por plataforma -->
        <div class="details">
            <span>🍏 {{ iosErrors }}</span>
            <span>📥 {{ androidErrors }}</span>
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
                const response: { data: ApiResponse } = await apiClient.get < ApiResponse > (nextPageUrl);
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
