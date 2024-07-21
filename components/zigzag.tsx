import Image from 'next/image'

import BTS1 from '@/public/images/bts1.jpg'
import BTS2 from '@/public/images/bts2.jpg'


export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            {/* <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div> */}
            <h1 className="h2 mb-4">Breaking the K-pop taboo: How BTS brings together a global community</h1>
            <p className="text-xl text-gray-400"></p>
          </div>

          {/* Items */}
          <div className="grid gap-6">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={BTS1} width={540} height={405} alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-md text-purple-600 mb-2">BTS speaks at the White House to discuss Asian inclusion and representation and address anti-Asian hate crimes and discrimination on May 31. (AFP-Yonhap)</div>
                  
                  <p className="text-lg text-gray-400 ">Music is a tool for singers to spread social messages, with Western singers often using their platforms to speak up on social issues. But K-pop singers often shy away from subjects that might be controversial, choosing to stay silent on social problems rather than touching on matters that might spark media conversations.</p>
                  
                </div>
              </div>
              
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              
             
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12" data-aos="fade-right">
                  <p className="text-lg text-gray-400 mb-4">
                  But throughout the years, BTS, as one of the world‘s most influential figures, has a long history of advocating for social change. <br /><br />
                  Last month, the septet visited the White House to discuss Asian representation and address the rise in anti-Asian hate crimes with US President Joe Biden, taking the opportunity to speak out and bring awareness to the issue. <br /><br />

                  Suga gave a short statement during the event, “It’s not wrong to be different. I think equality begins when we open up and embrace all of our differences.” <br /><br />

                  Culture critic Jang Duk-hyun said BTS‘ visit to the White House showed how well the band uses “star power” for good and how they can bring many different types of people together. <br /><br />

                  “BTS is not just an artist from South Korea but represents the whole Asian community. As anti-Asian hate crimes are soaring, BTS is a group that can draw attention to issues using its influence and music,” Jang told The Korea Herald. <br /><br />

                  BTS is also more active on social media when compared to other K-pop acts. The band often uses its platform to spread messages to millions of fans around the world, which is why it can be seen as “a leader of global issues,” he added. <br /><br />

                  The band has also used its influence to enact positive news, particularly through their Army, the official name given to fans of BTS, who have worked with the band to help them spread their message. <br /><br />

                  BTS fans gave their support to the BLM movement, as nationwide protests against racial inequality and police brutality were prominent in the US. <br />
                  </p>
              </div>
              

              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12" >
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-12 lg:col-span-12 mb-4 md:mb-0 md:order-1" >
                <Image className="max-w-full mx-auto md:max-w-none h-auto mb-4" src={BTS2} width={720} height={540} alt="Features 01" />
              </div>
                  <p className="text-lg text-gray-400 mb-4">
                  <b>Breaking the K-pop taboo </b> <br /><br />

                  K-pop has had a long history of staying out of social and political issues, mainly because of the fear that it would affect business. But since its debut in 2013, BTS has been slowly changing that idea.<br /><br />

                  BTS broke K-pop‘s taboos by speaking out on topics that could prove controversial. The seven-piece act has been speaking their minds through music by talking about mental health, LGBTQ rights and the pressure to succeed -- all of which are difficult subjects to bring up in Korea.<br /><br />

                  “Tomorrow,” a track from 2014’s “Skool Luv Affair” album, expressed the hardship youngsters face today. Suga‘s 2016 mixtape “So Far Way” touches on the pain, insecurity and loneliness he felt while seeing others chasing after their dreams.<br /><br />

                  The septet has also openly discussed same-sex relationships, something that could have damaged them in their early careers. The group’s leader RM spoke of his admiration for the Macklemore and Ryan Lewis mega-hit “Same Love,” a track about the LGBTQ community.<br /><br />

                  </p>
              </div>
              
            </div>
             
             
              
           

          </div>

        </div>
      </div>
    </section>
  )
}
