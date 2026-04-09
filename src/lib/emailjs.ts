import emailjs from 'emailjs-com'

export const initEmailJS = () => {
  if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }
}

export const sendContactEmail = async (data: {
  name: string
  email: string
  phone: string
  whatsapp: string
  message: string
}) => {
  try {
    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
      {
        to_email: 'ninthwaybranders@gmail.com',
        name: data.name,
        email: data.email,
        phone: data.phone,
        whatsapp: data.whatsapp,
        message: data.message
      }
    )
    return result
  } catch (error) {
    throw error
  }
}

export const sendCareerEmail = async (data: {
  fullName: string
  email: string
  phone: string
  linkedIn: string
  portfolio: string
  jobTitle: string
  jobDepartment: string
  message: string
  resume: File
}) => {
  try {
    const formData = new FormData()
    formData.append('to_email', 'ninthwaybranders@gmail.com')
    formData.append('from_name', data.fullName)
    formData.append('email', data.email)
    formData.append('phone', data.phone)
    formData.append('linkedIn', data.linkedIn)
    formData.append('portfolio', data.portfolio)
    formData.append('jobTitle', data.jobTitle)
    formData.append('jobDepartment', data.jobDepartment)
    formData.append('message', data.message)
    formData.append('resume', data.resume)

    const result = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_CAREERS_TEMPLATE_ID,
      {
        to_email: 'ninthwaybranders@gmail.com',
        from_name: data.fullName,
        email: data.email,
        phone: data.phone,
        linkedIn: data.linkedIn,
        portfolio: data.portfolio,
        jobTitle: data.jobTitle,
        jobDepartment: data.jobDepartment,
        message: data.message
      }
    )
    return result
  } catch (error) {
    throw error
  }
}
