import { motion } from "framer-motion"
import { useState } from "react"
import { Phone, Mail, MessageSquare, Send } from "lucide-react"
import { GradientButton } from "@/components/ui/gradient-button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === 'phone' || name === 'whatsapp') {
      const numericValue = value.replace(/\D/g, '').slice(0, 10)
      setFormData(prev => ({ ...prev, [name]: numericValue }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSameAsPhone = () => {
    setFormData(prev => ({ ...prev, whatsapp: prev.phone }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Phone className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">Contact Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Build Your Brand
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Ready to transform your vision into a legacy? Get in touch and let's create something extraordinary together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Ready to elevate your brand? Fill out the form and our team will get back to you within 24 hours with a custom proposal tailored to your needs.
            </p>

            {/* CONTACT OPTIONS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {/* Email */}
              <a
                href="mailto:ninthwaybranders@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-center">
                  <div className="font-semibold">Email Us</div>
                  <div className="text-foreground/60 text-sm">contact@ninthway.in</div>
                </div>
              </a>

              {/* Call */}
              <a
                href="tel:+918309660814"
                className="flex flex-col items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div className="text-center">
                  <div className="font-semibold">Call Us</div>
                  <div className="text-foreground/60 text-sm">+91 83096 60814</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918309660814?text=Hi%20NinthWay%20Team%2C%20I'm%20interested%20in%20your%20branding%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 hover:scale-105 transition-transform"
              >
                <div className="p-3 rounded-xl bg-accent/10">
                  <MessageSquare className="h-5 w-5 text-accent" />
                </div>
                <div className="text-center">
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-foreground/60 text-sm">Quick responses & updates</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form
  action="https://formsubmit.co/ninthwaybranders@gmail.com"
  method="POST"
  className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-8"
>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    maxLength={10}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="10-digit phone number"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                    WhatsApp Number *
                  </label>
                  <div className="space-y-2">
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      required
                      maxLength={10}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="10-digit WhatsApp number"
                    />
                    <button
                      type="button"
                      onClick={handleSameAsPhone}
                      className="text-sm text-primary hover:underline"
                    >
                      Same as phone number
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>

                <GradientButton
                  type="submit"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </GradientButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
