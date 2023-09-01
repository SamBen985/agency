import "../../styles/blog.css";

import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudy from "../../images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Video",
    desc: "To know about work. Wathc some videos",
    linkUrl: "#",
  },
  {
    imgUrl: articleImg,
    title: "Articles",
    desc: "Do you want to improve your brand interacts with customer? Ler's talk...",
    linkUrl: "#",
  },
  {
    imgUrl: caseStudy,
    title: "Case Study",
    desc: "Boost your conversation rate with us...",
    linkUrl: "#",
  },
];

function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="blog_top-content">
          <h6 className="subtitle">Our blog</h6>
          <h2>
            Let's have a look from our
            <span className="highlight"> recent blog</span>
          </h2>
        </div>

        <div className="blog_wrapper">
          {blogData.map((item, index) => (
            <div className="blog_item" key={index}>
              <h3>{item.title}</h3>
              <div className="blog_img">
                <img src={item.imgUrl} alt="" />
              </div>
              <p className="description blog_desc">{item.desc}</p>
              <div>
                <a href={item.linkUrl} className="learn_more">
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
