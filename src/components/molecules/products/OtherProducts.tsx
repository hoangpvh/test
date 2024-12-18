import Image from 'next/image'

const OtherProducts: React.FC = () => {
  return (
    <div className="w-full xl:w-1200 gap-10 h-auto flex justify-center sm:flex-row flex-col xl:justify-between items-center">
      <div className="flex flex-col gap-6 xl:max-w-600 sm:max-w-332 lg:max-w-464 max-w-520">
        <h2 className="text-purple-darkest2 text-4xl sm:text-5xl font-bold font-helvetica">
          Many other products
        </h2>
        <p className="text-purple-darkest2Light text-sm sm:text-lg font-normal font-helvetica leading-25.20">
          From mobile apps to web platforms and enterprise software, we deliver
          high-performance solutions that adapt to your unique needs. With a
          focus on quality and user experience, our products transform ideas
          into impactful digital tools.
        </p>
      </div>
      <div className="relative sm:w-469 sm:h-355 xl:h-420 w-343 h-350 flex">
        <picture className="relative block w-full h-full">
          <source
            media="(min-width: 1025px)"
            srcSet="/api/resizeImage?imageName=OtherProducts&width=469&height=420"
          />
          <source
            media="(min-width: 840px)"
            srcSet="/api/resizeImage?imageName=OtherProductsTablet&width=469&height=355"
          />
          <Image
            src="/api/resizeImage?imageName=OtherProductsMobile&width=343&height=350"
            alt="Other Products"
            fill
            unoptimized
            quality={100}
            sizes="(max-width: 840px) 343px, (max-width: 1025px) 469px, 469px"
            style={{ objectFit: 'contain' }}
          />
        </picture>
      </div>
    </div>
  )
}

export default OtherProducts
