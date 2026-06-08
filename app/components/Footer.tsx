import Image from "next/image";

export default function Footer() {
  return (
    <footer id="privacy" className="relative bg-brand-dark lg:pb-[117px]">
      <div className="mx-auto max-w-[1920px] px-6 lg:px-[106px]" style={{ paddingTop: "85px" }}>
        {/* Community CTA */}
        <div className="mt-[60px] rounded-[24px] bg-brand-teal px-8 py-12 lg:mt-[40px] lg:rounded-[38px] lg:px-[81px] lg:py-[100px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-12 2xl:gap-[166px]">
            <div className="flex flex-col gap-5 lg:flex-1 lg:gap-[21px] 2xl:w-[713px] 2xl:flex-none">
              <h2 className="font-poppins font-semibold leading-tight text-white text-[clamp(2rem,3.6vw,4rem)] 2xl:leading-[96px]">
                Join the UeyFind
                <br />
                Community Updates
              </h2>
              <p className="font-poppins text-base font-light leading-relaxed text-white lg:text-2xl lg:leading-9">
                Stay connected with the latest features, updates, and announcements
                from UeyFind. Be the first to know what&apos;s new and never miss an
                upgrade to your experience.
              </p>
            </div>

            <div className="flex flex-col gap-3 lg:flex-1 lg:gap-[14px] 2xl:w-[640px] 2xl:flex-none">
              <p className="font-poppins text-lg font-medium text-white lg:text-[26px] lg:leading-10">
                Stay Connected
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 lg:gap-4">
                <div className="flex min-w-0 flex-1 items-center gap-3 rounded-[44px] bg-white px-6 py-4 lg:h-[80px] lg:rounded-[88px] lg:px-8">
                  <span className="shrink-0 text-brand-deep">
                    <UserIcon />
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent font-poppins text-sm text-brand-deep outline-none placeholder:text-brand-deep lg:text-lg lg:leading-[27px]"
                  />
                </div>
                <button className="shrink-0 whitespace-nowrap rounded-[44px] bg-gradient-to-r from-brand-coral-soft to-brand-coral px-8 py-4 font-poppins text-sm font-medium text-white transition-transform hover:scale-105 sm:px-10 lg:h-[80px] lg:rounded-[93px] lg:text-lg lg:leading-[27px]">
                  Try Now
                </button>
              </div>
              <p className="font-poppins text-xs font-light text-white lg:text-[21px] lg:leading-8">
                By joining you agree to our Privacy Policy
              </p>
            </div>
          </div>
        </div>

        {/* Footer body */}
        <div className="mt-16 flex flex-col gap-12 lg:mt-[170px] lg:flex-row lg:items-end lg:justify-between lg:gap-16 2xl:gap-[513px] mb-[100px]">
          {/* Logo and Text */}
          <div className="flex flex-col gap-5 lg:gap-[21px]">
            <Image
              src="/image.png"
              alt="UeyFind"
              width={92}
              height={92}
              className="h-[90px] lg:h-[85px]"
            />
            <p className="font-poppins text-xl font-semibold leading-snug text-white lg:text-[32px] lg:leading-[48px]">
              Stop Forgetting. Start Asking.
              <br />
              UeyFind Finds What You Need—Fast.
            </p>
            <p className="font-poppins text-base text-white lg:text-[21px] lg:leading-8">
              UeyFind, 2026.
            </p>
          </div>

          {/* Twitter Thread card */}
          <div className="w-full rounded-[21px] bg-white/10 p-[26px] lg:w-[373px] lg:shrink-0">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-[53px] w-[53px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(148.32deg,#8FECD9_3.09%,#558C93_103.42%)]">
                  <Image
                    src="/image.png"
                    alt="UeyFind"
                    width={37}
                    height={37}
                    className="w-auto"
                    style={{ height: "53px" }}
                  />
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="font-poppins text-lg font-medium leading-7 text-white">
                    Team UeyFind
                  </p>
                  <p className="font-poppins text-base leading-6 text-white/80">
                    @UeyFindapp
                  </p>
                </div>
              </div>
              <span className="shrink-0 text-white">
                <TwitterIcon />
              </span>
            </div>
            <p className="mt-6 font-poppins text-lg leading-[27px] text-white">
              We&apos;re just announced new feature that would help you increase your
              experience of using UeyFind!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="relative inset-x-0 bottom-0 bg-brand-mint lg:absolute lg:h-[117px]">
        <div className="mx-auto flex h-full max-w-[1920px] flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:py-8 lg:px-[106px]">
          <p className="font-poppins text-sm text-brand-dark lg:text-[18px] lg:leading-7">
            © 2026 UeyFind. All rights reserved.
          </p>
          <div className="flex items-center gap-[21px]">
            <SocialIcon label="Instagram">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon label="Facebook">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon label="Twitter">
              <TwitterIcon />
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="flex h-[53px] w-[53px] items-center justify-center rounded-full border-[1.33px] border-brand-deep/25 bg-[#E0E0E0]/10 text-brand-deep/80 transition-colors hover:bg-[#E0E0E0]/20"
    >
      {children}
    </a>
  );
}

function UserIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM18.87 20c0-3.097-3.08-5.6-6.87-5.6S5.13 16.903 5.13 20"
        stroke="#145159"
        strokeWidth="1.667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.045 4.126H5.078L17.044 19.77Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.94c-3.14 0-3.51.01-4.75.07-1.15.05-1.77.24-2.18.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.41-.35 1.03-.4 2.18-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.18.22.55.47.94.88 1.35.41.41.8.66 1.35.88.41.16 1.03.35 2.18.4 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.18-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.41.35-1.03.4-2.18.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.18a3.63 3.63 0 0 0-.88-1.35 3.63 3.63 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.18-.4-1.24-.06-1.61-.07-4.75-.07Zm0 3.3a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 7.59a2.99 2.99 0 1 0 0-5.98 2.99 2.99 0 0 0 0 5.98Zm5.86-7.81a1.08 1.08 0 1 1-2.15 0 1.08 1.08 0 0 1 2.15 0Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}
