import React from 'react';

export const HomeIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="M8 1.4L6 2.7V1H4v3L0 6.6l.6.8L8 2.6l7.4 4.8l.6-.8z"
      />
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="M8 4L2 8v7h5v-3h2v3h5V8z"
      />
   </svg>
);

export const DiscoverIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         fillRule="evenodd"
         d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Zm13-3l-3.693.739a2 2 0 0 0-1.568 1.568L9 15l3.693-.739a2 2 0 0 0 1.569-1.568L15 9Z"
         clipRule="evenodd"
      />
   </svg>
);

export const PodcastIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="M12 3a4 4 0 0 0-4 4h2a.5.5 0 0 1 0 1H8v1h2a.5.5 0 0 1 0 1H8v1h2a.5.5 0 0 1 0 1H8a4 4 0 0 0 8 0h-2a.5.5 0 0 1 0-1h2v-1h-2a.5.5 0 0 1 0-1h2V8h-2a.5.5 0 0 1 0-1h2a4 4 0 0 0-4-4"
      />
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         fillRule="evenodd"
         d="M11.5 20v-2.5h1V20zm-3.5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5"
         clipRule="evenodd"
      />
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         fillRule="evenodd"
         d="M6.227 13.709a.5.5 0 0 1 .647.284a5.5 5.5 0 0 0 10.16.222a.5.5 0 0 1 .916.403a6.5 6.5 0 0 1-12.008-.262a.5.5 0 0 1 .285-.647"
         clipRule="evenodd"
      />
   </svg>
);

export const ProfileIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1408 1472"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="M704 128q-144 0-225 106t-81 271q-1 205 132 325q17 16 12 41l-23 48q-11 24-32.5 37.5T396 995q-3 1-126.5 41T138 1080q-84 35-110 73q-28 63-28 319h1408q0-256-28-319q-26-38-110-73q-8-4-131.5-44T1012 995q-69-25-90.5-38.5T889 919l-23-48q-5-25 12-41q133-120 132-325q0-165-81-271T704 128z"
      />
   </svg>
);

export const HeadphonesIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="M256 32C114.52 32 0 146.496 0 288v48a32 32 0 0 0 17.689 28.622l14.383 7.191C34.083 431.903 83.421 480 144 480h24c13.255 0 24-10.745 24-24V280c0-13.255-10.745-24-24-24h-24c-31.342 0-59.671 12.879-80 33.627V288c0-105.869 86.131-192 192-192s192 86.131 192 192v1.627C427.671 268.879 399.342 256 368 256h-24c-13.255 0-24 10.745-24 24v176c0 13.255 10.745 24 24 24h24c60.579 0 109.917-48.098 111.928-108.187l14.382-7.191A32 32 0 0 0 512 336v-48c0-141.479-114.496-256-256-256z"
      />
   </svg>
);

export const ClockIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="M12 6a1 1 0 0 1 1 1v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1.005 1.005 0 0 1 11 12V7a1 1 0 0 1 1-1Z"
      />
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="M2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12Zm9-5a1 1 0 0 1 2 0v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1.005 1.005 0 0 1 11 12Z"
         opacity=".5"
      />
   </svg>
);

export const MenuDotsIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
         <path d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm14 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" />
         <path d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z" opacity=".5" />
      </g>
   </svg>
);

export const PauseIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z"
      />
   </svg>
);

export const PlayIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="M18.54 9L8.88 3.46a3.42 3.42 0 0 0-5.13 3v11.12A3.42 3.42 0 0 0 7.17 21a3.43 3.43 0 0 0 1.71-.46L18.54 15a3.42 3.42 0 0 0 0-5.92Zm-1 4.19l-9.66 5.62a1.44 1.44 0 0 1-1.42 0a1.42 1.42 0 0 1-.71-1.23V6.42a1.42 1.42 0 0 1 .71-1.23A1.51 1.51 0 0 1 7.17 5a1.54 1.54 0 0 1 .71.19l9.66 5.58a1.42 1.42 0 0 1 0 2.46Z"
      />
   </svg>
);

export const ShuffleIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <g
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
      >
         <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
         <path d="m18 2l4 4l-4 4M2 6h1.9c1.5 0 2.9.9 3.6 2.2M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8" />
         <path d="m18 14l4 4l-4 4" />
      </g>
   </svg>
);

export const RepeatIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <g
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         fillRule="evenodd"
         clipRule="evenodd"
      >
         <path d="M14.519 2.749a.75.75 0 0 1 1.052.13l1.547 1.982a.75.75 0 1 1-1.183.923L14.39 3.8a.75.75 0 0 1 .13-1.052Z" />
         <path d="M16.983 4.727a.75.75 0 0 0-1.052.14l-1.546 2.017a.75.75 0 1 0 1.19.912l1.547-2.017a.75.75 0 0 0-.14-1.052Z" />
         <path d="M2.48 9.323a5 5 0 0 1 5-5h7.86a1 1 0 1 1 0 2H7.48a3 3 0 0 0-3 3v1a1 1 0 1 1-2 0v-1Zm3.008 7.928a.75.75 0 0 1-1.053-.13L2.89 15.14a.75.75 0 1 1 1.182-.923L5.619 16.2a.75.75 0 0 1-.13 1.052Z" />
         <path d="M3.024 15.273a.75.75 0 0 0 1.051-.14l1.547-2.017a.75.75 0 0 0-1.19-.912L2.884 14.22a.75.75 0 0 0 .139 1.052Z" />
         <path d="M17.526 10.677a5 5 0 0 1-5 5h-7.86a1 1 0 1 1 0-2h7.86a3 3 0 0 0 3-3v-1a1 1 0 1 1 2 0v1Z" />
      </g>
   </svg>
);

export const PlayNextFillIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         fillRule="evenodd"
         d="M2.538 4.113a1 1 0 0 1 1.035.068l10 7a1 1 0 0 1 0 1.638l-10 7A1 1 0 0 1 2 19V5a1 1 0 0 1 .538-.887M16 5.8A1.8 1.8 0 0 1 17.8 4h1.4A1.8 1.8 0 0 1 21 5.8v12.4a1.8 1.8 0 0 1-1.8 1.8h-1.4a1.8 1.8 0 0 1-1.8-1.8z"
         clipRule="evenodd"
      />
   </svg>
);

export const PlayBackIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="m30.71 229.47l188.87-113a30.54 30.54 0 0 1 31.09-.39a33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53Z"
      />
   </svg>
);

export const Volume2Icon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         stroke="currentColor"
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth="2"
         d="M11 5L6 9H2v6h4l5 4V5zm8.07-.07a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
      />
   </svg>
);

export const MutedSpeakerIcon = ({
   size = 24,
   color = 'currentColor',
   ...props
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill={color}
      {...props}
   >
      <path
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         d="m19.036 20.718l5.933 5.934a1.189 1.189 0 1 0 1.682-1.683L6.83 5.15a1.19 1.19 0 0 0-1.68 1.683L7.318 9H3.803C2.807 9 2 9.847 2 10.892v10.216C2 22.153 2.807 23 3.803 23l4.195.001l8.613 3.83a1.693 1.693 0 0 0 2.425-1.526v-4.587Zm-2-2v6.113l-7.038-3.13V11.68l7.038 7.038ZM22 16.023c0 .504-.122.979-.337 1.397l-4.627-4.627v-5.76l-.03-.001a.38.38 0 0 0-.113.013h-.002l-3.81 1.793l-1.504-1.503l4.47-2.103c1.123-.529 2.989.023 2.989 1.265v6.473A3.055 3.055 0 0 1 22 16.023Z"
      />
   </svg>
);
