import { Button } from "@/components/ui/button"

export default function VideoDemo() {
  return (
    <section className="container mx-auto p-4 max-w-7xl relative z-20 mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">See How It Works</h2>
      <div className="aspect-video bg-muted rounded-lg shadow-2xl overflow-hidden relative z-10 max-w-4xl mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <Button variant="outline" className="bg-background text-foreground hover:text-primary-foreground transition-all duration-300 ease-in-out">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Play Demo
          </Button>
        </div>
      </div>
    </section>
  )
}