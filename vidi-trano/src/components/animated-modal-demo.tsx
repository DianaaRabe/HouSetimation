"use client";
import React, {useState} from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  ModalCloseButton
} from "./ui/animated-modal";

import { motion } from "motion/react";




export function AnimatedModalDemo() {
  const images = [
    "/Images/house1.webp",
    "/Images/house2.webp",
    "/Images/house3.webp",
    "/Images/house4.webp",
    "/Images/house5.webp",
  ];
   
  const [step, setStep] = useState<"intro" | "form" | "result">("intro");
  const [form, setForm] = useState({
    MedInc: "",
    AveRooms: "",
    AveOccup: "",
    Latitude: "",
    Longitude: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // état pour la prédiction
  const [prediction, setPrediction] = useState<number | null>(null);

  const handleSubmit = async () => {
  try {
    console.log("👉 Données envoyées :", form);

    // Exemple de POST vers ton API FastAPI
    const res = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        MedInc: parseFloat(form.MedInc),
        AveRooms: parseFloat(form.AveRooms),
        AveOccup: parseFloat(form.AveOccup),
        Latitude: parseFloat(form.Latitude),
        Longitude: parseFloat(form.Longitude),
      }),
    });

    const data = await res.json();
    console.log(data.prediction)
    // 🔹 on enregistre la valeur prédite dans le state
    setPrediction(data.prediction);

    // 🔹 on passe à l'étape "result"
    setStep("result");
  } catch (err) {
    console.error("Erreur de prédiction :", err);
  }
}

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-teal-950 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Estimer ma maison
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            💲💲💲
          </div>
        </ModalTrigger>
        {step === "intro" ? (
        <>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Estimez le prix de votre{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  Maison
                </span>{" "}
                maintenant! 💲
              </h4>
              <div className="flex justify-center items-center ">
                {images.map((image, idx) => (
                  <motion.div
                    key={"images" + idx}
                    style={{
                      rotate: Math.random() * 20 - 10,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    }}
                    className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                  >
                    <img
                      src={image}
                      alt="bali images"
                      width="500"
                      height="500"
                      className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="py-5 flex flex-wrap gap-x-4 gap-y-3 items-center justify-center max-w-sm mx-auto">
              <div className="flex items-center justify-center text-center">
                <HomeIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Estimation instantanée
                </span>
              </div>
              <div className="flex items-center justify-center">
                <BarChartIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Analyse du marché
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ReportIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Rapport détaillé
                </span>
              </div>
              <div className="flex items-center justify-center">
                <UsersIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Comparaison quartier
                </span>
              </div>
              <div className="flex items-center justify-center">
                <TrendingIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Prévisions de prix
                </span>
              </div>
              <div className="flex items-center justify-center">
                <ShieldIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Données fiables
                </span>
              </div>
            </div>

            </ModalContent>
            <ModalFooter className="gap-4">
              <ModalCloseButton className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                Annuler
              </ModalCloseButton>
              <button className="bg-teal-950 hover:bg-teal-800 text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                onClick={() => setStep("form")}>
                Commencer
              </button>
            </ModalFooter>
          </ModalBody>
        </>
        ) : step === "form" ? ( 
        <>
          <ModalBody>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Entrez vos{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                données
              </span>{" "}
              ✍️
            </h4>
            <form
              className="py-2 px-6 bg-white shadow-lg rounded-2xl max-w-md mx-auto space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Revenu médian */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Revenu médian dans le quartier ($$.$$$ / an)
                </label>
                <input
                  type="number"
                  name="MedInc"
                  value={form.MedInc}
                  onChange={handleChange}
                  placeholder="Ex: 8.3252"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Nb pièces */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Nombre moyen de pièces par logement
                </label>
                <input
                  type="number"
                  name="AveRooms"
                  value={form.AveRooms}
                  onChange={handleChange}
                  placeholder="Ex: 6.238137"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Occupants */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">
                  Nombre moyen d&apos;occupants par logement
                </label>
                <input
                  type="number"
                  name="AveOccup"
                  value={form.AveOccup}
                  onChange={handleChange}
                  placeholder="Ex: 2.555556"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Latitude */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Latitude</label>
                <input
                  type="number"
                  name="Latitude"
                  value={form.Latitude}
                  onChange={handleChange}
                  placeholder="Ex: 37.88"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Longitude */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700 mb-1">Longitude</label>
                <input
                  type="number"
                  name="Longitude"
                  value={form.Longitude}
                  onChange={handleChange}
                  placeholder="Ex: -122.24"
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>
            <ModalFooter className="gap-4">
              <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
                onClick={() => setStep("intro")}>
                Retour
              </button>
              <button className="bg-teal-950 hover:bg-teal-800 text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                onClick={handleSubmit}>
                Prédire
              </button>
            </ModalFooter>
          </ModalBody>
        </>
        ) : step === "result" ? (
        <>
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-6">
                Résultat de votre{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  estimation
                </span>{" "}
                🏠
              </h4>

              {/* Carte résultat */}
              <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl border border-gray-200 dark:border-neutral-700 p-6 text-center">
                <h3 className="text-xl font-bold text-teal-900 dark:text-teal-400 mb-4">
                  Valeur estimée (en million de $)
                </h3>
                {prediction !== null ? (
                    <p className="text-3xl font-extrabold text-teal-600 dark:text-teal-300">
                      {prediction.toLocaleString("fr-FR", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  ) : (
                    <p className="text-red-500">⚠️ Aucune prédiction disponible</p>
                )}
                <p className="text-sm text-neutral-500 mt-2">
                  Basé sur vos données saisies et l’analyse du marché
                </p>

                {/* Exemple d’indicateurs complémentaires */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex flex-col items-center">
                    <BarChartIcon className="h-6 w-6 text-teal-600 mb-1" />
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                      Marché local
                    </span>
                    <span className="text-xs text-neutral-400">+4% ce mois</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <TrendingIcon className="h-6 w-6 text-teal-600 mb-1" />
                    <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                      Prévision
                    </span>
                    <span className="text-xs text-neutral-400">Stable à court terme</span>
                  </div>
                </div>
              </div>
            </ModalContent>

            <ModalFooter className="gap-4">
              <button
                className="px-3 py-2 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
                onClick={() => setStep("form")}
              >
                Modifier
              </button>
              <ModalCloseButton className="bg-teal-950 hover:bg-teal-800 text-white dark:bg-white dark:text-black text-sm px-3 py-2 rounded-md border border-black w-28">
                Fermer
              </ModalCloseButton>
            </ModalFooter>
          </ModalBody>
        </>
      ) : null}
      </Modal>
    </div>
  );
}

// Maison (estimation instantanée)
const HomeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M3 9l9-7 9 7" />
    <path d="M9 22V12h6v10" />
  </svg>
);

// Graphique (analyse du marché)
const BarChartIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M3 3v18h18" />
    <path d="M7 13h2v5H7zM13 9h2v9h-2zM19 5h2v13h-2z" />
  </svg>
);

// Rapport (PDF / infos)
const ReportIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
  </svg>
);

// Quartier / communauté
const UsersIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <circle cx="9" cy="7" r="4" />
    <path d="M17 11a4 4 0 1 0-4 4h8a4 4 0 0 0-4-4z" />
  </svg>
);

// Tendance (prévisions de prix)
const TrendingIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <polyline points="3 17 9 11 13 15 21 7" />
    <polyline points="14 7 21 7 21 14" />
  </svg>
);

// Fiabilité (sécurité)
const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
