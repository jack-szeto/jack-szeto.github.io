import { Button, Card, Text, useMantineTheme } from "@mantine/core";
import { useInterval } from "@mantine/hooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Wave from "react-wavify";
import styles from "./styles.module.scss";

export const Item = ({
    id,
    thumnail,
    thumnailBlur,
    title,
    description,
}: {
    id?: string;
    thumnail: StaticImageData;
    thumnailBlur?: StaticImageData;
    title: string;
    description: string;
}) => {
    const theme = useMantineTheme();

    return (
        <div className={styles.item}>
            <Card
                className={styles.card}
                shadow="sm"
                p="lg"
                style={{ height: "100%" }}
            >
                <Card.Section>
                    <figure className={styles.thumnail}>
                        <Image
                            src={thumnail}
                            alt=""
                            placeholder="blur"
                            objectFit="cover"
                            layout="fill"
                            blurDataURL={thumnailBlur?.blurDataURL}
                        />
                    </figure>
                </Card.Section>

                <Text
                    size="lg"
                    color={"teal"}
                    weight={800}
                    variant="gradient"
                    gradient={{ from: "cyan", to: "teal", deg: 60 }}
                    style={{ marginTop: theme.spacing.sm }}
                >
                    {title}
                </Text>

                <Text>{description}</Text>

                <div className={styles.grow}></div>

                <div className={styles.row}>
                    <Button fullWidth variant="gradient" gradient={{ from: 'teal', to: 'cyan', deg: 60 }}>Preview</Button>
                    <Button fullWidth variant="gradient" gradient={{ from: 'teal', to: 'cyan', deg: 60 }}>Play</Button>
                </div>
            </Card>
        </div>
    );
};
