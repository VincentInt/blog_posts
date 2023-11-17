import style from './Blogs.module.scss';

const Blogs = ({blogPosts}) => {
  return (
    <div className={style.scrollWindow}>
      <div>
        {blogPosts.map((item) => {
          return (
            <div key={item.id} className={style.itemBlog}>
              <h3>{`${item.user}: ${item.body}`}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
