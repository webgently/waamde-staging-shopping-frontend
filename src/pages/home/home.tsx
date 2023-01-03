import React from 'react'
import Layout from '../../components/layout/layout'
import MobileImg from '../../assets/images/app.png'
import GooglePlayIcon from '../../assets/images/icons/google_play.svg'
import AppStoreIcon from '../../assets/images/icons/app_store.svg'
import DownloadIcon from '../../assets/images/icons/download.svg'
import RecommendIcon from '../../assets/images/icons/recommend.svg'
import StarIcon from '../../assets/images/icons/star.svg'
import './home.scss'

const Home = () => {
    return (
        <Layout>
            <section className="slider"></section>
            <section className="mobile-app">
                <div className="mobile-app-description">
                    <div className="space-y-[20px]">
                        <h2 className="text-fifth text-[32px] font-[700]">
                            Download App Now
                        </h2>
                        <p className="text-sixth text-[16px] font-[400]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Viverra nunc ante velit vitae. Est tellus
                            vitae, nullam lobortis enim. Faucibus amet etiam
                            tincidunt rhoncus, ullamcorper velit. Ullamcorper
                            risus tempor, ac nunc libero urna, feugiat.
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
                    <h2>Our Happy Customers</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Viverra nunc ante velit vitae. Est tellus vitae, nullam
                        lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                        ullamcorper velit. Ullamcorper risus tempor, ac nunc
                        libero urna, feugiat.
                    </p>
                </div>
                <div className="slider"></div>
            </section>
        </Layout>
    )
}
export default Home
