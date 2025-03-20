<template>
    <div class="dashboard p-6 bg-gray-100 min-h-screen flex">
        <!-- Sidebar -->
        <Sidebar class="w-64" />

        <!-- Conteúdo principal da Dashboard -->
        <div class="main-content flex-1 p-6">
            <h1 class="stats-title">Estatísticas</h1>
            <!-- Estatísticas lado a lado -->
            <div class="card-container">
                <CardDownloads />
                <CardRates />
                <CardErrors />
            </div>

            <!-- Feedbacks -->
            <CardFeedbacks />

            <!-- Novas Funcionalidades -->
            <CardNewFeatures />
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

export default {
    components: {
        Sidebar,
        CardDownloads,
        CardRates,
        CardErrors,
        CardFeedbacks,
        CardNewFeatures,
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