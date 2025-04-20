import { defineConfig } from "vite";

export default defineConfig({
  base: '/',
  server: {
    host: true, // Makes the server available on the local network
    port: 5173, // You can set the desired port
  },
});
