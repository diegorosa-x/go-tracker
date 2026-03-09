import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer
    className="relative z-10 bg-zinc-900 pb-12 pt-24 text-white"
    aria-labelledby="footer-title"
  >
    <div className="mx-auto max-w-7xl px-4">
      <h2 id="footer-title" className="sr-only">
        Rodapé do site GoTracker
      </h2>

      <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <section aria-label="Informações da empresa">
          <div className="mb-8 flex flex-col">
            <span className="flex items-center text-3xl font-black leading-none tracking-tighter">
              <span className="text-white">GO</span>
              <span className="ml-1 text-[#F7941E]">TRACKER</span>
            </span>

            <span className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Rastreamento veicular
            </span>
          </div>

          <p className="mb-8 text-sm leading-relaxed text-zinc-500">
            Sua parceira estratégica em segurança e gestão de frotas. Tecnologia
            de ponta para quem precisa de controle total da operação.
          </p>

          <div className="flex gap-4" aria-label="Redes sociais da GoTracker">
            <a
              href="#"
              aria-label="Facebook da GoTracker"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 transition-colors hover:bg-[#F7941E]"
            >
              <Facebook size={18} aria-hidden="true" />
            </a>

            <a
              href="#"
              aria-label="Instagram da GoTracker"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 transition-colors hover:bg-[#F7941E]"
            >
              <Instagram size={18} aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* Navigation */}
        <nav aria-label="Links rápidos">
          <h3 className="mb-8 border-l-4 border-[#F7941E] pl-4 text-lg font-bold">
            Links rápidos
          </h3>

          <ul className="space-y-4 text-sm text-zinc-500">
            <li>
              <a href="/" className="transition-colors hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a
                href="/#quem-somos"
                className="transition-colors hover:text-white"
              >
                Quem somos
              </a>
            </li>
            <li>
              <a
                href="/#servicos"
                className="transition-colors hover:text-white"
              >
                Nossas soluções
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Área do cliente
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Política de privacidade
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <section aria-labelledby="contact-title">
          <h3
            id="contact-title"
            className="mb-8 border-l-4 border-[#F7941E] pl-4 text-lg font-bold"
          >
            Fale conosco
          </h3>

          <address className="space-y-6 text-sm text-zinc-500 not-italic">
            <div className="flex gap-4">
              <Mail
                size={20}
                className="text-[#F7941E] flex-shrink-0"
                aria-hidden="true"
              />
              <a
                href="mailto:evertonmudo@hotmail.com"
                className="hover:text-white"
              >
                evertonmudo@hotmail.com
              </a>
            </div>

            <div className="flex gap-4">
              <Phone
                size={20}
                className="text-[#F7941E] flex-shrink-0"
                aria-hidden="true"
              />
              <a href="tel:+5519920011550" className="hover:text-white">
                (19) 92001-1550
              </a>
            </div>

            <div className="flex gap-4">
              <MapPin
                size={20}
                className="text-[#F7941E] flex-shrink-0"
                aria-hidden="true"
              />
              <span>
                Rua Pastor Abílio Honório Pedromo, nº 71 <br />
                Loteamento Adventista Campineiro <br />
                Hortolândia – SP, CEP 13187-172
              </span>
            </div>

            <div className="flex gap-4">
              <span className="text-[#F7941E] font-bold">CNPJ</span>
              <span>29.871.780/0001-27</span>
            </div>
          </address>
        </section>

        {/* Newsletter */}
        <section aria-labelledby="newsletter-title">
          <h3
            id="newsletter-title"
            className="mb-8 border-l-4 border-[#F7941E] pl-4 text-lg font-bold"
          >
            Newsletter
          </h3>

          <p className="mb-6 text-sm text-zinc-500">
            Receba dicas de gestão de frotas e segurança veicular.
          </p>

          <form className="flex flex-col gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Seu melhor e-mail
            </label>

            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Seu melhor e-mail"
              className="rounded-xl bg-zinc-800 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#F7941E]"
            />

            <button
              type="submit"
              className="rounded-xl bg-[#F7941E] py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-orange-600"
            >
              Inscrever-se
            </button>
          </form>
        </section>
      </div>

      <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-12 text-[10px] font-bold uppercase tracking-widest text-zinc-600 md:flex-row">
        <p>© 2024 GoTracker - Todos os direitos reservados</p>

        <nav aria-label="Links legais">
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Termos de uso
            </a>
            <a href="#" className="hover:text-white">
              Privacidade
            </a>
          </div>
        </nav>
      </div>
    </div>
  </footer>
);
