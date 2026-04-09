import { motion } from "framer-motion"
import { Instagram, Linkedin, MessageCircle, MapPin, Phone as PhoneIcon, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-3 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="NinthWay Logo" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-bold text-gradient-royal">NinthWay</span>
            </div>
            <p className="text-foreground/70 mb-6 max-w-md">
              Crafting royal legacies through premium branding, strategic design, and futuristic digital experiences.
            </p>
            <div className="space-y-3 mb-6 text-sm text-foreground/70">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p>Grava Business Park, Neopolis, Kokapet, Hyderabad, Telangana 500075</p>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:918309660814" className="hover:text-primary transition-colors">+91 83096 60814</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:ninthwaybranders@gmail.com" className="hover:text-primary transition-colors">contact@ninthway.in</a>
              </div>
            </div>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ninthway.branders" target="_blank" className="p-3 rounded-xl bg-card border border-border hover:border-primary transition-colors group">
                <Instagram className="h-5 w-5 text-foreground/60 group-hover:text-primary transition-colors" />
              </a>
              <a href="https://www.linkedin.com/company/ninthway-branders" target="_blank" className="p-3 rounded-xl bg-card border border-border hover:border-secondary transition-colors group">
                <Linkedin className="h-5 w-5 text-foreground/60 group-hover:text-secondary transition-colors" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=918309660814&text=Hi+NinthWay+Team%2C+I%27m+interested+in+your+branding+services.&type=phone_number&app_absent=0" target="_blank" className="p-3 rounded-xl bg-card border border-border hover:border-accent transition-colors group">
                <MessageCircle className="h-5 w-5 text-foreground/60 group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#services" className="hover:text-primary transition-colors">Logo & Identity Design</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Social Media Creatives</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">SEO Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="/careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border pt-8 mt-12 text-center"
        >
          <p className="text-foreground/60">
            © 2026 NinthWay Branding Agency. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}