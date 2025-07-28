const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Who I Am
          </h2>
          
          <div className="prose prose-lg mx-auto text-muted-foreground leading-relaxed">
            <p className="text-xl mb-6">
              I create professional websites for small businesses, entrepreneurs, and personal brands. 
              My goal is to make the process simple: you share what you need, and I handle the design, 
              setup, and launch.
            </p>
            
            <p className="text-xl">
              I use modern, efficient tools to build websites quickly while maintaining quality, 
              then customize every project to fit your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;