import type { GithubUser } from "../types/github";

export async function searchUser(username: string): Promise<GithubUser> {
    const response = await fetch(
        `https://api.github.com/users/${username}`
    );

    if (!response.ok) {
        throw new Error("Falha ao consultar o GitHub.");
    }

    return response.json();
}