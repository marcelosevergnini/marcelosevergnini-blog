import React from 'react';

import Wrapper from './Wrapper';
import SocialLink from './SocialLink';

function Social({ website, twitter, github, gitlab, linkedin }) {
  return (
    <Wrapper>
      {website && (
        <SocialLink href={website} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          Website
        </SocialLink>
      )}
      {twitter && (
        <SocialLink href={twitter} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
          Twitter
        </SocialLink>
      )}
      {github && (
        <SocialLink href={github} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Github
        </SocialLink>
      )}
      {gitlab && (
        <SocialLink href={gitlab} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 32 32"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m31.896 17.702l-1.677-5.219c-.002-.005 0-.011-.001-.016l-3.327-10.384c-.216-.648-.817-1.083-1.497-1.083-.003 0-.006 0-.009 0-.681.004-1.277.443-1.485 1.093l-3.102 9.675h-9.59l-3.107-9.674c-.208-.651-.805-1.09-1.486-1.094-.003 0-.006 0-.009 0-.681 0-1.281.435-1.5 1.094l-3.314 10.36c-.002.005-.005.009-.007.014l-1.682 5.234c-.285.889.026 1.856.774 2.407l14.525 10.696c.036.026.077.038.115.059.008.004.012.011.02.016.004.002.009.003.013.005.012.006.024.009.036.015.009.004.018.01.027.014.004.002.007.004.011.006.043.017.086.032.131.043.022.006.045.006.067.011.059.009.116.026.174.026.023 0 .045-.012.069-.014.07-.005.14-.015.209-.035.013-.004.027-.003.041-.007.009-.003.016-.009.025-.012.026-.01.05-.021.075-.032.012-.005.024-.009.036-.015.004-.002.009-.003.013-.005.017-.009.028-.025.045-.035.027-.016.058-.025.084-.043.001-.001.003-.001.004-.002l14.525-10.69c.748-.551 1.06-1.519.774-2.408m-22.15-3.929l3.551 11.07-8.523-11.07h4.972m8.956 11.07l3.182-9.923.369-1.152h4.976l-5.432 7.06-3.095 4.02m6.693-20.873l2.498 7.793h-4.996l2.498-7.793m-5.24 9.793l-2.937 9.158-1.217 3.794-4.152-12.952h8.306m-13.552-9.793l2.503 7.793h-4.996l2.493-7.793m-4.541 14.523c-.054-.039-.077-.117-.056-.185l1.099-3.421 7.771 10.1-8.814-6.49m27.874 0l-8.814 6.487.34-.442 7.432-9.651 1.098 3.42c.021.069-.003.147-.056.186" fill="#adb5bd"></path>
          </svg>
          Gitlab
        </SocialLink>
      )}
      {linkedin && (
        <SocialLink href={linkedin} target="_blank" rel="noopener">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          LinkedIn
        </SocialLink>
      )}
    </Wrapper>
  );
}

export default Social;
