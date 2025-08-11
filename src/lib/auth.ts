import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Demo admin credentials
const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LeVMpYlnxfE/bYHQe', // 'admin123'
  email: 'admin@galaxysoftwarehub.com'
};

export const validateCredentials = async (username: string, password: string): Promise<boolean> => {
  if (username !== ADMIN_CREDENTIALS.username) return false;
  return await bcrypt.compare(password, ADMIN_CREDENTIALS.password);
};

export const generateToken = (payload: any): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
};