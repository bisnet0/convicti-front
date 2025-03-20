<template>
    <div class="users-card">
        <div>
            <h3>Usuários
                <!-- Botão de adicionar usuário -->
                <button class="add-user-button" @click="openAddModal">
                    +
                </button>
            </h3>

            <!-- Modal de criação/edição de usuário -->
            <ModalUsers v-show="showModal" @close="closeModal" :user="selectedUser" />
        </div>

        <!-- Tabela -->
        <table class="users-table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Perfil</th>
                    <th>Status</th>
                    <th>Ações</th>
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
                    <td>
                        <button class="edit-profile-button" @click="openEditModal(user)">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_205_654)">
                                    <path
                                        d="M10.8828 0.542461L3.77076 7.65446C3.49913 7.92463 3.28378 8.24599 3.13719 8.59995C2.9906 8.95391 2.91568 9.33343 2.91676 9.71654V10.5C2.91676 10.6547 2.97822 10.803 3.08761 10.9124C3.19701 11.0218 3.34538 11.0833 3.50009 11.0833H4.28351C4.66662 11.0844 5.04614 11.0095 5.4001 10.8629C5.75406 10.7163 6.07543 10.5009 6.34559 10.2293L13.4576 3.11729C13.7985 2.77556 13.9899 2.31257 13.9899 1.82988C13.9899 1.34718 13.7985 0.884195 13.4576 0.542461C13.1109 0.211065 12.6498 0.026123 12.1702 0.026123C11.6906 0.026123 11.2294 0.211065 10.8828 0.542461ZM12.6328 2.29246L5.52076 9.40446C5.19183 9.73138 4.74726 9.91541 4.28351 9.91663H4.08343V9.71654C4.08464 9.25279 4.26867 8.80822 4.59559 8.47929L11.7076 1.36729C11.8322 1.24827 11.9979 1.18185 12.1702 1.18185C12.3425 1.18185 12.5082 1.24827 12.6328 1.36729C12.7552 1.49009 12.824 1.65645 12.824 1.82988C12.824 2.00331 12.7552 2.16966 12.6328 2.29246Z"
                                        fill="#5B59FF" />
                                    <path
                                        d="M13.4167 5.23775C13.262 5.23775 13.1136 5.29921 13.0042 5.40861C12.8948 5.518 12.8333 5.66637 12.8333 5.82108V8.75H10.5C10.0359 8.75 9.59075 8.93437 9.26256 9.26256C8.93437 9.59075 8.75 10.0359 8.75 10.5V12.8333H2.91667C2.45254 12.8333 2.00742 12.649 1.67923 12.3208C1.35104 11.9926 1.16667 11.5475 1.16667 11.0833V2.91667C1.16667 2.45254 1.35104 2.00742 1.67923 1.67923C2.00742 1.35104 2.45254 1.16667 2.91667 1.16667H8.19117C8.34588 1.16667 8.49425 1.10521 8.60365 0.995812C8.71304 0.886416 8.7745 0.738043 8.7745 0.583333C8.7745 0.428624 8.71304 0.280251 8.60365 0.170854C8.49425 0.0614582 8.34588 0 8.19117 0L2.91667 0C2.1434 0.00092625 1.40208 0.308515 0.855295 0.855295C0.308515 1.40208 0.00092625 2.1434 0 2.91667L0 11.0833C0.00092625 11.8566 0.308515 12.5979 0.855295 13.1447C1.40208 13.6915 2.1434 13.9991 2.91667 14H9.53342C9.91662 14.0011 10.2962 13.9262 10.6503 13.7796C11.0043 13.633 11.3258 13.4177 11.5961 13.146L13.1454 11.5955C13.4171 11.3253 13.6325 11.004 13.7792 10.65C13.9259 10.2961 14.0009 9.91656 14 9.53342V5.82108C14 5.66637 13.9385 5.518 13.8291 5.40861C13.7198 5.29921 13.5714 5.23775 13.4167 5.23775ZM10.7713 12.3212C10.5368 12.5551 10.2402 12.717 9.91667 12.7878V10.5C9.91667 10.3453 9.97812 10.1969 10.0875 10.0875C10.1969 9.97812 10.3453 9.91667 10.5 9.91667H12.7896C12.7174 10.2396 12.5557 10.5355 12.3229 10.7707L10.7713 12.3212Z"
                                        fill="#5B59FF" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_205_654">
                                        <rect width="14" height="14" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import apiClient from '../../api';
import ModalUsers from '../modals/ModalUsers.vue';

interface Profile {
    id: number;
    name: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    active: boolean;
    profile_id: number;
    profile: Profile | null;
}

interface ApiResponse {
    data: User[];
}

export default defineComponent({
    components: {
        ModalUsers,
    },
    data() {
        return {
            users: [] as User[], // Lista de usuários
            showModal: false, // Controle de exibição do modal
            selectedUser: null as User | null, // Usuário selecionado para edição
            loading: true, // Estado de carregamento
        };
    },
    async mounted() {
        try {
            // Requisição para carregar usuários
            const response: { data: ApiResponse } = await apiClient.get<ApiResponse>('/api/v1/users');
            this.users = response.data.data;
            this.loading = false;
        } catch (error) {
            console.error('Erro ao carregar os usuários:', error);
            this.loading = false;
        }
    },
    methods: {
        openAddModal() {
            // Limpa o usuário selecionado e abre o modal
            this.selectedUser = null;
            this.showModal = true;
        },
        openEditModal(user: User) {
            // Define o usuário selecionado e abre o modal
            this.selectedUser = { ...user }; // Clona os dados do usuário
            this.showModal = true;
        },
        closeModal() {
            // Fecha o modal e reseta o usuário selecionado
            this.showModal = false;
            this.selectedUser = null;
        },
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

.users-card h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.add-user-button {
    display: inline-block;
    width: 24px;
    height: 24px;
    background-color: rgba(84, 82, 252, 1);
    color: white;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 24px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin-left: auto;
}

.add-user-button:hover {
    background-color: rgba(84, 82, 252, 0.8);
}

.edit-profile-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.edit-profile-button svg {
    transition: transform 0.2s ease, opacity 0.2s ease;
}

.edit-profile-button:hover svg {
    transform: scale(1.1);
    opacity: 0.8;
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
