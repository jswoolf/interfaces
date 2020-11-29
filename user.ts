export interface Authentication {
		checkPassword(password: string): boolean;
}

export interface Authorization  {
	checkAccess(user: User): boolean;
}