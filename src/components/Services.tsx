import { motion } from "framer-motion"
import { Palette, Share2, Monitor, Search, TrendingUp, Users, Zap } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "Logo & Identity Design",
    description: "Crafting unique visual identities that capture your brand essence and stand out in the market.",
    color: "text-primary"
  },
  {
    icon: Share2,
    title: "Social Media Creatives",
    description: "Engaging social media designs that boost your online presence and connect with your audience.",
    color: "text-secondary"
  },
  {
    icon: Monitor,
    title: "Website Development",
    description: "Modern, responsive websites that showcase your brand and convert visitors into customers.",
    color: "text-accent"
  },
  {
    icon: Search,
    title: "Digital Branding & SEO",
    description: "Comprehensive digital strategies and search engine optimization to amplify your brand reach, boost visibility, and drive organic traffic to your business.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Business Automation",
    description: "Streamline your operations with AI-powered intelligent automation solutions that save time, increase efficiency, and transform your business processes.",
    color: "text-secondary"
  },
  {
    icon: Users,
    title: "Lead Generation",
    description: "Strategic systems to attract, nurture, and convert high-quality leads for your business.",
    color: "text-accent"
  }
]

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 bg-muted/5">
      <div className="container mx-auto px-4 sm:px-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Palette className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Premium Solutions
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Comprehensive branding services designed to elevate your business and create lasting impact
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8 hover:bg-card/50 transition-elegant hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-xl bg-current/10 mb-6 ${service.color}`}>
                <service.icon className={`h-6 w-6 ${service.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}