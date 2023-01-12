import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import $ from 'jquery'
import 'swiper/css/pagination'
import 'swiper/css'
import GooglePlayIcon from '../../assets/images/icons/google_play.svg'
import AppStoreIcon from '../../assets/images/icons/app_store.svg'
import DownloadIcon from '../../assets/images/icons/download.svg'
import RecommendIcon from '../../assets/images/icons/recommend.svg'
import StarIcon from '../../assets/images/icons/star.svg'
import Slider1 from '../../assets/images/slider1.png'
import Slider2 from '../../assets/images/slider2.png'
import Slider3 from '../../assets/images/slider3.png'
import Collection1 from '../../assets/images/big-collection1.png'
import Collection2 from '../../assets/images/big-collection2.png'
import GoldStarIcon from '../../assets/images/icons/g_star.svg'
import BlackStarIcon from '../../assets/images/icons/b_star.svg'
import WishIcon from '../../assets/images/icons/wish.svg'
import CartIcon from '../../assets/images/icons/cart.svg'
import LeftIcon from '../../assets/images/icons/left.svg'
import RightIcon from '../../assets/images/icons/right.svg'
import './home.scss'

const mostCollections: any = [
    { url: '/assets/images/collection1.png', label: 'UNISEX Collection' },
    { url: '/assets/images/collection2.png', label: 'Woman Collection' },
    { url: '/assets/images/collection3.png', label: 'Male Collection' },
]
const things: any = [
    {
        url: '/assets/images/thing1.png',
        label: 'Consectetur Hampden',
        price: '$104.86',
        stars: 5,
    },
    {
        url: '/assets/images/thing2.png',
        label: 'Exercitat Virginia accusantium',
        price: '$87.00',
        stars: 5,
    },
    {
        url: '/assets/images/thing3.png',
        label: 'Accusantium doloremque',
        price: '$110.00',
        stars: 1,
    },
    {
        url: '/assets/images/thing4.png',
        label: 'Voluptas assumenda',
        price: '$78.00',
        stars: 3,
    },
    {
        url: '/assets/images/thing5.png',
        label: 'Voluptas assumenda',
        price: '$99.00',
        stars: 4,
    },
    {
        url: '/assets/images/thing6.png',
        label: 'Voluptas assumenda',
        price: '$85.00',
        stars: 3,
    },
    {
        url: '/assets/images/thing7.png',
        label: 'Voluptas assumenda',
        price: '$79.00',
        stars: 4,
    },
    {
        url: '/assets/images/thing8.png',
        label: 'Voluptas assumenda',
        price: '$105.00',
        stars: 5,
    },
]
const companies: any = [
    { url: '/assets/images/icons/company1.svg', label: '' },
    { url: '/assets/images/icons/company2.svg', label: '' },
    { url: '/assets/images/icons/company3.svg', label: '' },
    { url: '/assets/images/icons/company4.svg', label: '' },
    { url: '/assets/images/icons/company5.svg', label: '' },
    { url: '/assets/images/icons/company6.svg', label: '' },
]
const services: any = [
    {
        url: '/assets/images/icons/drive.svg',
        label: 'Free Delivery',
        describe: 'Order above $100',
    },
    {
        url: '/assets/images/icons/refund.svg',
        label: 'Money Return',
        describe: 'Back guarantee in 7 days',
    },
    {
        url: '/assets/images/icons/member_discount.svg',
        label: 'Member Discount',
        describe: 'Onevery order over $130.00',
    },
    {
        url: '/assets/images/icons/return_policy.svg',
        label: 'Return Policy',
        describe: 'Support 24 hours a day',
    },
]
const blogs: any = [
    {
        url: '/assets/images/blog1.png',
        label: 'Lorem Ipsum is simply dummy text of the printing industry.',
        describe:
            'Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n',
        date: 'Dec 18, 2020',
    },
    {
        url: '/assets/images/blog2.png',
        label: 'Lorem Ipsum is simply dummy text of the printing industry.',
        describe:
            'Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n',
        date: 'Dec 18, 2020',
    },
    {
        url: '/assets/images/blog3.png',
        label: 'Lorem Ipsum is simply dummy text of the printing industry.',
        describe:
            'Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n',
        date: 'Dec 18, 2020',
    },
    {
        url: '/assets/images/blog1.png',
        label: 'Lorem Ipsum is simply dummy text of the printing industry.',
        describe:
            'Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n',
        date: 'Dec 18, 2020',
    },
    {
        url: '/assets/images/blog2.png',
        label: 'Lorem Ipsum is simply dummy text of the printing industry.',
        describe:
            'Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n',
        date: 'Dec 18, 2020',
    },
    {
        url: '/assets/images/blog3.png',
        label: 'Lorem Ipsum is simply dummy text of the printing industry.',
        describe:
            'Typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n',
        date: 'Dec 18, 2020',
    },
]
const people: any = [
    {
        url: '/assets/images/people.png',
        className: 'hideLeft',
        name: 'Ann Lubin',
        role: 'Co-Founder',
        describe:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.',
    },
    {
        url: '/assets/images/people.png',
        className: 'prevLeftSecond',
        name: 'Ann Lubin',
        role: 'Co-Founder',
        describe:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.',
    },
    {
        url: '/assets/images/people.png',
        className: 'prev',
        name: 'Ann Lubin',
        role: 'Co-Founder',
        describe:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.',
    },
    {
        url: '/assets/images/people.png',
        className: 'selected',
        name: 'Ann Lubin',
        role: 'Co-Founder',
        describe:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.',
    },
    {
        url: '/assets/images/people.png',
        className: 'next',
        name: 'Ann Lubin',
        role: 'Co-Founder',
        describe:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.',
    },
    {
        url: '/assets/images/people.png',
        className: 'nextRightSecond',
        name: 'Ann Lubin',
        role: 'Co-Founder',
        describe:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.',
    },
    {
        url: '/assets/images/people.png',
        className: 'hideRight',
        name: 'Ann Lubin',
        role: 'Co-Founder',
        describe:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.',
    },
]

