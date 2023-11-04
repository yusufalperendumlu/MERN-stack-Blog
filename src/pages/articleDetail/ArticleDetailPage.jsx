import React from "react";
import { Link } from "react-router-dom";

import SuggestedPosts from "./container/SuggestedPosts";

import { images } from "../../constants";

import BreadCrumbs from "../../components/BreadCrumbs";
import MainLayout from "../../components/MainLayout";

const breadCrumbsData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Article title",
    link: "/blog/1",
  },
];

const postsData = [
    {
        _id: 1,
        image: images.Post1Image,
        title: "Help children get better education",
        createdAt: ""
    }
]

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5">
        <article className="flex-1">
          <BreadCrumbs data={breadCrumbsData} />
          <img
            className="rounded-xl w-full"
            src={images.Post1Image}
            alt="laptop"
          />
          <Link
            to="/blog?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4"
          >
            EDUCATION
          </Link>
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard">
            Help children get better education
          </h1>
          <div className="mt-4 text-dark-soft">
            <p className="leading-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              dolore deserunt mollitia alias expedita ducimus vel iusto
              consequatur iste magni harum, facere voluptatem nesciunt cum illum
              sint nostrum tempore nihil? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Saepe dolor recusandae ex eaque natus ea magnam
              voluptatibus, magni non ut autem odio sit similique porro minima
              sint consequuntur. Accusantium, perferendis!
            </p>
          </div>
        </article>
        <SuggestedPosts header="Latest Article" />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
