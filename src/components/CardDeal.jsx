import { card } from "../assets";
import styles, {layout} from '../style';
import Button from "./Button";


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Encuentre una mejor oferta de tarjeta <br className="sm:block hidden"/>
       en pocos pasos.</h2>
      <p className={`${styles.paragraph} max-w-[470px mt-5]`}>
        Contamos con muchas opciones para su beneficio, elija la mejor segun su conveniencia.
      </p>
      <Button styles='mt-10'/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt='Card' className="w-[100]% h-[100]%"/>
    </div>
  </section>
)


export default CardDeal