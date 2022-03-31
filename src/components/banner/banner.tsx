import { Text, Title, useMantineTheme } from "@mantine/core";
import back from "@assets/images/parallax/back.png";
import front2 from "@assets/images/parallax/front 2.png";
import frontTop from "@assets/images/parallax/front top.png";
import front from "@assets/images/parallax/front.png";
import light2 from "@assets/images/parallax/light 2.png";
import light from "@assets/images/parallax/light.png";
import normal from "@assets/images/parallax/normal.png";
import Image from "next/image";
import React, {
    CSSProperties,
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import styles from "./styles.module.scss";
import BubbleEffect from "@components/effects/bubble/bubble.effect";
import Rand2 from "src/util/types/rand2";
import Vector2 from "src/util/types/vector2";
import { motion, useViewportScroll } from "framer-motion";

type ParallaxLayerProps = {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    progress: number;
    speed: Vector2;
};
const ParallaxLayer = (props: ParallaxLayerProps) => {
    // const progress = Math.max(0, Math.min(1, props.progress));
    const progress = props.progress;
    return (
        <div className={props.className} style={{ ...props.style }}>
            <motion.div
                style={{
                    position: "absolute",
                    inset: 0,
                    x: props.speed.multiply(progress).x,
                    y: props.speed.multiply(progress).y,
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    {props.children}
                </div>
            </motion.div>
        </div>
    );
};

export const Banner = () => {
    const theme = useMantineTheme();
    const bannerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useViewportScroll();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        scrollY.onChange((y) => {
            const react = bannerRef.current?.getBoundingClientRect();
            if (react) {
                // setProgress(() => (y / (react?.bottom - react?.top)));
                setProgress(() =>
                    // Math.max(react.top, Math.min(react.bottom, y))
                    y - react.top
                );
            }
        });
        return () => {
            scrollY.clearListeners();
        };
    }, []);

    return (
        <div ref={bannerRef} className={styles.banner}>
            <ParallaxLayer
                className={styles.layer}
                progress={progress}
                speed={new Vector2(0, 0.5)}
            >
                <Image
                    src={back}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 100%"}
                    placeholder="blur"
                />
            </ParallaxLayer>
            <ParallaxLayer
                className={styles.layer}
                progress={progress}
                speed={new Vector2(0, 0.4)}
            >
                <div className={styles.bubble} style={{ left: "66%" }}>
                    <BubbleEffect
                        bubbleColor={theme.colors.teal[2]}
                        bubbleSize={new Rand2(20, 30)}
                        opacity={0.7}
                        thickness={1}
                        maxBubbleAmount={10}
                        direction={Vector2.up}
                        emissionRate={1}
                        speed={100}
                        radius={30}
                        lifeTime={6}
                    />
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                className={styles.layer}
                progress={progress}
                speed={new Vector2(0, 0.3)}
            >
                <Image
                    src={light2}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 0%"}
                    placeholder="blur"
                />
            </ParallaxLayer>
            <div className={styles.layer}>
                <div className={styles.title}>
                    <Title order={1}>
                        <span>Jack Szeto</span> <span>aka Fhy</span>
                    </Title>
                </div>
            </div>
            <ParallaxLayer
                className={styles.layer}
                progress={progress}
                speed={new Vector2(0, 0.3)}
            >
                <Image
                    src={normal}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 100%"}
                    placeholder="blur"
                />
            </ParallaxLayer>
            <ParallaxLayer
                className={styles.layer}
                progress={progress}
                speed={new Vector2(0, 0.2)}
            >
                <Image
                    src={light}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 0%"}
                    placeholder="blur"
                />
            </ParallaxLayer>
            <ParallaxLayer
                className={styles.layer}
                progress={progress}
                speed={new Vector2(0, 0.2)}
            >
                <div className={styles.bubble} style={{ left: "15%" }}>
                    <BubbleEffect
                        bubbleColor={theme.colors.teal[1]}
                        bubbleSize={new Rand2(40, 50)}
                        opacity={0.8}
                        thickness={1}
                        maxBubbleAmount={10}
                        direction={Vector2.up}
                        emissionRate={1}
                        speed={130}
                        radius={100}
                        lifeTime={6}
                    />
                </div>
            </ParallaxLayer>
            <ParallaxLayer
                className={styles.layer}
                progress={progress}
                speed={new Vector2(0, 0.2)}
            >
                <Image
                    src={front2}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 100%"}
                    placeholder="blur"
                />
            </ParallaxLayer>
            <ParallaxLayer
                className={styles.layer}
                progress={progress}
                speed={new Vector2(0, 0.1)}
            >
                <Image
                    src={frontTop}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 0%"}
                    placeholder="blur"
                />
            </ParallaxLayer>
            <ParallaxLayer
                className={styles.layer}
                progress={progress}
                speed={new Vector2(0, 0)}
            >
                <Image
                    src={front}
                    alt=""
                    layout="fill"
                    objectFit={"cover"}
                    objectPosition={"50% 100%"}
                    placeholder="blur"
                />
            </ParallaxLayer>
        </div>
    );
};
