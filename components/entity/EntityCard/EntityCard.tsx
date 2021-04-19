import { FC } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import type { Product } from '@commerce/types'
import s from './EntityCard.module.css'
import Image, { ImageProps } from 'next/image'
import WishlistButton from '@components/wishlist/WishlistButton'
import container from 'postcss/lib/container'

interface Props {
  className?: string
  entity: any
  imgProps?: Omit<ImageProps, 'src'>
}

const placeholderImg = '/product-img-placeholder.svg'

const EntityCard: FC<Props> = ({ className, entity, imgProps, ...props }) => (
  <Link href={`/product/1`} {...props}>
    <div
      className={s['entity-container']}
      style={{ backgroundColor: entity.backgroundColor }}
    >
      <div className={cn(s['background-container'], s[entity.classList])}>
        <div className={s.imageContainer}>
          <Image
            quality="100"
            src={entity.image.url || placeholderImg}
            alt={entity.name || 'Product Image'}
            height={420}
            width={450}
            layout="fixed"
          />
        </div>
      </div>
    </div>
  </Link>
)

export default EntityCard
