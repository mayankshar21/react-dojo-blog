const BlogList = ({ blogs, title }) => {
    // we can de structure props into its components
    // - like this - { blogs, title }
    // const blogs = props.blogs;
    // const title = props.title;
    
    // console.log(props,blogs);
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;