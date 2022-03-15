import { Card, Text, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

export const Item = ({thumnail, thumnailBlur, title, description}: {thumnail: string, thumnailBlur?: string, title: string, description: string}) => {
    const theme = useMantineTheme();
    
    return <div className={styles.item}>
        <Card shadow="sm" p="lg" style={{height: "100%"}}>
            <Card.Section>
                <figure className={styles.thumnail}>
                    <Image src={thumnail} alt="" placeholder="blur" objectFit="cover" layout="fill" blurDataURL={thumnailBlur} />
                </figure>
            </Card.Section>

            <Text size="lg" color={"teal"} weight={500} style={{marginTop: theme.spacing.sm}}>{title}</Text>

            <Text>{description}</Text>
        </Card>
    </div>;
};
