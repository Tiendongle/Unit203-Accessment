import styles from '@/styles/CartItems.module.scss'

import { CartItemProps } from "@/types"
import Image from 'next/image'

type Props = CartItemProps & {
  removeItemFunction: (id: number) => void;
}

export const CartItem: React.FC<Props> = ({
  id,
  title,
  price,
  quantity = 1,
  image,
  swatchColor,
  swatchTitle,
  estimatedDeliveryDate,
  removeItemFunction
}) => {
  return (
    <div className={styles.cartItem_container}>
      <div className={styles.image}>
        <Image 
          src={image} 
          alt={title}
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className={styles.details}>
        {/* TODO: Change to function for to handle missing data. convert to Array with join function to add in backslashes */}
        <h3>
          <span className={styles.details_swatchTitle}>{swatchTitle}</span> / 
          <span>{title}</span> / 
          <span>{id}</span></h3>
        <p className={styles.swatchCirle}>
          <span
            style={{ backgroundColor: swatchColor }}></span> {swatchTitle}
        </p>
      </div>
      <div className={styles.secondaryDetails}>
        <p className={styles.pricing}>${price}</p>
        <div>
          <p className={styles.deliveryTime}>Estimated Delivery Date: {estimatedDeliveryDate || 'Dec 2 - Dec 15'}</p>
          <button 
            className={styles.removeBtn}
            onClick={() => removeItemFunction && removeItemFunction(id) }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}