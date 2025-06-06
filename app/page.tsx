import Intro from '@/components/intro'
import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import ToolsIUse from '@/components/tools-i-use'
import ResumeDownload from '@/components/resume' // ✅ Import ResumeDownload

export default function Home() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
        <ToolsIUse />
        <RecentProjects />

        <ResumeDownload /> {/* ✅ Download Resume button here */}

        {/* <NewsletterForm /> */}
      </div>
    </section>
  )
}
