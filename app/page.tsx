import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Image as ImageIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">AI Image Generator</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Create Stunning Images
            <br />
            <span className="text-primary">With AI Power</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transform your ideas into beautiful images using cutting-edge AI technology.
            Simply describe what you want, and watch it come to life.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">
              Start Creating
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">
              Generate high-quality images in seconds with our optimized AI models.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <ImageIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Multiple Models</h3>
            <p className="text-muted-foreground">
              Choose from various AI models to get the perfect style for your images.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Easy to Use</h3>
            <p className="text-muted-foreground">
              No technical skills required. Just describe your vision and let AI do the rest.
            </p>
          </Card>
        </div>

        <div className="bg-slate-900 dark:bg-slate-800 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Join thousands of creators who are already using AI to bring their ideas to life.
          </p>
          <Button size="lg" variant="secondary">
            Create Your First Image
          </Button>
        </div>
      </main>

      <footer className="border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 AI Image Generator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
