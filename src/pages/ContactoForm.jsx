import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactoForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
  
    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      alert('¡Mensaje enviado!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      alert('Error al enviar: ' + error.text);
    })
    .finally(() => {
      setIsSending(false);
    });
  };
  

  return (
    <section className="max-w-4xl mx-auto my-8 p-8 text-center bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">Contáctame</h2>
      <p className="text-gray-600 mb-8">¿Tienes un proyecto en mente? Escríbeme y hablemos.</p>
      
      <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 mb-12">
        <div className="flex flex-col text-left">
          <label htmlFor="name" className="mb-2 font-semibold text-gray-700">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900"
          />
        </div>
        
        <div className="flex flex-col text-left">
          <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900"
          />
        </div>
        
        <div className="flex flex-col text-left">
          <label htmlFor="message" className="mb-2 font-semibold text-gray-700">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-900 resize-y"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          disabled={isSending}
          className={`mt-2 py-4 px-6 text-white rounded-md cursor-pointer text-lg transition-colors ${isSending ? 'bg-gray-400' : 'bg-indigo-900 hover:bg-indigo-800'}`}
          style={!isSending ? { backgroundColor: '#0C0A20' } : {}}
        >
          {isSending ? 'Enviando...' : 'Enviar Mensaje'}
        </button>
      </form>
      
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">O encuéntrame en:</h3>
        <ul className="flex justify-center gap-6 flex-wrap">
          <li>
            <a 
              href="mailto:dt094250@gmail.com" 
              className="text-indigo-900 hover:text-indigo-700 flex items-center gap-2 font-medium"
              style={{ color: '#0C0A20' }}
            >
              📧 dt094250@gmail.com
            </a>
          </li>
          <li>
            <a 
              href="https://wa.me/527717222519?text=¡Hola%20Danohx!%20Vi%20tu%20portafolio%20y%20me%20interesa%20contactarte%20para%20un%20proyecto." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-900 hover:text-indigo-700 flex items-center gap-2 font-medium"
              style={{ color: '#0C0A20' }}
            >
              📱 WhatsApp
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/Danohx" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-900 hover:text-indigo-700 flex items-center gap-2 font-medium"
              style={{ color: '#0C0A20' }}
            >
              🐙 GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactoForm;