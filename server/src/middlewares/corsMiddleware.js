import cors from "cors";

const allowedOrigins = ['http://localhost:3000',  'http://localhost:5173', 'http://localhost:5173/auth/login'];

const corsOptions = {
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
