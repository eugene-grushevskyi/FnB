import { Layout } from '@components/common'
import { Grid, Marquee, Hero } from '@components/ui'
import { ProductCard } from '@components/product'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { getConfig } from '@framework/api'
import getAllProducts from '@framework/product/get-all-products'
import getSiteInfo from '@framework/common/get-site-info'
import getAllPages from '@framework/common/get-all-pages'
import { EntityCard, EntityGrid } from '@components/entity'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })

  const { products } = await getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })

  const { categories, brands } = await getSiteInfo({ config, preview })
  const { pages } = await getAllPages({ config, preview })

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 14400,
  }
}

export default function Home({
  products,
  brands,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const entities = [
    {
      name: 'Muslya Cafe',
      backgroundColor: '#fff',
      classList: null,
      image: {
        url: '/Mushlya_logo.png',
      },
    },
    {
      name: 'Білий Налив',
      backgroundColor: '#06181a',
      classList: 'grid-bg',
      image: {
        url: '/BNLogo.svg',
      },
    },
  ]
  return (
    <>
      <EntityGrid>
        {entities.map((entity, i) => (
          <EntityCard entity={entity} />
        ))}
      </EntityGrid>
      {/*<Grid>*/}
      {/*{products.slice(0, 3).map((product, i) => (*/}
      {/*<ProductCard*/}
      {/*key={product.id}*/}
      {/*product={product}*/}
      {/*imgProps={{*/}
      {/*width: i === 0 ? 1080 : 540,*/}
      {/*height: i === 0 ? 1080 : 540,*/}
      {/*}}*/}
      {/*/>*/}
      {/*))}*/}
      {/*</Grid>*/}
      {/*<Marquee variant="secondary">*/}
      {/*{products.slice(0, 3).map((product, i) => (*/}
      {/*<ProductCard*/}
      {/*key={product.id}*/}
      {/*product={product}*/}
      {/*variant="slim"*/}
      {/*imgProps={{*/}
      {/*width: 320,*/}
      {/*height: 320,*/}
      {/*}}*/}
      {/*/>*/}
      {/*))}*/}
      {/*</Marquee>*/}
      {/*<Hero*/}
      {/*headline="Release Details: The Yeezy BOOST 350 V2 ‘Natural'"*/}
      {/*description="Desc"*/}
      {/*/>*/}
      {/*<Marquee>*/}
      {/*{products.slice(0, 3).map((product, i) => (*/}
      {/*<ProductCard*/}
      {/*key={product.id}*/}
      {/*product={product}*/}
      {/*variant="slim"*/}
      {/*imgProps={{*/}
      {/*width: 320,*/}
      {/*height: 320,*/}
      {/*}}*/}
      {/*/>*/}
      {/*))}*/}
      {/*</Marquee>*/}
    </>
  )
}

Home.Layout = Layout
