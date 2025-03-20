<template>
    <div class="modal">
        <div class="modal-content">
            <h3>Novo Perfil</h3>
            <input type="text" placeholder="Novo Perfil" v-model="profileName" class="input-profile" />
            <div class="dash"><span>Dashboard</span></div>
            <div class="permissions">
                <div v-for="permission in permissions" :key="permission.id" class="permission-item">
                    <span>{{ permission.name }}</span>
                    <ToggleSwitch v-model="permission.enabled" />
                </div>

            </div>
            <div class="modal-buttons">
                <button class="btn voltar" @click="closeModal">Voltar</button>
                <button class="btn adicionar" @click="saveProfile">
                    {{ profile ? 'Salvar' : 'Adicionar' }}
                </button>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

interface Profile {
    id: number;
    name: string;
    permissions: number[];
}
import apiClient from '../../api';
import ToggleSwitch from '../ToggleSwitch.vue';

export default defineComponent({
    components: {
        ToggleSwitch,
    },
    props: {
        profile: {
            type: Object as () => Profile | null,
            default: null,
        },
    },


    setup(props, { emit }) {
        const profileName = ref('');
        const permissions = ref([
            { id: 1, name: 'Downloads', enabled: false },
            { id: 2, name: 'Avaliações', enabled: false },
            { id: 3, name: 'Erros', enabled: false },
            { id: 4, name: 'Feedbacks', enabled: false },
            { id: 5, name: 'Novas Funcionalidades', enabled: false },
        ]);

        watch(
            () => props.profile,
            (newProfile) => {
                if (newProfile) {
                    profileName.value = newProfile.name;
                    permissions.value.forEach((permission) => {
                        permission.enabled = newProfile.permissions.some((p) => p === permission.id);
                    });
                }
            },
            { immediate: true }
        );

        const closeModal = () => emit('close');

        const saveProfile = async () => {
            const selectedPermissions = permissions.value
                .filter((permission) => permission.enabled)
                .map((permission) => permission.id);

            try {
                if (props.profile) {
                    // Atualizar perfil existente
                    await apiClient.put(`/api/v1/profiles/${props.profile.id}`, {
                        name: profileName.value,
                        permissions: selectedPermissions,
                    });
                    console.log('Perfil atualizado com sucesso');
                } else {
                    // Criar novo perfil
                    await apiClient.post('/api/v1/profiles', {
                        name: profileName.value,
                        permissions: selectedPermissions,
                    });
                    console.log('Perfil criado com sucesso');
                }
                closeModal(); // Fecha o modal após salvar
            } catch (error) {
                console.error('Erro ao salvar o perfil:', error);
            }
        };

        return {
            profileName,
            permissions,
            closeModal,
            saveProfile,
        };
    }

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

.dash span {
    display: block;
    text-align: left;
    font-size: small;
    color: grey;
}

.input-profile {
    width: 100%;
    height: 40px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 6px;
}

.permissions {
    margin-top: 20px;
    text-align: left;
}

.permission-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
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
