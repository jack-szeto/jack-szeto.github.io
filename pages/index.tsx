import { Banner } from "@components/banner/banner";
import { ItemGrid } from "@components/item-grid/item-grid";
import { ScrollArea } from "@mantine/core";
import React from "react";
import styles from "./index.module.scss";

const HomePage = () => {
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
