import styles from '../styles/Quadradinho.module.css'

export default function Quadradinho(props) {
    return (
        <div
            style={{ backgroundColor: props.preta ? 'black' : 'white' }}
            className={styles.subDivisao}>
        </div>
    )
}