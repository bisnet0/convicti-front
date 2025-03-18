<template>
    <div class="container">
        <!-- Logo -->
        <div class="logo">
            <img src="path_to_logo.png" alt="Logo" />
        </div>

        <div class="signin">
            <!-- Title and Subtitle -->
            <div class="text-container">
                <h1 class="title">Welcome Back</h1>
                <p class="subtitle">Insert your credentials</p>
            </div>

            <!-- Sign-in Form -->
            <form @submit.prevent="handleSignIn">
                <input type="email" v-model="email" placeholder="Email" class="input-field" required />
                <input type="password" v-model="password" placeholder="Password" class="input-field" required />
                <button type="submit" class="signin-button">Enter</button>
            </form>

            <!-- Bisneto Text -->
            <p class="bisneto">Bisneto</p>
        </div>

        <!-- Image Section -->
        <div class="image-container">
            <img src="path_to_image.jpg" alt="SignIn Image" class="signin-image" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        handleSignIn() {
            console.log('Sign In submitted with:', this.email, this.password);
            // Add your sign-in logic here
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    background-color: white;
}

.logo img {
    position: absolute;
    top: 32px;
    left: 44px;
}

.signin {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 50px;
}

.text-container {
    margin-bottom: 20px;
}

.title {
    width: 222px;
    height: 33px;
    color: black;
    font-size: 24px;
    font-weight: bold;
}

.subtitle {
    width: 256px;
    height: 16px;
    color: gray;
    font-size: 14px;
}

.input-field {
    width: 300px;
    height: 40px;
    border-radius: 6px;
    border: 1px solid #ccc;
    margin-bottom: 15px;
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

.bisneto {
    color: gray;
    font-size: 14px;
    margin-top: 10px;
}

.image-container {
    position: absolute;
    top: 94px;
    left: 593px;
}

.signin-image {
    width: 992px;
    height: 644px;
}
</style>