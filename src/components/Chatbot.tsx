import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Message = {
  id: string;
  text: string;
  sender: 'bot' | 'user';
};

const INITIAL_MESSAGES: Message[] = [
  { id: '1', text: 'Hello 👋\nWelcome to Elegant Edge Barbershop', sender: 'bot' },
  { id: '2', text: 'You can ask:\n- price\n- booking\n- location\n- hours\n- services', sender: 'bot' }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim().toLowerCase();
    const newUserMsg: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');

    // Simple bot logic
    setTimeout(() => {
      let botReply = "I'm not sure about that. Please call us at 074 863 3574.";
      
      if (userMsg.includes('price')) {
        botReply = "Price list is available on our site in the Price List section.";
      } else if (userMsg.includes('book') || userMsg.includes('appointment')) {
        botReply = "You can book using the 'Book Now' button above or call 074 863 3574.";
      } else if (userMsg.includes('location') || userMsg.includes('where')) {
        botReply = "We are located at MBT Fuel Station, c/o 5th Avenue & Weimar Rd, Parow.";
      } else if (userMsg.includes('hour') || userMsg.includes('open') || userMsg.includes('time')) {
        botReply = "We are open Mon – Sat from 9am to 7pm.";
      } else if (userMsg.includes('service') || userMsg.includes('haircut') || userMsg.includes('fade')) {
        botReply = "We offer Haircuts, Threading, Waxing, and Facials. Check our Services section for details.";
      }

      setMessages(prev => [...prev, { id: (Date.now() + 1).toString(), text: botReply, sender: 'bot' }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-600/30 transition-transform transform hover:scale-110 z-50 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open chat"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            style={{ height: '500px', maxHeight: 'calc(100vh - 48px)' }}
          >
            {/* Header */}
            <div className="bg-black border-b border-white/10 p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">EE</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Elegant Edge Support</h3>
                  <p className="text-green-400 text-xs flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-1"></span> Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3 text-sm whitespace-pre-line ${
                      msg.sender === 'user' 
                        ? 'bg-blue-600 text-white rounded-tr-sm' 
                        : 'bg-zinc-800 text-gray-200 border border-white/5 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-black border-t border-white/10">
              <form onSubmit={handleSend} className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-zinc-900 text-white border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="ml-2 w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-800 disabled:text-gray-500 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
