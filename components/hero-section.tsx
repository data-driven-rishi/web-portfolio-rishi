"use client"

import Image from "next/image"
import { TypeAnimation } from "react-type-animation"


export const HeroSection = () => {
     
    return (
        <section className="lg:py-16">
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-9 place-self-center text-center sm:text-left justify-self-start">
                    <div className="mb-3 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                        <h1 className="text-white">I am Rishi</h1>
                        <div className="mt-3 lg:mt-0">
                            <TypeAnimation
                                sequence={[
                                    'A Data Analyst',
                                    1000, 
                                    'A Consultant',
                                    1000,
                                    'A Public Health Enthusiast',
                                    1000,
                                    'A Learner',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ color:'pink'}}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <div className="text-sm mt-12 lg:mt-15 md:text-2xl font-bold text-white">
                        Analyzing Data. Visualizing Data. Telling Stories. Building Trust
                    </div>
                </div>
                <div className="col-span-3 place-self-center mt-10 lg:mt-4">
                    <div className="w-[400px] h-[400px] sm:w-[250px] sm:h-[250px] ml-0 sm:ml-6 relative">
                        <Image 
                        src ="/hero-image.png"
                        alt="My Image"
                        width={300}
                        height={300}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}