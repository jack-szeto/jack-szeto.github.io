import { Text, Title, useMantineTheme } from "@mantine/core";
import back from "@assets/images/parallax/back.png";
import front2 from "@assets/images/parallax/front 2.png";
import frontTop from "@assets/images/parallax/front top.png";
import front from "@assets/images/parallax/front.png";
import light2 from "@assets/images/parallax/light 2.png";
import light from "@assets/images/parallax/light.png";
import normal from "@assets/images/parallax/normal.png";
import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import BubbleEffect from "@components/effects/bubble/bubble.effect";
import Rand2 from "src/util/types/rand2";
import Vector2 from "src/util/types/vector2";

export const Banner = () => {
    const theme = useMantineTheme();
    return (
        <div className={styles.banner}>
            <div className={styles.layer}>
                <Image
                    src={back}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 100%"}
                    placeholder="blur"
                />
            </div>
            <div className={styles.layer}>
                <Image
                    src={light2}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 0%"}
                    placeholder="blur"
                />
            </div>
            <div className={styles.layer}>
                <div className={styles.title}>
                    <Title order={1}>
                        <span>Jack Szeto</span> <span>aka Fhy</span>
                    </Title>
                </div>
            </div>
            <div className={styles.layer}>
                <Image
                    src={normal}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 100%"}
                    placeholder="blur"
                />
            </div>
            <div className={styles.layer}>
                <Image
                    src={light}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 0%"}
                    placeholder="blur"
                />
            </div>
            <div className={styles.layer}>
                <Image
                    src={front2}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 100%"}
                    placeholder="blur"
                />
            </div>
            <div className={styles.layer}>
                <BubbleEffect
                    bubbleColor={theme.colors.teal[0]}
                    bubbleSize={new Rand2(20, 50)}
                    opacity={0.8}
                    thickness={1}
                    maxBubbleAmount={6}
                    direction={Vector2.up}
                    emissionRate={3}
                    speed={1}
                    arc={360}
                    radius={50}
                    rotation={0}
                    leftTime={1}
                    debug
                />
            </div>
            <div className={styles.layer}>
                <Image
                    src={front}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 100%"}
                    placeholder="blur"
                />
            </div>
            <div className={styles.layer}>
                <Image
                    src={frontTop}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 0%"}
                    placeholder="blur"
                />
            </div>
        </div>
    );
};
