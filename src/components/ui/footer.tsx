import {
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Component() {
  return (
    <footer className="border-t bg-background text-center">
      <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center space-y-12">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">./localhost</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
            Creating beautiful digital experiences with passion and precision.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/localhost.devs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground justify-center items-center">
          <div className="flex justify-center items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>localhostqueries@gmail.com</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+91 123456789</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Chennai , India</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-4 w-full">
          <div className="flex justify-center items-center space-x-2 text-sm text-muted-foreground">
            <span>made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
            <span>from</span>
            <span className="font-medium text-foreground">127.0.0.1.</span>
          </div>

          <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
            <span>© 2025 localhost. All rights reserved.</span>
            <a
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
