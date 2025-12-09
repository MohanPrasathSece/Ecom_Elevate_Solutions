// Email service for frontend
const API_BASE_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  errors?: any[];
}

export const sendEmail = async (data: EmailData): Promise<EmailResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || 'Failed to send email');
    }

    return result;
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
};

export const checkEmailHealth = async (): Promise<{ status: string; message: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    return await response.json();
  } catch (error) {
    console.error('Health check error:', error);
    throw error;
  }
};
