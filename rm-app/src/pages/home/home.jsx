import { useDispatch, useSelector } from "react-redux"
import { AddImages, getImagesData, getImagesStatus, getImagesError } from "../../features/images/imagesSlice"
import { useEffect } from "react"
import { GetImagesListThunk } from "../../features/images/imagesThunks"



export const Home = () => {

    return <>
        <p>HOME</p>
    </>
}