<template>
    <div class="dashboard p-6 bg-gray-100 min-h-screen flex">
        <!-- Sidebar -->
        <Sidebar class="w-64" />

        <!-- Conteúdo principal da Dashboard -->
        <div class="main-content flex-1 p-6">
            <h1 class="stats-title">Estatísticas</h1>
            <!-- Estatísticas lado a lado -->
            <div class="card-container">
                <div class="card">
                    <h3>Downloads</h3>
                    <p class="value">{{ stats.downloads }}</p>
                    <div class="details">
                        <span>📥 {{ stats.androidDownloads }}</span>
                        <span>🍏 {{ stats.iosDownloads }}</span>
                    </div>
                </div>
                <div class="card">
                    <h3>Avaliações</h3>
                    <p class="value">{{ stats.averageRating }}</p>
                    <div class="details">
                        <span>⭐ {{ stats.androidRating }}</span>
                        <span>🍏 {{ stats.iosRating }}</span>
                    </div>
                </div>
                <div class="card">
                    <h3>Erros</h3>
                    <p class="value">{{ stats.errors }}</p>
                    <div class="details">
                        <span>❌ {{ stats.androidErrors }}</span>
                        <span>🍏 {{ stats.iosErrors }}</span>
                    </div>
                </div>
            </div>

            <!-- Feedbacks (Agora com texto simulado) -->
            <div class="card mt-6 w-full max-w-4xl">
                <h2 class="text-lg font-semibold mb-2">Feedbacks</h2>
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="p-2">Avaliação</th>
                            <th class="p-2">Data</th>
                            <th class="p-2">Nota</th>
                            <th class="p-2">Melhorias</th>
                            <th class="p-2">Plataforma</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-t" v-for="(feedback, index) in feedbacks" :key="index">
                            <td class="p-2">{{ feedback.text }}</td>
                            <td class="p-2">{{ feedback.date }}</td>
                            <td class="p-2">{{ feedback.rating }}</td>
                            <td class="p-2">{{ feedback.improvements || '-' }}</td>
                            <td class="p-2">{{ feedback.platform }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Novas Funcionalidades (Agora com texto simulado) -->
            <div class="card mt-6 w-full max-w-4xl">
                <h2 class="text-lg font-semibold mb-2">Novas Funcionalidades</h2>
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="p-2">Funcionalidade</th>
                            <th class="p-2">Taxa de Uso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-t" v-for="(feature, index) in features" :key="index">
                            <td class="p-2">{{ feature.name }}</td>
                            <td class="p-2 font-semibold"
                                :class="{ 'text-green-600': feature.usage >= 80, 'text-yellow-600': feature.usage < 80 }">
                                {{ feature.usage }}%
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'; // Importando a Sidebar

import axios from 'axios';

export default {
    components: {
        Sidebar, // Registrando a Sidebar como componente
    },
    data() {
        return {
            stats: {
                downloads: 1000,
                androidDownloads: 600,
                iosDownloads: 400,
                averageRating: 4.5,
                androidRating: 4.7,
                iosRating: 4.3,
                errors: 15,
                androidErrors: 9,
                iosErrors: 6,
            },
            feedbacks: [
                {
                    text: "Excelente! O app é muito útil, mas poderia ter mais atualizações frequentes.",
                    date: "12/03/2025",
                    rating: 5,
                    improvements: "Mais funcionalidades para Android",
                    platform: "Android",
                },
                {
                    text: "Gostei, mas o design poderia ser mais intuitivo.",
                    date: "10/03/2025",
                    rating: 4,
                    improvements: "Melhorias no UX/UI",
                    platform: "iOS",
                },
                {
                    text: "Funciona bem, mas a integração com outros serviços poderia ser melhor.",
                    date: "08/03/2025",
                    rating: 4,
                    improvements: "Integração com Google Drive",
                    platform: "Android",
                },
            ],
            features: [
                { name: "Novo Dashboard", usage: 90 },
                { name: "Relatório de Erros", usage: 75 },
                { name: "Notificações Push", usage: 85 },
            ],
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                // Simulando a requisição dos dados da API
                const statsResponse = await axios.get('https://api.example.com/stats');
                const feedbacksResponse = await axios.get('https://api.example.com/feedbacks');
                const featuresResponse = await axios.get('https://api.example.com/features');

                // Atualizando os dados com a resposta da API
                this.stats = statsResponse.data;
                this.feedbacks = feedbacksResponse.data;
                this.features = featuresResponse.data;
            } catch (error) {
                console.error('Erro ao carregar os dados', error);
            }
        },
    },
};
</script>

<style scoped>
.dashboard {
    display: flex;
}

.main-content {
    flex: 1;
    padding-left: 20px;
}

.stats-title {
    font-weight: bold;
    margin-bottom: 20px;
}

.card-container {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

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
    margin-bottom: 20px;
}

.card h3 {
    font-size: 1.2rem;
    font-weight: bold;
}

.card .value {
    font-size: 2rem;
    font-weight: bold;
}

.card .details {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 8px;
    font-size: 1rem;
}

.card table {
    width: 100%;
    border-collapse: collapse;
}

.card th,
.card td {
    padding: 8px;
    text-align: left;
}

.card th {
    background-color: #f7f7f7;
}

.card .font-semibold {
    font-weight: bold;
}

.card .text-green-600 {
    color: #38a169;
}

.card .text-yellow-600 {
    color: #d69e2e;
}
</style>
