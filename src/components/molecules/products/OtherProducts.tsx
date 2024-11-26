import OtherProductCard from '@/components/atoms/OtherProductCard'
import OtherProductContent from '@/components/atoms/OtherProductContent'

const OtherProducts: React.FC = () => {
  return (
    <div className="w-[1200px] h-[420px] flex justify-between items-center">
      <div className="flex flex-col gap-6">
        <div className="w-[600px] text-[#271454] text-5xl font-bold font-['Helvetica']">
          Many other products
        </div>
        <div className="w-[554px] text-[#4f2a82] text-lg font-normal font-['Helvetica'] leading-[25.20px]">
          From mobile apps to web platforms and enterprise software, we deliver
          high-performance solutions that adapt to your unique needs. With a
          focus on quality and user experience, our products transform ideas
          into impactful digital tools.
        </div>
      </div>
      <div className="relative w-[469px] h-[420px] flex">
        <OtherProductContent />
        <OtherProductCard />
      </div>
    </div>
  )
}

export default OtherProducts
