import { useDispatch, useSelector } from "react-redux"
import { AddImages, getImagesData, getImagesStatus, getImagesError } from "../../features/images/imagesSlice"
import { useEffect } from "react"
import { GetImagesListThunk } from "../../features/images/imagesThunks"
import { Navbar } from "../../components/navbar/navbar"
import { LikeButton } from "../../components/likeBotton/likeButton"


export const Home = () => {

    return <>
        <Navbar />
        <p>HOME</p>
        <LikeButton isLiked={true} onToggle={() => console.log("Liked!")} />
        <LikeButton isLiked={false} onToggle={() => console.log("Unliked!")} />
    </>
}