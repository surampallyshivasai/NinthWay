import { motion } from "framer-motion"
import { Marquee } from "@/components/ui/marquee"
import clientLogos1 from "@/assets/as1.jpg"
import clientLogos2 from "@/assets/as2.jpg"
import clientLogos3 from "@/assets/as3.jpg"
import clientLogos4 from "@/assets/as4.jpg"
import clientLogos5 from "@/assets/as5.jpg"
import clientLogos6 from "@/assets/as6.jpg"
import clientLogos7 from "@/assets/as7.jpg"
import clientLogos8 from "@/assets/as8.jpg"
import clientLogos9 from "@/assets/as9.jpeg"
import clientLogos10 from "@/assets/as10.jpeg"
import eventLogo1 from "@/assets/ev1.png"
import eventLogo2 from "@/assets/ev2.jpeg"
import { Crown } from "lucide-react"

const clientLogos = [
  clientLogos1,
  clientLogos2,
  clientLogos3,
  clientLogos4,
  clientLogos5,
  clientLogos6,
  clientLogos7,
  clientLogos8,
  clientLogos9,
  clientLogos10,
];

// Event logos
const eventLogos = [
  eventLogo1,
  eventLogo2,
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 sm:px-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Crown className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Our Clients</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Leaders
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            We've had the privilege of crafting legacies for industry leaders and innovative startups
          </p>
        </motion.div>

        {/* Brands Carousel */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 mb-10 sm:mb-12">
          <div className="flex-shrink-0 flex items-center justify-center sm:mt-20 mt-0 w-full sm:w-auto">
            <div className="neon-box">
              <span className="vertical-label text-primary font-bold tracking-wider text-lg">
                BRANDS
              </span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <Marquee pauseOnHover speed={40}>
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mx-4 sm:mx-8 min-w-[100px] sm:min-w-[120px]"
                >
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="h-12 sm:h-16 w-auto opacity-100 hover:opacity-100 transition duration-300 ease-in-out"
                  />
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>

        {/* Events Carousel */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
          <div className="flex-shrink-0 flex items-center justify-center sm:mt-20 mt-0 w-full sm:w-auto">
            <div className="neon-box">
              <span className="vertical-label text-primary font-bold tracking-wider text-lg">
                EVENTS
              </span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <Marquee pauseOnHover speed={40} direction="right">
              {eventLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mx-4 sm:mx-8 min-w-[100px] sm:min-w-[120px]"
                >
                  <img
                    src={logo}
                    alt={`Event Logo ${index + 1}`}
                    className="h-12 sm:h-16 w-auto opacity-100 hover:opacity-100 transition duration-300 ease-in-out"
                  />
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
