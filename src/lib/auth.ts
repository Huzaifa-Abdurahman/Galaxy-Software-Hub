import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-production';

export function generateToken(payload: any): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

export async function validateCredentials(username: string, password: string): Promise<boolean> {
  // Default admin credentials
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';
  
  console.log('Validating credentials:', { 
    provided: { username, password: password ? '***' : 'empty' },
    expected: { username: ADMIN_USERNAME, password: ADMIN_PASSWORD ? '***' : 'empty' }
  });
  
  const isValid = username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
  console.log('Validation result:', isValid);
  
  return isValid;
}