import { Home, User, Briefcase, Crown, MessageSquare, Phone, Briefcase as CareersIcon } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '#hero', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'Portfolio', url: '#portfolio', icon: Crown },
    { name: 'Testimonials', url: '#testimonials', icon: MessageSquare },
    { name: 'Careers', url: '/careers', icon: CareersIcon },
    { name: 'Contact', url: '#contact', icon: Phone }
  ]

  return <NavBar items={navItems} logoUrl="/logo.png" />
}