<template>
    <div class="profiles-card">
        <h3>Perfis</h3>
        <!-- Tabela -->
        <table class="profiles-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Quantidade De Usuários</th>
                    <th>Permissões</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="profile in profiles" :key="profile.id">
                    <td>{{ profile.name }}</td>
                    <td>{{ profile.total_users }}</td>
                    <td>
                        <!-- Exibir "Tudo", "Nenhuma" ou as permissões estilizadas -->
                        <template v-if="profile.permissions.length === 0">
                            <span class="permission">Nenhuma</span>
                        </template>
                        <template v-else-if="isAllPermissions(profile.permissions)">
                            <span class="permission">Tudo</span>
                        </template>
                        <template v-else>
                            <span v-for="permission in profile.permissions" :key="permission.id" class="permission">
                                {{ permission.name }}
                            </span>
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import apiClient from '../../api'; // Ajuste o caminho conforme necessário

// Tipo para uma permissão
interface Permission {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    pivot: {
        profile_id: number;
        permission_id: number;
    };
}

// Tipo para um perfil
interface Profile {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    total_users: number;
    permissions: Permission[];
}

// Tipo para a resposta da API
interface ApiResponse {
    data: Profile[];
}

export default defineComponent({
    data() {
        return {
            profiles: [] as Profile[], // Armazenar os perfis
            loading: true, // Estado de carregamento
        };
    },
    async mounted() {
        try {
            // Fazer a requisição à API e carregar os perfis
            const response: { data: ApiResponse } = await apiClient.get<ApiResponse>('/api/v1/profiles');
            this.profiles = response.data.data;
            this.loading = false;
        } catch (error) {
            console.error('Erro ao carregar os perfis:', error);
            this.loading = false;
        }
    },
    methods: {
        isAllPermissions(permissions: Permission[]): boolean {
            const allPermissions = ['Downloads', 'Avaliações', 'Erros', 'Feedbacks', 'Novas Funcionalidades'];
            const permissionNames = permissions.map((permission) => permission.name);
            // Verifica se todas as permissões estão presentes
            return allPermissions.every((perm) => permissionNames.includes(perm));
        },
    },
});
</script>

<style scoped>
.profiles-card {
    width: 933px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 16px;
    margin: 20px auto;
    text-align: left;
}

.profiles-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 16px;
}

.profiles-table th {
    background-color: #f4f4f4;
    padding: 8px;
    text-align: left;
    font-weight: bold;
    border-bottom: 2px solid #ddd;
}

.profiles-table td {
    padding: 8px;
    border-bottom: 1px solid #ddd;
}

.permission {
    background-color: rgba(91, 89, 255, 0.2);
    border-radius: 17px;
    padding: 5px 10px;
    margin-right: 5px;
    display: inline-block;
}
</style>
