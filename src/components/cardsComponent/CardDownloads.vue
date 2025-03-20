<template>
    <div class="card">
        <h3>Downloads</h3>
        <!-- Exibe "Carregando..." até que os dados estejam prontos -->
        <div v-if="loading">
        </div>
        <div v-else>
            <!-- Exibe os dados após o carregamento -->
            <p class="value">{{ totalDownloads }}</p>
            <div class="details">
                <span>📥 {{ androidCount }}</span>
                <span>🍏 {{ iosCount }}</span>
            </div>
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
