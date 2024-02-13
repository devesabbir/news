import { useContext } from "react";
import { NewsContext } from "../contexts";
import TopNewsItem from "../components/news/top-grid/FeaturesNewsItem";
import NewsBigGrid from "../components/news/big-grid/NewsBigGrid";
import NewsSmallGrid from "../components/news/small-grid/NewsSmallGrid";
import SidebarNewsBigGrid from "../components/sidebar/SidebarNewsBigGrid";
import SideBarNewsInfo from "../components/sidebar/SideBarNewsInfo";

export default function HomePage() {
  const { allNews, loader } = useContext(NewsContext);

  let FeaturesNewsItem = null;
  let mainNews = null;

  let sidebarTopNews = null;
  let sidebarNewsInfo = null;

  if (!loader.status && allNews?.length > 0) {
    FeaturesNewsItem = allNews
      ?.slice()
      .sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));
  }

  if (!loader.status && allNews?.length > 1) {
    mainNews = allNews.slice(1, 12).map((item, index) => {
      if (index === 0) {
        return <NewsBigGrid key={item.source.id + index} item={item} />;
      } else {
        return <NewsSmallGrid key={item.source.id + index} item={item} />;
      }
    });
  }

  if (!loader.status && allNews?.length > 0) {
    sidebarTopNews = allNews?.slice(13, 14);
  }

  if (!loader.status && allNews?.length > 1) {
    sidebarNewsInfo = allNews.slice(13, 20).map((item, index) => {
      return <SideBarNewsInfo key={item.source.id + index} item={item} />;
    });
  }

  return (
    <main className="my-10 lg:my-14">
      {loader.status ? (
        <p style={{ textAlign: "center" }}>{loader.message}</p>
      ) : (
        <div className="container mx-auto grid grid-cols-12 gap-8">
          {/* left */}
          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {/* news item */}
            {FeaturesNewsItem?.length > 0 && (
              <TopNewsItem item={FeaturesNewsItem[0]} />
            )}
            {/* news item ends */}
            {/* news item */}
            {mainNews}
          </div>
          {/* right */}
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              {/* news item */}
              {sidebarTopNews?.length > 0 && (
                <SidebarNewsBigGrid item={sidebarTopNews[0]} />
              )}
              {/* news item ends */}
              {/* news item */}
              {sidebarNewsInfo}
              {/* news item ends */}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
