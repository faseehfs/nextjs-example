"use client";

import { Article, ArticleContainer } from "@/components/layout/article";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ReactPage() {
  const [sec, setSec] = useState(0);

  return (
    <ArticleContainer>
      <Article>
        <h1>React</h1>
        <p>
          React lets you build user interfaces out of individual pieces called
          components. Create your own React components like Thumbnail,
          LikeButton, and Video. Then combine them into entire screens, pages,
          and apps.
        </p>
        <hr />
        <p>React react react react</p>
        <Button>Ok</Button>
      </Article>
    </ArticleContainer>
  );
}
