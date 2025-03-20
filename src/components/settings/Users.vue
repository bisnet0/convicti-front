<template>
    <div class="users-card">
        <h3>Usuários</h3>
        <!-- Tabela -->
        <table class="users-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Perfil</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.profile?.name || 'Sem Perfil' }}</td>
                    <td>
                        <span :class="user.active ? 'status-active' : 'status-inactive'">
                            {{ user.active ? 'Ativo' : 'Inativo' }}
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

// Tipo para o perfil de um usuário
interface Profile {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    total_users: number;
    permissions: any[];
}

// Tipo para um usuário
interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    active: boolean;
    created_at: string;
    updated_at: string;
    profile_id: number;
    profile: Profile | null;
}

// Tipo para a resposta da API
interface ApiResponse {
    data: User[];
}

export default defineComponent({
    data() {
        return {
            users: [] as User[], // Armazenar os usuários
            loading: true, // Estado de carregamento
        };
    },
    async mounted() {
        try {
            // Fazer a requisição à API e carregar os usuários
            const response: { data: ApiResponse } = await apiClient.get<ApiResponse>('/api/v1/users');
            this.users = response.data.data;
            this.loading = false;
        } catch (error) {
            console.error('Erro ao carregar os usuários:', error);
            this.loading = false;
        }
    },
});
</script>

<style scoped>
.users-card {
    width: 933px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 20px auto;
    text-align: left;
}

.users-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
}

.users-table th {
    background-color: #f4f4f4;
    padding: 8px;
    text-align: left;
    font-weight: bold;
    border-bottom: 2px solid #ddd;
}

.users-table td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
}

.status-active {
    background-color: rgba(204, 255, 227, 1);
    border-radius: 4px;
    padding: 4px 8px;
    width: 84px;
    display: inline-block;
    text-align: center;
}

.status-inactive {
    background-color: rgba(230, 97, 87, 1);
    border-radius: 4px;
    padding: 4px 8px;
    width: 84px;
    display: inline-block;
    text-align: center;
}
</style>
