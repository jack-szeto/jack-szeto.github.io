import { Banner } from "@components/banner/banner";
import { ItemGrid } from "@components/item-grid/item-grid";
import {
    ActionIcon,
    Group,
    ScrollArea,
    useMantineColorScheme,
} from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";
import React from "react";
import styles from "./index.module.scss";

const HomePage = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    return (
        <div className={styles.homePage}>
            <ScrollArea
                onScrollPositionChange={() => {}}
                style={{
                    position: "absolute",
                    inset: "0 0 0 0",
                }}
            >
                <Banner />

                <ItemGrid />
            </ScrollArea>
        </div>
    );
};
export default HomePage;
