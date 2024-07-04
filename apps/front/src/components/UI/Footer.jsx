import React from "react"

const Footer = () => (
  <footer className="bg-gray-800 text-gray-300 py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h4 className="text-white text-lg mb-4">Krispy Freelance</h4>
          <p className="text-gray-400 text-sm">&copy; 2024 Krispy Freelance. Tous droits réservés.</p>
        </div>

        <div className="flex flex-col items-center md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4">
          <a href="/about" className="text-gray-300 hover:text-white transition">
            À propos
          </a>
          <a href="/services" className="text-gray-300 hover:text-white transition">
            Services
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white transition">
            Contact
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="flex space-x-4">
            <a href="https://twitter.com" className="text-gray-300 hover:text-white transition">
              Twitter
            </a>
            <a href="https://facebook.com" className="text-gray-300 hover:text-white transition">
              Facebook
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>
          <a href="/privacy-policy" className="text-gray-300 hover:text-white transition">
            Politique de confidentialité
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="text-gray-300 hover:text-white transition">
            Conditions d'utilisation
          </a>{" "}
          |{" "}
          <a href="/cookie-policy" className="text-gray-300 hover:text-white transition">
            Politique de cookies
          </a>
        </p>
        <p className="mt-4">
          Conformément au RGPD, nous respectons votre vie privée et protégeons vos informations personnelles. Pour en savoir plus, veuillez consulter
          notre{" "}
          <a href="/privacy-policy" className="text-gray-300 hover:text-white transition">
            politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
