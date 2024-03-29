import { cars as carsData} from './cars.data.js'
import CarItem from "./car-item/CarItem.jsx";
import CreateCarForm from "./create-car-form/CreateCarForm.jsx";
import {useState} from "react";

function Home() {
const [cars, setCars] = useState(carsData)
    console.log(cars)

    return (
        <div>
            <h1>Cars catalog</h1>
                <CreateCarForm setCars = {setCars} />
            <div>
                {cars.length ? (
                    cars.map(car => ( <CarItem key={car.id} car = {car}/> ))
                ) : (
                    <p>No cars now!</p>
                )}
            </div>
        </div>
    )
}

export default Home
