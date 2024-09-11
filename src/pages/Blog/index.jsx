import React from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import styles from './styles.module.scss'
import {pathToIcon} from "../../utils/constants.js";
import {blogs, categories, cloudTags, posts, socialLinks} from "./data.js";
import BlogCard from "./components/BlogCard/index.jsx";
import Card from "./components/Card/index.jsx";
import PostCard from "./components/PostCard/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setFilter} from "../../store/slices/blog/index.js";

export default function Blog() {
    const filterData = useSelector(state => state.blog.filter)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSelectPage = (page) => {
        dispatch(setFilter({...filterData, currentPage: page}))
        window.scrollTo({top: 300, behavior: 'smooth'})
    }

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
                        <span className={'cursor-pointer hover:text-white'} onClick={() => navigate('/')}>
                            Home</span> • Blog
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
                                {
                                    posts.map((post, index) => (
                                        <div key={index} className={index !== posts.length - 1 ? 'mb-[19px]' : ''}>
                                            <PostCard post={post}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </Card>
                        <div className={styles.flexBox}>
                            <Card title={'Categories'} extraClassname={styles.categoriesWrap}>
                                <div className={styles.categories}>
                                    {
                                        categories.map((category, index) => (
                                            <div key={index} className={styles.name}>{category}</div>
                                        ))
                                    }
                                </div>
                            </Card>
                            <Card title={'Cloud Tags'} extraClassname={`${styles.tagsWrap} ${styles.hiddenBox}`}>
                                <div className={styles.tags}>
                                    {
                                        cloudTags.map((tag, index) => (
                                            <div key={index} className={styles.cloudTag}>{tag}</div>
                                        ))
                                    }
                                </div>
                            </Card>
                        </div>
                        <Card title={'Cloud Tags'} extraClassname={styles.tagsWrap}>
                            <div className={styles.tags}>
                                {
                                    cloudTags.map((tag, index) => (
                                        <div key={index} className={styles.cloudTag}>{tag}</div>
                                    ))
                                }
                            </div>
                        </Card>
                        <Card title={'Social Connect'} extraClassname={styles.socialWrap}>
                            <div className={styles.items}>
                                {
                                    socialLinks.map((item, index) => (
                                        <div key={index} className={styles.icon}>
                                            <div className={styles.bgCircle}></div>
                                            <img src={item.icon} alt={''}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.pagination}>
                    {
                        Array.from({length: 3}).map((_, index) => {
                            const isCurrentPage = filterData.currentPage === index + 1
                            return (
                                <div key={index} className={`${styles.page} 
                                    ${isCurrentPage ? styles.currentPage : ''}`}
                                     onClick={() => handleSelectPage(index + 1)}
                                >
                                    {index + 1}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </MainLayout>
}
