export type UserRole = 'USER' | 'ADMIN';
export type AuthProvider = 'GOOGLE' | 'GITHUB';

export interface OAuthAccount {
	provider: AuthProvider;
	providerId: string;
}

export interface UserProfile {
	id: string;
	username: string;
	firstName?: string | null;
	lastName?: string | null;
	avatarUrl?: string | null;
	role: UserRole;
	accounts: OAuthAccount[];
	provider: AuthProvider;
}
