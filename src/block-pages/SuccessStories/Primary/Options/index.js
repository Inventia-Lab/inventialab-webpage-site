import { useState, useRef, useEffect } from "react";
import styles from "../../../../styles/block-pages/success-stories/primary/options.module.css";
import Text from "../../../../components/Text";
import useText from "./useText";
import useResponsive from "../../../../hooks/useResponsive";
// import Image from "next/image";

const Options = () => {
    const is1150 = useResponsive(1150);
    const is768 = useResponsive(768);

    const [colliders, setColliders] = useState({
        financialServices: false,
        banking: false,
    });

    const financialServicesRef = useRef(null);
    const bankingRef = useRef(null);

    const toggleCollider = (colliderName) => {
        setColliders((prevState) => ({
            ...prevState,
            [colliderName]: !prevState[colliderName],
        }));
    };

    useEffect(() => {
        if (financialServicesRef.current) {
            financialServicesRef.current.style.maxHeight = colliders.financialServices
                ? `${financialServicesRef.current.scrollHeight}px`
                : "0px";
        }
        if (bankingRef.current) {
            bankingRef.current.style.maxHeight = colliders.banking
                ? `${bankingRef.current.scrollHeight}px`
                : "0px";
        }
    }, [colliders]);

    const {
        optionTitleText,
        financialServicesText,
        financialServicesOption1Text,
        financialServicesOption2Text,
        bankingText,
        bankingOption1Text,
        bankingOption2Text,
    } = useText(colliders);

    const openedArrow = "orange";
    const closedArrow = "black";
    const openedFinancialServicesArrow = colliders.financialServices
        ? openedArrow
        : closedArrow;
    const openedBankingArrow = colliders.banking ? openedArrow : closedArrow;

    return (
        <div className={styles.background}>
            <Text className={styles.mainTitle} text={optionTitleText} />
            <div className={styles.mainContainer}>
                <div className={styles.wrapper}>
                    <div
                        className={`${styles.optionsCollider} ${
                            colliders.financialServices
                                ? styles.optionsColliderOpen
                                : ""
                        }`}
                        onClick={() => toggleCollider("financialServices")}
                    >
                        <Text className={styles.title} text={financialServicesText} />
                        <div
                            className={styles.collapseContent}
                            ref={financialServicesRef}
                        >
                            <div className={styles.text}>
                                <Text text={financialServicesOption1Text} />
                            </div>
                            <div className={styles.text}>
                                <Text text={financialServicesOption2Text} />
                            </div>
                        </div>
                        <img
                            src={`/images/success-stories/primary/main/${openedFinancialServicesArrow}-arrow.svg`}
                            alt="Financial Services"
                            width={is768 ? 25 : 50}
                            height={is768 ? 12 : 30}
                            priority
                        />
                    </div>
                    <div
                        className={`${styles.optionsCollider} ${
                            colliders.banking ? styles.optionsColliderOpen : ""
                        }`}
                        onClick={() => toggleCollider("banking")}
                    >
                        <Text className={styles.title} text={bankingText} />
                        <div className={styles.collapseContent} ref={bankingRef}>
                            <div className={styles.text}>
                                <Text text={bankingOption1Text} />
                            </div>
                            <div className={styles.text}>
                                <Text text={bankingOption2Text} />
                            </div>
                        </div>
                        <img
                            src={`/images/success-stories/primary/main/${openedBankingArrow}-arrow.svg`}
                            alt="Banking"
                            width={is768 ? 25 : 50}
                            height={is768 ? 12 : 30}
                            priority
                        />
                    </div>
                </div>
                <img
                    src={`/images/success-stories/primary/banner/illustration.jpg`}
                    alt="Success Stories"
                    width={is768 ? 196 : is1150 ? 500 : 893}
                    height={is768 ? 294 : is1150 ? 750 : 1039}
                    priority
                    className={styles.img}
                />
            </div>
        </div>
    );
};

export default Options;