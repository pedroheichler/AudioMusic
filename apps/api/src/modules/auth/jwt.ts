import jwt from "jsonwebtoken";

type SignOpts = { expiresInSeconds: number};

export function singAccessToken(payload: object, opts: SignOpts) {
    return jwt.sign(payload, process.env.JWT_ACCESS_SECRET!, {
        expiresIn: opts.expiresInSeconds,
    });
}

export function signRefreshToken(payload: object, opts: SignOpts) {
    return jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
        expiresIn: opts.expiresInSeconds,
    });
}

export function verifyAccessToken<T>(token: string): T {
  return jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as T;
}

export function verifyRefreshToken<T>(token: string): T {
  return jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as T;
}