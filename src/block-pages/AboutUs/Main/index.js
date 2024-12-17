import styles from "../../../styles/block-pages/about-us/main.module.css"
// import Image from "next/image"

const Main = () => {
    return (
        <div className={styles.background}>
            <img
                src="/images/about-us/main/background.jpg"
                alt="About Us"
                width={1920}
                height={1080}
                // priority
                // layout="responsive"
            />
        </div>
    )
}

export default Main