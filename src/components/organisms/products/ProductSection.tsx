import AppProducts from '@/components/molecules/products/AppProducts'
import OtherProducts from '@/components/molecules/products/OtherProducts'
import WebProducts from '@/components/molecules/products/WebProducts'

const ProductSection: React.FC = () => {
  return (
    <div
      id="products"
      className="w-full h-auto px-4 sm:px-10 lg:px-15 xl:px-30 py-20 bg-gradient-to-b from-gradient-start via-gradient-middle to-gradient-end flex flex-col justify-start items-center gap-20"
    >
      <AppProducts />
      <WebProducts />
      <OtherProducts />
    </div>
  )
}

export default ProductSection
