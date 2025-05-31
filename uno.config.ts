// uno.config.ts
import { defineConfig, presetWind3, presetAttributify, presetIcons, presetWebFonts } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";

export default defineConfig({
    presets: [presetWind3(), presetAttributify(), presetIcons(), presetWebFonts()],
    transformers: [
        transformerDirectives(),
        transformerCompileClass(),
        transformerVariantGroup(),
        transformerAttributifyJsx(),
    ],
    content: {
        filesystem: [
            "./{app,components,lib,pages}/**/*.{js,ts,jsx,tsx,css,scss}",
            "./src/**/*.{js,ts,jsx,tsx,css,scss}",
        ],
    },
});
