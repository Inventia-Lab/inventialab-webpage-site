import useResponsive from "../../../../hooks/useResponsive";
import styles from "../../../../styles/block-pages/success-stories/ion/cover.module.css"

const Cover = () => {

    const is768 = useResponsive(768);

    return (
        <div className={styles.background}>
            <img
                src="/images/success-stories/banking-financierapodemosprogresar/main/background.jpg"
                alt="Financiera Podemos Progresar"
                width={is768 ? 384 : 1920}
                height={is768 ? 128 : 1080}
                className={styles.img}
            />
        </div>
    )
}

export default Cover