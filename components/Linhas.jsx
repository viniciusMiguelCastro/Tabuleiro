import Quadradinho from "./Quadradinho";
import styles from "../styles/Linha.module.css"

export default function Linhas(props) {
    return (
        <div className={styles.linha}
            // style={{ flexDirection: props.inverter ? 'row-reverse' : 'row' }}
            >
            <Quadradinho preta={props.preta} />
            <Quadradinho preta={!props.preta}/>
            <Quadradinho preta={props.preta} />
            <Quadradinho preta={!props.preta}/>
            <Quadradinho preta={props.preta} />
            <Quadradinho preta={!props.preta}/>
            <Quadradinho preta={props.preta} />
            <Quadradinho preta={!props.preta}/>
        </div>
    )
}