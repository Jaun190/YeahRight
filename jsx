// src/App.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Startseite" },
  { id: "dashboard", label: "Dashboard" },
  { id: "referral", label: "Referral" },
  { id: "shop", label: "Shop" },
  { id: "about", label: "Über uns" },
];

export default function App() {
  const [active, setActive] = useState("home");
  const [hashrate, setHashrate] = useState(1234);
  const [earnings, setEarnings] = useState(0.05);

  // Fake Mining-Zahlen animieren
  useEffect(() => {
    const interval = setInterval(() => {
      setHashrate((h) => h + Math.floor(Math.random() * 10));
      setEarnings((e) => (e + Math.random() * 0.001).toFixed(4));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur z-50 flex justify-between px-6 py-4 shadow-lg">
        <h1 className="text-2xl font-bold text-green-400">⚡ Hashline</h1>
        <div className="flex gap-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`hover:text-green-400 transition ${
                active === s.id ? "text-green-400" : "text-gray-300"
              }`}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-black to-green-900"
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold text-green-400 drop-shadow-lg"
        >
          Hashline Mining
        </motion.h1>
        <p className="mt-6 text-xl text-gray-300 max-w-xl text-center">
          Die brutalste Mining-Plattform der Welt – starte jetzt, baue dein Team
          auf und sichere dir maximale Gewinne.
        </p>
        <a
          href="#shop"
          className="mt-10 bg-green-500 text-black px-8 py-4 rounded-2xl text-lg font-bold shadow-xl hover:scale-105 transition"
        >
          Jetzt starten 🚀
        </a>
      </section>

      {/* DASHBOARD */}
      <section
        id="dashboard"
        className="h-screen flex flex-col items-center justify-center bg-black/90"
      >
        <h2 className="text-4xl font-bold text-green-400 mb-10">
          Dashboard 💻
        </h2>
        <div className="grid grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <p className="text-gray-400">Hashrate</p>
            <h3 className="text-3xl font-bold">{hashrate} H/s</h3>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg"
          >
            <p className="text-gray-400">Earnings</p>
            <h3 className="text-3xl font-bold">{earnings} BTC</h3>
          </motion.div>
        </div>
      </section>

      {/* REFERRAL */}
      <section
        id="referral"
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-black to-green-800"
      >
        <h2 className="text-4xl font-bold text-green-400 mb-6">
          Dein Referral-Link
        </h2>
        <div className="bg-gray-900 px-6 py-4 rounded-xl shadow-lg">
          <p className="text-sm text-gray-400">Kopiere deinen Link:</p>
          <code className="text-green-400">hashline.app/join/abcdef</code>
        </div>
        <ul className="mt-8 text-left">
          <li className="text-gray-300">👤 Max Mustermann – 0.01 BTC</li>
          <li className="text-gray-300">👤 Lisa Müller – 0.005 BTC</li>
          <li className="text-gray-300">👤 Kevin Meier – 0.02 BTC</li>
        </ul>
      </section>

      {/* SHOP */}
      <section
        id="shop"
        className="h-screen flex flex-col items-center justify-center bg-black"
      >
        <h2 className="text-4xl font-bold text-green-400 mb-10">
          Mining Pakete 🛒
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Starter", price: "CHF 49", desc: "Einstieg ins Mining" },
            {
              name: "Pro Miner",
              price: "CHF 299",
              desc: "Mehr Hashrate, mehr Gewinn",
            },
            { name: "Elite", price: "CHF 999", desc: "Maximale Power" },
          ].map((p) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={p.name}
              className="bg-gray-800 p-8 rounded-2xl shadow-xl flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
              <p className="text-gray-400">{p.desc}</p>
              <p className="mt-4 text-green-400 text-2xl font-bold">{p.price}</p>
              <button className="mt-6 bg-green-500 text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition">
                Jetzt kaufen
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-t from-black to-green-900 text-center"
      >
        <h2 className="text-4xl font-bold text-green-400 mb-4">Über uns</h2>
        <p className="max-w-2xl text-gray-300">
          Hashline ist die brutalste Mining-Plattform der Szene. Alles echt,
          alles transparent. Gewinne durch Mining + Referral. <br />
          <br />
          ⚖️ AGB – Datenschutz – Impressum (Platzhalter)
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-gray-500 text-sm py-6 text-center">
        © {new Date().getFullYear()} Hashline. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
