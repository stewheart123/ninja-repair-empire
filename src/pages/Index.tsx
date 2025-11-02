import WaitlistEmbed from "@/components/WaitlistEmbed";
import { EmailForm } from "@/components/EmailForm";
import { CheckCircle2, Users, BookOpen, Sparkles, Wrench, TrendingUp } from "lucide-react";
import ninjaLogo from "@/assets/ninja-logo.png";

const Index = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Start with Just £100",
      description: "Begin your repair business with minimal investment and scale to a full empire",
    },
    {
      icon: Wrench,
      title: "Master All Repairs",
      description: "From basic screen replacements to advanced glass-only repairs and panic logs",
    },
    {
      icon: Users,
      title: "Join the Community",
      description: "Connect with like-minded repair pros, share tips, and grow together",
    },
  ];

  const features = [
    "Safe iPhone opening techniques (no broken screens)",
    "Professional screen replacement methods",
    "Screen types & quality differences (OEM, Refurbished, Aftermarket)",
    "Battery swap procedures",
    "Phone flipping strategies",
    "Marketing & advertising strategies",
    "Where to source iPhones for profit",
    "Customer acquisition tactics",
    "Advanced glass-only repairs",
    "Panic log reading & diagnostics",
    "Exclusive repair cheat sheets",
    "Private community access",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <img src={ninjaLogo} alt="Ninja Repair" className="h-12 w-auto" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold mb-6">
              🚀 Course Launching Soon
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Build Your Own{" "}
            <span className="bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
              Phone Repair Empire
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            Learn professional iPhone repair from scratch and launch your business with as little as <span className="text-primary font-semibold">£100</span>
          </p>

          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 pt-6">
            <EmailForm />
            <WaitlistEmbed />

          </div>

          <p className="text-sm text-muted-foreground animate-in fade-in duration-1000 delay-700">
            Join 500+ aspiring repair technicians on the waitlist
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-20 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Join This Course?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <benefit.icon className="h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="container mx-auto px-4 py-20 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Repair Training
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to become a professional repair technician
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-card/50 border border-border rounded-lg p-4 hover:bg-card transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Highlight */}
      <section className="container mx-auto px-4 py-20 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Sparkles className="h-12 w-12 text-primary mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Join a Thriving Community
          </h2>
          <p className="text-xl text-muted-foreground">
            The private community isn't available yet, but you'll be notified when it's ready to join. 
            Connect with repair professionals, share knowledge, troubleshoot problems together, 
            and stay updated with industry trends.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-gradient-to-br from-card to-secondary border border-border rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground">
            Be the first to know when the course launches and get exclusive early-bird pricing
          </p>
          <EmailForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={ninjaLogo} alt="Ninja Repair" className="h-8 w-auto" />
              <span className="text-muted-foreground">© 2025 Ninja Repair. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
