/* eslint-disable no-undef */
import { defineConfig , loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";


export default({mode}) => {
    // eslint-disable-next-line no-undef
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    // https://vitejs.dev/config/
    return defineConfig({
        server: {
            proxy: {
                "/api": {
                    target: process.env.VITE_API_URL, //for vite this is
                    secure: false,
                },
            },
            port: 3000,
        },
        plugins: [react()],
    });
   
}