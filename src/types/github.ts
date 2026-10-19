export type GithubUser = {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string | null;
    bio: string | null;
    blog: string;
    location: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    twitter_username: string | null;
    company: string | null;
};