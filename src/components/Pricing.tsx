import { motion } from "framer-motion"
import { Check, Crown, Zap, Star } from "lucide-react"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

const plans = [
  {
    name: "Basic Branding",
    subtitle: "Ideal for solo entrepreneurs or small startups",
    price: "₹4,999",
    features: [
      "Logo Design",
      "Color Palette & Typography",
      "Basic Social Media Kit (5 posts)",
      "1 Revision"
    ],
    icon: Zap,
    popular: false
  },
  {
    name: "Growth Package",
    subtitle: "Perfect for growing businesses",
    price: "₹9,999",
    features: [
      "Logo + Identity System",
      "Website (Landing Page)",
      "Social Media Kit (15 posts)",
      "Marketing Strategy",
      "3 Revisions"
    ],
    cta: "Let's Talk",
    icon: Crown,
    popular: true
  },
  {
    name: "Ultimate Brand Suite",
    subtitle: "For businesses that want it all",
    price: "₹19,999",
    features: [
      "Complete Branding + Guidelines",
      "Multi-page Website + SEO",
      "Content Strategy + 30 Social Posts",
      "Lead Generation Funnel Setup",
      "Unlimited Revisions + Dedicated Manager"
    ],
    icon: Star,
    popular: false
  }
]

export function Pricing() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4 sm:px-3">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Crown className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Premium Packages
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose the perfect package to transform your vision into a legacy
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'lg:scale-110 z-10' : ''}`}
            >
              <div className={`bg-card/30 backdrop-blur-sm border rounded-2xl p-8 h-full transition-elegant hover:bg-card/50 flex flex-col ${
                plan.popular ? 'border-primary glow-primary' : 'border-border'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-xl mb-4 ${
                    plan.popular ? 'bg-primary/20 text-primary' : 'bg-muted text-foreground'
                  }`}>
                    <plan.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{plan.subtitle}</p>
                  <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <LiquidButton 
                    className="w-full"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Let's Talk
                  </LiquidButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel */}
        <div className="lg:hidden overflow-x-auto pb-6">
          <div className="flex gap-3 sm:gap-4 min-w-max px-4 sm:px-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative min-w-[280px] ${plan.popular ? 'scale-105' : ''}`}
              >
                <div className={`bg-card/30 backdrop-blur-sm border rounded-2xl p-6 h-full transition-elegant hover:bg-card/50 flex flex-col ${
                  plan.popular ? 'border-primary glow-primary' : 'border-border'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`inline-flex p-2 rounded-xl mb-3 ${
                      plan.popular ? 'bg-primary/20 text-primary' : 'bg-muted text-foreground'
                    }`}>
                      <plan.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-foreground/60 text-sm mb-3">{plan.subtitle}</p>
                    <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                  </div>

                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <LiquidButton 
                      className="w-full"
                      size="lg"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Let's Talk
                    </LiquidButton>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}