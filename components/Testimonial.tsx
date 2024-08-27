import { companies, testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards"

const Testimonial = () => {
  return (
    <div className="py-20" id="testimonials">
        <h1 className="heading">
            Kind words from our {' '}
            <span className="text-purple">satisfied students</span>
        </h1>
        <div className="flex flex-col items-center lg:mt-10 md:mt-3">
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
            />

            <div className="flex flex-wrap  items-center justify-center gap-4 md:gap-16 mt-10">
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <img src={img} alt={name} className="md:w-10 w-5" />
                    </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}
export default Testimonial