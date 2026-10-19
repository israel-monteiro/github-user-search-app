import IconLocation from "../../assets/icons/icon-location.svg?react";
import IconTwitter from "../../assets/icons/icon-twitter.svg?react";
import IconWebsite from "../../assets/icons/icon-website.svg?react";
import IconCompany from "../../assets/icons/icon-company.svg?react";
import iconProfile from "../../assets/icons/profile-picture.svg";

export const UserProfile = () => {
    return (
        <article
            className="bg-surface flex items-start gap-8 p-12 rounded-2xl
         shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:shadow-none"
        >
            <img src={iconProfile} alt="" />

            {/* profile-content */}
            <div className="flex flex-col w-full gap-6 text-text-secondary">
                {/* profile-header */}
                <header className="flex justify-between">
                    <div className="flex flex-col gap-0.5">
                        <h2 className="text-[26px] font-bold leading-[120%] text-text">The Octocat</h2>
                        <span
                            className="text-[16px] leading-[150%]
                        text-primary font-normal"
                        >
                            @octocat
                        </span>
                    </div>
                    <div className="text-[15px] leading-[150%]">
                        <span>Joined </span>
                        <span>25 Jan 2011</span>
                    </div>
                </header>

                {/* profile-bio */}
                <p className="text-[15px] leading-[150%]">This profile has no bio</p>

                {/* profile-stats */}
                <section className="grid grid-cols-3 w-full py-4 px-8 text-[13px] leading-[150%] bg-stats-background rounded-[10px]">
                    <div>
                        <p>Repos</p>
                        <span className="text-[22px] font-bold leading-[140%] text-text">8</span>
                    </div>
                    <div>
                        <p>Followers</p>
                        <span className="text-[22px] font-bold leading-[140%] text-text">3938</span>
                    </div>
                    <div>
                        <p>Following</p>
                        <span className="text-[22px] font-bold leading-[140%] text-text">9</span>
                    </div>
                </section>

                {/* profile-links */}
                <footer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex gap-4">
                        <IconLocation className=" text-text" />
                        <span className="text-[15px] font-normal leading-[150%]">San Francisco</span>
                    </div>
                    <div className="flex gap-4">
                        <IconTwitter className=" text-text" />
                        <span className="text-[15px] font-normal leading-[150%]">Not Available</span>
                    </div>
                    <div className="flex gap-4">
                        <IconWebsite className=" text-text" />
                        <a href="https://github.blog" target="_blank" 
                         rel="noreferrer" 
                        className="text-[15px] font-normal leading-[150%] cursor-pointer hover:underline truncate">https://github.blog</a>
                    </div>
                    <div className="flex gap-4">
                        <IconCompany className=" text-text" />
                        <span className="text-[15px] font-normal leading-[150%]">@github</span>
                    </div>
                </footer>
            </div>
        </article>
    );
};
