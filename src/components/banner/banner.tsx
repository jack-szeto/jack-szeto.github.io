import { Text, Title } from "@mantine/core";
import React from "react";
import styles from "./styles.module.scss";

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.title}>
                <Text
                    align="center"
                    variant="gradient"
                    gradient={{ from: "cyan", to: "teal", deg: 45 }}
                >
                    <Title order={1}>Jack Szeto aka Fhy</Title>
                </Text>
            </div>
        </div>
    );
};
