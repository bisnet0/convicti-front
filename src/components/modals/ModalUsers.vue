<template>
    <div class="modal">
        <div class="modal-content">
            <h3>{{ user ? 'Editar Usuário' : 'Novo Usuário' }}</h3>
            <!-- Input: Nome do Usuário -->
            <input type="text" placeholder="Nome do Usuário" v-model="userName" class="input-user" />
            <!-- Input: Email -->
            <input type="email" placeholder="E-mail" v-model="userEmail" class="input-user"
                :class="{ 'input-error': emailError }" />
            <small v-if="emailError" class="error-message">Você deve alterar o e-mail.</small>
            <!-- Span: Perfis -->
            <div class="dash">
                <span>Perfil</span>
            </div>
            <div class="profiles">
                <div v-for="profile in profiles" :key="profile.id" class="profile-item">
                    <label>
                        {{ profile.name }}
                        <input type="radio" :value="profile.id" v-model="selectedProfileId" />
                    </label>
                </div>
            </div>
            <!-- Botões -->
            <div class="modal-buttons">
                <button class="btn voltar" @click="closeModal">Voltar</button>
                <button class="btn adicionar" @click="saveUser">
                    {{ user ? 'Salvar' : 'Adicionar' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import apiClient from '../../api';

interface Profile {
    id: number;
    name: string;
}

interface User {
    id: number;
    name: string;
    email: string;
    profile_id: number;
}

export default defineComponent({
    props: {
        user: {
            type: Object as () => User | null,
            default: null,
        },
    },
    setup(props, { emit }) {
        // Dados do formulário
        const userName = ref('');
        const userEmail = ref('');
        const originalEmail = ref(''); // Armazena o e-mail original
        const profiles = ref<Profile[]>([]);
        const selectedProfileId = ref<number | null>(null);
        const emailError = ref(false); // Indica se o e-mail não foi alterado

        // Fechar modal
        const closeModal = () => {
            emit('close');
        };

        // Carregar perfis ao montar o componente
        const loadProfiles = async () => {
            try {
                const response = await apiClient.get('/api/v1/profiles');
                profiles.value = response.data.data; // Carrega os perfis
            } catch (error) {
                console.error('Erro ao carregar os perfis:', error);
            }
        };

        // Atualizar campos ao receber um usuário para edição
        watch(
            () => props.user,
            (newUser) => {
                if (newUser) {
                    userName.value = newUser.name;
                    userEmail.value = newUser.email;
                    originalEmail.value = newUser.email; // Salva o e-mail original
                    selectedProfileId.value = newUser.profile_id;
                } else {
                    // Reseta os valores para um novo usuário
                    userName.value = '';
                    userEmail.value = '';
                    originalEmail.value = '';
                    selectedProfileId.value = null;
                }
            },
            { immediate: true }
        );

        // Salvar usuário
        const saveUser = async () => {
            // Validação: Checar se o e-mail foi alterado durante a edição
            if (props.user && userEmail.value === originalEmail.value) {
                emailError.value = true; // Mostra erro se o e-mail não foi alterado
                return;
            }
            emailError.value = false;

            if (!userName.value.trim() || !userEmail.value.trim() || !selectedProfileId.value) {
                console.error('Por favor, preencha todos os campos e selecione um perfil.');
                return;
            }

            try {
                if (props.user) {
                    // Atualizar usuário existente
                    await apiClient.put(`/api/v1/users/${props.user.id}`, {
                        name: userName.value.trim(),
                        profile_id: selectedProfileId.value, // ID do perfil selecionado
                        email: userEmail.value.trim(), // E-mail atualizado
                    });
                    console.log('Usuário atualizado com sucesso.');
                } else {
                    // Criar novo usuário
                    await apiClient.post('/api/v1/users', {
                        name: userName.value.trim(),
                        profile_id: selectedProfileId.value, // ID do perfil selecionado
                        email: userEmail.value.trim(),
                    });
                    console.log('Usuário criado com sucesso.');
                }
                closeModal();
            } catch (error) {
                console.error('Erro ao salvar o usuário:', error);
            }
        };

        // Montar
        onMounted(() => {
            loadProfiles();
        });

        return {
            userName,
            userEmail,
            originalEmail,
            profiles,
            selectedProfileId,
            emailError,
            closeModal,
            saveUser,
        };
    },
});
</script>

<style scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.247);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-content {
    background: white;
    border-radius: 8px;
    width: 506px;
    padding: 20px;
    text-align: center;
}

.modal-content h3 {
    text-align: left;
}

.input-user {
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
}

.input-error {
    border-color: red;
}

.error-message {
    color: red;
    font-size: 12px;
    margin-bottom: 10px;
    text-align: left;
    display: block;
}

.dash span {
    display: block;
    text-align: left;
    font-size: small;
    color: grey;
    margin-top: 10px;
    margin-bottom: 5px;
}

.profiles {
    margin-top: 10px;
    text-align: left;
}

.profile-item {
    margin-bottom: 10px;
}

.profile-item label {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.profile-item input[type='radio'] {
    margin-right: 10px;
    accent-color: rgba(127, 67, 255, 1);
}

.modal-buttons {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.btn.voltar {
    width: 173px;
    height: 40px;
    background-color: rgb(236, 236, 236);
    border: none;
    border-radius: 5px;
    color: rgba(96, 96, 96, 1);
    cursor: pointer;
}

.btn.adicionar {
    width: 259px;
    height: 40px;
    background-color: rgba(20, 0, 255, 0.2);
    border: none;
    border-radius: 5px;
    color: rgba(127, 67, 255, 1);
    cursor: pointer;
}
</style>
