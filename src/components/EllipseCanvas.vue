<template>
    <canvas ref="canvas"></canvas>
</template>

<script>
export default {
    name: "EllipseCanvas",
    mounted() {
        this.setCanvasSize();
        this.drawEllipses();
        window.addEventListener("resize", this.setCanvasSize); // Update on window resize
    },
    destroyed() {
        window.removeEventListener("resize", this.setCanvasSize); // Clean up on component destroy
    },
    methods: {
        setCanvasSize() {
            const canvas = this.$refs.canvas;
            // Set canvas size to match the window size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            this.drawEllipses(); // Re-draw ellipses when resizing
        },
        drawEllipses() {
            const canvas = this.$refs.canvas;
            const ctx = canvas.getContext("2d");

            // Get the canvas width for positioning
            const canvasWidth = canvas.width;

            // Ellipse 1 Configuration (Positioned towards the right side)
            const ellipse1 = {
                width: 977,
                height: 977,
                top: -50, // 50px padding from the bottom
                left: canvasWidth - 877, // 50px padding from the right
                borderWidth: 1,
                borderColor: "#5452FC"
            };

            // Ellipse 2 Configuration (Positioned towards the right side)
            const ellipse2 = {
                width: 855,
                height: 855,
                top: 13, // 50px padding from the bottom
                left: canvasWidth - 755 - 59, // 50px padding from the right
                borderWidth: 1,
                borderColor: "#5452FC"
            };

            // Clear canvas before drawing
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Ellipse 1
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(
                ellipse1.left + ellipse1.width / 2,
                ellipse1.top + ellipse1.height / 2,
                ellipse1.width / 2,
                ellipse1.height / 2,
                0,
                0,
                2 * Math.PI
            );
            ctx.lineWidth = ellipse1.borderWidth;
            ctx.strokeStyle = ellipse1.borderColor;
            ctx.stroke();
            ctx.restore();

            // Draw Ellipse 2
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(
                ellipse2.left + ellipse2.width / 2,
                ellipse2.top + ellipse2.height / 2,
                ellipse2.width / 2,
                ellipse2.height / 2,
                0,
                0,
                2 * Math.PI
            );
            ctx.lineWidth = ellipse2.borderWidth;
            ctx.strokeStyle = ellipse2.borderColor;
            ctx.stroke();
            ctx.restore();
        }
    }
};
</script>

<style scoped>
canvas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    /* Canvas stays in the background */
    display: block;
    /* Prevents any unwanted spaces below the canvas */
}
</style>