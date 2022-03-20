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

export const Banner = () => {
    const theme = useMantineTheme();
    return (
        <div className={styles.banner}>
            <div className={styles.title}>
                <Title order={1}><span>Jack Szeto</span> <span>aka Fhy</span></Title>
            </div>

            <div className={styles.layer}>
                <Image src={back} alt="" objectFit="contain" objectPosition={"100% 100%"} />
            </div>
            <div className={styles.layer}>
                <Image src={light2} alt="" objectFit="contain" objectPosition={"100% 0%"} />
            </div>
            <div className={styles.layer}>
                <Image src={normal} alt="" objectFit="contain" objectPosition={"100% 100%"} />
            </div>
            <div className={styles.layer}>
                <Image src={light} alt="" objectFit="contain" objectPosition={"100% 0%"} />
            </div>
            <div className={styles.layer}>
                <Image src={front2} alt="" objectFit="contain" objectPosition={"100% 100%"} />
            </div>
            <div className={styles.layer}>
                <Image src={front} alt="" objectFit="contain" objectPosition={"100% 100%"} />
            </div>
            <div className={styles.layer}>
                <Image src={frontTop} alt="" objectFit="contain" objectPosition={"100% 0%"} />
            </div>
        </div>
    );
};
