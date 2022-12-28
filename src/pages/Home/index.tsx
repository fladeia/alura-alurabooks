import { useEffect, useState } from "react";
import { Main } from "../../components/Main";
import { HighlightsBooks } from "../../components/HighlightsBooks";
import { Visited } from "../../components/Visited";
import { NewsLetter } from "../../components/NewsLetter";
import { IHighlightsBooks } from "../../share/Interface/IHighlightsBooks";
import { http } from "../../http";

export const Home = () => {
  const [lastReleases, setLastReleases] = useState<IHighlightsBooks[]>([])
  const [bestSellers, setBestSellers] = useState<IHighlightsBooks[]>([])

  useEffect(() => {
    http.get('/public/lancamentos')
    .then(response => setLastReleases(response.data))

    http.get('/public/mais-vendidos')
    .then(response => setBestSellers(response.data))
  },[])

  return (
    <>
      <Main />
      <HighlightsBooks highlightsBooks={lastReleases}/>
      <HighlightsBooks highlightsBooks={bestSellers}/>
      <Visited />
      <NewsLetter />
    </>
  )
}