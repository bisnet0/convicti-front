<template>
    <div class="dashboard p-6 bg-gray-100 min-h-screen flex">
        <!-- Sidebar -->
        <Sidebar class="w-64" />

        <!-- Conteúdo principal da Dashboard -->
        <div class="main-content flex-1 p-6">
            <h1 class="stats-title">Configurações</h1>
            <!-- Estatísticas lado a lado -->
            <div class="card-container">
                <Profiles />
            </div>

            <!-- Users -->
            <Users />

        </div>
    </div>
</template>

<script>
import Users from '../components/settings/Users.vue';
import Sidebar from '../components/Sidebar.vue';
import Profiles from '../components/settings/Profiles.vue';

export default {
    components: {
        Sidebar,
        Profiles,
        Users,
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
</style>