import { ProjectProp } from "@configs/project.config";
import { Button, Card, Text, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";

export const Item = ({
    id,
    project,
}: {
    id?: string;
    project: ProjectProp;
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
                            src={project.thumnail}
                            alt=""
                            placeholder="blur"
                            objectFit="cover"
                            layout="fill"
                            blurDataURL={project.thumnailBlur?.blurDataURL}
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
                    {project.name}
                </Text>

                <Text>{project.description}</Text>

                <div className={styles.grow}></div>

                <div className={styles.row}>
                    {project.type !== "game-jam" && (
                        <Button
                            disabled={project.link == undefined}
                            target={"_blank"}
                            component="a"
                            href={project.link}
                            fullWidth
                            variant="gradient"
                            gradient={{ from: "teal", to: "green", deg: 60 }}
                        >
                            Preview
                        </Button>
                    )}
                    {project.type === "game-jam" && (
                        <Button
                            disabled={project.link == undefined}
                            target={"_blank"}
                            component="a"
                            href={project.link}
                            fullWidth
                            variant="gradient"
                            gradient={{ from: "teal", to: "cyan", deg: 60 }}
                        >
                            Play
                        </Button>
                    )}
                </div>
            </Card>
        </div>
    );
};
