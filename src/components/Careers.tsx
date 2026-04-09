import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, MapPin, Users, Zap, Award, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { JobApplicationForm } from "@/components/JobApplicationForm"
import { jobListings } from "@/data/jobs"

const benefits = [
  {
    icon: Award,
    title: "Competitive Salary",
    description: "Industry-leading compensation packages based on experience and performance."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented individuals who are passionate about excellence and innovation."
  },
  {
    icon: Globe,
    title: "Remote Flexibility",
    description: "Work from anywhere in the world with flexible working arrangements."
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech",
    description: "Access to the latest tools and technologies to enhance your productivity."
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Continuous learning opportunities and career development programs."
  },
  {
    icon: Briefcase,
    title: "Meaningful Projects",
    description: "Work on impactful projects that make a real difference for our clients."
  }
]

export function Careers() {
  const [selectedJob, setSelectedJob] = useState<{ title: string; department: string } | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Join Our <span className="text-primary">Creative</span> Team
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Be part of a team that's redefining premium branding and digital excellence. We're looking for talented individuals who are passionate about creating exceptional brands.
            </p>
            <a href="#positions" className="inline-block">
              <Button className="px-8 py-6 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                Explore Open Positions
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Working Here */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Why Join <span className="text-primary">NinthWay</span>?
              </h2>
              <p className="text-foreground/70 mb-4 text-lg">
                At NinthWay Branders, we're not just building brands — we're crafting legacies. Every team member plays a crucial role in our mission to transform businesses into iconic brands.
              </p>
              <p className="text-foreground/70 mb-6 text-lg">
                We believe in fostering a culture of innovation, creativity, and collaboration. Our team is driven by a shared passion for excellence and a commitment to pushing the boundaries of what's possible in branding and digital design.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-foreground/80">
                  <Zap className="h-5 w-5 text-primary" />
                  AI-Enhanced Creative Process
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Users className="h-5 w-5 text-primary" />
                  Diverse & Talented Team
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Globe className="h-5 w-5 text-primary" />
                  Global Client Base
                </li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 flex items-center justify-center"
            >
              <div className="text-center">
                <Users className="h-24 w-24 text-primary/40 mx-auto mb-4" />
                <p className="text-foreground/60">Building the future of branding</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
              Perks & <span className="text-primary">Benefits</span>
            </h2>
            <p className="text-center text-foreground/70 max-w-2xl mx-auto">
              We invest in our team because we believe great talent deserves great benefits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
                    <CardHeader>
                      <Icon className="h-10 w-10 text-primary mb-3" />
                      <CardTitle className="text-foreground">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
              Open <span className="text-primary">Positions</span>
            </h2>
            <p className="text-center text-foreground/70 max-w-2xl mx-auto">
              {jobListings.length > 0 
                ? "Check out our current job openings and find your next career opportunity."
                : "No open positions at the moment. Check back soon!"}
            </p>
          </motion.div>

          {jobListings.length > 0 ? (
            <div className="space-y-5">
              {jobListings.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg cursor-pointer group">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                            {position.title}
                          </CardTitle>
                          <CardDescription className="text-base mt-2 flex flex-wrap gap-4">
                            <span className="flex items-center gap-1 text-foreground/70">
                              <Briefcase className="h-4 w-4 text-primary" />
                              {position.department}
                            </span>
                            <span className="flex items-center gap-1 text-foreground/70">
                              <MapPin className="h-4 w-4 text-accent" />
                              {position.location}
                            </span>
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                              {position.level}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-foreground/70">{position.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-muted text-foreground/70 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="pt-4">
                        <Button 
                          onClick={() => setSelectedJob({ title: position.title, department: position.department })}
                          className="bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          Apply Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <Card className="bg-card border-border text-center py-12">
              <CardContent>
                <p className="text-foreground/70 text-lg">Currently no open positions. We'll update this soon!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Job Application Form Modal */}
      {selectedJob && (
        <JobApplicationForm
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          jobTitle={selectedJob.title}
          jobDepartment={selectedJob.department}
        />
      )}
    </div>
  )
}
