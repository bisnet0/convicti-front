<template>
    <div class="dashboard p-6 bg-gray-100 min-h-screen flex">
        <!-- Sidebar -->
        <Sidebar class="w-64" />

        <!-- Conteúdo principal da Dashboard -->
        <div class="main-content flex-1 p-6">
            <h1 class="stats-title">Estatísticas</h1>

            <!-- Estatísticas lado a lado -->
            <div class="card-container">
                <RoleWrapper :permissions="['Downloads']" :userPermissions="userPermissions">
                    <CardDownloads />
                </RoleWrapper>
                <RoleWrapper :permissions="['Avaliações']" :userPermissions="userPermissions">
                    <CardRates />
                </RoleWrapper>
                <RoleWrapper :permissions="['Erros']" :userPermissions="userPermissions">
                    <CardErrors />
                </RoleWrapper>
            </div>

            <!-- Feedbacks -->
            <RoleWrapper :permissions="['Feedbacks']" :userPermissions="userPermissions">
                <CardFeedbacks />
            </RoleWrapper>

            <!-- Novas Funcionalidades -->
            <RoleWrapper :permissions="['Novas Funcionalidades']" :userPermissions="userPermissions">
                <CardNewFeatures />
            </RoleWrapper>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import CardDownloads from '../components/cardsComponent/CardDownloads.vue';
import CardRates from '../components/cardsComponent/CardRates.vue';
import CardErrors from '../components/cardsComponent/CardErrors.vue';
import CardFeedbacks from '../components/cardsComponent/CardFeedbacks.vue';
import CardNewFeatures from '../components/cardsComponent/CardNewFeatures.vue';
import RoleWrapper from '../components/utilities/RoleWrapper.vue';
import apiClient from '../api';

export default {
    components: {
        Sidebar,
        CardDownloads,
        CardRates,
        CardErrors,
        CardFeedbacks,
        CardNewFeatures,
        RoleWrapper,
    },
    data() {
        return {
            userPermissions: [], // Armazena as permissões do usuário
        };
    },
    async mounted() {
        try {
            const response = await apiClient.get('/api/v1/me');
            this.userPermissions = response.data.data.user.profile.permissions.map(permission => permission.name);
        } catch (error) {
            console.error('Erro ao buscar permissões:', error);
        }
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
    width: 100%;
    gap: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
    /* Distributes cards evenly with space between */
    flex-wrap: wrap;
    /* Allows wrapping if there are too many cards */
}

.card-container>* {
    flex: 1;
    /* Makes cards take up equal space */
    min-width: 200px;
    /* Ensures cards don't shrink too much */
}
</style>
