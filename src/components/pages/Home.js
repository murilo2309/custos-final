import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home(){
    return (
            <section className={styles.home_container}>
                <h1>Bem-vindo ao <span>Projeto Custos</span></h1>
                <p>Gerencie seu Projeto!</p>
                <LinkButton to="/novoprojeto" text="Criar Projeto" />
                <img src={savings} alt="Custos" />
            </section>
        )
}

export default Home


