import Section from '../ui/Section'
import { TestimonialCard } from '../ui/Cards'
import { testimonials } from '../../data/content'

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Trusted by Teams"
      title="Built to support NGOs, planners, and clinical intelligence teams"
      description="These stories mirror the stakeholders Pulseon.ai is designed to help every day."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} name={testimonial.name} role={testimonial.role} quote={testimonial.quote} />
        ))}
      </div>
    </Section>
  )
}
