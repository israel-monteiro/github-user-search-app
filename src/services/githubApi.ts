import type { GithubUser } from "../types/github";

export class GithubApiError extends Error {
    readonly status: number;

    constructor(status: number) {
        super(`GitHub API returned status ${status}.`);
        this.name = "GithubApiError";
        this.status = status;
    }
}

export async function searchUser(username: string, signal?: AbortSignal): Promise<GithubUser> {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`, { signal });

    if (!response.ok) {
        throw new GithubApiError(response.status);
    }

    return response.json();
}
