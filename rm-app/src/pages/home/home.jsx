import { useDispatch, useSelector } from "react-redux"
import { AddImages, getImagesData, getImagesStatus, getImagesError } from "../../features/images/imagesSlice"
import { useEffect } from "react"
import { GetImagesListThunk } from "../../features/images/imagesThunks"



export const ImagesCreate = () => {

    const dispatch = useDispatch()

    const ImagesList = useSelector(getImagesData)
    const ImagesLoading = useSelector(getImagesStatus)
    const ImagesErr = useSelector(getImagesError)


    const handleFormSend = (event) => {
        event.preventDefault()
        const planetName = event.target.name.value
        //////
        dispatch(AddImages(planetName))
    }

    useEffect(() => {
        if (PlanetLoading === "idle") {
            dispatch(GetImagesListThunk())
        }
        else if (PlanetLoading === "fulfilled") {

        }
        else if (PlanetLoading === "rejected") {
            alert("Error en la api")
        }
    }, [ImagesLoading])
    return <>
        {PlanetLoading === "pending" ? <p>Loading---</p> : PlanetList.map((planetName, index) => <p>{planetName.name}</p>)}
        <form style={{ margin: "3em" }} onSubmit={handleFormSend}>
            <input type="text" name="name" />
            <input type="submit" />
        </form>
    </>
}