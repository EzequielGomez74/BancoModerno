import { features } from '../constants';
import styles, {layout} from '../style';
import Button from './Button';

const FeatureCard = ({icon, title, content, index,id}) => (
  <div className={`flex flex-row p-6 rounded-[20px] 
  ${index!== features.length -1 ? "mb-6":"mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt={id} className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

function Business() {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Vos haces el negocio, 
        <br className='sm:block hidden'/>nosotros cuidamos el dinero.</h2>
        <p className={`${styles.paragraph} max-w-[550px]`}>
        Con la tarjeta de crédito adecuada, puede mejorar su vida financiera, ganar recompensas y ahorrar dinero.</p>
        <Button styles='mt-10'/>
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) =>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business