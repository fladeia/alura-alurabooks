import { useEffect, useState } from "react";
import axios from "axios";
import { Main } from "../../components/Main";
import { LastReleases } from "../../components/LastReleases";
import { BestSeller } from "../../components/BestSeller";
import { Visited } from "../../components/Visited";
import { NewsLetter } from "../../components/NewsLetter";
import { ILastReleases } from "../../share/Interface/ILastReleases";

export const Home = () => {
  const [lastReleases, setLastReleases] = useState<ILastReleases[]>([])
  const [bestSellers, setBestSellers] = useState<ILastReleases[]>([])

  useEffect(() => {
    axios.get('http://localhost:8000/public/lancamentos')
    .then(response => setLastReleases(response.data))

    axios.get('http://localhost:8000/public/mais-vendidos')
    .then(response => setBestSellers(response.data))
  },[])
  
  return (
    <>
      <Main />
      <LastReleases lastReleases={lastReleases}/>
      <BestSeller bestSellers={bestSellers}/>
      <Visited />
      <NewsLetter />
    </>
  )
}