'use client';
import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({
                    type: 'success',
                    message: '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.'
                });
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setStatus({
                    type: 'error',
                    message: data.error || 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.'
                });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({
                type: 'error',
                message: 'Error de conexión. Por favor verifica tu internet e intenta de nuevo.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full">
            {/* Status Message */}
            {status.message && (
                <div className={`mb-6 p-4 rounded-lg ${status.type === 'success'
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                    <p className="flex items-center">
                        {status.type === 'success' ? (
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        )}
                        {status.message}
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre Completo *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Tu nombre"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Correo Electrónico *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="tu@email.com"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono *
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="+506 1234-5678"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto *
                    </label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all outline-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="¿En qué podemos ayudarte?"
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-cyan focus:border-transparent transition-all outline-none resize-none text-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="Cuéntanos sobre tu proyecto..."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-cyan hover:to-brand-blue text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                        </span>
                    ) : (
                        'Enviar Mensaje'
                    )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                    * Campos requeridos
                </p>
            </form>
        </div>
    );
}
