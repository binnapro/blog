import { useFullSidebarData } from 'dumi';
import { ISidebarGroup, ISidebarItem } from 'dumi/dist/client/theme-api/types';
import React from 'react';
import './index.less';

const CustomHomePage = () => {
  const allData = useFullSidebarData();
  const blogData = allData?.['/blog'] || [];

  const listResult: ISidebarItem[] = [];
  const tagsResult: ISidebarGroup[] = [];
  Object.keys(allData).forEach((key) => {
    if (key === '/components') return;
    const target = allData[key];
    const tmp: ISidebarItem[] = [];
    target.forEach((item) => {
      tagsResult.push({
        title: item.title,
        link: item.children[0].link,
        children: item.children,
      });
      item.children.forEach((v) => tmp.push(v));
    });
    listResult.push(...tmp);
  });
  const list = listResult.sort(
    (a, b) =>
      (b.frontmatter?.lastUpdated || 0) - (a.frontmatter?.lastUpdated || 0),
  );
  const tag = tagsResult.sort((a, b) => b.children.length - a.children.length);
  console.log(tag);
  return (
    <div>
      <header className="home-header-background">
        <div className="home-header-title">Binna Blog</div>
        <div className="home-header-subtitle">
          「落子无悔 抉择本身就是向前」
        </div>
      </header>
      <div className="home-body">
        <div className="home-abstract-box">
          {list.slice(0, 8).map(({ frontmatter, link }) => {
            if (!frontmatter?.title || !frontmatter?.description) return null;
            const time = (
              frontmatter?.lastUpdated
                ? new Date(frontmatter?.lastUpdated).toString()
                : ''
            ).split(' ');
            return (
              <a
                className="home-abstract-item"
                href={'#' + link}
                key={'list' + link}
              >
                <div className="home-abstract-title">{frontmatter?.title}</div>
                <div className="home-abstract-subtitle">
                  {frontmatter?.description}...
                </div>
                {time ? (
                  <div className="home-abstract-date">
                    Posted by Binna on {time[1]} {time[2]}, {time[3]}
                  </div>
                ) : null}
              </a>
            );
          })}
        </div>
        <div className="home-tags-box">
          <div className="home-tags-title">FEATURED TAGS</div>
          <div className="home-tags-item-box">
            {tag.map((v) => {
              return (
                <a
                  className="home-tags-item"
                  href={'#' + v.link}
                  key={'tag' + v.link}
                >
                  {v.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomHomePage;
