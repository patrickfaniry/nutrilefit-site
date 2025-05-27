"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnersContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    type: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler enregistrement (à remplacer par Firebase plus tard)
    setTimeout(() => {
      console.log("Formulaire soumis :", formData);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-[#053026] mb-4">
          Collaborons ensemble
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Que vous soyez une marque, un investisseur, une salle de sport ou un acteur
          de la santé, ce formulaire est votre passerelle vers un partenariat stratégique avec Nutr’IleFit.
        </p>
      </motion.div>

      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto grid grid-cols-1 gap-6"
        >
          <Input
            label="Nom / Organisation"
            name="name"
            placeholder="Ex : FitPro Gym ou John Doe"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Adresse e-mail"
            name="email"
            type="email"
            placeholder="exemple@entreprise.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
            <PhoneInput
              country={"mg"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{ name: "phone", required: true }}
              inputStyle={{
                width: "100%",
                padding: "10px",
                borderRadius: "0.5rem",
                border: "1px solid #d1d5db",
              }}
              buttonStyle={{
                border: "1px solid #d1d5db",
                borderRadius: "0.5rem 0 0 0.5rem",
              }}
            />
          </div>

          <Input
            label="Pays ou région"
            name="country"
            placeholder="Ex : Madagascar, France, Sénégal..."
            value={formData.country}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type de partenariat
            </label>
            <select
              name="type"
              required
              value={formData.type}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-[#1B82F1] focus:border-[#1B82F1]"
            >
              <option value="">-- Sélectionnez une option --</option>
              <option value="Technique">Technique (application, matériel...)</option>
              <option value="Financier">Financier / Investissement</option>
              <option value="Sponsor">Sponsor / Marque</option>
              <option value="Autre">Autre</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#1B82F1] focus:border-[#1B82F1]"
              placeholder="Décrivez votre proposition ou collaboration idéale..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-block px-8 py-3 rounded-full font-semibold text-white transition duration-200 shadow ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#1B82F1] hover:bg-[#166FD0]"
              }`}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
            </button>
          </div>
        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <CheckCircle className="mx-auto text-[#B2EE1B] w-12 h-12 mb-4" />
          <p className="text-xl text-[#053026] font-semibold">
            Merci pour votre intérêt !
          </p>
          <p className="text-gray-600 mt-2">
            Nous vous contacterons très prochainement pour discuter de la suite.
          </p>
        </motion.div>
      )}
    </section>
  );
}

function Input({ label, name, type = "text", value, onChange, placeholder, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#1B82F1] focus:border-[#1B82F1]"
      />
    </div>
  );
}
