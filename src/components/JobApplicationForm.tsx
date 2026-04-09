import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { sendCareerEmail } from "@/lib/emailjs"

interface JobApplicationFormProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
  jobDepartment: string
}

export function JobApplicationForm({ isOpen, onClose, jobTitle, jobDepartment }: JobApplicationFormProps) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedIn: "",
    portfolio: "",
    message: "",
    resume: null as File | null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    
    // Validation for phone - only allow 10 digits
    if (name === "phone") {
      const phoneValue = value.replace(/\D/g, "").slice(0, 10)
      setFormData(prev => ({ ...prev, [name]: phoneValue }))
      return
    }
    
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({ description: "File size must be less than 5MB", variant: "destructive" })
        return
      }
      setFormData(prev => ({ ...prev, resume: file }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      toast({ description: "Please enter a valid email address", variant: "destructive" })
      return
    }
    
    // Validate phone - must be exactly 10 digits
    if (!formData.phone || formData.phone.length !== 10) {
      toast({ description: "Phone number must be 10 digits", variant: "destructive" })
      return
    }
    
    if (!formData.fullName || !formData.email || !formData.phone || !formData.resume) {
      toast({ description: "Please fill all required fields and upload your resume", variant: "destructive" })
      return
    }

    setIsSubmitting(true)

    try {
      await sendCareerEmail({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        linkedIn: formData.linkedIn,
        portfolio: formData.portfolio,
        jobTitle: jobTitle,
        jobDepartment: jobDepartment,
        message: formData.message,
        resume: formData.resume
      })

      toast({ description: "Application submitted successfully! We'll be in touch soon." })
      setFormData({ fullName: "", email: "", phone: "", linkedIn: "", portfolio: "", message: "", resume: null })
      onClose()
    } catch (error) {
      toast({ description: "Failed to submit application. Please try again or email us directly.", variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-card border-b border-border flex items-center justify-between p-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Apply for Position</h2>
                <p className="text-foreground/70 mt-1">{jobTitle} • {jobDepartment}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="bg-background border-border"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="bg-background border-border"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="10 digit number"
                    maxLength={10}
                    className="bg-background border-border"
                    pattern="\d{10}"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    LinkedIn URL
                  </label>
                  <Input
                    type="url"
                    name="linkedIn"
                    value={formData.linkedIn}
                    onChange={handleInputChange}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Portfolio Link
                  </label>
                  <Input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://yourportfolio.com"
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cover Letter / Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're interested in this position..."
                  className="bg-background border-border min-h-[120px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Upload Resume *
                </label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <Upload className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-medium">
                    {formData.resume ? formData.resume.name : "Click to upload resume"}
                  </p>
                  <p className="text-sm text-foreground/60">PDF, DOC, or DOCX • Max 5MB</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  onClick={onClose}
                  variant="outline"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
