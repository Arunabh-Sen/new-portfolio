import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'
import AnimatedSection from '@/components/AnimatedSection'

export default async function RecentPosts() {
  const posts = await getPosts(4)

  return (
    <AnimatedSection delay={2.3}>
      <div className='pb-24'>
        <h2 className='title mb-12'>Recent posts</h2>
        <Posts posts={posts} />

        <Link
          href='/posts'
          className='mt-8 inline-flex items-center gap-2 text-muted-foreground underline decoration-1 underline-offset-2 transition-colors hover:text-foreground'
        >
          <span>All posts</span>
        </Link>
      </div>
    </AnimatedSection>
  )
}
