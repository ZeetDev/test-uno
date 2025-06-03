// uno.config.ts
import { defineConfig, presetWind3, presetAttributify, presetIcons, presetWebFonts } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerVariantGroup from "@unocss/transformer-variant-group";
import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";
import presetTagify from "@unocss/preset-tagify";

export default defineConfig({
    presets: [presetWind3(), presetAttributify(), presetIcons(), presetWebFonts(), presetTagify()],
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
    theme: {
        // container working
        container: {
            center: true,
            padding: "15px",
            maxWidth: {
                sm: "540px",
                md: "720px",
                lg: "960px",
                xl: "1140px",
                "2xl": "1200px",
            },
        },

        // colors working
        colors: {
            primary: "hsl(var(--dd-primary))",
            secondary: "hsl(var(--dd-secondary))",
            tertiary: "hsl(var(--dd-tertiary))",
            alternateWhite: "hsl(var(--dd-alternateWhite))",
            border: "hsl(var(--dd-border))",
            black700: "hsl(var(--dd-black700))",
            black800: "hsl(var(--dd-black800))",
            black900: "hsl(var(--dd-black900))",
            bodyText: "hsl(var(--dd-bodyText))",
            body: "hsl(var(--dd-body))",
        },

        // font size working
        fontSize: {
            h1L: [
                "var(--dd-fontSizeH1L)",
                {
                    lineHeight: "var(--dd-lineHeightH1L)",
                    fontWeight: "var(--dd-fontWeightH1L)",
                    letterSpacing: "var(--dd-letterSpacingH1L)",
                },
            ],
            h1: [
                "var(--dd-fontSizeH1)",
                {
                    lineHeight: "var(--dd-lineHeightH1)",
                    fontWeight: "var(--dd-fontWeightH1)",
                    letterSpacing: "var(--dd-letterSpacingH1)",
                },
            ],
            h2: [
                "var(--dd-fontSizeH2)",
                {
                    lineHeight: "var(--dd-lineHeightH2)",
                    fontWeight: "var(--dd-fontWeightH2)",
                    letterSpacing: "var(--dd-letterSpacingH2)",
                },
            ],
            h3: [
                "var(--dd-fontSizeH3)",
                {
                    lineHeight: "var(--dd-lineHeightH3)",
                    fontWeight: "var(--dd-fontWeightH3)",
                    letterSpacing: "var(--dd-letterSpacingH3)",
                },
            ],
            h4: [
                "var(--dd-fontSizeH4)",
                {
                    lineHeight: "var(--dd-lineHeightH4)",
                    fontWeight: "var(--dd-fontWeightH4)",
                    letterSpacing: "var(--dd-letterSpacingH4)",
                },
            ],
            h5: [
                "var(--dd-fontSizeH5)",
                {
                    lineHeight: "var(--dd-lineHeightH5)",
                    fontWeight: "var(--dd-fontWeightH5)",
                    letterSpacing: "var(--dd-letterSpacingH5)",
                },
            ],
            h6: [
                "var(--dd-fontSizeH6)",
                {
                    lineHeight: "var(--dd-lineHeightH6)",
                    fontWeight: "var(--dd-fontWeightH6)",
                    letterSpacing: "var(--dd-letterSpacingH6)",
                },
            ],
            bodyXl: [
                "var(--dd-fontSizeBodyXl)",
                {
                    lineHeight: "var(--dd-lineHeightBodyXl)",
                    fontWeight: "var(--dd-fontWeightBodyXl)",
                },
            ],
            bodyL: [
                "var(--dd-fontSizeBodyL)",
                {
                    lineHeight: "var(--dd-lineHeightBodyL)",
                    fontWeight: "var(--dd-fontWeightBodyL)",
                },
            ],
            base: [
                "var(--dd-fontSizeBase)",
                {
                    lineHeight: "var(--dd-lineHeightBase)",
                    fontWeight: "var(--dd-fontWeightBase)",
                },
            ],
            bodyS: [
                "var(--dd-fontSizeBodyS)",
                {
                    lineHeight: "var(--dd-lineHeightBodyS)",
                    fontWeight: "var(--dd-fontWeightBodyS)",
                },
            ],
            bodyXs: [
                "var(--dd-fontSizeBodyXs)",
                {
                    lineHeight: "var(--dd-lineHeightBodyXs)",
                    fontWeight: "var(--dd-fontWeightBodyXs)",
                },
            ],
            buttonL: [
                "var(--dd-fontSizeButtonL)",
                {
                    lineHeight: "var(--dd-lineHeightButtonL)",
                    fontWeight: "var(--dd-fontWeightButtonL)",
                    letterSpacing: "var(--dd-letterSpacingButtonL)",
                },
            ],
            buttonM: [
                "var(--dd-fontSizeButtonM)",
                {
                    lineHeight: "var(--dd-lineHeightButtonM)",
                    fontWeight: "var(--dd-fontWeightButtonM)",
                    letterSpacing: "var(--dd-letterSpacingButtonM)",
                },
            ],
            buttonS: [
                "var(--dd-fontSizeButtonS)",
                {
                    lineHeight: "var(--dd-lineHeightButtonS)",
                    fontWeight: "var(--dd-fontWeightButtonS)",
                    letterSpacing: "var(--dd-letterSpacingButtonS)",
                },
            ],
        },
    }
});
