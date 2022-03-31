import { useForceUpdate, useInterval } from "@mantine/hooks";
import useAudio from "@util/hooks/useAudio";
import Dictionary from "@util/types/dictionary";
import Rand2 from "@util/types/rand2";
import Vector2 from "@util/types/vector2";
import popSFX from "@assets/audio/pop.wav";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

type BubbleEffectProps = {
    // style
    bubbleColor?: string;
    bubbleSize: Rand2;
    opacity?: number;
    thickness?: number;

    // particle
    maxBubbleAmount: number;
    direction: Vector2;
    emissionRate: number;
    speed: number;
    radius: number;
    lifeTime: number;

    // test
    debug?: boolean;
};
const BubbleEffect = (props: BubbleEffectProps) => {
    const bubbles = useRef<Dictionary<ReactNode>>(new Dictionary<ReactNode>());
    const bubbleIndex = useRef(0);
    const forceUpdate = useForceUpdate();

    const childrenPop = (id: number) => {
        bubbles.current?.Remove(id);
        forceUpdate();
    };

    const interval = useInterval(() => {
        if (props.maxBubbleAmount > (bubbles.current?.Count ?? 999)) {
            bubbles.current?.Add(
                ++bubbleIndex.current,
                <Bubble
                    key={`${bubbleIndex.current}`}
                    id={bubbleIndex.current}
                    onPop={childrenPop}
                    {...props}
                />
            );
            forceUpdate();
        }
    }, (1 / props.emissionRate) * 1000);

    useEffect(() => {
        interval.start();
        return interval.stop;
    }, []);

    return (
        <div className={styles.bubbleEffect}>
            <AnimatePresence>{bubbles.current?.toArray()}</AnimatePresence>

            {props.debug && (
                <div
                    style={{
                        position: "absolute",
                        width: props.radius * 2,
                        height: props.radius * 2,
                        border: "1px yellow solid",
                        borderRadius: "50%",
                    }}
                ></div>
            )}
        </div>
    );
};
interface BubbleProps extends BubbleEffectProps {
    id: number;
    onPop: (id: number) => void;
}

const Bubble = (props: BubbleProps) => {
    const fps = 50;
    const r = props.radius * Math.sqrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;

    const lifeTime = useRef(props.lifeTime);

    const [playing, popSFXToggle] = useAudio(popSFX);

    const [coordinate, setCoordinate] = useState(
        new Vector2(r * Math.cos(theta), r * Math.sin(theta))
    );
    const [size, setSize] = useState(
        new Rand2(props.bubbleSize.min, props.bubbleSize.max)
    );
    const [position, setPosition] = useState<Vector2>();

    const interval = useInterval(() => {
        if (lifeTime.current > 0) {
            setPosition((prev) =>
                new Vector2(prev?.x ?? 0, prev?.y ?? 0).add(
                    props.direction.normalized.multiply((props.speed * 1) / fps)
                )
            );
            lifeTime.current -= 1 / fps;
        }
        if (lifeTime.current <= 0) {
            pop();
        }
    }, (1 / fps) * 1000);

    const onHover = () => {
        if (lifeTime.current > 0) {
            popSFXToggle();
            pop();
        }
    };

    const pop = () => {
        lifeTime.current = 0;
        interval.stop();
        props.onPop(props.id);
    };

    useEffect(() => {
        interval.start();
        return interval.stop;
    }, []);

    return (
        <div>
            <div
                className={`${styles.bubbleContainer}`}
                style={{
                    top: coordinate.y - size.value / 2,
                    left: coordinate.x - size.value / 2,
                    width: size.value,
                    height: size.value,
                    color: props.bubbleColor ?? "#fff",
                    opacity: props.opacity ?? 0.8,
                    transform: `translate(${position?.x}px, ${position?.y}px)`,
                }}
            >
                <motion.div
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "relative",
                        transformOrigin: "center bottom",
                    }}
                >
                    <div
                        className={styles.bubble}
                        onMouseEnter={onHover}
                        style={{
                            transformOrigin: "center center",
                            borderWidth: props.thickness ?? 1,
                            boxShadow: `0 0 10px rgba(255, 255, 255, 0.5), 0 0 ${
                                size.value / 2
                            }px currentcolor inset`,
                        }}
                    ></div>
                </motion.div>
            </div>
        </div>
    );
};
export default BubbleEffect;
