import Link from "next/link"

export function Footer() {
  return (
    <footer id="contactos" className="bg-[#3d4f3f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.3em] text-white/60 uppercase block font-sans">Casa das</span>
              <span className="text-3xl font-serif">HORTAS</span>
              <span className="text-[10px] tracking-[0.2em] text-white/40 block font-sans mt-1">DOURO VERDE • EST. 1994</span>
            </div>
            <p className="text-white/70 font-sans text-sm leading-relaxed">
              Vinhos com raiz no Douro. Tradição, terroir e experiências autênticas desde 1994.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-[0.2em] text-[#c9a962] uppercase mb-6 font-sans">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#quinta" className="text-white/70 hover:text-white font-sans text-sm transition-colors">
                  A Quinta
                </Link>
              </li>
              <li>
                <Link href="#vinhos" className="text-white/70 hover:text-white font-sans text-sm transition-colors">
                  Vinhos
                </Link>
              </li>
              <li>
                <Link href="#experiencias" className="text-white/70 hover:text-white font-sans text-sm transition-colors">
                  Experiências
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white font-sans text-sm transition-colors">
                  Loja Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-sm tracking-[0.2em] text-[#c9a962] uppercase mb-6 font-sans">Contactos</h4>
            <ul className="space-y-3 text-white/70 font-sans text-sm">
              <li>Rua Principal de Vialadres, 146</li>
              <li>4640-594 Baião, Portugal</li>
              <li className="pt-2">
                <a href="tel:+351255881487" className="hover:text-white transition-colors">
                  +351 255 881 487
                </a>
              </li>
              <li>
                <a href="mailto:info@casadashortas.pt" className="hover:text-white transition-colors">
                  info@casadashortas.pt
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm tracking-[0.2em] text-[#c9a962] uppercase mb-6 font-sans">Redes Sociais</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/casadashortas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white font-sans text-sm transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/casadashortas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white font-sans text-sm transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 font-sans text-sm">
            © 2024 Casa das Hortas. Todos os direitos reservados.
          </p>
          <p className="text-white/50 font-sans text-sm">
            Beba com moderação.
          </p>
        </div>
      </div>
    </footer>
  )
}
