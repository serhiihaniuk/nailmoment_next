import {cn} from "@/shared/utils/cn";

const colors = {
  green: "#DBFE00",
  pink: "#FE018A",
  white: "#fff",
  black: "#000",
};

const colorsForeground = {
  green: "#000",
  pink: "#fff",
  white: "#FE018A",
  black: "#DBFE00",
};

const colorsBackground = {
  green: "#313131",
  pink: "#fff",
  white: "#FE018A",
  black: "#DBFE00",
};

export const TicketButton = ({
   children = "button",
   color = "green",
   className = "",
}: {
  children: string;
  color?: "green" | "pink" | "white" | "black";
  className?: string;
}) => {
  return (
    <button
      style={{ background: colors[color] }}
      className={cn(
        "w-full max-w-80 rounded h-14 flex items-center justify-between overflow-hidden relative hover:opacity-80 transition-all",
        className
      )}
    >
      <svg className="absolute left-0 top-2/4 -translate-y-1/2" width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 20C5.52285 20 10 15.5228 10 10C10 4.47715 5.52285 0 0 0V20Z" fill={colorsBackground[color]}/>
      </svg>
      <svg className="absolute right-0 top-2/4 -translate-y-1/2" width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0C4.47715 -4.82823e-07 1.35705e-06 4.47715 8.74228e-07 10C3.91405e-07 15.5228 4.47715 20 10 20L10 0Z" fill={colorsBackground[color]}/>
      </svg>
      <span
        style={{ color: colorsForeground[color] }}
        className="text-black font-travels text-2xl font-bold uppercase w-full mt-0.5"
      >{children}</span>
      <span className="min-w-[80px] h-full flex items-center justify-center relative">
        <svg className="h-full absolute top-0 left-0" width="4" height="61" viewBox="0 0 4 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.39697 58.739L2.39698 1.99989" stroke={colorsForeground[color]} strokeWidth="3" strokeLinecap="round" strokeDasharray="2 8"/>
        </svg>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.56913 4.92496C7.12739 4.4931 7.79099 3.94537 8.49672 3.46084C10.6455 1.98617 13.0155 1.09084 15.5856 0.701111C15.7542 0.680044 15.9754 0.732711 16.1334 0.838044C19.9675 3.30284 22.5797 6.66296 23.7911 11.0975C24.4652 13.5728 25.3079 15.9849 26.5297 18.2496C27.2144 19.5241 28.0465 20.6933 29.0367 21.7572C29.1104 21.8414 29.1841 21.9257 29.3105 22.0837C28.5311 23.2002 27.7516 24.3273 26.93 25.486C20.1044 18.5972 13.3526 11.7821 6.55859 4.9355L6.56913 4.92496Z" fill={colorsForeground[color]}/>
          <path d="M22.6548 28.8566C21.5698 28.0561 20.5797 27.245 19.4948 26.5603C17.2407 25.1383 14.7443 24.243 12.1952 23.5267C9.95161 22.8947 7.81335 22.0731 5.92789 20.6617C4.04242 19.2608 2.4519 17.5754 1.23003 15.5636C1.13523 15.4056 1.08257 15.1633 1.11417 14.9842C1.65137 11.7926 2.93643 8.94865 5.06416 6.4944C5.14842 6.3996 5.23269 6.31533 5.33802 6.19946C12.1004 13.0145 18.8522 19.8296 25.6252 26.6657C24.793 27.4662 23.7186 28.2246 22.6548 28.8566Z" fill={colorsForeground[color]}/>
          <path d="M0.871373 17.8809C2.00897 19.3661 3.24137 20.609 4.63176 21.6834C6.72789 23.3055 9.10841 24.3062 11.6575 25.0119C14.1855 25.7071 16.6608 26.5919 18.8833 28.0139C19.6206 28.4879 20.3158 29.0462 21.1164 29.6361C20.6845 29.8151 20.379 29.9521 20.063 30.0679C14.6173 31.985 9.43495 31.4267 4.53696 28.3615C4.40003 28.2773 4.27363 28.1719 4.17883 28.0455C2.0511 25.1067 0.95564 21.8203 0.86084 18.1969C0.86084 18.1232 0.86084 18.06 0.86084 17.8704L0.871373 17.8809Z" fill={colorsForeground[color]}/>
          <path d="M29.975 20.4194C29.2166 19.5979 28.6057 18.7131 28.0685 17.7756C26.8361 15.5952 25.9934 13.2568 25.3614 10.8552C24.266 6.70509 22.0224 3.33443 18.6728 0.680043C18.6307 0.648443 18.5885 0.627376 18.5464 0.606309C18.5569 0.57471 18.5675 0.532576 18.5885 0.500977C19.1468 0.54311 19.6945 0.553643 20.2528 0.616843C22.9282 0.953909 25.4141 1.83871 27.6682 3.33443C27.8052 3.42923 27.9316 3.55563 28.0264 3.69257C30.5543 7.25282 31.5971 11.2133 31.1969 15.5531C31.0494 17.1436 30.6807 18.6815 30.1014 20.1666C30.0698 20.2404 30.0277 20.3141 29.9856 20.43L29.975 20.4194Z" fill={colorsForeground[color]}/>
          <path d="M31.6495 6.95776C31.7232 7.04203 31.797 7.10523 31.8496 7.17896C34.6094 10.7919 35.7891 14.8683 35.3994 19.3976C35.3362 20.1349 35.1887 20.8617 35.0728 21.5885C35.0412 21.7992 34.9464 21.9256 34.7252 22.0098C33.9247 22.3153 33.1242 22.4838 32.271 22.2732C32.1235 22.2416 31.9866 22.1889 31.8496 22.1257C31.1544 21.8202 31.1544 21.7781 31.4283 21.0829C33.2295 16.5325 33.3348 11.9505 31.7022 7.33696C31.6706 7.24216 31.639 7.14736 31.6074 7.05256C31.6074 7.0315 31.6074 7.01043 31.6284 6.95776H31.6495Z" fill={colorsForeground[color]}/>
          <path d="M7.96094 31.8166C8.98267 32.0483 9.93066 32.3116 10.8997 32.4802C14.7022 33.1332 18.3784 32.6276 21.886 31.0266C22.223 30.8686 22.36 30.9528 22.5074 31.2372C22.9709 32.1536 22.855 33.0595 22.5706 33.997C22.4232 34.4815 22.1704 34.7238 21.6542 34.8186C16.83 35.7349 12.3955 34.8291 8.3296 32.0799C8.22427 32.0062 8.11894 31.9219 7.97147 31.806L7.96094 31.8166Z" fill={colorsForeground[color]}/>
          <path d="M30.9861 29.4886C29.9854 28.4774 29.0058 27.5084 28.0684 26.5604C28.8794 25.4439 29.6905 24.3273 30.5332 23.1792C31.6813 23.9903 32.9979 24.0851 34.4515 23.7585C33.6615 25.9284 32.5134 27.8139 30.9861 29.4886Z" fill={colorsForeground[color]}/>
          <path d="M29.7546 30.7105C28.1746 32.143 26.3313 33.2806 24.2773 34.0495C24.3089 33.3649 24.4142 32.6802 24.3405 32.0271C24.2562 31.3741 23.9824 30.7421 23.7822 30.0996C24.7724 29.3517 25.8257 28.5617 26.8579 27.7822C27.7954 28.7302 28.7539 29.6993 29.7441 30.7105H29.7546Z" fill={colorsForeground[color]}/>
        </svg>
      </span>
    </button>
  );
};