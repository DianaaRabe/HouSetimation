"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  {
    src: "/Images/HouseSlider1.webp",
    alt: "Landing page preview",
  },
  {
    src: "/Images/HouseSlider2.webp",
    alt: "Unsplash Image 1",
  },
  {
    src: "/Images/HouseSlider3.webp",
    alt: "Unsplash Image 2",
  },
]

export function CarouselDemo() {
  const autoplayPlugin = Autoplay({ delay: 3000, stopOnInteraction: true })

  return (
    <Carousel
      plugins={[autoplayPlugin]}
      className="w-full max-w-7xl mx-auto"
      onMouseEnter={autoplayPlugin.stop}
      onMouseLeave={autoplayPlugin.reset}
    >
      <CarouselContent>

        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-[16/9] h-auto w-full object-cover"
                height={1000}
                width={1000}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-[38%] -left-0 w-10 h-10 lg:w-40 lg:h-40 overflow-hidden">
        <div className="w-full h-full bg-gray-100 dark:bg-black clip-half-circle-left flex justify-center items-center">
          <CarouselPrevious />
        </div>
      </div>
      <div className="absolute top-[38%] -right-0 w-10 h-10 lg:w-40 lg:h-40 overflow-hidden">
        <div className="w-full h-full bg-gray-100 dark:bg-black clip-half-circle-right flex justify-center items-center">
          <CarouselNext />
        </div>
      </div>

    </Carousel>
  )
}
