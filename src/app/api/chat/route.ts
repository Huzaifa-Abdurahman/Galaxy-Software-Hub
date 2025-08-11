import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    // Simple chatbot responses
    const lowerMessage = message.toLowerCase();
    let response = '';

    if (lowerMessage.includes('service') || lowerMessage.includes('what do you')) {
      response = "We offer comprehensive digital services including Web Development, Graphic Design, SEO Services, and AI Automation solutions to help transform your business.";
    } else if (lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('how much')) {
      response = "Our pricing varies based on project requirements. We offer competitive rates and custom packages. Please contact us for a detailed quote tailored to your specific needs!";
    } else if (lowerMessage.includes('seo')) {
      response = "Yes! We provide comprehensive SEO services including keyword research, on-page optimization, link building, and analytics reporting to boost your search engine rankings.";
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('automation')) {
      response = "Our AI automation services include chatbots, process automation, data analysis, and machine learning solutions to streamline your business operations and improve efficiency.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach')) {
      response = "You can reach us at contact@galaxysoftwarehub.com or call us at +1 (555) 123-4567. We're also available through our contact form on the website!";
    } else {
      response = "Thank you for your question! For detailed information about our services, pricing, or to discuss your project requirements, please don't hesitate to contact our team directly.";
    }

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process message' }, { status: 500 });
  }
}