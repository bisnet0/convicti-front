<template>
    <div class="sidebar">
        <!-- Logo Section -->
        <div class="logo">
            <img src="../assets/logo.svg" alt="Logo" />
        </div>

        <!-- Text below Logo -->
        <div class="text">
            <p>PAINEL DE DADOS</p>
        </div>

        <!-- Links Section -->
        <div class="links">
            <router-link to="/dashboard" class="link-item">
                <i class="fa fa-tachometer-alt"></i> Dashboard
            </router-link>
        </div>

        <!-- Bottom Links (Agora com router-link, igual à seção de links) -->
        <div class="bottom-links">
            <router-link to="/settings" class="link-item">
                <i class="fa fa-cogs"></i> Configurações
            </router-link>
            <router-link to="/quit" class="link-item">
                <i class="fa fa-sign-out-alt"></i> Sair
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
    border-radius: 12px 0 0 12px;
    width: 240px;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.logo {
    margin-top: 40px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo img {
    width: 50%;
    margin-bottom: 20px;
}

.text p {
    color: #272964;
    font-size: 14px;
    text-align: center;
    margin-bottom: 40px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
}

.links {
    width: 100%;
    margin-bottom: 20px;
}

.link-item {
    display: flex;
    align-items: center;
    padding: 10px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    color: #2F4565;
    text-decoration: none;
    transition: background-color 0.3s;
    gap: 10px;
    width: 100%;
}

.link-item.router-link-active {
    background-color: rgba(222, 230, 248, 1);
}

.link-item:hover {
    background-color: rgba(222, 230, 248, 1);
}

.link-item i {
    margin-right: 10px;
}

.bottom-links {
    margin-top: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.bottom-links .link-item {
    margin-bottom: 10px;
}
</style>
