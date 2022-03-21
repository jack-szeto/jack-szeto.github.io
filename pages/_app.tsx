import { AppProps } from "next/app";
import Head from "next/head";
import {
    ColorScheme,
    ColorSchemeProvider,
    MantineProvider,
} from "@mantine/core";
import "@styles/globals.scss";
import { useState } from "react";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    return (
        <>
            <Head>
                <title>Jack Szeto Portfolio</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <ColorSchemeProvider
                colorScheme={colorScheme}
                toggleColorScheme={toggleColorScheme}
            >
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        /** Put your mantine theme override here */
                        colorScheme: colorScheme,
                        colors: {
                            dark: [
                                "#CEC7DE",
                                "#9B95AA",
                                "#6B667A",
                                "#3F3A4C",
                                "#322b44",
                                "#251e38",
                                "#1e192e",
                                "#171323",
                                "#130c1e",
                                "#0C0319",
                            ],
                        },
                        fontFamily: "Mallanna, Verdana, sans-serif",
                        fontFamilyMonospace: "Monaco, Courier, monospace",
                        headings: {
                            fontFamily: "Mallanna, Verdana, sans-serif",
                        },
                    }}
                >
                    <Component {...pageProps} />
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}