const Home = () => {
    const moveToSelected = (element: any) => {
        let selected
        if (element == 'next') {
            selected = $('.selected').next()
        } else if (element == 'prev') {
            selected = $('.selected').prev()
        } else {
            console.log(element)
            selected = element
            console.log('selected', selected)
        }

        let next = $(selected).next()
        let prev = $(selected).prev()
        let prevSecond = $(prev).prev()
        let nextSecond = $(next).next()

        $(selected).removeClass().addClass('selected')

        $(prev).removeClass().addClass('prev')
        $(next).removeClass().addClass('next')

        $(nextSecond).removeClass().addClass('nextRightSecond')
        $(prevSecond).removeClass().addClass('prevLeftSecond')

        $(nextSecond).nextAll().removeClass().addClass('hideRight')
        $(prevSecond).prevAll().removeClass().addClass('hideLeft')
    }
    const prev = () => {
        moveToSelected('prev')
    }
    const next = () => {
        moveToSelected('next')
    }
    useEffect(() => {
        $('.customers-group div').click(function () {
            moveToSelected($(this))
        })
    }, [])

    return (
        <Layout>
            <main>
                <section className="slider">
                    <div className="slider-left">
                        <p className="slider-title pl-[25%]">TIMELESS</p>
                        <div className="slider-main">
                            <div className="main-img">
                                <img src={Slider3} alt="slider3" />
                            </div>
                            <div className="space-y-[1.4vw]">
                                <p className="slider-title">EYEWEAR</p>
                                <div className="preferential-box">
                                    <p>Up to 40% Discount</p>
                                </div>
                                <div>
                                    <button className="shop-btn">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slider-right">
                        <div className="main-img">
                            <img src={Slider1} alt="slider1" />
                            <div className="child-img">
                                <img src={Slider2} alt="slider2" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="most-collections">
                    <div className="sex-collection-group">
                        {mostCollections.map((item: any, ind: number) => {
                            return (
                                <div key={ind} className="sex-collection-items">
                                    <img src={item.url} alt="collections" />
                                    <div className="img-bg"></div>
                                    <div className="collection-description">
                                        <p>{item.label}</p>
                                        <button className="shop-btn">
                                            View All Products
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="special-collection-group">
                        <div className="first-collection">
                            <img src={Collection1} alt="collection1" />
                            <div className="space-y-[1vw]">
                                <div>
                                    <p className="text-[18px] sm:text-[24px] md:text-[1.8vw] font-[300]">
                                        Sale Up To 30% Discount
                                    </p>
                                    <p className="text-[24px] sm:text-[36px] md:text-[2.7vw] font-[600]">
                                        Matt Red Sunglasses
                                    </p>
                                </div>
                                <div className="flex justify-center md:justify-start">
                                    <button className="shop-btn">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="second-collection">
                            <img src={Collection2} alt="collection2" />
                            <div className="space-y-[1vw]">
                                <div>
                                    <p className="text-[18px] sm:text-[24px] md:text-[1.8vw] font-[300]">
                                        Sale Up To 30% Discount
                                    </p>
                                    <p className="text-[24px] sm:text-[36px] md:text-[2.7vw] font-[600]">
                                        Matt Red Sunglasses
                                    </p>
                                </div>
                                <div className="flex justify-center md:justify-start">
                                    <button className="shop-btn">
                                        Shop Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="latest-collections">
                    <h2 className="text-center text-[28px] lg:text-[33px] font-[600]">
                        Latest Collection
                    </h2>
                    <div className="flex justify-center">
                        <p className="borderline"></p>
                    </div>
                    <div className="category-group">
                        <div className="categories">
                            <p>Sunglasses</p>
                            <p>Sunglasses</p>
                            <p>Sunglasses</p>
                        </div>
                    </div>
                    <div className="things">
                        {things.map((item: any, ind: number) => {
                            return (
                                <div key={ind} className="thing-items">
                                    <div className="thing-img">
                                        <img src={item.url} alt="things" />
                                        <div className="thing-buy">
                                            <div className="thing-buy-group">
                                                <div className="wish-item">
                                                    <img
                                                        src={WishIcon}
                                                        alt="wish"
                                                    />
                                                </div>
                                                <div className="cart-item">
                                                    <img
                                                        src={CartIcon}
                                                        alt="cart"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="thing-detail">
                                        <div className="stars-group">
                                            <div>
                                                <img
                                                    src={GoldStarIcon}
                                                    alt="star"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src={GoldStarIcon}
                                                    alt="star"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src={GoldStarIcon}
                                                    alt="star"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src={GoldStarIcon}
                                                    alt="star"
                                                />
                                            </div>
                                            <div>
                                                <img
                                                    src={BlackStarIcon}
                                                    alt="star"
                                                />
                                            </div>
                                        </div>
                                        <p className="thing-name">
                                            {item.label}
                                        </p>
                                        <p className="thing-price">
                                            {item.price}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex justify-center pt-[4vw]">
                        <button className="shop-btn">View All Products</button>
                    </div>
                </section>
                <section className="blogs">
                    <div className="space-y-[10px]">
                        <h2 className="text-center text-[33px] font-[600]">
                            Our Brand
                        </h2>
                        <div className="flex justify-center">
                            <p className="borderline"></p>
                        </div>
                    </div>
                    <div className="blogs-container">
                        <div className="companies">
                            <Swiper
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1280: {
                                        slidesPerView: 5,
                                        spaceBetween: 20,
                                    },
                                }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper companies-group"
                            >
                                {companies.map((item: any, ind: number) => {
                                    return (
                                        <SwiperSlide key={ind}>
                                            <div className="flex justify-center">
                                                <img
                                                    src={item.url}
                                                    alt="services"
                                                />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                        <div className="blog-main">
                            <div className="text-center space-y-[4px]">
                                <h2 className="font-[600] text-[33px] text-white">
                                    Our Blog
                                </h2>
                                <div className="flex justify-center">
                                    <p className="borderline"></p>
                                </div>
                            </div>
                            <Swiper
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1280: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper blog-slider"
                            >
                                {blogs.map((item: any, ind: number) => {
                                    return (
                                        <SwiperSlide
                                            key={ind}
                                            className="blog-slider-item"
                                        >
                                            <div>
                                                <img
                                                    src={item.url}
                                                    alt="blogs"
                                                />
                                            </div>
                                            <h4 className="text-[24px] text-ninth font-[600]">
                                                {item.label}
                                            </h4>
                                            <p className="text-fourth text-[16px] opacity-60">
                                                {item.describe}
                                            </p>
                                            <div className="flex justify-between text-[20px] font-[600]">
                                                <p className="text-primary">
                                                    {item.date}
                                                </p>
                                                <p className="text-ninth underline">
                                                    Load more
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                        <div className="services">
                            <Swiper
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1280: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                                modules={[Autoplay, Pagination]}
                                className="mySwiper services-group"
                            >
                                {services.map((item: any, ind: number) => {
                                    return (
                                        <SwiperSlide
                                            key={ind}
                                            className="service-items"
                                        >
                                            <div className="flex justify-center">
                                                <img
                                                    src={item.url}
                                                    alt="services"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-[600] text-[18px]">
                                                    {item.label}
                                                </h4>
                                                <p className="text-sixth text-[16px]">
                                                    {item.describe}
                                                </p>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className="mobile-app">
                    <div className="mobile-app-description">
                        <div className="space-y-[20px]">
                            <h2 className="text-fifth text-[32px] font-[700] text-center sm:text-left">
                                Download App Now
                            </h2>
                            <p className="text-fifth text-[16px] font-[400] text-center sm:text-left">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Viverra nunc ante velit vitae.
                                Est tellus vitae, nullam lobortis enim. Faucibus
                                amet etiam tincidunt rhoncus, ullamcorper velit.
                                Ullamcorper risus tempor, ac nunc libero urna,
                                feugiat.
                            </p>
                        </div>
                        <div className="space-y-[46px]">
                            <div className="sm:flex space-y-[20px] sm:space-y-0">
                                <div>
                                    <img
                                        src={GooglePlayIcon}
                                        alt="google app"
                                        className="min-w-[194px]"
                                    />
                                </div>
                                <div>
                                    <img
                                        src={AppStoreIcon}
                                        alt="app store"
                                        className="min-w-[194px]"
                                    />
                                </div>
                            </div>
                            <div className="feedback-group">
                                <div className="feedback-items bg-primary">
                                    <div className="text-white font-[600] space-y-[12px]">
                                        <div className="flex justify-center">
                                            <img
                                                src={DownloadIcon}
                                                alt="download"
                                            />
                                        </div>
                                        <p className="text-[36px] text-center">
                                            59865
                                        </p>
                                        <p className="text-[16px] text-center">
                                            Download
                                        </p>
                                    </div>
                                </div>
                                <div className="feedback-items bg-second">
                                    <div className="text-white font-[600] space-y-[12px]">
                                        <div className="flex justify-center">
                                            <img
                                                src={RecommendIcon}
                                                alt="recommend"
                                            />
                                        </div>
                                        <p className="text-[36px] text-center">
                                            29852
                                        </p>
                                        <p className="text-[16px] text-center">
                                            LIke
                                        </p>
                                    </div>
                                </div>
                                <div className="feedback-items bg-third">
                                    <div className="text-white font-[600] space-y-[12px]">
                                        <div className="flex justify-center">
                                            <img src={StarIcon} alt="star" />
                                        </div>
                                        <p className="text-[36px] text-center">
                                            1500
                                        </p>
                                        <p className="text-[16px] text-center">
                                            5 star rating
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="customers">
                    <div className="title">
                        <div className="space-y-[10px]">
                            <h2>Our Happy Customers</h2>
                            <div className="flex justify-center">
                                <p className="borderline"></p>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Viverra nunc ante velit vitae. Est tellus
                            vitae, nullam lobortis enim. Faucibus amet etiam
                            tincidunt rhoncus, ullamcorper velit. Ullamcorper
                            risus tempor, ac nunc libero urna, feugiat.
                        </p>
                    </div>
                    <div className="customers-slider1">
                        <button
                            onClick={prev}
                            className="absolute left-[20px] top-[40%] bg-seventh rounded-full p-[8px] z-[10]"
                        >
                            <img
                                src={LeftIcon}
                                alt="left"
                                className="w-[24px] h-[24px]"
                            />
                        </button>
                        <div className="customers-group">
                            {people.map((item: any, ind: number) => {
                                return (
                                    <div className={item.className} key={ind}>
                                        <div className="flex flex-col justify-between h-full">
                                            <p className="flex justify-center">
                                                <img
                                                    src={item.url}
                                                    alt={item.name}
                                                />
                                            </p>
                                            <p className="text-fourth text-[24px] font-[600]">
                                                {item.name}
                                            </p>
                                            <p className="text-tenth text-[20px] font-[600]">
                                                {item.role}
                                            </p>
                                            <p className="text-fourth text-[16px] font-[500] opacity-80">
                                                {item.describe}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button
                            onClick={next}
                            className="absolute right-[20px] top-[40%] bg-seventh rounded-full p-[8px] z-[10]"
                        >
                            <img
                                src={RightIcon}
                                alt="right"
                                className="w-[24px] h-[24px]"
                            />
                        </button>
                    </div>
                    <div className="customers-slider2">
                        <Swiper
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                            }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper customers-group"
                        >
                            {people.map((item: any, ind: number) => {
                                return (
                                    <SwiperSlide
                                        key={ind}
                                        className="customers-item"
                                    >
                                        <p className="flex justify-center">
                                            <img
                                                src={item.url}
                                                alt={item.name}
                                            />
                                        </p>
                                        <p className="text-fourth text-[24px] font-[600]">
                                            {item.name}
                                        </p>
                                        <p className="text-tenth text-[20px] font-[600]">
                                            {item.role}
                                        </p>
                                        <p className="text-fourth text-[16px] font-[500] opacity-80">
                                            {item.describe}
                                        </p>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Home
