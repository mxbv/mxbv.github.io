// Lucide React icons - minimal and lightweight
import {
  Home,
  User,
  Star,
  Code,
  Mail,
  Download,
  Github,
  Linkedin,
  Menu,
  X,
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Heart,
  Book,
  Dumbbell,
  Brain,
  // Technology icons
  Code2,
  FileText,
  Palette,
  Package,
  GitBranch,
  Server,
  // Simple Icons equivalents - using closest matches
  FileCode,
  Zap,
  Layers,
  Settings,
} from "lucide-react";

// Create wrapper components with consistent API
const createIcon =
  (IconComponent) =>
  ({ size = 24, className = "", ...props }) =>
    <IconComponent size={size} className={className} {...props} />;

// Export all icons with consistent naming
export const FaHome = createIcon(Home);
export const FaUser = createIcon(User);
export const FaStar = createIcon(Star);
export const FaCode = createIcon(Code);
export const FaEnvelope = createIcon(Mail);
export const FaDownload = createIcon(Download);
export const FaGithub = createIcon(Github);
export const FaLinkedin = createIcon(Linkedin);
export const FaBars = createIcon(Menu);
export const FaTimes = createIcon(X);
export const FaMoon = createIcon(Moon);
export const FaSun = createIcon(Sun);
export const FaChevronLeft = createIcon(ChevronLeft);
export const FaChevronRight = createIcon(ChevronRight);
export const FaExternalLinkAlt = createIcon(ExternalLink);
export const FaHeart = createIcon(Heart);
export const FaBook = createIcon(Book);
export const FaDumbbell = createIcon(Dumbbell);
export const FaBrain = createIcon(Brain);

// Technology icons - using closest Lucide matches
export const FaReact = createIcon(Code2);
export const FaJs = createIcon(Code2);
export const FaHtml5 = createIcon(FileText);
export const FaCss3Alt = createIcon(Palette);
export const FaNodeJs = createIcon(Server);
export const FaGitAlt = createIcon(GitBranch);
export const FaFigma = createIcon(Palette);
export const FaNpm = createIcon(Package);
export const FaSass = createIcon(Palette);
export const FaBootstrap = createIcon(Palette);

// Simple Icons equivalents - using closest Lucide matches
export const SiTypescript = createIcon(FileCode);
export const SiTailwindcss = createIcon(Zap);
export const SiVite = createIcon(Zap);
export const SiWebpack = createIcon(Settings);
export const SiVuedotjs = createIcon(Layers);
