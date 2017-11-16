export interface User {
    id: number;
    emailAddress: string;
    userName: string;
    name: string;
    surname: string;
    phoneNumber: string;
    password: string;
    isActive: boolean;
    shouldChangePasswordOnNextLogin: boolean;
    isTwoFactorEnabled: boolean;
    isLockoutEnabled: boolean;

}