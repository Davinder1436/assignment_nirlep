import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Get some relevent articles</h2>
      
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up"><a href='https://www.britannica.com/science/cultural-globalization/Political-consequences-of-globalization '>
              
              <blockquote className="text-lg text-gray-400 grow">— Challenges to national sovereignty and identity
              Anti-globalism activists often depict the McDonald’s, Disney, and Coca-Cola corporations as agents of globalism or cultural imperialism</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">James L. Watson</cite> 
              </div>
              </a>
            </div>


            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up"><a href='https://www.koreaherald.com/view.php?ud=20220615000709'>
              
              <blockquote className="text-lg text-gray-400 grow">— Breaking the K-pop taboo: How BTS brings together a global community <br />BTS touches on taboo subjects like racism and LGBTQ rights to spread social and political messages
              </blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Park Jun-hee</cite> 
              </div>
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}
