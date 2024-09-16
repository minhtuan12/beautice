import React from "react";
import MainLayout from "../../layouts/MainLayout/index.jsx";
import styles from './styles.module.scss'
import {pathToIcon} from "../../utils/constants.js";
import {blogs, categories, cloudTags, posts, socialLinks} from "./data.js";
import BlogCard from "./components/BlogCard/index.jsx";
import Card from "./components/Card/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setFilter} from "../../store/slices/blog/index.js";
import {
    BackgroundImageWithMask,
    BlogWrap,
    Cards,
    FlexBox,
    LeftContent,
    MainContent,
    Post,
    RightContent,
    SearchInput,
    Title,
    TopContent
} from "./components/index.js";
import PostCard from "./components/PostCard/index.jsx";
import tw from 'twin.macro'

export default function Blog() {
    const filterData = useSelector(state => state.blog.filter)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSelectPage = (page) => {
        dispatch(setFilter({...filterData, currentPage: page}))
        window.scrollTo({top: 300, behavior: 'smooth'})
    }

    return <MainLayout>
        <BlogWrap>
            <div
                tw={'relative h-[calc(100vw_/_5.06)] exlg:(h-[285px] w-full left-1/2 translate-x-[-50%] overflow-hidden)'}>
                <BackgroundImageWithMask alt={''} src={`${pathToIcon}/unsplash_QA9fRIi6sFw.png`}/>
                <BackgroundImageWithMask alt={''} src={`${pathToIcon}/Background Mask (4).png`}/>
                <TopContent>
                    <Title>Blog</Title>
                    <div
                        tw={'text-[16px] font-[500] leading-[24px] tracking-widest text-[#D9D9D9] mr-[-1px] mt-[-1px]'}>
                        <span tw={'cursor-pointer hover:text-white'} onClick={() => navigate('/')}>
                            Home</span> • Blog
                    </div>
                </TopContent>
            </div>

            <MainContent>
                <LeftContent>
                    {
                        blogs.map((blog, index) => (
                            <div key={index} className={index !== blogs.length - 1 ? 'mb-[133px]' : ''}>
                                <BlogCard data={blog}/>
                            </div>
                        ))
                    }
                </LeftContent>
                <RightContent>
                    <div tw={'relative h-[65px] w-full'}>
                        <SearchInput placeholder={'Search here ...'}/>
                        <img alt={''} src={`${pathToIcon}/BG Button.png`}
                             tw={'absolute top-0 right-0 cursor-pointer'}/>
                        <img alt={''} src={`${pathToIcon}/Vector (4).png`}
                             tw={'absolute top-[20px] right-[26px] cursor-pointer'}/>
                    </div>
                    <Cards>
                        <Card title={'Recent Posts'}>
                            <Post>
                                {
                                    posts.map((post, index) => (
                                        <div key={index} className={index !== posts.length - 1 ? 'mb-[19px]' : ''}>
                                            <PostCard post={post}/>
                                        </div>
                                    ))
                                }
                            </Post>
                        </Card>
                        <FlexBox>
                            <Card title={'Categories'} extraClassname='mt-[83px] h-[250px] asmd:mt-0'>
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
                        </FlexBox>
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
                    </Cards>
                </RightContent>
            </MainContent>

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
        </BlogWrap>
    </MainLayout>
}
