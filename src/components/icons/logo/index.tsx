import React from "react";
import { IconProps } from "@/src/types/icon-props";

const LogoIcon = ({ width = "183", height }: IconProps) => {
  const aspectRatio = 183 / 36;
  const calculatedHeight = parseFloat(width) / aspectRatio;

  return (
    <svg
      width={width}
      height={height ?? calculatedHeight}
      viewBox="0 0 183 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="36" height="36" fill="url(#pattern0_105_459)" />
      <path
        d="M57.75 17.775C59.4 18.55 60.425 20.125 60.425 22.025C60.425 24.875 57.975 27.025 54.75 27.025H46.675V9.525H54.575C57.675 9.525 59.95 11.4 59.95 14C59.95 15.55 59.075 16.95 57.75 17.775ZM55.375 14.8C55.375 13.875 54.75 13.275 53.75 13.275H51.3V16.325H53.75C54.75 16.325 55.375 15.7 55.375 14.8ZM53.925 23.05C54.975 23.05 55.65 22.4 55.65 21.45C55.65 20.525 54.975 19.875 53.925 19.875H51.3V23.05H53.925ZM73.6342 13.5H77.1092V27H73.5092L73.1092 26.05C72.0092 26.95 70.6092 27.45 69.0342 27.45C64.9092 27.45 61.9592 24.45 61.9592 20.25C61.9592 16.075 64.9092 13.1 69.0342 13.1C70.6342 13.1 72.0592 13.625 73.1592 14.55L73.6342 13.5ZM69.6592 23.35C71.4092 23.35 72.6842 22.025 72.6842 20.25C72.6842 18.5 71.4092 17.2 69.6592 17.2C67.9092 17.2 66.6342 18.5 66.6342 20.25C66.6342 22.025 67.9092 23.35 69.6592 23.35ZM88.1938 13.125C91.3188 13.125 93.3938 15.35 93.3938 18.775V27H88.7438V19.425C88.7438 17.85 88.1438 17.075 86.9688 17.075C85.5188 17.075 84.6938 18.075 84.6938 19.8V27H80.0438V13.5H83.3188L83.9438 14.9C84.9438 13.775 86.4438 13.125 88.1938 13.125ZM109.882 27H104.382L101.007 21.3V27H96.357V8.625H101.007V18.8L104.232 13.5H109.457L105.232 19.95L109.882 27ZM118.374 9.5C123.674 9.5 127.424 13.125 127.424 18.25C127.424 23.35 123.674 27 118.374 27H111.299V9.5H118.374ZM118.149 22.6C120.749 22.6 122.474 20.825 122.474 18.25C122.474 15.65 120.749 13.925 118.149 13.925H116.149V22.6H118.149ZM140.602 13.5H144.077V27H140.477L140.077 26.05C138.977 26.95 137.577 27.45 136.002 27.45C131.877 27.45 128.927 24.45 128.927 20.25C128.927 16.075 131.877 13.1 136.002 13.1C137.602 13.1 139.027 13.625 140.127 14.55L140.602 13.5ZM136.627 23.35C138.377 23.35 139.652 22.025 139.652 20.25C139.652 18.5 138.377 17.2 136.627 17.2C134.877 17.2 133.602 18.5 133.602 20.25C133.602 22.025 134.877 23.35 136.627 23.35ZM152.212 27.45C148.537 27.45 146.312 25.5 146.262 22.575H150.737C150.737 23.575 151.437 24.025 152.312 24.025C152.987 24.025 153.637 23.675 153.637 22.975C153.637 22.2 152.612 21.975 151.312 21.775C149.212 21.425 146.437 20.8 146.437 17.525C146.437 14.825 148.762 13.075 152.212 13.075C155.637 13.075 157.887 14.9 157.937 17.625H153.562C153.562 16.775 152.987 16.375 152.162 16.375C151.412 16.375 150.912 16.75 150.912 17.375C150.912 18.125 151.937 18.325 153.212 18.55C155.362 18.925 158.187 19.375 158.187 22.775C158.187 25.6 155.812 27.45 152.212 27.45ZM168.616 13.125C171.716 13.125 173.716 15.375 173.716 18.875V27H169.066V19.425C169.066 17.875 168.516 17.075 167.291 17.075C165.891 17.075 165.016 18.075 165.016 19.8V27H160.366V8.625H165.016V14.4C166.016 13.6 167.266 13.125 168.616 13.125ZM176.304 27V22.7H180.829V27H176.304Z"
        fill="#343C6A"
      />
      <defs>
        <pattern
          id="pattern0_105_459"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_105_459" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_105_459"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LogoIcon;
