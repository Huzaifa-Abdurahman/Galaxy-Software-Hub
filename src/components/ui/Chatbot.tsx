'use client';

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm here to help you with any questions about our services. How can I assist you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "What services do you offer?",
    "How much does a website cost?",
    "Do you provide SEO services?",
    "Tell me about AI automation",
    "Contact information",
  ];

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      setMessages(prev => [...prev, {
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      }]);
    }, 1000);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('service') || lowerInput.includes('what do you')) {
      return "We offer comprehensive digital services including Web Development, Graphic Design, SEO Services, and AI Automation. Each service is tailored to help your business succeed in the digital world!";
    } else if (lowerInput.includes('cost') || lowerInput.includes('price') || lowerInput.includes('how much')) {
      return "Our pricing varies based on project requirements. We offer competitive rates and custom packages. Please contact us for a detailed quote tailored to your specific needs!";
    } else if (lowerInput.includes('seo')) {
      return "Yes! We provide comprehensive SEO services including keyword research, on-page optimization, link building, and analytics reporting to boost your search engine rankings.";
    } else if (lowerInput.includes('ai') || lowerInput.includes('automation')) {
      return "Our AI automation services include chatbots, process automation, data analysis, and machine learning solutions to streamline your business operations and improve efficiency.";
    } else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('phone') || lowerInput.includes('email') || lowerInput.includes('whatsapp')) {
      return "You can reach us at galaxysoftwarehub@gmail.com or call/WhatsApp us at +923100043155. We're also available through our contact form on the website!";
    } else {
      return "Thank you for your question! For detailed information about our services, pricing, or to discuss your project requirements, please don't hesitate to contact our team directly.";
    }
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 dark-card rounded-2xl shadow-2xl z-50 flex flex-col border dark-border">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-t-2xl">
            <h3 className="font-bold text-lg">Galaxy Assistant</h3>
            <p className="text-sm opacity-90">How can we help you today?</p>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-purple-600 text-white'
                      : 'dark-card text-white border dark-border'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs dark-card text-purple-400 px-3 py-1 rounded-full hover:dark-hover transition-colors border dark-border"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t dark-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 dark-card border dark-border rounded-full px-4 py-2 text-sm focus:outline-none focus:border-purple-500 text-white placeholder-gray-400"
              />
              <button
                onClick={handleSendMessage}
                className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}