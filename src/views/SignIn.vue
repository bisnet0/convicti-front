<template>
    <div class="logo-container">
        <div class="logo">
            <img src="../assets/logo.svg" alt="Logo" />
        </div>
        <p class="convicti-title">
            <span class="convic">CONVIC</span><span class="ti">TI</span>
        </p>
    </div>
    <div class="container">
        <!-- Logo and convicti-title text -->

        <div class="signin">
            <!-- Title and Subtitle -->
            <div class="text-container">
                <h1 class="title">Bem-vindo de Volta</h1>
                <p class="subtitle">Insira sua credenciais para acessar a plataforma</p>
            </div>

            <!-- Sign-in Form -->
            <form @submit.prevent="handleSignIn" class="form-container">
                <div class="input-group">
                    <input type="email" v-model="email" placeholder="Seu e-mail" class="input-field" required />
                </div>
                <div class="input-group">
                    <input type="password" v-model="password" placeholder="Sua senha" class="input-field" required />
                </div>
                <button type="submit" class="signin-button">Entrar</button>
            </form>
        </div>

    </div>
    <!-- Image Section -->
    <div class="image-container">
        <img src="../assets/dashboard.png" alt="SignIn Image" class="signin-image" />
    </div>
    <div class="ellipse-container">
        <EllipseCanvas />
    </div>
</template>

<script>
import EllipseCanvas from '../components/EllipseCanvas.vue';
import apiClient from '../api'; // 🔹 Adicione esta linha

export default {
    components: {
        EllipseCanvas,
    },

    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async handleSignIn() {
            try {
                const response = await apiClient.post('/oauth/token', {
                    grant_type: 'password',
                    client_id: import.meta.env.VITE_APP_CLIENT_ID,
                    client_secret: import.meta.env.VITE_APP_CLIENT_SECRET,
                    username: this.email,
                    password: this.password,

                });

                localStorage.setItem('access_token', response.data.access_token); // Salva o token
                this.$router.push('/dashboard'); // Redireciona o usuário
            } catch (error) {
                console.error('Erro ao fazer login:', error);
                alert('Erro ao autenticar. Verifique suas credenciais.');
            }
        }
    }
};
</script>


<style scoped>
.container {
    margin-left: 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50vh;
    position: absolute;
    left: 0;
}


.logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 32px;
    left: 44px;
}

.logo img {
    width: 100px;
    /* Adjust the size of your logo as needed */
}

.convicti-title {
    width: 94px;
    height: 27px;
    position: absolute;
    top: 86px;
    font-family: 'Nunito', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0;
    color: transparent;
    /* Set transparent so the color is applied through spans */
}

.convic {
    color: #000000;
    /* Black color for 'CONVIC' */
}

.ti {
    color: #5452FC;
    /* Blue color for 'TI' */
}

.signin {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 50px;
    height: calc(-200vh);
}

.text-container {
    margin-bottom: 20px;
}

.title {
    height: 33px;
    color: black;
    font-size: 24px;
    font-weight: bold;

}

.subtitle {
    height: 16px;
    color: gray;
    font-size: 12px;
}

.form-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* Adds space between the inputs */
}

.input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.input-field {
    width: 300px;
    height: 40px;
    border-radius: 6px;
    border: 1px solid #ccc;
    padding-left: 10px;
}

.signin-button {
    width: 300px;
    height: 40px;
    background-color: #5452fc;
    color: white;
    border: 1px solid #5452fc;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
}

.signin-button:hover {
    background-color: #4340e6;
}

.image-container {
    position: absolute;


    top: 50%;
    /* Ajuste para centralizar verticalmente (ou conforme necessário) */
    right: 0;
    /* Posiciona a imagem à direita */
    transform: translateY(-50%);
    /* Centraliza a imagem verticalmente */
    /* display: none; */
}

.signin-image {
    width: 992px;
    height: 644px;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    position: relative;

    /* Agora a posição é relativa ao .image-container */
}
</style>
