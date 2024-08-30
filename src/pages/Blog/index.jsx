import React from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import styles from './styles.module.scss'
import {pathToIcon} from "../../utils/constants.js";
import {blogs} from "./data.js";
import BlogCard from "./components/BlogCard/index.jsx";
import Card from "./components/Card/index.jsx";

export default function Blog() {
    return <MainLayout>
        <div className={styles.blogWrap}>
            <div className={styles.top}>
                <img alt={''} src={`${pathToIcon}/unsplash_QA9fRIi6sFw.png`} className={styles.bgImage}/>
                <img alt={''} src={`${pathToIcon}/Background Mask (4).png`} className={styles.bgMask}/>
                <div className={styles.topContent}>
                    <div className={styles.contentTitle}>
                        Blog
                    </div>
                    <div className={styles.breadcrumb}>
                        Home • Blog
                    </div>
                </div>
            </div>

            <div className={styles.mainContentWrap}>
                <div className={styles.leftContent}>
                    {
                        blogs.map((blog, index) => (
                            <div key={index} className={index !== blogs.length - 1 ? 'mb-[133px]' : ''}>
                                <BlogCard data={blog}/>
                            </div>
                        ))
                    }
                </div>
                <div className={styles.rightContent}>
                    <div className={styles.searchWrap}>
                        <input placeholder={'Search here ...'}/>
                        <img alt={''} src={`${pathToIcon}/BG Button.png`} className={styles.glassBg}/>
                        <img alt={''} src={`${pathToIcon}/Vector (4).png`} className={styles.glassIcon}/>
                    </div>
                    <div className={styles.cardsWrap}>
                        <Card title={'Recent Posts'}>
                            <div className={styles.postCard}>

                            </div>
                        </Card>
                        <Card title={'Categories'}>

                        </Card>
                        <Card title={'Cloud Tags'}>

                        </Card>
                        <Card title={'Social Connect'}>

                        </Card>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>

            </div>
        </div>
    </MainLayout>
}
