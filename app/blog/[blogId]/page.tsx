export default function blogPage({ params }) {
    return (
        <div>
            <h1> Blog Titel</h1>
            This is blog details page for blog Id {params.blogId}
        </div>
    )
}