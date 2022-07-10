import React, { FC, useRef } from 'react';
import ReactSwipe from 'react-swipe';

import { BannerSlide, IBannerSlide } from './BannerSlide/BannerSlide';
import './BannerCarousel.scss';

interface IBannerCarousel {
  slides: IBannerSlide[];
}

const BannerCarousel: FC<IBannerCarousel> = (props) => {
  const { slides } = props;

  let reactSwipeEl: ReactSwipe;
  const slideIndex: any = useRef(null);

  const next = () => {
    reactSwipeEl.next();
  };

  const prev = () => {
    reactSwipeEl.prev();
  };

  const swipe = (i: number) => {
    slideIndex.current.innerHTML = `${i + 1} `;
  };

  return (
    <div className="banner-carousel">
      <ReactSwipe
        className="banner-carousel__swipe"
        swipeOptions={{ continuous: true, callback: swipe }}
        // eslint-disable-next-line no-return-assign
        ref={(el: ReactSwipe) => (reactSwipeEl = el)}>
        {slides.map((slide) => (
          <div className="carousel__slide" key={slide.id}>
            <BannerSlide
              id={slide.id}
              title={slide.title}
              text={slide.text}
              img={slide.img}
              buttonText="Подробнее"
            />
          </div>
        ))}
      </ReactSwipe>
      <div className="banner-carousel__buttons">
        <button className="banner-carousel__button" type="button" onClick={prev}>
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.75008 1.5C9.75065 1.79206 9.64893 2.0751 9.46258 2.29999L3.86258 9L9.26258 15.7125C9.36641 15.8404 9.44395 15.9875 9.49074 16.1454C9.53753 16.3033 9.55265 16.4689 9.53523 16.6327C9.5178 16.7965 9.46818 16.9552 9.38921 17.0998C9.31025 17.2443 9.20349 17.3718 9.07508 17.475C8.94722 17.5788 8.8001 17.6564 8.64218 17.7032C8.48425 17.7499 8.31864 17.7651 8.15485 17.7476C7.99107 17.7302 7.83234 17.6806 7.6878 17.6016C7.54325 17.5227 7.41574 17.4159 7.31258 17.2875L1.27508 9.7875C1.09123 9.56383 0.990723 9.28328 0.990723 8.99375C0.990723 8.70422 1.09123 8.42366 1.27508 8.2L7.52508 0.699997C7.63002 0.573423 7.75889 0.468794 7.90433 0.392105C8.04976 0.315414 8.2089 0.268167 8.37262 0.253073C8.53634 0.237978 8.70143 0.255333 8.85843 0.304138C9.01544 0.352943 9.16127 0.432241 9.28758 0.537495C9.43097 0.653812 9.54682 0.800451 9.62679 0.966873C9.70675 1.13329 9.74886 1.31536 9.75008 1.5Z"
              fill="#976464"
            />
          </svg>
        </button>

        <div className="banner-carousel__slide-count">
          <span className="banner-carousel__slide-index" ref={slideIndex}>
            1
          </span>
          /<span className="banner-carousel__slide-total">{slides.length}</span>
        </div>
        <button className="banner-carousel__button" type="button" onClick={next}>
          <svg
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.249918 16.5C0.249347 16.2079 0.351066 15.9249 0.537417 15.7L6.13742 9L0.737418 2.2875C0.633586 2.15964 0.556046 2.01252 0.509256 1.8546C0.462466 1.69668 0.44735 1.53106 0.464773 1.36728C0.482198 1.20349 0.531818 1.04476 0.610785 0.900218C0.689753 0.755672 0.796509 0.628157 0.924917 0.525004C1.05278 0.421172 1.1999 0.343633 1.35782 0.296843C1.51575 0.250053 1.68136 0.234936 1.84515 0.25236C2.00893 0.269784 2.16766 0.319406 2.3122 0.398373C2.45675 0.47734 2.58426 0.584096 2.68742 0.712504L8.72492 8.2125C8.90877 8.43617 9.00928 8.71672 9.00928 9.00625C9.00928 9.29578 8.90877 9.57634 8.72492 9.8L2.47492 17.3C2.36998 17.4266 2.24111 17.5312 2.09567 17.6079C1.95024 17.6846 1.7911 17.7318 1.62738 17.7469C1.46366 17.762 1.29857 17.7447 1.14157 17.6959C0.984562 17.6471 0.838728 17.5678 0.712418 17.4625C0.569026 17.3462 0.453183 17.1995 0.373215 17.0331C0.293246 16.8667 0.251139 16.6846 0.249918 16.5Z"
              fill="#976464"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { BannerCarousel };
