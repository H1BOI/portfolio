export function AboutSection() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-center text-foreground">About</h2>
        <p className="text-muted-foreground text-center mb-16 text-sm tracking-wide uppercase">
          A bit about me
        </p>
        <div className="space-y-5 text-muted-foreground leading-7">
          <p>
            Hello, I&#39;m Chun! I&#39;m currently a graduate student studying computer science at Georgia Tech
            and a recent alumni from Georgia State University. I&#39;m extremely passionate about the potentials
            of Machine Learning and AI, and my main expertise is in full-stack software development.
          </p>
          <p>
            My interests span the intersection of applied ML research and practical software engineering.
            Whether it&#39;s training computer vision models, building scalable backend systems, or designing
            responsive front-end interfaces, I love solving problems end-to-end with clean, intentional code.
          </p>
          <p>
            I&#39;m currently looking for software engineering or ML engineering opportunities where I can
            contribute to meaningful projects and keep growing. If you&#39;re working on something interesting,
            I&#39;d love to connect.
          </p>
        </div>
      </div>
    </section>
  )
}
