import { MessageCircle } from 'lucide-react';
import { useAppConfig } from '../contexts/ConfigContext';

export default function WhatsAppButton() {
  const { config: siteConfig } = useAppConfig();
  if (!siteConfig) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a 
        href={`https://wa.me/${siteConfig.whatsapp.number}`} 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
        title="Chat WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
