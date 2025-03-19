<template>
    <div class="dashboard p-6 bg-gray-100 min-h-screen flex">
        <!-- Sidebar -->
        <Sidebar class="w-64" />

        <!-- Conteúdo principal da Dashboard -->
        <div class="main-content flex-1 p-6">
            <h1 class="settings-title">Configurações</h1>

            <div class="card mt-6 w-full max-w-4xl">
                <h2 class="text-lg font-semibold mb-2">Perfis</h2>
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="p-2">Nome</th>
                            <th class="p-2">Quantidade De Usuários</th>
                            <th class="p-2">Permissões</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-t" v-for="(feedback, index) in feedbacks" :key="index">
                            <td class="p-2">{{ feedback.text }}</td>
                            <td class="p-2">{{ feedback.date }}</td>
                            <td class="p-2">{{ feedback.rating }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="card mt-6 w-full max-w-4xl">
                <h2 class="text-lg font-semibold mb-2">Usuários</h2>
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-gray-200">
                            <th class="p-2">Nome</th>
                            <th class="p-2">Email</th>
                            <th class="p-2">Perfil</th>
                            <th class="p-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-t" v-for="(feedback, index) in feedbacks" :key="index">
                            <td class="p-2">{{ feedback.text }}</td>
                            <td class="p-2">{{ feedback.date }}</td>
                            <td class="p-2">{{ feedback.rating }}</td>
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

.settings-title {
    font-weight: bold;
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
    min-height: 300px;
    /* Aumentando a altura mínima dos cards */
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
