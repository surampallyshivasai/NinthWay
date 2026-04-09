"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  logoUrl?: string
}

export function NavBar({ items, className, logoUrl }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Handle route detection for pages like /careers
    const currentPath = window.location.pathname
    for (const item of items) {
      if (item.url.startsWith('/') && item.url === currentPath) {
        setActiveTab(item.name)
        return
      }
    }

    // Handle scroll detection for anchor links on home page
    const handleScroll = () => {
      // Only use scroll detection for hash-based anchors (starting with #)
      const hashItems = items.filter(item => item.url.startsWith('#'))
      if (hashItems.length === 0) return

      const scrollPosition = window.scrollY + 100

      for (let i = hashItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(hashItems[i].url.substring(1))
        if (section && section.offsetTop <= scrollPosition) {
          setActiveTab(hashItems[i].name)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [items])

  const handleClick = (item: NavItem) => {
    setActiveTab(item.name)
    // Check if it's a route (starts with /) or an anchor (starts with #)
    if (item.url.startsWith('/')) {
      // Navigate to different route
      window.location.href = item.url
    } else {
      // Try to scroll to anchor on current page
      const element = document.getElementById(item.url.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If anchor doesn't exist on current page, navigate to home with the anchor
        window.location.href = `/${item.url}`
      }
    }
  }

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {logoUrl && (
          <a href="/" className="flex items-center justify-center px-3 py-2 rounded-full hover:bg-muted/50 transition-colors">
            <img src={logoUrl} alt="Logo" className="h-8 w-8 object-contain" />
          </a>
        )}
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full glow-primary">
                    <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}