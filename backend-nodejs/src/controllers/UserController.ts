import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import User from '../User';

class UserController {
    public static async signup(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ message: 'L\'utilisateur existe déjà.' });
            }
            // Hash du mot de passe
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({ email, password: hashedPassword });
            res.status(201).json({ message: 'Inscription réussie' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur lors de l\'inscription' });
        }
    }
}

export default UserController;
