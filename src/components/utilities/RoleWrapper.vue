<template>
    <div v-if="hasPermission">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        permissions: {
            type: Array,
            required: true,
        },
        userPermissions: {
            type: Array,
            required: true,
        },
    },
    computed: {
        hasPermission() {
            return this.permissions.some(permission =>
                this.userPermissions.includes(permission)
            );
        },
    },
};
</script>
