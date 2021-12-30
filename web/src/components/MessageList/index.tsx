import styles from './styles.module.scss';
import logImg from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li>
                    <p className={styles.messageContent}>Meu nome é Matheus Gonçalves Rocha</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/matheus98rocha.png" alt="photoProfile" />
                        </div>
                        <span>Matheus Rocha</span>
                    </div>
                </li>

                <li>
                    <p className={styles.messageContent}>Meu nome é Matheus Gonçalves Rocha</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/matheus98rocha.png" alt="photoProfile" />
                        </div>
                        <span>Matheus Rocha</span>
                    </div>
                </li>

                <li>
                    <p className={styles.messageContent}>Meu nome é Matheus Gonçalves Rocha</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImage}>
                            <img src="https://github.com/matheus98rocha.png" alt="photoProfile" />
                        </div>
                        <span>Matheus Rocha</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

