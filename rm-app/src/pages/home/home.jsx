import { useDispatch, useSelector } from "react-redux"
import { AddImages, getImagesData, getImagesStatus, getImagesError } from "../../features/images/imagesSlice"
import { useEffect } from "react"
import { GetImagesListThunk } from "../../features/images/imagesThunks"
import { Navbar } from "../../components/navbar/navbar"
import { DashboardCard } from "../../components/dashboard/dashboardCard/dashboardCard"



export const Home = () => {
    const tags = ["React", "Dashboard", "Component"];

    return <>
        <Navbar />
        <p>HOME</p>
        <DashboardCard
            imageSrc="https://images.unsplash.com/photo-1721332155484-5aa73a54c6d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODgwODh8MXwxfGFsbHwxfHx8fHx8fHwxNzM1MTQ4NzM4fA&ixlib=rb-4.0.3&q=80&w=400"
            isLiked={false}
            onLikeToggle={() => console.log("like")}
            onDownload={() => console.log("download")}
            onClickImg={() => console.log("click en img")}
            tags={tags}
        />
    </>
}