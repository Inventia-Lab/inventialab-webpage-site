import Text from "../../../components/Text";
import { useApiContext } from "../../../context/wrappers/ContextProvider";
import styles from "../../../styles/block-pages/home/contactus.module.css"
import useResponsive from "../../../hooks/useResponsive";
import AnchorButton from "../../../components/AnchorButton";
import { ROUTE_CONTACTUS } from "../../../utils/routes";
import FadeInWrapper from "../../../context/wrappers/FadeInWrapper";

const ContactUs = () => {

    const { t } = useApiContext()
    const isResponsive = useResponsive(920)

    const contactText = [
        {
            text: t('home.block3.text1'),
            tag: "p",
            font: "poppinsLight",
            size: isResponsive ? 11 : 24,
            color: 'blackBase',
        }
    ];

    const buttonText = [
        {
            text: t('home.block3.text2'),
            tag: "p",
            font: "poppinsRegular",
            size: isResponsive ? 10 : 20,
            color: 'whiteBase',
        }
    ];

    return (
        <section className={styles.background}>
            <div className={styles.wrapper}>
                <FadeInWrapper type='fadeinright' replay={true} animationSize="large" speed="1s">
                    <Text texts={contactText} className={styles.title} />
                </FadeInWrapper>
                <div className={styles.buttonContainer}>
                    <AnchorButton width110={true} href={ROUTE_CONTACTUS}>
                        <Text className={styles.buttonText} texts={buttonText} />
                    </AnchorButton>
                </div>
            </div>
        </section>
    )
}

export default ContactUs