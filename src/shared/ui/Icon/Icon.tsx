import React, { FC } from 'react';

import './Icon.scss';

type IconsName =
  | 'entry'
  | 'favorites'
  | 'favorites_big'
  | 'favorite_border'
  | 'basket'
  | 'eye'
  | 'star'
  | 'close'
  | 'exit'
  | 'pen';

interface IIcon {
  type: IconsName;
}

const Icon: FC<IIcon> = (props) => {
  const { type } = props;

  if (type === 'entry') {
    return (
      <svg
        className="icon-svg"
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1.3125 12.125C1.3125 12.125 0.375 12.125 0.375 11.1875C0.375 10.25 1.3125 7.4375 6 7.4375C10.6875 7.4375 11.625 10.25 11.625 11.1875C11.625 12.125 10.6875 12.125 10.6875 12.125H1.3125ZM6 6.5C6.74592 6.5 7.46129 6.20368 7.98874 5.67624C8.51618 5.14879 8.8125 4.43342 8.8125 3.6875C8.8125 2.94158 8.51618 2.22621 7.98874 1.69876C7.46129 1.17132 6.74592 0.875 6 0.875C5.25408 0.875 4.53871 1.17132 4.01126 1.69876C3.48382 2.22621 3.1875 2.94158 3.1875 3.6875C3.1875 4.43342 3.48382 5.14879 4.01126 5.67624C4.53871 6.20368 5.25408 6.5 6 6.5Z" />
      </svg>
    );
  }

  if (type === 'favorites') {
    return (
      <svg
        className="icon-svg"
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8334 1.97111C12.3123 0.90167 10.8111 0.0266703 9.06503 0.536115C8.23065 0.777124 7.50267 1.29398 7.00003 2.00223C6.49739 1.29398 5.76941 0.777124 4.93503 0.536115C3.18503 0.0344481 1.68781 0.90167 1.1667 1.97111C0.435585 3.46834 0.738919 5.15223 2.06892 6.97612C3.11114 8.40334 4.60059 9.85 6.76281 11.53C6.83114 11.5833 6.91532 11.6122 7.00197 11.6122C7.08863 11.6122 7.17281 11.5833 7.24114 11.53C9.39947 9.85389 10.8928 8.41889 11.935 6.97612C13.2611 5.15223 13.5645 3.46834 12.8334 1.97111Z" />
      </svg>
    );
  }

  if (type === 'favorites_big') {
    return (
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.4997 2.82C14.8297 1.445 12.8997 0.320005 10.6547 0.975005C9.58192 1.28487 8.64595 1.9494 7.99969 2.86C7.35343 1.9494 6.41746 1.28487 5.34469 0.975005C3.09469 0.330005 1.16969 1.445 0.499689 2.82C-0.440311 4.745 -0.0503105 6.91 1.65969 9.255C2.99969 11.09 4.91469 12.95 7.69469 15.11C7.78254 15.1785 7.89077 15.2157 8.00219 15.2157C8.11361 15.2157 8.22183 15.1785 8.30969 15.11C11.0847 12.955 13.0047 11.11 14.3447 9.255C16.0497 6.91 16.4397 4.745 15.4997 2.82Z"
          fill="url(#paint0_linear_111_268)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_111_268"
            x1="-3.45797"
            y1="-8.23689"
            x2="19.9073"
            y2="-2.50315"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#976464" />
            <stop offset="1" stopColor="#CFA5A5" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === 'favorite_border') {
    return (
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 14.434C7.88951 14.4336 7.78224 14.3967 7.69495 14.3289C4.9145 12.1686 2.9992 10.3083 1.65898 8.47301C-0.0512953 6.12763 -0.441358 3.96228 0.498793 2.03698C1.1689 0.661755 3.09421 -0.463425 5.34457 0.19168C6.41752 0.501599 7.35364 1.16623 8 2.07698C8.64636 1.16623 9.58248 0.501599 10.6554 0.19168C12.9008 -0.453424 14.8311 0.661755 15.5012 2.03698C16.4414 3.96228 16.0513 6.12763 14.341 8.47301C13.0008 10.3083 11.0855 12.1686 8.30505 14.3289C8.21776 14.3967 8.11049 14.4336 8 14.434ZM4.06437 1.00681C3.52891 0.98597 2.99788 1.11135 2.52829 1.36949C2.0587 1.62763 1.66828 2.00879 1.39894 2.47204C0.623813 4.0623 0.97387 5.83258 2.46911 7.87791C4.05815 9.92753 5.91887 11.7512 8 13.2988C10.0808 11.7528 11.9415 9.93076 13.5309 7.88291C15.0311 5.83258 15.3762 4.0623 14.6011 2.47705C14.101 1.47689 12.6007 0.681758 10.9305 1.15183C10.3949 1.31011 9.89841 1.57876 9.47294 1.9405C9.04747 2.30223 8.70245 2.74904 8.46007 3.25217C8.4224 3.34389 8.3583 3.42234 8.27594 3.47755C8.19357 3.53276 8.09666 3.56224 7.9975 3.56224C7.89834 3.56224 7.80142 3.53276 7.71906 3.47755C7.63669 3.42234 7.5726 3.34389 7.53493 3.25217C7.29438 2.74778 6.94994 2.29993 6.52421 1.93797C6.09847 1.57601 5.60104 1.30811 5.06453 1.15183C4.73946 1.05742 4.40286 1.00861 4.06437 1.00681Z"
          fill="url(#paint0_linear_111_777)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_111_777"
            x1="-3.45946"
            y1="-9.02123"
            x2="19.9092"
            y2="-3.28645"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#976464" />
            <stop offset="1" stopColor="#CFA5A5" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === 'basket') {
    return (
      <svg
        className="icon-svg"
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M5.08127 0.555126L3.2142 3.66666H7.7858L5.918 0.555126L6.54867 0.178192L8.64087 3.66666H10.4845C10.769 3.66666 11 3.89766 11 4.18219V4.50413C11 6.66288 10.4974 8.79198 9.53187 10.7228C9.49018 10.8061 9.42612 10.8762 9.34685 10.9252C9.26758 10.9741 9.17624 11 9.08307 11H1.91693C1.8237 10.9999 1.73234 10.9738 1.65308 10.9247C1.57382 10.8756 1.50978 10.8055 1.46813 10.7221C0.502632 8.79125 -1.72126e-05 6.66215 4.42075e-10 4.50339L4.42076e-10 4.18219C4.42076e-10 3.89766 0.231 3.66666 0.515533 3.66666H2.35913L4.45133 0.178192L5.08053 0.555126H5.08127Z" />
      </svg>
    );
  }

  if (type === 'eye') {
    return (
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.73388 7C6.73388 7.58016 6.96435 8.13656 7.37458 8.5468C7.78482 8.95703 8.34122 9.1875 8.92138 9.1875C9.50154 9.1875 10.0579 8.95703 10.4682 8.5468C10.8784 8.13656 11.1089 7.58016 11.1089 7C11.1089 6.41984 10.8784 5.86344 10.4682 5.4532C10.0579 5.04297 9.50154 4.8125 8.92138 4.8125C8.34122 4.8125 7.78482 5.04297 7.37458 5.4532C6.96435 5.86344 6.73388 6.41984 6.73388 7ZM17.4018 6.49609C15.5503 2.5957 12.7515 0.632812 8.9995 0.632812C5.2456 0.632812 2.44872 2.5957 0.597159 6.49805C0.522892 6.65531 0.484375 6.82706 0.484375 7.00098C0.484375 7.17489 0.522892 7.34665 0.597159 7.50391C2.44872 11.4043 5.24755 13.3672 8.9995 13.3672C12.7534 13.3672 15.5503 11.4043 17.4018 7.50195C17.5522 7.18555 17.5522 6.81836 17.4018 6.49609ZM8.92138 10.4375C7.02294 10.4375 5.48388 8.89844 5.48388 7C5.48388 5.10156 7.02294 3.5625 8.92138 3.5625C10.8198 3.5625 12.3589 5.10156 12.3589 7C12.3589 8.89844 10.8198 10.4375 8.92138 10.4375Z"
          fill="#BDBDBD"
        />
      </svg>
    );
  }

  if (type === 'star') {
    return (
      <svg width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" />
      </svg>
    );
  }

  if (type === 'close') {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.49449 1.49363C1.84612 1.142 2.32303 0.944458 2.82031 0.944458C3.31759 0.944458 3.79451 1.142 4.14614 1.49363L14.7527 12.1002C15.1044 12.4519 15.3019 12.9288 15.3019 13.4261C15.3019 13.9233 15.1044 14.4003 14.7527 14.7519L4.14614 25.3585C3.79451 25.7101 3.31759 25.9077 2.82031 25.9077C2.32303 25.9077 1.84612 25.7101 1.49449 25.3585C1.14286 25.0069 0.945312 24.5299 0.945312 24.0327C0.945312 23.5354 1.14286 23.0585 1.49449 22.7068L10.7753 13.4261L1.49449 4.14528C1.14286 3.79365 0.945312 3.31674 0.945312 2.81946C0.945312 2.32218 1.14286 1.84526 1.49449 1.49363Z"
          fill="url(#paint0_linear_116_440)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.1014 14.7519C11.7498 14.4003 11.5522 13.9233 11.5522 13.4261C11.5522 12.9288 11.7498 12.4519 12.1014 12.1002L22.708 1.49363C23.0596 1.142 23.5366 0.944459 24.0338 0.944459C24.5311 0.944459 25.008 1.142 25.3597 1.49363C25.7113 1.84526 25.9088 2.32218 25.9088 2.81946C25.9088 3.31674 25.7113 3.79365 25.3597 4.14528L16.0789 13.4261L25.3597 22.7068C25.7113 23.0585 25.9088 23.5354 25.9088 24.0327C25.9088 24.5299 25.7113 25.0069 25.3597 25.3585C25.008 25.7101 24.5311 25.9077 24.0338 25.9077C23.5366 25.9077 23.0596 25.7101 22.708 25.3585L12.1014 14.7519Z"
          fill="url(#paint1_linear_116_440)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_116_440"
            x1="-4.4522"
            y1="-14.6575"
            x2="32.3977"
            y2="-6.49943"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#976464" />
            <stop offset="1" stopColor="#CFA5A5" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_116_440"
            x1="-4.4522"
            y1="-14.6575"
            x2="32.3977"
            y2="-6.49943"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#976464" />
            <stop offset="1" stopColor="#CFA5A5" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  if (type === 'exit') {
    return (
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18.0004 2.9995L10.8754 0.624505C10.7861 0.594799 10.691 0.586721 10.598 0.600935C10.505 0.61515 10.4167 0.65125 10.3404 0.706263C10.2641 0.761277 10.2019 0.833631 10.1591 0.917369C10.1162 1.00111 10.0938 1.09383 10.0938 1.18791V2.96916H5.34375C5.0289 2.96946 4.72703 3.09467 4.50439 3.3173C4.28176 3.53994 4.15655 3.84181 4.15625 4.15666V5.93756C4.15625 6.09503 4.21881 6.24605 4.33016 6.3574C4.44151 6.46875 4.59253 6.53131 4.75 6.53131C4.90747 6.53131 5.05849 6.46875 5.16984 6.3574C5.28119 6.24605 5.34375 6.09503 5.34375 5.93756V4.15684H10.0938V14.8437H5.34375V13.0624C5.34375 12.905 5.28119 12.7539 5.16984 12.6426C5.05849 12.5312 4.90747 12.4687 4.75 12.4687C4.59253 12.4687 4.44151 12.5312 4.33016 12.6426C4.21881 12.7539 4.15625 12.905 4.15625 13.0624V14.8437C4.15656 15.1585 4.28178 15.4604 4.50441 15.683C4.72704 15.9057 5.0289 16.0309 5.34375 16.0312H10.0938V17.8124C10.0938 17.9065 10.1162 17.9992 10.1592 18.0829C10.2021 18.1666 10.2642 18.2389 10.3405 18.2939C10.4168 18.3489 10.5051 18.385 10.5981 18.3992C10.6911 18.4135 10.7861 18.4054 10.8754 18.3757L18.0004 16.0007C18.1186 15.9613 18.2214 15.8857 18.2942 15.7846C18.3671 15.6835 18.4063 15.562 18.4062 15.4374V3.5628C18.4063 3.43819 18.3671 3.31674 18.2942 3.21564C18.2214 3.11455 18.1186 3.03893 18.0004 2.9995ZM14.25 10.0937H13.0625C12.905 10.0937 12.754 10.0311 12.6427 9.91978C12.5313 9.80843 12.4688 9.65741 12.4688 9.49994C12.4688 9.34247 12.5313 9.19144 12.6427 9.08009C12.754 8.96875 12.905 8.90619 13.0625 8.90619H14.25C14.4075 8.90619 14.5585 8.96875 14.6698 9.08009C14.7812 9.19144 14.8438 9.34247 14.8438 9.49994C14.8438 9.65741 14.7812 9.80843 14.6698 9.91978C14.5585 10.0311 14.4075 10.0937 14.25 10.0937Z"
          fill="#BDBDBD"
        />
        <path
          d="M6.11147 10.8615C6.00331 10.9735 5.94347 11.1235 5.94482 11.2791C5.94617 11.4348 6.00862 11.5837 6.1187 11.6938C6.22879 11.8039 6.37771 11.8664 6.53339 11.8677C6.68907 11.8691 6.83905 11.8092 6.95103 11.7011L8.73228 9.91981C8.84312 9.80815 8.90532 9.65719 8.90532 9.49985C8.90532 9.34252 8.84312 9.19156 8.73228 9.07989L6.95103 7.29894C6.89626 7.24223 6.83074 7.197 6.7583 7.16588C6.68586 7.13476 6.60795 7.11838 6.52911 7.1177C6.45028 7.11701 6.37209 7.13204 6.29912 7.16189C6.22615 7.19174 6.15986 7.23583 6.10411 7.29158C6.04836 7.34733 6.00427 7.41362 5.97442 7.48659C5.94456 7.55956 5.92954 7.63775 5.93023 7.71659C5.93091 7.79542 5.94729 7.87333 5.97841 7.94577C6.00953 8.01821 6.05476 8.08373 6.11147 8.1385L6.87913 8.90622H1.1875C1.03003 8.90622 0.879005 8.96878 0.767655 9.08013C0.656306 9.19148 0.59375 9.3425 0.59375 9.49997C0.59375 9.65744 0.656306 9.80847 0.767655 9.91982C0.879005 10.0312 1.03003 10.0937 1.1875 10.0937H6.87913L6.11147 10.8615Z"
          fill="#BDBDBD"
        />
      </svg>
    );
  }

  if (type === 'pen') {
    return (
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.80467 11.3169L10 5.50877L7.05733 2.75002L0.862 8.55814C0.776709 8.6382 0.716123 8.73841 0.686667 8.84814L0 12.125L3.49467 11.4813C3.612 11.4538 3.71933 11.3969 3.80467 11.3169ZM12 3.63377C12.25 3.39936 12.3904 3.08147 12.3904 2.75002C12.3904 2.41856 12.25 2.10068 12 1.86627L10.9427 0.875016C10.6926 0.640677 10.3536 0.509033 10 0.509033C9.64645 0.509033 9.30737 0.640677 9.05733 0.875016L8 1.86627L10.9427 4.62502L12 3.63377Z"
          fill="#BDBDBD"
        />
      </svg>
    );
  }

  return null;
};

export type { IIcon, IconsName };
export { Icon };