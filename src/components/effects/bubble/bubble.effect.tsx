import { useForceUpdate, useInterval } from "@mantine/hooks";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import Rand2 from "src/util/types/rand2";
import Vector2 from "src/util/types/vector2";
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
    arc: number;
    radius: number;
    rotation: number;
    leftTime: number;

    // test
    debug?: boolean;
};
const BubbleEffect = (props: BubbleEffectProps) => {
    const bubbles = useRef<ReactNode[]>([]);
    const bubbleIndex = useRef(0);
    const forceUpdate = useForceUpdate();

    const interval = useInterval(() => {
        if (props.maxBubbleAmount > bubbles.current.length) {
            bubbles.current.push(
                <Bubble key={`${bubbleIndex.current++}`} {...props} />
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
            <div>
                {bubbles.current}
            </div>
            
            {props.debug && (
                <div
                    style={{
                        position: 'absolute',
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
const Bubble = (props: BubbleEffectProps) => {
    const r = props.radius * Math.sqrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const coordinate = new Vector2(r * Math.cos(theta), r * Math.sin(theta));
    const size = new Rand2(props.bubbleSize.min, props.bubbleSize.max);
    return (
        <div
            className={`${styles.bubble}`}
            style={{
                top: coordinate.y - size.value / 2,
                left: coordinate.x - size.value / 2,
                width: size.value,
                height: size.value,
                color: props.bubbleColor ?? "#fff",
                opacity: props.opacity ?? 0.8,
                borderWidth: props.thickness ?? 1,
                boxShadow: `0 0 10px rgba(255, 255, 255, 0.5), 0 0 ${
                    props.bubbleSize.value / 2
                }px currentcolor inset`,
            }}
        ></div>
    );
};
export default BubbleEffect;
