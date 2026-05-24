import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: any;
}

export const checkRole = (roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!roles.includes(req.user.role)) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    next();
  };
};
