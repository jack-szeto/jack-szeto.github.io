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
                <Image src={back} alt="" layout="intrinsic" objectFit={"cover"} objectPosition={"50% 100%"} placeholder="blur" />
            </div>
            <div className={styles.layer}>
                <Image src={light2} alt="" layout="intrinsic" objectFit={"cover"} objectPosition={"50% 0%"} placeholder="blur" />
            </div>
            <div className={styles.layer}>
                <Image src={normal} alt="" layout="intrinsic" objectFit={"cover"} objectPosition={"50% 100%"} placeholder="blur" />
            </div>
            <div className={styles.layer}>
                <Image src={light} alt="" layout="intrinsic" objectFit={"cover"} objectPosition={"50% 0%"} placeholder="blur" />
            </div>
            <div className={styles.layer}>
                <Image src={front2} alt="" layout="intrinsic" objectFit={"cover"} objectPosition={"50% 100%"} placeholder="blur" />
            </div>
            <div className={styles.layer}>
                <Image src={front} alt="" layout="intrinsic" objectFit={"cover"} objectPosition={"50% 100%"} placeholder="blur" />
            </div>
            <div className={styles.layer}>
                <Image src={frontTop} alt="" layout="intrinsic" objectFit={"cover"} objectPosition={"50% 0%"} placeholder="blur" />
            </div>
        </div>
    );
};
