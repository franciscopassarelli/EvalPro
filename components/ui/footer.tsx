// components/ui/footer.tsx
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-700">
        <div>
          <h3 className="text-3xl mb-2 font-bold tracking-tighter sm:text-4xl md:text-3xl bg-gradient-to-r from-[#FFD700] via-[#A855F7] to-[#6B21A8] bg-clip-text text-transparent">Desempeño360</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Unidos con EvalPro + Desempeño360 Optimiza el rendimiento de tu equipo con herramientas simples, intuitivas y efectivas.
          </p>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-2 tracking-tighter sm:text-1xl md:text-1xl gradient-heading">Enlaces útiles</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
            <li><Link href="/register" className="hover:text-white transition">Registrarse</Link></li>
            <li><Link href="/dashboard" className="hover:text-white transition">Demo</Link></li>
            <li><Link href="#features" className="hover:text-white transition">Características</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl mb-2 font-bold tracking-tighter sm:text-1xl md:text-1xl gradient-heading">Contacto</h4>
          <ul className="text-sm text-gray-300 space-y-3">
            <li>Email: franciscopassarelli7@gmail.com</li>
            <li>Tel: +54 11 54661930</li>
            <li>Buenos Aires, Argentina</li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-bold mb-2 tracking-tighter sm:text-1xl md:text-1xl gradient-heading">Redes Sociales</h4>
          <div className="flex space-x-5">
            <a href="#" className="hover:text-white transition transform hover:scale-110 duration-200"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition transform hover:scale-110 duration-200"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition transform hover:scale-110 duration-200"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition transform hover:scale-110 duration-200"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-6">
        © {new Date().getFullYear()} EvalPro. Todos los derechos reservados.
      </div>
    </footer>
  );
};
