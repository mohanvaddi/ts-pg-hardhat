declare namespace Express {
  interface Request {
    payload: {
      email: string;
      role: 'user' | 'admin';
    };
  }
}
