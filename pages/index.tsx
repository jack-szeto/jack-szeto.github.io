import { Banner } from "@components/banner/banner";
import { ItemGrid } from "@components/item-grid/item-grid";
import { Box, Group, ScrollArea, useMantineColorScheme } from "@mantine/core";
import Vector2 from "@util/types/vector2";
import React, { useCallback, useRef, useState } from "react";
import styles from "./index.module.scss";

const HomePage = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";

    const scrollChange = (position: { x: number; y: number }) => {};

    return (
        <div className={styles.homePage}>
            {/* <ScrollArea
                onScrollPositionChange={scrollChange}
                style={{
                    position: "absolute",
                    inset: "0 0 0 0",
                }}
            > */}
            <Banner />

            <ItemGrid />
            {/* </ScrollArea> */}
        </div>
    );
};
export default HomePage;
