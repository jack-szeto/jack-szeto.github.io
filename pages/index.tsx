import { Banner } from "@components/banner/banner";
import { ItemGrid } from "@components/item-grid/item-grid";
import {
    Box,
    Group,
    ScrollArea,
    useMantineColorScheme,
} from "@mantine/core";
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

                {/* <Group grow>
                    {[...new Array(10)].map((_,i) => (<Box key={i} sx={(theme)=>({backgroundColor: theme.colors.dark[i]})}>{i}</Box>))}
                </Group> */}

                <ItemGrid />
            </ScrollArea>
        </div>
    );
};
export default HomePage;
