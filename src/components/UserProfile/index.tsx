import IconLocation from "../../assets/icons/icon-location.svg?react";
import IconTwitter from "../../assets/icons/icon-twitter.svg?react";
import IconWebsite from "../../assets/icons/icon-website.svg?react";
import IconCompany from "../../assets/icons/icon-company.svg?react";
import type { GithubUser } from "../../types/github";
import { formatDate } from "../../utils/formatDate";

interface UserProfile {
    user: GithubUser | null;
}

export const UserProfile = ({ user }: UserProfile) => {
    if (!user) return null;

    return (
        <article
            className="bg-surface grid grid-cols-[4.375rem_minmax(0,1fr)] gap-x-5 gap-y-6 rounded-2xl px-6 py-8 sm:flex sm:items-start sm:gap-8 sm:p-12
         shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:shadow-none"
        >
            <img src={user.avatar_url} alt={`${user.name || user.login} avatar`} className="row-start-1 h-17.5 w-17.5 rounded-full sm:h-29.25 sm:w-29.25" />

            {/* profile-content */}
            <div className="contents text-text-secondary sm:flex sm:w-full sm:flex-col sm:gap-6">
                {/* profile-header */}
                <header className="col-start-2 row-start-1 flex min-w-0 flex-col justify-center gap-1 sm:flex-row sm:justify-between sm:gap-0">
                    <div className="flex flex-col gap-0.5">
                        <h2 className="wrap-break-word text-[26px] font-bold leading-[120%] text-text">{user.name || user.login}</h2>
                        <span
                            className="wrap-break-word text-base leading-[150%] text-primary-hover font-normal"
                        >
                            @{user.login}
                        </span>
                    </div>
                    <div className="wrap-break-word text-[15px] leading-[150%]">
                        <span>Joined </span>
                        <span>{formatDate(user.created_at)}</span>
                    </div>
                </header>

                {/* profile-bio */}
                <p className="col-span-2 wrap-break-word text-[15px] leading-[150%] sm:col-span-1">{user.bio ?? "This profile has no bio"}</p>

                {/* profile-stats */}
                <section className="col-span-2 grid min-w-0 grid-cols-1 gap-y-4 w-full py-4 px-5 text-[13px] leading-[150%] bg-stats-background rounded-[10px] sm:col-span-1 sm:px-8 md:grid-cols-3 md:gap-y-0">
                    <div>
                        <p>Repos</p>
                        <span className="wrap-break-word text-[22px] font-bold leading-[140%] text-text">{user.public_repos}</span>
                    </div>
                    <div>
                        <p>Followers</p>
                        <span className="wrap-break-word text-[22px] font-bold leading-[140%] text-text">{user.followers}</span>
                    </div>
                    <div>
                        <p>Following</p>
                        <span className="wrap-break-word text-[22px] font-bold leading-[140%] text-text">{user.following}</span>
                    </div>
                </section>

                {/* profile-links */}
                <footer className="col-span-2 grid min-w-0 grid-cols-1 gap-4 sm:col-span-1 sm:grid-cols-2">
                    <div className="flex min-w-0 items-center gap-4">
                        <IconLocation className="shrink-0 text-text" />
                        <span className="min-w-0 wrap-break-word text-[15px] font-normal leading-[150%]">{user.location ?? "Not Available"}</span>
                    </div>
                    <div className="flex min-w-0 items-center gap-4">
                        <IconTwitter className="shrink-0 text-text" />
                        <span className="min-w-0 wrap-break-word text-[15px] font-normal leading-[150%]">{user.twitter_username ?? "Not Available"}</span>
                    </div>
                    <div className="flex min-w-0 items-center gap-4">
                        <IconWebsite className="shrink-0 text-text" />
                        <a
                            href={user.blog || undefined}
                            target="_blank"
                            rel="noreferrer"
                            className="min-w-0 wrap-break-word text-[15px] font-normal leading-[150%] cursor-pointer hover:underline"
                        >
                            {user.blog || "Not Available"}
                        </a>
                    </div>
                    <div className="flex min-w-0 items-center gap-4">
                        <IconCompany className="shrink-0 text-text" />
                        <span className="min-w-0 wrap-break-word text-[15px] font-normal leading-[150%]">{user.company ?? "Not Available"}</span>
                    </div>
                </footer>
            </div>
        </article>
    );
};
