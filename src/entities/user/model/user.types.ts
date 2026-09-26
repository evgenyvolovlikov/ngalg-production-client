export type UserRole = 'USER' | 'ADMIN';
export type AuthProvider = 'GOOGLE' | 'GITHUB' | 'LOCAL';

export interface UserProfile {
	id: string;
	email: string;
	username: string;
	firstName?: string | null;
	lastName?: string | null;
	avatarUrl?: string | null;
	role: UserRole;
	provider: AuthProvider;
}
